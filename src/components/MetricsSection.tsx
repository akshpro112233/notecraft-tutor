
const MetricsSection = () => {
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
    <section className="py-16 bg-darkCharcoal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-vibrantYellow mb-2">{metric.value}</div>
              <div className="text-lightGray text-lg">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
