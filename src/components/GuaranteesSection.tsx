import { Shield, Lock, Award, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const WHATSAPP_NUMBER = "553591101380";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vi a página sobre IA para advogados e quero conhecer as garantias triplas. Pode me explicar melhor?"
);

const GuaranteesSection = () => {
  const guarantees = [
    {
      number: 1,
      icon: Shield,
      title: "Implementação no Prazo",
      text: "Se não entregarmos o setup completo e funcional em 7 dias úteis, você NÃO PAGA NADA pelo setup.",
      subtext: "ZERO burocracia. ZERO desculpas.",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success",
    },
    {
      number: 2,
      icon: Award,
      title: "Resultados ou Dinheiro de Volta + Bônus",
      text: "Você tem 60 dias para ver os primeiros resultados. Se sua taxa de conversão não aumentar pelo menos 20%, devolvemos 100% do seu investimento.",
      subtext: "Sem perguntas. Sem justificativas. Sem burocracia.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent",
    },
    {
      number: 3,
      icon: Lock,
      title: "Suporte ou Mês Grátis",
      text: "Se qualquer problema técnico não for resolvido em 72 horas úteis, aquele mês da mensalidade sai GRÁTIS.",
      subtext: "Simples assim.",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="relative overflow-hidden bg-noble-gradient py-16 md:py-24">
      {/* Decorative background elements */}
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-success/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-2 text-sm font-medium text-success">
            <Shield className="h-4 w-4" />
            Risco Zero
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            <span className="text-gradient-noble">GARANTIA TRIPLA</span> - RISCO ZERO PARA VOCÊ
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-4xl text-center text-lg text-gray-300 md:mb-16 md:text-xl"
        >
          Estamos TÃO confiantes nos resultados que oferecemos uma garantia que
          ELIMINA qualquer risco:
        </motion.p>

        {/* Guarantees Grid */}
        <div className="mx-auto mb-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
                className={`glass-effect group relative overflow-hidden rounded-xl border-2 ${guarantee.borderColor} bg-white/95 p-6 shadow-xl backdrop-blur-sm md:p-8`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 ${guarantee.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-16 w-16 items-center justify-center rounded-full ${guarantee.bgColor} ${guarantee.color}`}
                    >
                      <IconComponent className="h-8 w-8" strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-center text-xl font-bold text-gray-900">
                    <span className={guarantee.color}>GARANTIA #{guarantee.number}:</span>
                    <br />
                    {guarantee.title}
                  </h3>

                  {/* Text */}
                  <p className="mb-4 text-center text-base leading-relaxed text-gray-700">
                    {guarantee.text}
                  </p>

                  {/* Subtext */}
                  <p className={`text-center text-sm font-semibold italic ${guarantee.color}`}>
                    {guarantee.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explanation Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-8 max-w-4xl rounded-xl border-2 border-warning/50 bg-warning/10 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-warning" />
            <h3 className="text-center text-2xl font-bold text-white md:text-3xl">
              POR QUE OFERECEMOS ISSO?
            </h3>
          </div>
          <p className="mb-0 text-center text-lg leading-relaxed text-gray-200">
            Porque sabemos que funciona. Já vimos dezenas de escritórios
            aumentarem conversão, recuperarem tempo e captarem mais clientes. Se
            não funcionar para você (o que é extremamente raro), não queremos
            seu dinheiro. Simples assim.
          </p>
        </motion.div>

        {/* Final Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto max-w-3xl space-y-6"
        >
          <div className="rounded-2xl bg-gradient-to-r from-success to-success/80 p-6 text-center shadow-2xl md:p-8">
            <p className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              O risco é TODO NOSSO. Você só tem a ganhar.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl bg-gradient-noble p-6 text-center md:p-8"
          >
            <p className="mb-4 text-xl font-semibold text-white">
              Pronto para começar sem riscos?
            </p>
            <Button
              size="lg"
              className="group relative overflow-hidden bg-success text-white hover:bg-success/90"
              onClick={() =>
                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
                  "_blank"
                )
              }
            >
              <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Falar com Especialista no WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
