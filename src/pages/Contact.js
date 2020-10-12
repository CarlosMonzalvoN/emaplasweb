import React from 'react';
import Maps from "../components/GoogleMaps";
import { Container, Row, Col } from 'react-bootstrap';
import "../css/contact.css";

export default () => (
    <div className="background-ubication">
        <Container>
            <Row>
                <Col>
                    <div className="wrapper-maps">
                    <Maps />
                    </div>
                </Col>
                <Col className="background-column">
                    <br />
                    <h1>
                        Ubicación
                    </h1><br />

                    <div className="info-contact">
                        <h2>
                            Sucursal Puebla
                        </h2>
                        <ul className="list-unstyled">
                            <li>
                                Calle Francisco I. Madero S/N <br />
                                Juarez Coronaco, Puebla, México
                            </li>
                            <br />
                            <li>
                                <h6>
                                    Teléfonos:
                                </h6>
                            </li>
                            <li>
                                <a href="tel:5614692280">5614692280</a>
                            </li>
                            <li>
                                <a href="tel:2481060154">2481060154</a>
                            </li>
                            <br />
                            <li>
                                <h6>
                                    Correo:
                                </h6>
                            </li>
                            <li>
                                <a href="mailto:ventas@plasticosema.com.mx?Subject=Solicitud%20de%20información">ventas@plasticosema.com.mx</a>
                            </li>
                            <li>
                                <a href="mailto:ventas@plasticosema.com.mx?Subject=Solicitud%20de%20información">envasesplas.ema@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)