import DDAIcon from "../../public/icon.svg"

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <img src={DDAIcon} className="logo"></img>
        <h1 className="name">DDA Die Doen Alles</h1> 

        <nav className="main-nav">
          <a href="#services">Functies</a>
          <a href="#about">Over</a>
          <a href="#gallery">Galerij</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}