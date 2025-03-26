
import { useState } from "react";
import { ArrowUpRight, Instagram, Facebook, Twitter } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "social", name: "Social Strategy" },
    { id: "campaigns", name: "Campaigns" },
    { id: "content", name: "Content Creation" },
  ];

  const projects = [
    {
      id: 1,
      title: "Fashion Brand Relaunch",
      description: "Complete social media strategy for a fashion brand's digital relaunch, resulting in 300% follower growth.",
      category: "social",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80",
      platform: "instagram",
      platformIcon: <Instagram className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "Product Launch Campaign",
      description: "Multi-platform campaign for new product line launch with influencer partnerships and UGC strategy.",
      category: "campaigns",
      image: "https://images.unsplash.com/photo-1605170439002-90845e45c6f9?auto=format&fit=crop&q=80",
      platform: "facebook",
      platformIcon: <Facebook className="w-4 h-4" />,
    },
    {
      id: 3,
      title: "Lifestyle Content Series",
      description: "Ongoing content creation and management for a lifestyle brand's social media channels.",
      category: "content",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80",
      platform: "twitter",
      platformIcon: <Twitter className="w-4 h-4" />,
    },
    {
      id: 4,
      title: "Restaurant Social Rebrand",
      description: "Complete social media rebrand for a high-end restaurant chain, focusing on visual identity and storytelling.",
      category: "social",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
      platform: "instagram",
      platformIcon: <Instagram className="w-4 h-4" />,
    },
    {
      id: 5,
      title: "Holiday Marketing Campaign",
      description: "Comprehensive holiday campaign across multiple platforms, increasing engagement by 250%.",
      category: "campaigns",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80",
      platform: "facebook",
      platformIcon: <Facebook className="w-4 h-4" />,
    },
    {
      id: 6,
      title: "Video Content Strategy",
      description: "Development and execution of short-form video content strategy for a tech startup.",
      category: "content",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
      platform: "twitter",
      platformIcon: <Twitter className="w-4 h-4" />,
    },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getPlatformClass = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return 'bg-social-instagram/10 text-social-instagram';
      case 'facebook':
        return 'bg-social-facebook/10 text-social-facebook';
      case 'twitter':
        return 'bg-social-twitter/10 text-social-twitter';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4 opacity-0 animate-fade-in-up" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
            Featured Projects
          </h2>
          <p className="paragraph opacity-0 animate-fade-in-up" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            Browse through my recent work showcasing successful social media strategies and campaigns.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-primary/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group opacity-0 animate-fade-in-up"
              style={{animationDelay: `${500 + index * 100}ms`, animationFillMode: 'forwards'}}
            >
              <div className="h-60 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute top-4 left-4 ${getPlatformClass(project.platform)} px-3 py-1 rounded-full text-xs font-medium flex items-center`}>
                  {project.platformIcon}
                  <span className="ml-1 capitalize">{project.platform}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="heading-sm text-xl mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Case Study <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 opacity-0 animate-fade-in-up" style={{animationDelay: '900ms', animationFillMode: 'forwards'}}>
          <a href="#contact" className="button-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
