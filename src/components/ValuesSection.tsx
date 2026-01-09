import { Heart, Shield, Star, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Humanidade",
    description: "Tratamos cada cliente com empatia e respeito, entendendo suas necessidades individuais.",
  },
  {
    icon: Shield,
    title: "Ética",
    description: "Atuamos com integridade e transparência em todas as nossas relações profissionais.",
  },
  {
    icon: Star,
    title: "Excelência",
    description: "Buscamos a excelência em cada caso, com dedicação e comprometimento total.",
  },
  {
    icon: Users,
    title: "Proximidade",
    description: "Mantemos comunicação constante e acessível, acompanhando cada etapa do processo.",
  },
];

export function ValuesSection() {
  return (
    <section className="bg-secondary/50">
      <div className="container-custom section-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-section text-foreground mb-4">
            Abordagem Humanizada
          </h2>
          <p className="text-lead">
            Nossos valores guiam cada decisão e ação, garantindo um atendimento 
            jurídico que coloca você em primeiro lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
