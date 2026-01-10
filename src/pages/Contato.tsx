import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  telefone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  mensagem: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa"),
  consentimento: z.boolean().refine((val) => val === true, "Você deve aceitar a política de privacidade"),
});
const SERVICE_ID = "mcg-site";
const TEMPLATE_ID = "fale-conosco";
const PUBLIC_KEY = "cnyB9Gwl72u--dt03";

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    consentimento: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

   useEffect(() => {
    // inicializa EmailJS com a chave pública
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // valida localmente com Zod
      contactSchema.parse(formData);

      // monta os parâmetros que serão usados no template do EmailJS
      const templateParams = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        mensagem: formData.mensagem,
        consentimento: formData.consentimento ? "Sim" : "Não",
      };

      // envia via EmailJS (front-end)
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      setFormData({
        nome: formData.nome,
        email: "",
        telefone: "",
        mensagem: "",
        consentimento: false,
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/50">
          <div className="container-custom section-padding">
            <div className="max-w-2xl">
              <h1 className="heading-display text-foreground mb-6">
                Entre em <span className="text-primary">Contato</span>
              </h1>
              <p className="text-lead">
                Estamos prontos para ouvir você e ajudá-lo com suas questões jurídicas. 
                Preencha o formulário ou utilize um de nossos canais de atendimento.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="heading-section text-foreground mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                    <p className="text-muted-foreground">
                      São Bernardo do Campo - SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                    <a href="tel:+5511964906809" className="text-muted-foreground hover:text-primary transition-colors">
                     (11) 96490-06809
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <a href="mailto:contato@mcgadvogados.com.br" className="text-muted-foreground hover:text-primary transition-colors">
                      adv.goncalves@adv.oabsp.org.br
                    </a> <br />
                     <a href="mailto:contato@mcgadvogados.com.br" className="text-muted-foreground hover:text-primary transition-colors">
                      celia.monteiro@adv.oabsp.org.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 18h<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card-elevated p-6 md:p-8">
              <h2 className="heading-section text-foreground mb-6">
                Envie sua Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo *</Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className={errors.nome ? "border-destructive" : ""}
                  />
                  {errors.nome && <p className="text-sm text-destructive">{errors.nome}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className={errors.telefone ? "border-destructive" : ""}
                    />
                    {errors.telefone && <p className="text-sm text-destructive">{errors.telefone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva brevemente sua questão jurídica..."
                    rows={5}
                    className={errors.mensagem ? "border-destructive" : ""}
                  />
                  {errors.mensagem && <p className="text-sm text-destructive">{errors.mensagem}</p>}
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consentimento"
                    checked={formData.consentimento}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, consentimento: checked as boolean }))
                    }
                  />
                  <Label htmlFor="consentimento" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Concordo com a política de privacidade e autorizo o contato para fins de atendimento jurídico. *
                  </Label>
                </div>
                {errors.consentimento && <p className="text-sm text-destructive">{errors.consentimento}</p>}

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
