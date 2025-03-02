import styles from './Header.module.css'
import JClogo from '../../assets/jioc_logo.svg'
import crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
// import voicesearchIcon from '../../assets/OIP.jpeg'
import userIcon from '../../assets/Pink.png'
import { useState, useEffect } from 'react'
import Show from '../show/Show'



const Header = (props) => {

    let [searchTitle, setSearchTitle] = useState("")
    let [filteredMovies, setFilteredMovies] = useState([])

    useEffect(()=>{
        if(searchTitle!=="")
        {
            let filterMovies = props.movies.filter((movie)=>{
                return movie.name.toUpperCase().includes(searchTitle.toUpperCase())
            })
            setFilteredMovies(filterMovies)
        }
        else
        {
            setFilteredMovies([])
        }
    },[searchTitle])
    
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    <div className={styles.logo}>
                        <img src={JClogo} alt='logo'/>
                        <div className={styles.premium}>
                            <img src={crown} alt="image" />
                            <p>Go&nbsp;Premium</p> 
                        </div>
                    </div>

                    <ul className={styles.navLinks}>
                        <li className={styles.navLink}>Home</li>
                        <li className={styles.navLink}>Sports</li>
                        <li className={styles.navLink}>Movies</li>
                        <li className={styles.navLink}>TV&nbsp;Shows</li>
                        <li className={styles.navLink}>More</li>
                    </ul>
                </nav>

                <div className={styles.search}>
                    <div className={styles.searchBox}>
                        <div className={styles.headerIcon}>
                            <img src={searchIcon} alt="icon" />
                        </div>
                        <input type="text" 
                        onChange={(event)=>{
                            setSearchTitle(event.target.value)
                        }} 
                        className={styles.searchInput} placeholder='Movies, Shows and more'/>
                    </div>
                    <img className={styles.usericon} src={userIcon} alt="icon" />
                </div>
            </header>

            {
                filteredMovies.length!==0?(
                    <div className={styles.searchResults}>
                        {
                            filteredMovies.map((movie)=>{
                                return <Show movie={movie} />
                            })
                        }
                    </div>
                ):null
            }
            
        </>
    )
}

export default Header