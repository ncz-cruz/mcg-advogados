import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold mb-6 animate-fade-up">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Advogado do Ano 2015</span>
            </div>
            
            <h1 className="heading-display text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              A História de MCG: Tradição, Inovação e Compromisso com a{" "}
              <span className="text-primary">Justiça</span>
            </h1>
            
            <p className="text-lead mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Com mais de três décadas de atuação em diversos ramos do Direito, o Monteiro de Carvalho & Gonçalves (MCG Advogados) reúne experiência consolidada em prática contenciosa e consultiva. Formado em 2023 pela união profissional de José Luis Gonçalves e Célia Monteiro de Carvalho, o escritório presta serviços jurídicos estratégicos para clientes corporativos e pessoas físicas, com foco em soluções técnicas, gestão de risco e eficiência processual.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" asChild>
                <Link to="/contato">
                  Agende uma Consulta
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/atuacao">Conheça Nossa Atuação</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 gradient-hero rounded-2xl opacity-10 blur-2xl" />
              <img
                src={heroImage}
                alt="Escritório MCG Advogados - ambiente profissional e acolhedor"
                className="relative w-full h-auto rounded-2xl shadow-elevated object-cover aspect-[4/3]"
                loading="eager"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card p-4 rounded-xl shadow-card border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">+30 anos</p>
                    <p className="text-xs text-muted-foreground">de experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
