
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Target, TrendingUp, Users, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Al Zocco 2.0: la trattoria che accoglie l'A4",
      client: "Ristorante Al Zocco",
      location: "Largo Galilei 2, Grisignano di Zocco (VI)",
      website: "alzocco.it",
      image: "/lovable-uploads/b2218f78-7ee5-41ee-bfaa-1a57427947db.png",
      objective: "Aumentare le prenotazioni dei viaggiatori in transito e dei pendolari dell'autostrada",
      insight: "Chi esce al casello di Grisignano cerca un pasto veloce ma autentico",
      solutions: [
        "Restyling WordPress con Elementor e pulsante \"Prenota ora\" sincronizzato a Google Calendar",
        "Shooting fotografico in cucina e carosello Reels su Meta Ads, target 20 km dal casello",
        "Ottimizzazione Google Business Profile con foto 360° e parole chiave \"trattoria pesce Grisignano uscita A4\"",
        "QR sul menù per iscrizione alla newsletter in Lovebal; workflow: ricetta omaggio + sconto compleanno"
      ],
      tools: ["WordPress", "Elementor", "Canva", "ChatGPT", "Lovebal", "Meta Ads", "GA4"],
      kpis: [
        "+25 prenotazioni medie a settimana",
        "CTR Reels > 4%",
        "300 iscritti newsletter in 3 mesi"
      ],
      result: "Il nuovo funnel ha trasformato l'afflusso \"di passaggio\" in clientela abituale, rendendo il ristorante la sosta di riferimento sull'A4"
    },
    {
      id: 2,
      title: "Antica Fiera del Soco: Digital Boost 2025",
      client: "Comitato Fiera del Soco",
      location: "Grisignano di Zocco (12-18 settembre 2025)",
      website: "fieradelsoco.it",
      image: "/lovable-uploads/8558f964-78bd-48f9-a43f-3ef6a0186911.png",
      objective: "+15% visitatori paganti e raddoppio delle candidature espositori non alimentari",
      insight: "La fiera più antica del Veneto è poco conosciuta fuori provincia",
      solutions: [
        "Landing multilingua WordPress con moduli dedicati a espositori e visitatori",
        "Sequenza e-mail in Lovebal per early-bird espositori, video tutorial stand, upsell servizi extra",
        "TikTok challenge \"#SocoStory\" con premio \"Pass Backstage\"",
        "Google Performance Max mirata alle ricerche \"cosa fare 14 settembre\" nel Nord-Est",
        "Chatbot FAQ basato su API ChatGPT integrato nel sito"
      ],
      tools: ["WordPress", "ChatGPT", "Lovebal", "Google Ads", "TikTok Ads", "GA4"],
      kpis: [
        "500 download guida espositori",
        "10.000 video #SocoStory visti",
        "Tempo medio risposta chatbot < 5s"
      ],
      result: "L'evento ha registrato la miglior partecipazione degli ultimi dieci anni, con stand esauriti già a luglio"
    },
    {
      id: 3,
      title: "Éclair Pasticceria: dal banco al box",
      client: "Éclair Pasticceria",
      location: "Via Mazzini 6, Grisignano di Zocco (VI)",
      website: "tripadvisor.com",
      image: "/lovable-uploads/b5975350-b800-419e-9ab6-5cb7c9a734b8.png",
      objective: "Lanciare un servizio di spedizione \"sweet box\" in tutta la provincia per compleanni e regali corporate",
      insight: "Forte domanda di dolci artigianali consegnati a domicilio, ma zero presenza ecommerce",
      solutions: [
        "Attivazione WooCommerce con checkout in tre step e plug-in shipping",
        "Carosello Instagram sponsorizzato, foto create con Canva Magic Design",
        "Automazione post-acquisto Lovebal: e-mail unboxing + richiesta recensione Tripadvisor",
        "Collaborazione con micro-influencer vicentini: reel in laboratorio e codici sconto personali",
        "Segmentazione CRM: privati vs aziende, campagna LinkedIn Ads per regali aziendali"
      ],
      tools: ["WooCommerce", "Canva", "ChatGPT", "Lovebal", "Meta Ads", "LinkedIn Ads"],
      kpis: [
        "100 box vendute nel primo mese",
        "40 nuove recensioni 5★",
        "ROAS Instagram > 3"
      ],
      result: "Il servizio \"sweet box\" è diventato il 20% del fatturato mensile e ha portato la pasticceria a farsi conoscere fuori comune"
    },
    {
      id: 4,
      title: "Bianca Soc. Agricola: Latte a km 0, storytelling digitale",
      client: "Bianca Società Agricola",
      location: "Via San Martino 10, Grisignano di Zocco",
      website: "xfarm.ag",
      image: "/lovable-uploads/210deaaf-f007-400d-a64e-6292dd0c4be8.jpg",
      objective: "Vendere latte fresco direttamente a famiglie e ristoranti locali, valorizzando la filiera corta",
      insight: "Prodotto di alta qualità, ma percezione limitata al solo prezzo",
      solutions: [
        "Blog \"Diario in stalla\" su WordPress: articoli e vertical video girati in azienda, copy supportato da ChatGPT",
        "Newsletter stagionale Lovebal con ricette e bundle \"latte + formaggio\"",
        "Campagna Google Ads locale con estensione call-only per ordini entro 30 km",
        "QR su bottiglia → pagina AR che mostra \"la mucca del giorno\" e parametri latte",
        "Programma fedeltà HubSpot: 10 consegne = box cereali omaggio"
      ],
      tools: ["WordPress", "ChatGPT", "Lovebal", "Google Ads", "HubSpot", "Zapier"],
      kpis: [
        "150 famiglie abbonate in 6 mesi",
        "20 ristoranti partner",
        "Open rate newsletter > 45%"
      ],
      result: "La narrazione della vita in stalla ha trasformato il latte in una scelta di valore, garantendo vendite dirette stabili e relazioni durature con la comunità"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Progetti e Clienti</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Casi studio reali che dimostrano l'efficacia delle strategie digitali implementate
            </p>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="grid lg:grid-cols-3 gap-8 p-8">
                  {/* Image */}
                  <div className="lg:col-span-1">
                    <div className="relative overflow-hidden rounded-xl h-64 lg:h-full min-h-[250px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        Progetto {project.id}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="heading-sm mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 text-foreground/70 mb-1">
                        <span className="font-medium">{project.client}</span>
                        <span>•</span>
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">{project.website}</span>
                      </div>
                    </div>

                    {/* Objective & Insight */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center mb-2">
                          <Target className="w-5 h-5 text-blue-600 mr-2" />
                          <h4 className="font-semibold text-blue-900">Obiettivo</h4>
                        </div>
                        <p className="text-sm text-blue-800">{project.objective}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <div className="flex items-center mb-2">
                          <Users className="w-5 h-5 text-purple-600 mr-2" />
                          <h4 className="font-semibold text-purple-900">Insight</h4>
                        </div>
                        <p className="text-sm text-purple-800">{project.insight}</p>
                      </div>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <ArrowRight className="w-4 h-4 text-primary mr-2" />
                        Soluzione Adottata
                      </h4>
                      <ul className="space-y-2">
                        {project.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools & KPIs */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-green-700">Strumenti Utilizzati</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, idx) => (
                            <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md border border-green-200">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-orange-700 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          KPI Raggiunti
                        </h4>
                        <ul className="space-y-1">
                          {project.kpis.map((kpi, idx) => (
                            <li key={idx} className="text-sm text-orange-800 flex items-center">
                              <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                              {kpi}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Result */}
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-4 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-primary mb-2">Risultato</h4>
                      <p className="text-sm text-foreground/80 italic">"{project.result}"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
