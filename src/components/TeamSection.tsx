import { Users, Briefcase, GraduationCap } from "lucide-react";
import joseLuisImage from "@/assets/jose-luis.jpg";
import celiaImage from "@/assets/celia-monteiro.jpeg";

const teamMembers = [
  {
    name: "Dr. José Luis Gonçalves",
    role: "Sócio Fundador",
    image: joseLuisImage,
    description: "Atuou voluntariamente por anos como Coordenador de Prerrogativas da Seccional Paulista da OAB; foi Vice Presidente da Assistência Judiciária da 39ª Subseção da OAB, onde cumulou também os cargos de Ouvidor, membro da Comissão de Informática Jurídica e integrante da Comissão de Prerrogativas. E quando a defesa dos seus direitos exige firmeza, a combatividade do Dr. José Luis Gonçalves se sobressai. Incansável na busca pela justiça, ele atua com determinação e tenacidade, não hesitando em lutar por cada causa com a paixão e o rigor necessários para proteger os interesses de quem confia no MCG Advogados.",
    specialties: ["Direito Criminal", "Direito Empresarial", "Prerrogativas"],
  },
  {
    name: "Dra. Célia Monteiro de Carvalho",
    role: "Sócia Fundadora",
    image: celiaImage,
    description: "Atuação destacada há mais de uma década no cenário jurídico, e graduada em Direito desde 2011, é especialista em Direito Condominial, área na qual possui ampla experiência, assessorando síndicos, administradoras e condôminos em questões administrativas e judiciais complexas. Além de sua expertise condominial, atua também com excelência nas áreas de Direito Cível e Direito de Família, oferecendo uma assessoria jurídica integrada e estratégica.",
    specialties: ["Direito Condominial", "Direito Cível", "Direito de Família"],
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

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      <Briefcase className="w-3 h-3" />
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
