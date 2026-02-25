type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Woningen verkoopklaar maken",
    description:
      "Ons team staat klaar om woningen te ontruimen en/of schoon op te leveren.",
    image: "/images/service1.jpg",
  },
  {
    title: "Projecten opleveren",
    description:
      "Schoonmaken en opleveren van nieuwbouw en renovaties.",
    image: "/images/service2.jpg",
  },
  {
    title: "Verhuizen",
    description:
      "Wij helpen u graag bij het verhuizen van uw inboedel.",
    image: "/images/service3.jpg",
  },
  {
    title: "Extra's",
    description:
      "Van ramen wassen tot dakgoot ledigen – niets is te gek!",
    image: "/images/service4.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Wat bieden wij?</h2>

        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}