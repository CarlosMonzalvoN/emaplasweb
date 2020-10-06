import React from "react";
import ReactPlayer from "react-player";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import "../css/home.css";
import video from "../video/logo-ema.mp4";
import mision from "../img/mision.jpeg";
import vision from "../img/vision.jpeg";
import objetivo from "../img/objetivo.jpeg";

const Home = () => {
  return (
    <div className="background-home">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={video}
          playing
          width="100%"
          height="100%"
          volume={0.05}
        />
      </div>
      
      <section className="banner">
        <h3>Resolviendo tus necesidades plásticas desde 1996</h3>
      </section>
      <div className="container">
      <CardDeck style={{textAlign:'center'}}>

        <Card 
        bg={'dark'} 
        text={'light'} 
        className="mb-2"
        >
          <Card.Img variant="top" src={mision} />
          <Card.Body>
            <Card.Text>
            Somos una empresa totalmente mexicana, enfocada en la satisfacción comercial de nuestros clientes en el ramo plástico, ofreciendo la mayor variedad de productos para todo tipo de necesidades.
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card 
        bg={'dark'} 
        text={'light'} 
        className="mb-2"
        >
          <Card.Img variant="top" src={vision} />
          <Card.Body>
            <Card.Text>
            En ENVASES PLÁSTICOS EMA trabajamos para ser la mejor opción a nivel nacional en ámbitos de fabricación y distribución de insumos plásticos.{" "}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card 
        bg={'dark'} 
        text={'light'} 
        className="mb-2"
        >
          <Card.Img variant="top" src={objetivo} />
          <Card.Body>
            <Card.Text style={{textAlign:'left'}}>
            • Garantizamos la Calidad de nuestros productos.<br></br>
            • Garantizamos la Satisfacción del Cliente.<br></br>
            • Garantizamos la Mejora Continua de nuestros procesos.<br></br>
            • Garantizamos tiempos de entrega.<br></br>
            • Brindar la mas amplia variedad de productos para cada necesidad<br></br>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      </div>
    </div>
  );
};

export default Home;
