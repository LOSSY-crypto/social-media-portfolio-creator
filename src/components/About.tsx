import { motion } from "framer-motion";
const About = () => {
  return <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Chi Sono</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <motion.img alt="Fadiga Losseni" className="rounded-full w-48 h-48 object-cover shadow-lg" initial={{
              scale: 0.8
            }} whileInView={{
              scale: 1
            }} transition={{
              duration: 0.5
            }} src="/lovable-uploads/210deaaf-f007-400d-a64e-6292dd0c4be8.jpg" />
            </div>
            <div className="md:w-2/3 text-left space-y-4">
              <p className="paragraph">
                Studente e professionista del marketing digitale, con forte interesse per psicologia, attualmente studente universitario in psicologia. Mi appassionano la tecnologia e la creatività.
              </p>
              <p className="paragraph">
                Mi definisco curioso, veloce nell'apprendimento e motivato a crescere nel mondo del digitale.
              </p>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Formazione</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Corso Social Media Manager (Click Academy, 2023–2024)</li>
                  <li>Corso competenze digitali e marketing (Umana Forma, 2023)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Lingue</h3>
                <p>Italiano, Inglese, Francese, Spagnolo</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Interessi personali</h3>
                <p>Arte, moda, musica, sport e lettura su temi di psicologia e neuroscienze.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;