import React from 'react';
import { Card } from 'react-bootstrap';

const Image = (props) => {

    const {name, photo} = props.image;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card
                bg={'light'}
            >
                <Card.Img src={photo} alt={name} variant="top"/>
                <Card.Body>
                    <Card.Text>
                        {name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Image;