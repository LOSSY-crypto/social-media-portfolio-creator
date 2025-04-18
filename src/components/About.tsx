
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-6">Chi Sono</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <motion.img
                src="/profile.jpg"
                alt="Fadiga Losseni"
                className="rounded-full w-48 h-48 object-cover shadow-lg"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="md:w-2/3 text-left">
              <p className="paragraph mb-4">
                Ciao! Sono Fadiga Losseni, un appassionato Social Media Manager con una forte predisposizione per la creazione di contenuti coinvolgenti e strategie digitali efficaci.
              </p>
              <p className="paragraph">
                La mia missione è aiutare professionisti e aziende a costruire una presenza online autentica e di impatto, trasformando i follower in una community engaged e i visitatori in clienti fedeli.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
