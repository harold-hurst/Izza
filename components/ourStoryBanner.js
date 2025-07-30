import Image from "next/image";

export default function OurStoryBanner({ socials }) {
  return (
    <section className="w-full pt-24 pb-12 bg-white">
      <div className="max-w-[1500px] px-6 mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="border p-6">
          <h2 className="text-5xl font-bold mb-6">OUR STORY</h2>
          <p className="text-l mb-6">
            Welcome to our pizzeria! Our story began with a passion for
            authentic flavors and a love for bringing people together. Every
            pizza is crafted with care, using only the freshest ingredients and
            traditional techniques. Join us for a slice of happiness and become
            part of our family tradition.
          </p>
          {Array.isArray(socials) && socials.length > 0 && (
            <div className="inline-flex flex-col gap-6 border">
              {socials.map(({ label, linkUrl }) => (
                <a
                  key={label}
                  href={linkUrl}
                  className="px-8 py-2 border font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
        {/* Right Column */}
        <div className="border">
          <div className="relative w-full h-full  min-h-[450px] overflow-hidden border">
            <Image
              src="/img/asignpostimage.jpg"
              alt="Our Story"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
