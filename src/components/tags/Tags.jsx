import { useState } from 'react'
import styles from './tags.module.css'

const Tags = () => {

    let [tags] = useState([
        "For You",
        "Action",
        "Romantic Comedy",
        "Thriller",
        "Sci-Fi",
        "Drama",
        "Fantasy",
        "Documentary",
        "Crime",
        "Adventure",
        "Mystery",
        "Horror",
        "Animated",
        "Historical",
        // "Superhero",
        // "Musical",
        // "Family",
        // "Psychological"
    ])

  return (
    <>
        <div className={styles.tags}>

            {
                tags.map((tag)=>{
                    // eslint-disable-next-line react/jsx-key
                    return <p className={styles.tag}>{tag}</p>
                })
            }

        </div>
    </>
  )
}

export default Tags