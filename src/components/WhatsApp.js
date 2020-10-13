import React from 'react';
import icon_whatsapp from "../img/icon_whatsapp.png";

function WhatsApp() {
    return(
        <div>
            <img 
        src={icon_whatsapp} 
        useMap="#workmap" 
        alt="WA" 
        width="80"
        style={{background: 'transparent', border: 'transparent',position: 'fixed', bottom: '8%', right: '5%'}}
        />
        <map name="workmap">
          <area shape="circle" coords="38,38,38" alt="WhatsApp" href="https://wa.me/5215614692280" />
        </map>
        </div>
    );
}

export default WhatsApp;