
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-lg text-center mb-12">Progetti e Clienti</h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg"
                  alt="Progetto Psicologa"
                  className="rounded-xl w-full h-48 object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="heading-sm mb-4">Studio di Psicologia</h3>
                <p className="paragraph mb-4">
                  Ho gestito la presenza social media per uno studio di psicologia, creando contenuti informativi e sensibili che hanno aiutato a costruire fiducia e autorevolezza nel settore.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span>Aumento del 150% dei follower in 6 mesi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span>Incremento del 200% nelle richieste di consulenza</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span>Creazione di una community engaged e interattiva</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
