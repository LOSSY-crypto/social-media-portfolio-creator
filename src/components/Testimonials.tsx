
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Fashion Forward",
      quote: "Working with this social media manager completely transformed our brand's online presence. Our engagement rates have tripled, and we're seeing real conversions from our social channels.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "TechNova",
      quote: "The strategic approach to our social campaigns has been nothing short of exceptional. Our product launch exceeded all expectations thanks to the carefully crafted social media strategy.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Brand Manager",
      company: "Urban Eats",
      quote: "I've worked with many social media professionals, but none have delivered the level of creativity, strategic thinking, and results that we've experienced with this partnership.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4 opacity-0 animate-fade-in-up" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
            Client Testimonials
          </h2>
          <p className="text-white/80 paragraph opacity-0 animate-fade-in-up" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            Don't take my word for it — hear what my clients have to say about our work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 -left-10 opacity-10">
            <Quote size={80} />
          </div>

          <div className="relative z-10 opacity-0 animate-fade-in" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  activeIndex === index ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="glass bg-white/10 rounded-2xl p-8 md:p-10">
                  <p className="text-lg md:text-xl text-white/90 italic mb-8">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-white/70">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4 opacity-0 animate-fade-in" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
