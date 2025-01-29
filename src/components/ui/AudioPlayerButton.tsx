import { useState } from 'react';
import ReactPlayer from 'react-player'
import { Fab } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';


export default function AudioPlayerButton() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
    <ReactPlayer
        url='https://www.youtube.com/watch?v=YMEblRM4pGc'
        playing={isPlaying}
        controls={false}
        width='0px'
        height='0px'
        loop={true}
      />
      <Fab
        size="small"
        color={isPlaying ? 'error': 'primary'}
        aria-label={isPlaying ? 'pause' : 'play'}
        onClick={handleTogglePlay}
        style={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </Fab>
    </>
  );
}