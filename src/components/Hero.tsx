
import { useEffect, useState } from "react";
import { ArrowDown, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-radial from-blue-100 to-transparent opacity-60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-radial from-purple-100 to-transparent opacity-60 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <div className="inline-block glass px-4 py-2 rounded-full">
              <p className="text-sm font-medium text-foreground/70">Social Media Strategy Expert</p>
            </div>
            
            <h1 className="heading-xl opacity-0 animate-fade-in-up" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
              Elevate Your Brand's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Social Presence</span>
            </h1>
            
            <p className="paragraph max-w-xl opacity-0 animate-fade-in-up" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
              Strategic social media management that drives engagement, builds communities, and delivers real results for your business.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-up" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
              <a href="#contact" className="button-primary">
                Let's Work Together
              </a>
              <a href="#portfolio" className="button-outline">
                View Portfolio
              </a>
            </div>

            <div className="pt-8 opacity-0 animate-fade-in-up" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
              <p className="text-sm font-medium text-foreground/60 mb-3">Connect with me</p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-full bg-social-instagram/10 text-social-instagram hover:bg-social-instagram hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 rounded-full bg-social-facebook/10 text-social-facebook hover:bg-social-facebook hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-2 rounded-full bg-social-twitter/10 text-social-twitter hover:bg-social-twitter hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-2 rounded-full bg-social-linkedin/10 text-social-linkedin hover:bg-social-linkedin hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 opacity-0 animate-fade-in" style={{animationDelay: '800ms', animationFillMode: 'forwards'}}>
              <div className="w-full h-full bg-gradient-to-tr from-white to-gray-100 p-1 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Social Media Manager at work" 
                  className="w-full h-full object-cover rounded-xl animate-float"
                  style={{animationDelay: '1000ms'}}
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-44 h-44 glass-card rounded-2xl opacity-0 animate-fade-in-up" style={{animationDelay: '1200ms', animationFillMode: 'forwards'}}>
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm text-foreground/70">Years of Experience</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-36 h-36 glass-card rounded-2xl opacity-0 animate-fade-in-down" style={{animationDelay: '1400ms', animationFillMode: 'forwards'}}>
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-foreground/70">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{animationDelay: '1600ms', animationFillMode: 'forwards'}}>
          <a 
            href="#services" 
            className="flex flex-col items-center text-foreground/50 hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
