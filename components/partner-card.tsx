import Image from "next/image";

type PartnerCardProps = {
  name: string;
  image: string;
};

export function PartnerCard({ name, image }: PartnerCardProps) {
  return (
    <article className="partner-card">
      <div className="partner-card-image">
        <div className="partner-portrait">
          <Image
            alt={`Portrait of ${name}, Partner`}
            className="partner-photo"
            fill
            sizes="(max-width: 800px) 100vw, 560px"
            src={image}
          />
          <div className="partner-card-caption">
            <h3>{name}</h3>
            <p>Partner</p>
          </div>
        </div>
      </div>
    </article>
  );
}