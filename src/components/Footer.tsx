
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary text-white py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="focus:outline-none">
              <span className="font-display text-2xl font-bold text-white">Social<span className="text-white/50">Pro</span></span>
            </a>
            <p className="mt-2 text-white/70 max-w-md">
              Strategic social media management for brands that want to stand out in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-white/70 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    Social Strategy
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    Content Creation
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    Community Management
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    Analytics & Reporting
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-white/70 mb-4">
                Subscribe to get the latest updates and news about social media trends.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg focus:outline-none text-foreground w-full"
                />
                <button
                  type="submit"
                  className="bg-white text-primary px-4 py-2 rounded-r-lg font-medium hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} SocialPro. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
