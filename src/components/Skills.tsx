
import { motion } from "framer-motion";
import { 
  Palette, 
  Search, 
  MessageSquare, 
  BarChart, 
  Layout,
  PenTool
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "WordPress & Elementor",
      description: "Creazione di siti web professionali e landing page ottimizzate"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Canva",
      description: "Design grafico accattivante per social media e materiali promozionali"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO",
      description: "Ottimizzazione dei contenuti per i motori di ricerca"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Social Media",
      description: "Gestione professionale dei profili social e community management"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Creation",
      description: "Creazione di contenuti originali e coinvolgenti"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Marketing Digitale",
      description: "Strategie di marketing efficaci per la crescita online"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">Cosa So Fare</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Un mix di competenze tecniche e creative per aiutarti a brillare nel mondo digitale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {skill.icon}
                </div>
                <h3 className="heading-sm text-xl">{skill.title}</h3>
              </div>
              <p className="text-foreground/70">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
