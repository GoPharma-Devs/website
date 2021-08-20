import React from "react";
import Logo from "../assets/GoPharmaLogo.png"
function Home() {
  return (
    <React.Fragment>
      <section className="hero">
        <div className="contenedor">
         
        <img
        className="logo-hero"
            src={Logo}
            alt="Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD."
          />
            <h1>
LA AGENCIA QUE VA CONTIGO
</h1>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
