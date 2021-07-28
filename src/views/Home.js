import React from "react";
import Logo from "../assets/GoPharmaWhite.svg"
function Home() {
  return (
    <React.Fragment>
      <section>
        <div className="contenedor">
         
        <img
            src={Logo}
            alt="Somos una agencia de CONSULTORÍA, MKT- MEDIA especializada en el mercado PHARMA y el sector SALUD."
          />
            <h1>GO-PHARMA</h1>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
