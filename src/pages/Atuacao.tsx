import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Home, Users, Building, Briefcase, FileText, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const practiceAreas = [
  {
    icon: Building,
    title: "Direito Condominial",
    description: "Assessoria completa para síndicos, administradoras e condôminos. Atuamos em assembleias, cobranças, regulamentos internos e resolução de conflitos.",
    topics: ["Assessoria a síndicos", "Cobranças condominiais", "Regulamentos internos", "Mediação de conflitos"],
  },
  {
    icon: Home,
    title: "Direito Cível",
    description: "Representação em processos judiciais e extrajudiciais envolvendo contratos, responsabilidade civil, direitos do consumidor e muito mais.",
    topics: ["Contratos", "Responsabilidade civil", "Direito do consumidor", "Indenizações"],
  },
  {
    icon: Users,
    title: "Direito de Família",
    description: "Acompanhamento sensível e dedicado em questões familiares como divórcio, guarda, pensão alimentícia e inventários.",
    topics: ["Divórcio", "Guarda de filhos", "Pensão alimentícia", "Inventário e partilha"],
  },
  {
    icon: Briefcase,
    title: "Direito Empresarial",
    description: "Consultoria jurídica para empresas de todos os portes, incluindo constituição, contratos comerciais e recuperação de créditos.",
    topics: ["Constituição de empresas", "Contratos comerciais", "Recuperação de créditos", "Consultoria preventiva"],
  },
  {
    icon: FileText,
    title: "Contratos",
    description: "Elaboração, análise e revisão de contratos de todas as naturezas, garantindo segurança jurídica nas suas transações.",
    topics: ["Elaboração de contratos", "Revisão contratual", "Negociação", "Distrato"],
  },
  {
    icon: Scale,
    title: "Consultoria Preventiva",
    description: "Orientação jurídica estratégica para evitar litígios e proteger seus interesses de forma proativa.",
    topics: ["Análise de riscos", "Pareceres jurídicos", "Compliance", "Orientação legal"],
  },
];

const Atuacao = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/50">
          <div className="container-custom section-padding">
            <div className="max-w-2xl">
              <h1 className="heading-display text-foreground mb-6">
                Áreas de <span className="text-primary">Atuação</span>
              </h1>
              <p className="text-lead">
                Oferecemos serviços jurídicos especializados em diversas áreas do Direito, 
                sempre com foco na excelência e no atendimento personalizado às suas necessidades.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <article
                key={area.title}
                className="card-elevated p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>

                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {area.description}
                </p>

                <ul className="space-y-2">
                  {area.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Atuacao;
