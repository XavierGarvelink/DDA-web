import werk1 from "/src/images/werk1.png";
import werk2 from "/src/images/werk5.png";
import werk3 from "/src/images/werk7.png";
import werk4 from "/src/images/werk4.png";
import werk5 from "/src/images/werk6.png";
import werk6 from "/src/images/werk2.png";
import werk7 from "/src/images/werk3.png";
import werk8 from "/src/images/werk8.png";

const images = [
  werk1,
  werk2,
  werk3,
  werk4,
  werk5,
  werk6,
  werk7,
  werk8,
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Ons werk</h2>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Werk ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}