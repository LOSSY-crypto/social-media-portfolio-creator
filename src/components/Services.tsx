
import { useState } from "react";
import { 
  BarChart, 
  Users, 
  MessageSquare, 
  Lightbulb, 
  Share2, 
  Camera,
  TrendingUp,
  Palette,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Social Media Strategy",
      description: "Comprehensive social media strategies tailored to your brand objectives and target audience.",
      icon: <Lightbulb className="w-10 h-10" />,
    },
    {
      title: "Content Creation",
      description: "Eye-catching, engaging content designed to resonate with your audience and reinforce your brand identity.",
      icon: <Camera className="w-10 h-10" />,
    },
    {
      title: "Community Management",
      description: "Active management of your social media communities to foster engagement and loyalty.",
      icon: <Users className="w-10 h-10" />,
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights to track performance and optimize your social media campaigns.",
      icon: <BarChart className="w-10 h-10" />,
    },
    {
      title: "Crisis Management",
      description: "Proactive measures and reactive strategies to navigate social media challenges and protect your reputation.",
      icon: <MessageSquare className="w-10 h-10" />,
    },
    {
      title: "Campaign Management",
      description: "End-to-end management of social media campaigns to achieve your business objectives.",
      icon: <TrendingUp className="w-10 h-10" />,
    },
    {
      title: "Influencer Partnerships",
      description: "Strategic partnerships with relevant influencers to expand reach and build credibility.",
      icon: <Share2 className="w-10 h-10" />,
    },
    {
      title: "Brand Identity Development",
      description: "Crafting a consistent and compelling brand voice and aesthetic for your social media presence.",
      icon: <Palette className="w-10 h-10" />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4 opacity-0 animate-fade-in-up" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
            Services I Provide
          </h2>
          <p className="paragraph opacity-0 animate-fade-in-up" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            Comprehensive social media management solutions to elevate your brand's digital presence and achieve your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 opacity-0 animate-fade-in-up flex flex-col h-full"
              style={{ animationDelay: `${400 + index * 100}ms`, animationFillMode: 'forwards' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`p-3 rounded-xl mb-4 bg-primary/5 inline-flex ${hoveredIndex === index ? "scale-110" : ""} transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="heading-sm text-xl mb-3">{service.title}</h3>
              <p className="text-foreground/70 text-sm mb-4 flex-grow">{service.description}</p>
              <a 
                href="#contact" 
                className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
              >
                Learn More 
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
