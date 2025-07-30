import Image from "next/image";

export default function PromoBanner() {
  return (
    <div className="max-w-[1500px] mx-auto px-6 w-full">
      <div
        className="grid grid-cols-1 md:grid-cols-3 min-h-[450px]"
        style={{
          background: "rgb(107 221 226)",
        }}
      >
        {/* Left column content here */}
        <div className="col-span-1 md:col-span-2 border flex items-center p-6">
          <div className="inline-flex flex-col gap-6 border items-start">
            <button className="px-8 py-2 border font-semibold bg-white">
              Exclusive offer
            </button>
            <span className="text-3xl" style={{ fontFamily: "'PoppinsBold', sans-serif" }}>
              Sign up to our news letter for exclusive offers for 2020
            </span>
            <button className="px-8 py-2 border font-semibold">
              Read more
            </button>
          </div>
        </div>

        <div className="hidden md:flex col-span-1 border items-center relative w-full">
          <Image
            src="/img/apizzaimage.jpg"
            alt="Pizza"
            fill
            className="object-cover"
            sizes="(max-width: 400px) 100vw, 400px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
