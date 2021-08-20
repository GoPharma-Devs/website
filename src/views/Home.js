import React,{useState} from "react";

import Particles from "react-tsparticles";

import Logo from "../assets/GoPharmaWhite.svg";
import Astronauta from "../assets/astronauta.png"
function Home() {

  const [count, setCount] = useState(0.2);

  return (
    <React.Fragment>
     <section className="background-a">
     <Particles
        id="tsparticles"
        options={{
         
          fpsLimit: 60,

          particles: {
            groups: {
              z5000: {
                number: {
                  value: 70,
                },
                zIndex: {
                  value: 5000,
                },
              },
              z7500: {
                number: {
                  value: 30,
                },
                zIndex: {
                  value: 7500,
                },
              },
              z2500: {
                number: {
                  value: 50,
                },
                zIndex: {
                  value: 2500,
                },
              },
              z1000: {
                number: {
                  value: 40,
                },
                zIndex: {
                  value: 1000,
                },
              },
            },
            number: {
              value: 200,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
              animation: {
                enable: false,
                speed: 20,
                sync: true,
              },
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
              random: true,
              animation: {
                enable: true,
                speed: 0.3,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
            },
            links: {
              enable: false,
              distance: 100,
              color: "#ffffff88",
              opacity: 0.5,
              width: 1,
            },
            move: {
              angle: {
                value: 10,
                offset: 0,
              },
              enable: true,
              speed: 0.3,
              direction: "left",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            zIndex: {
              value: 500,
              opacityRate: 0.5,
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: false,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                links: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 1200,
              },
              push: {
                quantity: 4,
                groups: ["z5000", "z7500", "z2500", "z1000"],
              },
              remove: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
          
        }}
      >
        
      </Particles>
     </section>
      <section className="hero">
        <div className="contenedor-hero">
         
         <div className="texto">
        <h1>GO PHARMA,
LA AGENCIA QUE VA CONTIGO
</h1>
         <button>ACCEDER</button>
         </div>
         <img
            className="logo-hero"
            src={Astronauta}
            alt="Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD."
          />
        </div>
      
      </section>

      <section className="about">
        <h2>Go-pharma</h2>
      </section>
    </React.Fragment>
  );
}

export default Home;
