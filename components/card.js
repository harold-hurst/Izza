import Image from "next/image";

export default function Card({ title, description, imageUrl, btnText }) {
  return (
    <div className="card bg-white overflow-hidden flex-1 mb-12">
      <div className="relative w-full aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="card-img-top object-cover"
          sizes="(max-width: 288px) 100vw, 288px"
          priority
        />
      </div>
      <div className="p-4 pb-8">
        <h5 className="text-xl font-bold my-6">{title}</h5>
        <p className="mb-6">{description}</p>
        {btnText && (
          <a
            href="#"
            className="btn btn-primary px-4 py-2 border font-bold"
          >
            {btnText}
          </a>
        )}
      </div>
    </div>
  );
}
