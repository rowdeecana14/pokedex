import styles from './HeroSection.module.css';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import FireTypeSrc from "../../assets/pokemon-types/fire.svg";
import FlyingTypeSrc from "../../assets/pokemon-types/flying.svg";
import CharizardSrc from "../../assets/charizard.png";

export default function HeroSection() {

  return (
    <div className={styles.heroSection} id="back-to-top-anchor">
      <Container maxWidth="lg" sx={{ marginTop: '10rem'}}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          direction={{ xs: 'column', md: 'row' }}
        >
          <Box>
            <Typography variant="h6" sx={{
              fontSize: '1.5rem',
              lineHeight: '135%',
              fontWeight: 700
            }}>
              #006
            </Typography >
            <Stack direction="row" spacing={1}>
              <Chip
                avatar={<img alt="Fire" src={FireTypeSrc} width={14} height={14} />}
                label="Fire" color="warning" sx={{
                  background: '#ff9900',
                }}
              />
              <Chip
                avatar={<img alt="Flying" src={FlyingTypeSrc} width={14} height={14} />}
                label="Flying" color="info" sx={{
                  background: '#89bdff',
                }}
              />
            </Stack>
            <Typography sx={{
              fontSize: '4rem',
              fontWeight: 700
            }}>
              CHARIZARD
            </Typography>

            <Typography variant="body1">
              Charizard se assemelha a um grande tradicional dragão europeu. Apesar da semelhança, Charizard é explicitamente um Pokémon dos tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma "Mega Charizard X"; No entanto, ele pode aprender ataques do tipo Dragão.
            </Typography >

            <Button variant="outlined" size="large" sx={{
              marginTop: "1.5rem",
              color: '#e14318',
              background: '#fff',
              fontWeight: 700,
              ":hover": {
                color: "#fff"
              }
            }}>More Details</Button>
          </Box>

          <Box className={styles.heroDivider}>
            <img style={{ marginTop: '1rem', marginBottom: '1rem' }} src={FireTypeSrc} alt='Fire' width={56} height={56} />
          </Box>

          <Box>
            <img
              src={CharizardSrc}
              width="488"
              height="528"
              alt="Imagem do Charizard"
              style={{
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
