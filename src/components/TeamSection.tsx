import { Users } from "lucide-react";
import joseLuisImage from "@/assets/jose-luis.png";
import celiaImage from "@/assets/celia-monteiro.png";

const teamMembers = [
  {
    name: "Dr. José Luis Gonçalves",
    role: "Sócio Fundador",
    image: joseLuisImage,
    description: "Atuou voluntariamente por anos como Coordenador de Prerrogativas da Seccional Paulista da OAB; foi Vice Presidente da Assistência Judiciária da 39ª Subseção da OAB, onde cumulou também os cargos de Ouvidor, membro da Comissão de Informática Jurídica e integrante da Comissão de Prerrogativas. E quando a defesa dos seus direitos exige firmeza, a combatividade do Dr. José Luis Gonçalves se sobressai. Incansável na busca pela justiça, ele atua com determinação e tenacidade, não hesitando em lutar por cada causa com a paixão e o rigor necessários para proteger os interesses de quem confia no MCG Advogados.",
  },
  {
    name: "Dra. Célia Monteiro de Carvalho",
    role: "Sócia Fundadora",
    image: celiaImage,
    description: "Com atuação destacada há mais de uma década no cenário jurídico, é graduada em Direito desde 2011, acumulando sólida experiência na assessoria jurídica estratégica e na condução de demandas administrativas e judiciais. Ao longo de sua trajetória profissional, desenvolveu atuação consistente pautada na análise técnica criteriosa, na interpretação responsável do ordenamento jurídico e na prevenção de riscos, sempre orientada pela ética, pela responsabilidade e pelo compromisso profissional.",
  },
];

export function TeamSection() {
  return (
    <section className="container-custom section-padding">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
          <Users className="w-4 h-4" />
          <span className="text-sm font-medium">Nossa Equipe</span>
        </div>

        <h2 className="heading-section text-foreground mb-4">
          Profissionais Comprometidos com Sua Causa
        </h2>

        <p className="text-lead">
          Conheça os advogados que fazem a diferença na defesa dos seus direitos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <article key={member.name} className="card-elevated p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Photo */}
              <div className="shrink-0">
                <img
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  className="w-32 h-32 rounded-xl object-cover shadow-soft"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
