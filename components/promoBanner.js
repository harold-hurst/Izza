import Image from "next/image";

export default function PromoBanner() {
  return (
    <div className="max-w-[1500px] mx-auto px-6 w-full">
      <div
        className="grid grid-cols-3 gap-6"
        style={{
          background: "rgb(107 221 226)",
        }}
      >
        {/* Left column content here */}



        <div className="col-span-2 border flex items-center">
          <div className="inline-flex flex-col gap-6 border items-start">
            <button className="px-8 py-2 border font-semibold bg-white">
              Exclusive offer
            </button>
            <span>
              Sign up to our news letter for exclusive offers for 2020
            </span>
            <button className="px-8 py-2 border font-semibold">
              Read more
            </button>
          </div>
        </div>



        <div className="col-span-1 border flex items-center">
          <div className="relative w-full aspect-square">
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
    </div>
  );
}
