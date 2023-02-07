import { videos } from './videos'
import VideoPlayer from '../VideoPlayer'

import styles from './styles.module.css'


function VideosContainer() {
    return (
        <section className={styles.sliderContainer}>
            {videos.map((video) => (
                <div className={styles.slider}>
                    <VideoPlayer
                        key={video.id}
                        video_src={`http://localhost:5173${video.src}`}
                    />
                </div>
            ))}
        </section >
    )
}

export default VideosContainer