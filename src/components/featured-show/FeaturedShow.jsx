import styles from './featured-show.module.css'

const FeaturedShow = (props) => {
  return (
    <>
        <div className={styles.featuredShow}>
          <img src={props.movie.imageUrl} alt="poster" />
          <div className={styles.movietitle}>
            {props.movie.name}
          </div>
        </div>
    </>
  )
}

export default FeaturedShow