import React, { useRef, useState } from 'react'
import styles from './styles.module.css'

import video_src from '../../assets/Videos/1.mp4'



function VideoPlayer() {

    const [playing, setPlaying] = useState(true)
    const video = useRef<HTMLVideoElement>(null);


    const handlePlay = () => {
        if (!video.current) {
            return;
        }
        if (playing) {
            video.current.pause();
        } else {
            video.current.play();
        }
        setPlaying(!playing);
    };
    

    return (
        <div>
            <video
                className={styles.video}
                loop
                autoPlay
                muted
                controls={false}
                src={video_src}
                ref={video}
                onClick={handlePlay}
            />
            <i
                className={styles.player}
                style={{ opacity: playing ? 0 : 1 }}
            >
            </i>
        </div>
    )
}

export default VideoPlayer
