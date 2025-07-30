import Head from "next/head";
import Card from "../components/card";
import OurStoryBanner from "../components/ourStoryBanner";
import PromoBanner from "../components/promoBanner";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />

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
      <OurStoryBanner socials={[{ label: "View Map", linkUrl: "#" }]} />

      <Footer />
    </>
  );
}
