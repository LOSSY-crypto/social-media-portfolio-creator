
import { motion } from "framer-motion";
import { Calendar, Users, Briefcase, GraduationCap, Globe, Trophy } from "lucide-react";

const About = () => {
  const experiences = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Marketing Digitale",
      description: "Gestisco la presenza online di una psicologa: dalla creazione dei contenuti all'analisi dei risultati"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Social Media Management",
      description: "Pianifico calendari editoriali strategici e creo contenuti coinvolgenti per diversi target"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Performance Marketing",
      description: "Gestisco campagne Google Ads e Meta Ads con focus su ROI e conversioni misurabili"
    }
  ];

  const skills = [
    { category: "Web Development", tools: ["WordPress", "Elementor", "SEO tecnica e testuale"] },
    { category: "Design & Creatività", tools: ["Canva", "ChatGPT per contenuti", "AI Tools"] },
    { category: "Analytics & Tracking", tools: ["Google Analytics 4", "Tag Manager", "Looker Studio"] },
    { category: "CRM & Automation", tools: ["HubSpot", "Zoho CRM", "Marketing Automation"] },
    { category: "Advertising", tools: ["Google Ads", "Meta Ads", "Campaign Management"] }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Chi Sono</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Digital Marketing Specialist con passione per la tecnologia e la comunicazione strategica
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-full max-w-sm mx-auto">
                  <img
                    alt="Fadiga Losseni"
                    className="rounded-2xl w-full object-cover shadow-lg"
                    src="/lovable-uploads/210deaaf-f007-400d-a64e-6292dd0c4be8.jpg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="paragraph text-lg">
                  Da qualche anno lavoro nel <strong>marketing digitale</strong>, attualmente seguo la presenza online di una psicologa: creo contenuti strategici, pianifico il calendario editoriale e analizzo i risultati per ottimizzare continuamente le performance.
                </p>
                <p className="paragraph">
                  Il mio approccio combina <strong>creatività e metodo</strong>, utilizzando strumenti all'avanguardia come l'AI (ChatGPT) per idee innovative e analytics avanzati per decisioni data-driven. Sono abituato a lavorare in autonomia ma credo fortemente nel valore del team e del confronto costruttivo.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid md:grid-cols-3 gap-4"
              >
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <div className="flex items-center mb-2 text-primary">
                      {exp.icon}
                      <h4 className="font-semibold ml-2">{exp.title}</h4>
                    </div>
                    <p className="text-sm text-foreground/70">{exp.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20"
          >
            <h3 className="heading-sm mb-8 text-center">Competenze Tecniche</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="space-y-3"
                >
                  <h4 className="font-semibold text-primary">{skill.category}</h4>
                  <ul className="space-y-1">
                    {skill.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="text-sm text-foreground/80 flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6 mt-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center mb-3">
                <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                <h4 className="font-semibold text-blue-900">Formazione</h4>
              </div>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Social Media Manager (Click Academy, 2023–2024)</li>
                <li>• Competenze digitali e marketing (Umana Forma, 2023)</li>
                <li>• Studente di Psicologia</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="flex items-center mb-3">
                <Globe className="w-6 h-6 text-green-600 mr-2" />
                <h4 className="font-semibold text-green-900">Lingue</h4>
              </div>
              <div className="space-y-2 text-sm text-green-800">
                <div className="flex justify-between">
                  <span>Italiano</span>
                  <span className="font-medium">Madrelingua</span>
                </div>
                <div className="flex justify-between">
                  <span>Inglese</span>
                  <span className="font-medium">Fluente</span>
                </div>
                <div className="flex justify-between">
                  <span>Francese</span>
                  <span className="font-medium">Intermedio</span>
                </div>
                <div className="flex justify-between">
                  <span>Spagnolo</span>
                  <span className="font-medium">Base</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center mb-3">
                <Calendar className="w-6 h-6 text-purple-600 mr-2" />
                <h4 className="font-semibold text-purple-900">Approccio</h4>
              </div>
              <ul className="space-y-2 text-sm text-purple-800">
                <li>• Mix di creatività e metodo</li>
                <li>• Autonomo ma orientato al team</li>
                <li>• Focus su risultati misurabili</li>
                <li>• Aggiornamento continuo</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
