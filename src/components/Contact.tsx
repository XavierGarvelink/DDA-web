export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contacteer ons!</h2>

        <p><strong>Kantooruren:</strong> Ma – Zo, 8:00 – 20:00</p>

        <form className="contact-form">
          <input type="text" placeholder="Naam" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Telefoon" />
          <textarea placeholder="Bericht" rows={4} required />
          <button type="submit">Verstuur</button>
        </form>

        <div className="contact-details">
          <a href="tel:+32468236014">+32 468 236 014</a>
          <a href="mailto:info@diedoenalles.be">info@diedoenalles.be</a>
        </div>
      </div>
    </section>
  );
}