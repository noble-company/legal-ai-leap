import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ConversionForm from "./ConversionForm";

// Configure your WhatsApp number here
const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vi a página sobre os Agentes de IA para advocacia e quero garantir minha vaga para implementação."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FinalCTASection = () => {
  const [showForm, setShowForm] = useState(false);
  const nextSteps = [
    "PASSO 1: Você preenche um formulário rápido (2min)",
    "PASSO 2: Agendamos uma demonstração de 15min",
    "PASSO 3: Mostramos o sistema funcionando AO VIVO",
    "PASSO 4: Vemos se faz sentido para você",
    "PASSO 5: Se sim, começamos o setup na mesma semana",
  ];

  const guaranteePoints = [
    "30 dias para ter os primeiros resultados",
    "Se não funcionar, devolvemos tudo",
    "Você literalmente NÃO PODE PERDER",
  ];

  return (
    <section className="bg-hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="mb-6 text-center text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          ⚠️ ATENÇÃO: VAGAS LIMITADAS ESTE MÊS
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-4xl text-center text-xl text-primary-foreground/80 md:text-2xl">
          Atendemos APENAS 5 escritórios por mês para garantir implementação
          impecável e suporte personalizado.
        </p>

        {/* Vacancy Counter */}
        <div className="mx-auto mb-12 max-w-2xl rounded-xl bg-primary-foreground p-6 shadow-2xl md:p-8">
          <div className="space-y-3 text-center">
            <p className="text-2xl font-bold text-primary md:text-3xl">
              📊 VAGAS ESTE MÊS: 5
            </p>
            <p className="text-xl font-semibold text-success md:text-2xl">
              ✅ PREENCHIDAS: 3
            </p>
            <p className="text-2xl font-bold text-destructive md:text-3xl">
              🔥 RESTAM APENAS: 2
            </p>
          </div>
        </div>

        {/* Warning Text */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-lg font-semibold text-primary-foreground md:text-xl">
            Se as 5 vagas fecharem hoje, a próxima turma só abre em{" "}
            <span className="font-bold underline">MARÇO 2026</span>.
          </p>
          <p className="text-lg font-semibold text-primary-foreground md:text-xl">
            E enquanto isso, você continua perdendo clientes por lentidão no
            atendimento.
          </p>
        </div>

        {/* Cost of Inaction */}
        <div className="mx-auto mb-12 max-w-4xl rounded-xl bg-primary-foreground/10 p-6 shadow-xl backdrop-blur-sm md:p-8">
          <h3 className="mb-4 text-center text-2xl font-bold text-primary-foreground md:text-3xl">
            📅 QUANTO ISSO ESTÁ TE CUSTANDO?
          </h3>
          <p className="text-center text-lg leading-relaxed text-primary-foreground/90">
            A cada dia que você adia, perde em média 1-2 clientes em potencial
            que não foram respondidos a tempo. Em 30 dias? São 30-60 leads
            perdidos. Em R$? São{" "}
            <span className="font-bold text-warning">
              R$ 15.000 - R$ 50.000
            </span>{" "}
            jogados fora. Você pode estar deixando um BMW 0km na mesa TODO MÊS
            por não ter esse sistema.
          </p>
        </div>

        {/* Main CTA Button */}
        <div className="mb-8 text-center">
          <Button
            onClick={() => setShowForm(true)}
            size="lg"
            className="h-auto bg-success px-8 py-6 text-xl font-bold text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-success/90 md:px-12 md:py-8 md:text-2xl"
          >
            QUERO CAPTAR MAIS CLIENTES
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>

        {/* What Happens Next */}
        <div className="mx-auto mb-12 max-w-3xl">
          <p className="mb-6 text-center text-xl font-bold text-primary-foreground">
            👇 O que acontece depois do clique:
          </p>
          <div className="space-y-3 rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm md:p-8">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="mt-1 h-6 w-6 flex-shrink-0 text-success" />
                <p className="text-lg font-semibold text-primary-foreground">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-lg font-semibold text-primary-foreground">
            Sem pressão. Sem compromisso. Sem pegadinhas. Apenas uma
            demonstração honesta.
          </p>
        </div>

        {/* Guarantee Reminder */}
        <div className="mx-auto mb-12 max-w-3xl rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 p-6 shadow-xl backdrop-blur-sm md:p-8">
          <h3 className="mb-6 text-center text-2xl font-bold text-primary-foreground md:text-3xl">
            🔐 LEMBRE-SE DA GARANTIA:
          </h3>
          <div className="mb-6 space-y-3">
            {guaranteePoints.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                <p className="text-lg font-semibold text-primary-foreground">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg leading-relaxed text-primary-foreground/90">
            O pior que pode acontecer? Você recebe o seu dinheiro de volta. O
            melhor? Você capta 3-5 novos clientes/mês e aumenta faturamento em
            R$ 15-50k/mês.
          </p>
        </div>

        {/* Final Call */}
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary-foreground/20 p-8 text-center shadow-2xl backdrop-blur-sm md:p-10">
          <h3 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl">
            ⏰ ÚLTIMA CHAMADA:
          </h3>
          <Button
            onClick={() => setShowForm(true)}
            size="lg"
            className="mb-4 h-auto bg-success px-8 py-6 text-xl font-bold text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-success/90 md:px-12 md:py-8 md:text-2xl"
          >
            GARANTIR MINHA VAGA AGORA
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <p className="text-xl font-bold text-warning">
            ⚠️ Restam apenas 2 vagas este mês
          </p>
        </div>
      </div>

      {/* Conversion Form Modal */}
      <ConversionForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default FinalCTASection;