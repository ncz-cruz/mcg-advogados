import { Link } from "react-router-dom";
import { Scale, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-semibold leading-tight">
                  MCG
                </span>
                <span className="text-xs text-primary-foreground/70 -mt-0.5">
                  Advogados
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Tradição, Inovação e Compromisso com a Justiça. Atuando com excelência e humanidade há mais de uma década.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/atuacao" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
               <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-foreground/50 shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  São Bernardo do Campo, SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-foreground/50" />
                <a href="tel:+5511964906809" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  (11) 96490-6809
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-foreground/50" />
                <a href="mailto:adv.goncalves@adv.oabsp.org.br" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  adv.goncalves@adv.oabsp.org.br
                </a>
              </li>
               <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-foreground/50" />
                <a href="mailto:celia.monteiro@adv.oabsp.org.br" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  celia.monteiro@adv.oabsp.org.br
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Redes Sociais</h4>
            <div className="flex items-center gap-4">
              <a
               href="https://www.instagram.com/mcg.advogados.esc?igsh=NzgyZmo5Znk4YWth"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
               href="https://www.linkedin.com/in/celia-monteiro-de-carvalho/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} MCG Advogados. Todos os direitos reservados.
            </p>
            <p className="text-xs text-primary-foreground/40">
              Monteiro de Carvalho & Gonçalves Advogados Associados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
