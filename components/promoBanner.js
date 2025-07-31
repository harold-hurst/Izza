import Image from "next/image";

export default function PromoBanner() {
  return (
    <div className="max-w-[1500px] mx-auto px-6 w-full">
      <div
        id="promoBanner"
        className="grid grid-cols-1 md:grid-cols-3 min-h-[450px]"
      >
        {/* Left column content here */}
        <div className="col-span-1 md:col-span-2 flex items-center p-6">
          <div className="inline-flex flex-col gap-6 items-start">
            <a href="#" className="px-4 py-1 border font-semibold bg-white">
              Exclusive offer
            </a>
            <span
              className="text-3xl customBold"
            >
              Sign up to our news letter for exclusive offers for 2020
            </span>
            <a href="#" className="px-4 py-1 border font-semibold">
              Read more
            </a>
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
