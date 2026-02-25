const images = [
  "/images/work1.jpg",
  "/images/work2.jpg",
  "/images/work3.jpg",
  "/images/work4.jpg",
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