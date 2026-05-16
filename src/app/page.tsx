import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Products from "@/components/home/Products";
import Science from "@/components/home/Science";
import OEMSection from "@/components/home/OEMSection";
import Closing from "@/components/home/Closing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Products />
      <Science />
      <OEMSection />
      <Closing />
    </main>
  );
}
