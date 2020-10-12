import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import Image from '../components/Image';

class DataProducts extends Component{
    showImages = () =>{
        const images =  this.props.images;

        if (images.length === 0) return (

            <React.Fragment>
                <div className='p-5'>
                <Card
                    bg='info'
                    text="white"
                    style={{textAlign:'center'}}
                    >
                        <Card.Body>
                            <Card.Title>¡ Elige una categoría para comenzar !</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>

        ); //prevenir que se ejecute cuando el state esta vacio
        
        //console.log(images);

        return(
            <React.Fragment>
                <div className='col-12 p-5 row'>
                    {images.map(image => (
                        <Image 
                            key = {image.id}
                            image = {image}
                        />
                    )
                    )}
                </div>
            </React.Fragment>
        )
    }

    render() {
        return(
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
        )
    }
}

export default DataProducts;