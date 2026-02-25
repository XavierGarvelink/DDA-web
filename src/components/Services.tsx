import service1 from "/src/images/werk8.png";
import service2 from "/src/images/werk6.png";
import service3 from "/src/images/werk5.png";
import service4 from "/src/images/werk2.png";

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
    image: service1,
  },
  {
    title: "Projecten opleveren",
    description:
      "Schoonmaken en opleveren van nieuwbouw en renovaties.",
    image: service2,
  },
  {
    title: "Verhuizen",
    description:
      "Wij helpen u graag bij het verhuizen van uw inboedel.",
    image: service3,
  },
  {
    title: "Extra's",
    description:
      "Van ramen wassen tot dakgoot ledigen – niets is te gek!",
    image: service4,
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