import React, {Component} from 'react';
import Search from '../components/Search';
import DataProducts from '../components/DataProducts';
import "../css/products.css"; //Only for use the same background
import { Button } from 'react-bootstrap';

class Products extends Component{

    state = {
        termino : "",
        images : []
    }

    datosBusqueda = (termino) => {
        this.setState({
            termino
        }, () =>{
            this.getJson();
        })
    }

    getJson = () =>{
        
        const url = 'https://gist.githubusercontent.com/CarlosMonzalvoN/533efedcda63eae8d4a41bdda12ba8fb/raw/1bfc372b95579a9677263f2a38f6116649b7278b/plasticosEma.json'

        fetch(url)
        .then(response => response.json())
        .then(data => {
        this.setState({images : data.items[this.state.termino].items}) //  console.log(data.items[0].items) Prints result from `response.json()` in getRequest
        })
        .catch(error => console.error(error))
    }


    render(){
        return(
            <div className="background-products">
                    <div className="row" style={{marginRight:'0px'}}>
                        <div className="col-4">
                            <Search datosBusqueda={this.datosBusqueda}/>
                        </div>
                        <div className="col" style={{alignSelf:'center'}}>
                            <DataProducts 
                                images={this.state.images}
                            />
                        </div>
                    </div>
                    
                    <div style={{textAlign:'center'}}>
                        <hr />
                        <h5> Si no logras encontrarlo en nuestro catálogo.</h5>
                        <Button variant='info' href="mailto:ventas@plasticosema.com.mx?Subject=Solicitud%20de%20información">
                            ¡ Preguntanos !
                        </Button>
                        <p>Con mucho gusto te atenderemos y resolveremos tus problemas plásticos.</p>
                    </div>
            </div>
        )
    }
}

export default Products;