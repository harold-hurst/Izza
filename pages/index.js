import Head from "next/head";
import Card from "../components/card";
import OurStoryBanner from "../components/ourStoryBanner";
import PromoBanner from "../components/promoBanner";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hero Section</title>
        <meta name="description" content="Front End Development test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-transparent flex items-center justify-between h-20 border border-gray-200">
        <div className="flex items-center max-w-[1500px] px-6 w-full mx-auto text-white">
          {/* Left: Logo */}
          <img src="/svg/izza.svg" alt="Logo" className="h-10 w-auto" />

          {/* Center: Navigation */}
          <nav className="flex-1 flex justify-center space-x-8">
            <a
              href="#"
              className=" text-lg font-semibold hover:text-green-400 transition"
            >
              Menu
            </a>
            <a
              href="#"
              className=" text-lg font-semibold hover:text-green-400 transition"
            >
              Family
            </a>
            <a
              href="#"
              className=" text-lg font-semibold hover:text-green-400 transition"
            >
              Find Us
            </a>
          </nav>

          {/* Right: Contact */}
          <div className="flex items-center space-x-2">
            <span className=" text-lg font-semibold">Contact</span>
            {/* Phone SVG */}
            <img
              src="/svg/phone-solid-full.svg"
              alt="Phone Icon"
              className="h-5 w-auto"
            />
          </div>
        </div>
      </header>

      <section
        // Match negative margin to height of header
        className="-mt-[5rem]"
        style={{
          backgroundImage: "url('/img/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="max-w-[1500px] px-6 mx-auto w-full">
          <h2 className="max-w-sm text-white text-5xl font-extrabold">
            There is always time for pizza...
          </h2>
        </div>
      </section>

      {/* Menu Section */}
      <section
        className="w-full pt-20 md:pt-40"
        style={{
          background: "rgb(107 221 226)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="text-2xl font-bold mb-10">Menu</h2>

        <div className="flex max-w-[1500px] px-6 w-full flex-col sm:flex-row gap-6 justify-center border">
          {["Pizza", "Calzone", "Desert", "Drinks"].map((label) => (
            <button key={label} className="px-8 py-2 border font-semibold">
              {label}
            </button>
          ))}
        </div>

        <div className="max-w-[1500px] px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-12 border">
          <Card
            title="Pizza"
            description="Tomato sauce, mozzarella, hot dog, caramelised onions, red onions and french's mustard drizzle."
            imageUrl="/img/apizzaimage.jpg"
          />
          <Card
            title="Drinks"
            description="Mozzarella, BBQ jackfruit, peppers, red onions, wettcorn and a BBQ drizzle."
            imageUrl="/img/bpizzaimage.jpg"
            btnText="Full article"
          />
          <Card
            title="Pizza"
            description="Tomato sauce, mozzarella, hot dog, caramelised onions, red onions and french's mustard drizzle."
            imageUrl="/img/apizzaimage.jpg"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <OurStoryBanner />

      {/* Promotional Banner */}
      <PromoBanner />

      {/* Our Story Section */}
      <OurStoryBanner />

      <Footer />
    </>
  );
}
