
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyMe = () => {
  const benefits = [
    "Approccio personalizzato per ogni cliente",
    "Strategie basate sui dati e risultati misurabili",
    "Comunicazione trasparente e collaborativa",
    "Aggiornamento costante sulle ultime tendenze"
  ];

  return (
    <section id="why-me" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading-lg text-center mb-8">Perché Scegliere Me</h2>
          <div className="glass-card p-8 rounded-2xl">
            <p className="paragraph mb-6 text-center">
              Mi distinguo per la capacità di trasformare la tua presenza digitale in un asset strategico per il tuo business, combinando creatività e strategia data-driven.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;
