
import { useIsMobile } from "@/hooks/use-mobile";

const MetricsSection = () => {
  const isMobile = useIsMobile();
  
  const metrics = [
    {
      value: "2,687,523",
      label: "Notes Analyzed"
    },
    {
      value: "186,500",
      label: "Students Helped"
    },
    {
      value: "99%",
      label: "Satisfaction Rate"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-darkCharcoal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className={`text-center ${isMobile ? 'py-6 border-b border-white/10 last:border-b-0' : ''}`}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-vibrantYellow mb-2">{metric.value}</div>
              <div className="text-lightGray text-base md:text-lg">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
