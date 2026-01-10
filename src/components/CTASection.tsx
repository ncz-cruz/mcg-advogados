import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="container-custom section-padding">
      <div className="relative overflow-hidden rounded-2xl gradient-hero p-8 md:p-12 lg:p-16">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground mb-4">
            Precisa de Orientação Jurídica?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Entre em contato conosco e agende uma consulta. Estamos prontos para 
            ouvir seu caso e oferecer as melhores soluções jurídicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contato">
                <MessageCircle className="mr-2 w-4 h-4" />
                Fale Conosco
              </Link>
            </Button>
           <Button size="lg" variant="secondary" asChild>
            <a href="tel:+5511964906809">
              <Phone className="mr-2 w-4 h-4" />
              (11) 96490-6809
            </a>
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
