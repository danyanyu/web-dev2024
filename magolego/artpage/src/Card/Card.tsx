import styles from './Card.module.css'
import asian from '../assets/placeholder.jpg'
import axios from 'axios'
import Buffer from 'buffer'

interface Painting{
    id: number
    title: string
    filename: string
    tech: string
    year: string
    hash: string
}

interface Cardprops{
    painting: Painting
}

function Card(props: Cardprops){

    return(
        <div>
            <img src={"/api/get_image/"+props.painting.filename} width="100vw" />
            <p>{props.painting.filename}</p>
            <p>{props.painting.tech}</p>
            <p>{props.painting.year}</p>
            <p>{props.painting.title}</p>
        </div>
    );
}

export default Card