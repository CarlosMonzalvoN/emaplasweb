import React, {Component} from 'react';
import Search from '../components/Search';
import DataProducts from '../components/DataProducts';
import "../css/home.css"; //Only for use the same background

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
            <div className="background-home">
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-3">
                            <Search datosBusqueda={this.datosBusqueda}/>
                        </div>
                        <div className="col">
                            <DataProducts 
                                images={this.state.images}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;