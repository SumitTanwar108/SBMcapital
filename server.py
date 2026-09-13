import json
import os
import re
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse

ROOT = os.path.dirname(os.path.abspath(__file__))
EMAIL_PATTERN = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
PHONE_PATTERN = re.compile(r"^(?:\+91[\s-]?)?[6-9]\d{9}$")


class SiteHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_POST(self):
        if urlparse(self.path).path != "/api/contact":
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "Not found."})
            return

        try:
            content_length = int(self.headers.get("Content-Length", "0"))
            if content_length > 16_384:
                self.send_json(HTTPStatus.REQUEST_ENTITY_TOO_LARGE, {"error": "Please shorten your enquiry."})
                return
            payload = json.loads(self.rfile.read(content_length))
        except (ValueError, json.JSONDecodeError):
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": "Please check the form and try again."})
            return

        if payload.get("website"):
            self.send_json(HTTPStatus.OK, {"message": "Thank you. We have received your enquiry."})
            return

        name = str(payload.get("name", "")).strip()
        email = str(payload.get("email", "")).strip()
        phone = re.sub(r"[()\s-]", "", str(payload.get("phone", "")).strip())
        message = str(payload.get("message", "")).strip()
        consent = payload.get("consent") is True

        if not 2 <= len(name) <= 100 or not EMAIL_PATTERN.match(email) or not PHONE_PATTERN.match(phone):
            self.send_json(HTTPStatus.UNPROCESSABLE_ENTITY, {"error": "Please enter valid contact details."})
            return
        if not 10 <= len(message) <= 2_000 or not consent:
            self.send_json(HTTPStatus.UNPROCESSABLE_ENTITY, {"error": "Please complete the required fields."})
            return

        provider_ready = all(os.getenv(key) and os.getenv(key) != "TODO" for key in (
            "CONTACT_RECIPIENT_EMAIL", "EMAIL_PROVIDER_API_KEY", "EMAIL_FROM_ADDRESS"
        ))
        if not provider_ready:
            self.send_json(HTTPStatus.SERVICE_UNAVAILABLE, {"error": "Enquiries are not connected yet. Please use the contact details provided."})
            return

        # Provider integration belongs here. Never log or persist the submitted payload.
        self.send_json(HTTPStatus.OK, {"message": "Thank you. We have received your enquiry."})

    def send_json(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)


def main():
    port = int(os.getenv("PORT", "8000"))
    server = ThreadingHTTPServer(("127.0.0.1", port), SiteHandler)
    print(f"Serving the MVP at http://localhost:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
