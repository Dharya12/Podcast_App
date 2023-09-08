import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/store/Store";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AspectRatio } from "@mui/joy";
import { useRef, useState } from "react";
import { IconButton, Slider, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';

/* eslint-disable  @typescript-eslint/no-explicit-any */
const PodCastDetails = () => {
    const [isPlay, setIsPlay] = useState(false);
    const [sound, updateSound] = useState(false);
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const selectData = useSelector((state: RootState) => state.Podcast.itemDetail);
    console.log("select Data is : ", selectData);
    console.log('audio ref is : ', audioRef);

    const AudioPlay = (): void => {
        setIsPlay(true);
        audioRef.current?.play();
    }

    const AudioPause = (): void => {
        setIsPlay(false)
        audioRef.current?.pause();
    }

    const handlerDuration = (): void => {
        setDuration(audioRef.current!.duration);
        setTime(audioRef.current!.currentTime);
        console.log("Current time is : ", time)
    }

    const handleChange = (e: any): void => {
        const newValue = (e.target.value / 100) * duration;
        audioRef.current!.currentTime = newValue;
        setTime(newValue);
    }

    const muteSound = (): void => {
        updateSound(true)
        audioRef.current!.muted = !audioRef.current?.muted;
    }

    const unMuteSound = (): void => {
        updateSound(false)
        audioRef.current!.muted = !audioRef.current?.muted
    }

    const forwardTime = (): void => {
        setTime(audioRef.current!.currentTime += 10);

    }
    const replayTime = (): void => {
        setTime(audioRef.current!.currentTime -= 10)
    }

    return (
        <Grid container sx={{ bgcolor: '#121212', display: 'flex', flexWrap: 'wrap' }}>
            
            <Grid xs={4} sx={{ width: 400, p: 2, bgcolor: '#090909' }}>
                <AspectRatio ratio={1}>
                    <img src={selectData[0]?.image}></img>
                </AspectRatio>
            </Grid>
            <Grid xs={8} sx={{ color: 'white', pl: 4, pt: 4, pb: 4, textAlign: 'justify' }}>
                <Typography variant="h4" sx={{ pb: 2 }}>{selectData[0].title}</Typography>
                <Typography>{selectData[0].description}</Typography>
            </Grid>

            <Grid container xs={12} bgcolor='#1a1a1a' sx={{ mt: 1, display: 'flex' }}>
                <audio
                    src={selectData[0].audioSrc}
                    ref={audioRef}
                    onTimeUpdate={handlerDuration}
                >
                </audio>

                <IconButton size="large" color="secondary" sx={{ backgroundColor: '' }}>
                    {((isPlay === false) ? (<PlayArrowIcon onClick={AudioPlay} />) : <PauseIcon onClick={AudioPause} />)}
                </IconButton>
                <Slider
                    value={(time / duration) * 100}
                    onChange={handleChange}
                    min={0}
                    max={100}
                    sx={{ m: 2, width: 320 }}
                    color="secondary"
                />
                <IconButton>
                    {(sound === false) ? <VolumeUpIcon color="secondary" onClick={muteSound} /> : <VolumeOffIcon color="secondary" onClick={unMuteSound} />}
                </IconButton>
                <IconButton onClick={forwardTime}
                    disabled={(audioRef.current?.currentTime === audioRef.current?.duration) ? true : false}

                >
                    <Forward10Icon color='secondary' />
                </IconButton>
                <IconButton onClick={replayTime}>
                    <Replay10Icon color='secondary' />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default PodCastDetails;