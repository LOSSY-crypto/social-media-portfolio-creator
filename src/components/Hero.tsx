import { useEffect, useState } from "react";
import { ArrowDown, Instagram, Facebook, Twitter, Linkedin, Mail } from "lucide-react";

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
              <p className="text-sm font-medium text-foreground/70">Digital Marketing & Social Media</p>
            </div>
            
            <h1 className="heading-xl opacity-0 animate-fade-in-up" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
              Fadiga <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Losseni</span>
            </h1>
            
            <p className="paragraph max-w-xl opacity-0 animate-fade-in-up" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
              Marketing digitale e social media management. Studente di psicologia con passione per la tecnologia e la comunicazione digitale.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-up" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
              <a href="#contact" className="button-primary">
                Contattami
              </a>
              <a href="#portfolio" className="button-outline">
                Portfolio
              </a>
            </div>

            <div className="pt-8 opacity-0 animate-fade-in-up" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
              <p className="text-sm font-medium text-foreground/60 mb-3">I miei contatti</p>
              <div className="flex space-x-4">
                <a href="mailto:losseni.fadiga@gmail.com" className="p-2 rounded-full bg-social-instagram/10 hover:bg-social-instagram hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
                <a href="#" className="p-2 rounded-full bg-social-instagram/10 text-social-instagram hover:bg-social-instagram hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 rounded-full bg-social-facebook/10 text-social-facebook hover:bg-social-facebook hover:text-white transition-colors">
                  <Facebook size={20} />
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
                  src="public/lovable-uploads/8558f964-78bd-48f9-a43f-3ef6a0186911.png"
                  alt="Fadiga Losseni" 
                  className="w-full h-full object-cover rounded-xl animate-float"
                  style={{animationDelay: '1000ms'}}
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-44 h-44 glass-card rounded-2xl opacity-0 animate-fade-in-up" style={{animationDelay: '1200ms', animationFillMode: 'forwards'}}>
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                <div className="text-4xl font-bold">4+</div>
                <div className="text-sm text-foreground/70">Lingue Parlate</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-36 h-36 glass-card rounded-2xl opacity-0 animate-fade-in-down" style={{animationDelay: '1400ms', animationFillMode: 'forwards'}}>
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm text-foreground/70">Certificazioni</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{animationDelay: '1600ms', animationFillMode: 'forwards'}}>
          <a 
            href="#about" 
            className="flex flex-col items-center text-foreground/50 hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scorri Giù</span>
            <ArrowDown size={20} className="animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
