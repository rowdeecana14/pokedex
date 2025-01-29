import { pokemonAssets } from "../../utils/helpers/pokemonAssets";
import { FullPokemonType } from "../../utils/types/PokemonTypes";
import { Grid, Button, Container, Box, Typography, Stack } from "@mui/material";

import { formatString } from "../../utils/helpers/formatString";
import { formatId } from "../../utils/helpers/formatId";
import PokemonTypes from "../pokemon-types/PokemonTypes";
import Divider from "./Divider";

export default function PokemonSlide({
  pokemon,
}: Readonly<{ pokemon: FullPokemonType }>) {
  const size = {
    size: "medium",
    height: 14,
    width: 14,
  };

  const assets = pokemonAssets(pokemon);

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: {
          xs: "5rem",
          sm: "5rem",
          md: "5rem",
          lg: "5rem",
        },
      }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Left Box */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              {formatId(pokemon?.id || 0)}
            </Typography>

            <Stack
              marginTop={"1rem"}
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <PokemonTypes
                key={`pokemon-${pokemon.id}`}
                types={pokemon.types}
                size={size}
              />
            </Stack>

            <Typography
              sx={{
                fontSize: "4rem",
                fontWeight: 700,
              }}
            >
              {formatString(pokemon?.name || "")}
            </Typography>

            <Typography variant="body1" sx={{ zIndex: "1 !important" }}>
              Charizard se assemelha a um grande tradicional dragão europeu.
              Apesar da semelhança, Charizard é explicitamente um Pokémon dos
              tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma
              "Mega Charizard X"; No entanto, ele pode aprender ataques do tipo
              Dragão.
            </Typography>

            <Button
              variant="outlined"
              size="large"
              sx={{
                marginTop: "1.5rem",
                color: "#091143",
                background: "#fff",
                fontWeight: 700,
                ":hover": {
                  color: "#fff",
                },
              }}
            >
              More Details
            </Button>
          </Box>
        </Grid>

        {/* Divider */}
        <Divider type={pokemon.types[0].type} color={assets.color} />

        {/* Right Box */}
        <Grid
  item
  xs={12}
  md={5}
  sx={{
    position: "relative", // Establish relative positioning for layering
    overflow: "hidden",   // Prevent blurred background overflow
  }}
>
  {/* Blurred Background Image */}
  <Box
    sx={{
        position: "absolute",
        top: 0,
        left: "1rem",
        width: "100%",
        height: "100%",
        backgroundImage: `url(../../src/assets/pokeball.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center right", 
        opacity: 0.1,
        zIndex: -1, 
    }}
  />

  {/* Foreground Content */}
  <Box
    sx={{
      textAlign: "center",
      position: "relative",
    }}
  >
    <img
      src={assets.pokemonImage}
      className="slider-img"
      alt={pokemon.name}
      width="488"
      height="600"
      style={{
        marginLeft: "1rem",
        marginRight: "1rem",
        filter: `drop-shadow(0px -1px 2px ${pokemonAssets(pokemon).color})`,
      }}
    />
  </Box>
</Grid>

      </Grid>
    </Container>
  );
}
