import React, { MouseEvent } from 'react';
import { Fab, Box, useScrollTrigger, Zoom } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface ScrollTopProps {
  children: React.ReactElement;
  window?: () => Window;
}

export default function ScrollTopButton() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
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
