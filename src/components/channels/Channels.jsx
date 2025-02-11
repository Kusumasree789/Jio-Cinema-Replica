import styles from './channels.module.css'
import channel1 from '../../assets/channel1.avif'
import channel2 from '../../assets/channel2.avif'
import channel3 from '../../assets/channel3.webp'
import channel4 from '../../assets/channel4.avif'
import channel5 from '../../assets/channel5.avif'
import channel6 from '../../assets/channel6.avif'
import channel7 from '../../assets/channel7.avif'
import channel8 from '../../assets/channel8.avif'
import channel9 from '../../assets/channel9.avif'
import channel10 from '../../assets/channel10.avif'



const Channels = () => {
  return (
    <>
        <div className={styles.channels}>
            <img src={channel1} alt="channel" />
            <img src={channel2} alt="channel" />
            <img src={channel3} alt="channel" />
            <img src={channel4} alt="channel" />
            <img src={channel5} alt="channel" />
            <img src={channel6} alt="channel" />
            <img src={channel7} alt="channel" />
            <img src={channel8} alt="channel" />
            <img src={channel9} alt="channel" />
            <img src={channel10} alt="channel" />


        </div>
    </>
  )
}

export default Channels