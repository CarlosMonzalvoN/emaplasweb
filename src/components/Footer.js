import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import docAviso from '../docs/aviso-privacidad.pdf'
import docPoliticas from '../docs/politica-venta.pdf'
import '../css/footer.css';

const linkFacebook = "https://www.facebook.com/Envases-Plasticos-EMA-109155647534811"
const linkInstagram = "https://www.instagram.com/plasticosema/?hl=es-la"
const linkYoutube = "https://www.youtube.com/channel/UCQPq7nEMGI6--pDk3A5R05A"

const Footer = () =>{
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Dirección</h4>
              <ul className="list-unstyled">
                <li>Calle Francisco I. Madero S/N</li>
                <li>Juarez Coronaco, Puebla, México</li>
              </ul>
            </div>
            <div className="col">
              <h4>Contacto</h4>
              <ul className="list-unstyled">
                <li>
                    <a href="tel:5614692280">5614692280</a>
                </li>
                <li>
                    <a href="tel:2481060154">2481060154</a>
                </li>
                <li>
                    <a href="mailto:ventas@plasticosema.com.mx?Subject=Cotización%20de%20botella">envasesplas.ema@gmail.com</a>
                </li>
                <li>
                    <a href="mailto:ventas@plasticosema.com.mx?Subject=Cotización%20de%20botella">ventas@plasticosema.com.mx</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Sitios</h4>
              <a href={linkFacebook}><FontAwesomeIcon icon={faFacebook} /></a>&nbsp;&nbsp;
              <a href={linkInstagram}><FontAwesomeIcon icon={faInstagram} /></a>&nbsp;&nbsp;
              <a href={linkYoutube}><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Copyright plasticosema.com.mx All Rights Reserved. |
              <a href={docAviso}> Aviso de Privacidad</a> |
              <a href={docPoliticas}> Política de Venta</a>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer