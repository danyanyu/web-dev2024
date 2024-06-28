import { useState, useEffect } from 'react'
import styles from './Gallery.module.css'
import Card from '../Card/Card.tsx'
import axios from 'axios'

interface Galleryprops{
    page: string
}

interface Painting{
    id: number
    title: string
    filename: string
    tech: string
    year: string
    hash: string
}

function Gallery(props: Galleryprops){
    const [paintings, setPaintings] = useState<Painting[]>([]);

    useEffect(()=>{
        console.debug('page changed')
        const getPageContent = async () => {
            let {data} = await axios.get<Painting[]>(
                "/api/"+props.page.toLowerCase(),
                 {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            )
            setPaintings(data);
        }
        if(props.page !=="Home"){
        getPageContent();
        } else{
            setPaintings([]);
        }
        window.scrollTo(0,0);
      },
      [props.page]);

    return(props.page!=="Home"?
        <main className={styles.gallery}>
            <div className={styles.CardContainer}>
                {paintings.map(p =>
                (<Card painting={p}/>)
                )}
                </div>
        </main>:
        <main className={styles.gallery}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore tempora facilis deleniti incidunt delectus reiciendis omnis saepe quam laboriosam, sed accusantium eum ipsum voluptas vel alias cupiditate sequi perferendis.</p>
        </main>
    );
}

export default Gallery