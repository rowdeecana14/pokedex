import { MouseEvent } from 'react';
import { Fab, Box, useScrollTrigger, Zoom } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function ScrollTopButton() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        sx={{ 
          position: 'fixed', 
          bottom: 70, 
          right: 16,
        }}
      >
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}
