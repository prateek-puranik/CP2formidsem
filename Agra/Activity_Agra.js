import React, { Component } from 'react';
import img from './HOTEL1AGRA.jpg'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import ReactReadMoreReadLess from "react-read-more-read-less"
import Card from 'react-bootstrap/Card'
import imgCard1 from "./AgraImage1.jpg";
import imgCard2 from "./AgraImage2.jpg";
import imgCard3 from "./AgraImage3.jpg"
import imgCard4 from "./AgraImage6.jpg"
import imgCard5 from "./AgraImage8.jpg"
import imgCard6 from "./AgraImage7.jpg"
import ShowMoreText from 'react-show-more-text';
 

/*class Hotel_Agra extends Component {
  render() {
    return (
      <div>
        <CardGroup>
  <Card>
    
    <Card.Body>
      <Card.Title>TAJ MAHAL</Card.Title>
      <Card.Img variant="top" src={imgCard4} />
       
      <Card.Text align="left">
      <ReactReadMoreReadLess
        charLimit={50}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
      The most famous of the monuments of Agra, India is the TajMahal.
       TajMahal is a symbol of the devotion and dedication of love. TajMahal of Agra is a monument built by emperor Shah Jahan In the memory of her wife Mumtaz Mahal. 
       TajMahal expresses the magnificence of Mughal architecture. The Taj has done wonders to Agra Tourism. 
       Taj is a must in each one of the Agra packages offered by us. Agra to Jaipur is an interesting package option
       </ReactReadMoreReadLess>
      </Card.Text>
      
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
    
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>FATEPUR SIKRI</Card.Title>
      <Card.Img variant="top" src={imgCard1} />
      <Card.Text style={{ fontFamily: "Spicy Rice", color: "pink" }}>
      <ReactReadMoreReadLess
        charLimit={50}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
      The most famous of the monuments of Agra, India is the TajMahal.<br/>
       TajMahal is a symbol of the devotion and dedication of love. TajMahal of Agra is a monument built by emperor Shah Jahan in the memory of her wife Mumtaz Mahal. 
       <br/>TajMahal expresses the magnificence of Mughal architecture. The Taj has done wonders to Agra Tourism. </br>
       Taj is a must in each one of the Agra packages offered by us. Agra to Jaipur is an interesting package option.</br>
       Famously known as the city of Ghosts, it was built by the Great Mughal Emperor. Fatehpur Sikri is a place worth visiting to discover how once the city could have been which has now turned into ruins. many a Agra packages include a trip to Fatehpur Sikri also
        </ReactReadMoreReadLess>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>SIKANDRA</Card.Title>
      <Card.Img variant="top" src={imgCard6}  style={{ height: '9.2rem' }}/>
      <Card.Text>
        Write hotel and amenities
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>AGRA FORT</Card.Title>
      <Card.Img variant="top" src={imgCard2} />
      <Card.Text>
        Write Hotel and amenities
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>ITMA UD DALAH</Card.Title>
      <Card.Img variant="top" src={imgCard5} />
      <Card.Text>
        Write about hotel and amenities
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</CardGroup>
          
      </div>
    );
  }
}

export default Hotel_Agra;
import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from "react-router-dom";

const CardExampleImageCard = ({ tour, handelDelete }) => (
  // <Card.Group>
  <Card style={{ margin: "20px" }}>
    <Image src={tour.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{tour.name}</Card.Header>
      <Card.Meta style={{ color: "green" }}>{tour.price} $</Card.Meta>
    
      <ReactReadMoreReadLess
        charLimit={50}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {tour.info}
      </ReactReadMoreReadLess>
    </Card.Content>
    <Card.Content extra>
      <Link to={`/toursList/${tour.id}`}>
        <a href="#" style={{ color: "blue" }}>
          more details
        </a>
      </Link>
      <div className="ui two buttons">
        <Button basic color="red" onClick={() => handelDelete(tour.id)}>
          not unterested
        </Button>
      </div>
    </Card.Content>
  </Card>
  // </Card.Group>
);

export default CardExampleImageCard;*/
function Card1(props) {
  return (
  
    <div>
     <br/>
    <ul>
      <div className="card" >
      <h3 className="card-header--title">{props.heading}</h3>
      <img className="card-image" src={props.src} style={{ height: '14rem' }} alt="" />
				
        <div className="card-container--content">

          
          <p class="card-text">
            <p align="left">
          <ShowMoreText
                /* Default options */
                lines={3}
                more='Show more'
                less='Show less'
                className='content-css'
                anchorClass='my-anchor-css-class'
                
                expanded={false}
                width={280}
            >
        
      {props.text.split("\\n").map(line => (<p>{line}</p>))}
      </ShowMoreText>
      </p>
      
       </p>
       
         </div>
       
      </div>
    </ul>
    </div>

  );
}

export default function CardList1(props) {
  return (
    <div>
    <div className="card-masonry">
      <Card1
        heading="TAJ MAHAL"
        
        src={imgCard4}
        text="The most famous of the monuments of Agra, India is the TajMahal TajMahal is a symbol of the devotion and dedication of love.\n TajMahal of Agra is a monument built by emperor Shah Jahan in the memory of her wife Mumtaz Mahal. TajMahal expresses the magnificence of Mughal architecture.\n The Taj has done wonders to Agra Tourism. Taj is a must in each one of the Agra packages offered by us. Agra to Jaipur is an interesting package option."
      />
      <Card1
        heading="FATEHPUR SIKRI"
        text="Famously known as the city of Ghosts, it was built by the Great Mughal Emperor.\n Fatehpur Sikri is a place worth visiting to discover how once the city could have been which has now turned into ruins. \nMany a Agra packages include a trip to Fatehpur Sikri also"
        src={imgCard1}
        
      />
       <Card1
        heading="SIKANDRA"
        text="The tomb of the great Mughal emperor Akbar is worth visiting. \nAkbar's tomb is a mixture of many architectural styles and completely different from earlier Mughal Buildings.\nVisit to this monuments of Agra is esential to make your Agra tour complete."
       src={imgCard6}
        
      />
      <Card1
        heading="AGRA FORT"
        text="Besides the TajMahal amongst the other famous monuments of Agra, India is the Agra Fort. \nAgra fort was built by Emperor Akbar. He was undoubtedly the Greatest Mughal emperor of India. The construction of Agra fort commenced in the 1565 and completed in 1571. \nBuilt with red sandstone Agra Fort is a mixture of the Islamic and Hindu styles of architecture. Agra Tourism would be incomplete without this monument.\n Most of the Agra packages offered by us take you to the Agra Fort. Agra to Jaipur is the usual choice in pacakges."
        src={imgCard2}
      />
     
    </div>
    
   </div>
  );
}