import React, {Component} from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class Search extends Component{

    busquedaRef = React.createRef();

    obtenerDatos = (id, e) =>{
        e.preventDefault();
        //Tomamos valor del input
        const termino = id;
        //Lo enviamos al componente principal
        this.props.datosBusqueda(termino);
        
    }

    render(){  
        return(
            
                <div className='col-12 p-5 row'>
                    <ButtonGroup vertical>
                        <Button  variant="secondary" onClick={(e) => this.obtenerDatos('0', e)} >Botellas</Button>
                        <Button  variant="secondary" onClick={(e) => this.obtenerDatos('1', e)} >Capsuleros</Button> 
                        <Button  variant="secondary" onClick={(e) => this.obtenerDatos('2', e)} >Garrafas</Button> 
                        <Button  variant="secondary" onClick={(e) => this.obtenerDatos('3', e)} >Goteros</Button>

                        <Button  variant="secondary" onClick={(e) => this.obtenerDatos('4', e)} >Linea Resistol</Button> 
                        <Button  variant="secondary" onClick={(e) => this.obtenerDatos('5', e)} >Liner</Button> 
                        <Button  variant="secondary" onClick={(e) => this.obtenerDatos('6', e)} >Misiles</Button> 
                        <Button  variant="secondary" onClick={(e) => this.obtenerDatos('7', e)} >Otros</Button> 
                        <Button  variant="secondary" onClick={(e) => this.obtenerDatos('8', e)} >Pet</Button> 
                        <Button  variant="secondary" onClick={(e) => this.obtenerDatos('9', e)} >Pomaderas</Button> 
                        <Button  variant="secondary" onClick={(e) => this.obtenerDatos('10', e)} >Tapas</Button> 
                        <Button  variant="secondary" onClick={(e) => this.obtenerDatos('11', e)} >Tarros</Button> 
                    </ButtonGroup>
                </div>
            
        )
    }
}

export default Search;