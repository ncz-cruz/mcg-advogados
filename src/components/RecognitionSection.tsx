import { Award, Star, Trophy } from "lucide-react";
import awardImage from "@/assets/award-ceremony.jpeg";

export function RecognitionSection() {
  return (
    <section className="bg-secondary/50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 gradient-gold rounded-2xl opacity-10 blur-2xl" />
            <img
              src={awardImage}
              alt="Cerimônia de premiação - Dr. José Luis Gonçalves recebendo o prêmio Advogado do Ano"
              className="relative w-full h-auto rounded-2xl shadow-card object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold mb-6">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">Reconhecimento</span>
            </div>

            <h2 className="heading-section text-foreground mb-6">
              Reconhecimento da Classe
            </h2>

            <p className="text-lead mb-8">
              Em 2015, o Dr. José Luis Gonçalves foi condecorado com o prestigioso prêmio 
              <strong className="text-foreground"> "Advogado do Ano"</strong>, conferido pela Câmara Municipal 
              e pela OAB 39ª Subseção. Este reconhecimento reflete nossa dedicação 
              incansável à defesa dos direitos de nossos clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Prêmio OAB</p>
                  <p className="text-sm text-muted-foreground">39ª Subseção</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Excelência</p>
                  <p className="text-sm text-muted-foreground">Reconhecida</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">2015</p>
                  <p className="text-sm text-muted-foreground">Advogado do Ano</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
