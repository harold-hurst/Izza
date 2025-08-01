"use client";

import Card from "../components/card";
import OurStoryBanner from "../components/ourStoryBanner";
import PromoBanner from "../components/promoBanner";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        // Match negative margin to height of header
        className="-mt-[5rem]"
        id="heroSection"
      >
        <div className="max-w-[1500px] px-6 mx-auto w-full">
          <h1 className="max-w-lg text-white text-6xl">
            There is always time for pizza...
          </h1>
        </div>
      </section>

      {/* Menu Section */}
      <section
        className="w-full pt-16 md:pt-30 pb-12 mb-20"
        id="menuSection"
      >
        <h2 className="text-2xl customBold mb-8">Menu</h2>

        <div className="flex max-w-[1500px] px-6 w-full flex-col sm:flex-row gap-6 justify-center">
          {["Pizza", "Calzone", "Desert", "Drinks"].map((label) => (
            <button key={label} className="px-8 py-2 border font-semibold">
              {label}
            </button>
          ))}
        </div>

        <div className="max-w-[1500px] px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-12">
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
      <OurStoryBanner
        socials={[
          { label: "Twitter", linkUrl: "https://twitter.com" },
          { label: "Instagram", linkUrl: "https://instagram.com" },
          { label: "Facebook", linkUrl: "https://facebook.com" },
        ]}
      />

      {/* Promotional Banner */}
      <PromoBanner />

      {/* Our Story Section */}
      <OurStoryBanner socials={[{ label: "View Map", linkUrl: "iframe" }]} />

      <Footer />
    </>
  );
}
