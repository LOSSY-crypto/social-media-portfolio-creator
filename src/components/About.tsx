
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-6">Chi Sono</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <motion.img
                alt="Fadiga Losseni"
                className="rounded-full w-48 h-48 object-cover shadow-lg"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src="/lovable-uploads/210deaaf-f007-400d-a64e-6292dd0c4be8.jpg"
              />
            </div>
            <div className="md:w-2/3 text-left space-y-4">
              <p className="paragraph">
                Da qualche anno lavoro nel <strong>marketing digitale</strong>, attualmente seguo la presenza online di una psicologa: creo contenuti, pianifico il calendario editoriale e analizzo i risultati per capire cosa funziona davvero.
              </p>
              <p className="paragraph">
                Mi muovo con disinvoltura su <strong>WordPress</strong> ed <strong>Elementor</strong> per le landing page, utilizzo <strong>Canva</strong> per la grafica e l'AI come <strong>ChatGPT</strong> per idee creative. Sul fronte advertising gestisco <strong>Google Ads</strong> e <strong>Meta Ads</strong> con tracciamento via <strong>Tag Manager</strong>, analizzando tutto in <strong>GA4</strong> e <strong>Looker Studio</strong>.
              </p>
              <p className="paragraph">
                Per il lato relazionale utilizzo <strong>CRM</strong> come <strong>HubSpot</strong> e <strong>Zoho</strong> per segmentare i contatti e automatizzare i follow-up. Completa il quadro un'attenzione costante alla <strong>SEO</strong> tecnica e testuale.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Formazione</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Corso Social Media Manager (Click Academy, 2023–2024)</li>
                    <li>Corso competenze digitali e marketing (Umana Forma, 2023)</li>
                    <li>Studente di Psicologia</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Strumenti Principali</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>WordPress & Elementor</li>
                    <li>Google Ads & Meta Ads</li>
                    <li>GA4 & Looker Studio</li>
                    <li>HubSpot & Zoho CRM</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Lingue</h3>
                  <p className="text-sm">Italiano, Inglese, Francese, Spagnolo</p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Approccio</h3>
                  <p className="text-sm">Mix di creatività e metodo, autonomo ma orientato al team, focalizzato su risultati misurabili</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
