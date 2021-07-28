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
            alt="Somos una agencia de CONSULTORÍA, MKT- MEDIA especializada en el mercado PHARMA y el sector SALUD."
          />
            
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
