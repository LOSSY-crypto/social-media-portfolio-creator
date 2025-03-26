
import { TrendingUp, Users, Award, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const Stats = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    {
      id: 1,
      value: 200,
      label: "Happy Clients",
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: 2,
      value: 500,
      label: "Campaigns Managed",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      id: 3,
      value: 15,
      label: "Industry Awards",
      icon: <Award className="w-8 h-8" />,
    },
    {
      id: 4,
      value: 7,
      label: "Years Experience",
      icon: <Clock className="w-8 h-8" />,
    },
  ];

  return (
    <section id="stats-section" className="py-16 bg-gradient-subtle">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="glass-card rounded-2xl p-6 text-center opacity-0 animate-fade-in"
              style={{ 
                animationDelay: inView ? `${index * 150}ms` : "0ms", 
                animationPlayState: inView ? "running" : "paused",
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/5 text-primary">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold">
                {inView ? stat.value : 0}+
              </div>
              <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
