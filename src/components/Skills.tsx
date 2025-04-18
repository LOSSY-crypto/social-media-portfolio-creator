
import { motion } from "framer-motion";
import { 
  LayoutGrid, 
  Palette, 
  Search, 
  MessageSquare,
  PenTool,
  FileSpreadsheet,
  Image,
  Calendar,
  Database
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: "WordPress ed Elementor",
      description: "Creazione e gestione di siti web professionali"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Canva",
      description: "Design grafico per contenuti social e materiali promozionali"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO",
      description: "Ottimizzazione dei contenuti per i motori di ricerca"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Gestione professionale dei profili social"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Marketing",
      description: "Creazione di contenuti strategici e coinvolgenti"
    },
    {
      icon: <FileSpreadsheet className="w-8 h-8" />,
      title: "Microsoft Office",
      description: "Word, Excel, PowerPoint"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Adobe Photoshop",
      description: "Editing e creazione di immagini professionali"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Gestione Calendario",
      description: "Pianificazione e gestione calendario editoriale"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Sviluppo Web Base",
      description: "Conoscenze base di MySQL e PHP"
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
