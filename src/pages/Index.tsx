import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { RecognitionSection } from "@/components/RecognitionSection";
import { TeamSection } from "@/components/TeamSection";
import { ValuesSection } from "@/components/ValuesSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <RecognitionSection />
        <TeamSection />
        <ValuesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
