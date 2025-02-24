import { pokemonAssets } from "../../utils/helpers/pokemonAssets";
import { FullPokemonType, PokemonSize } from "../../utils/types/PokemonTypes";
import { Grid, Button, Container, Box, Typography, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

import { formatString } from "../../utils/helpers/formatString";
import { formatId } from "../../utils/helpers/formatId";
import PokemonTypes from "../pokemon-types/PokemonTypes";
import Divider from "./Divider";

export default function PokemonSlide({
  pokemon,
}: Readonly<{ pokemon: FullPokemonType }>) {
  const pokeball = new URL(`/src/assets/pokeball.svg`, import.meta.url).href;

  const size: PokemonSize = {
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

            <NavLink to="/pokemon" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  marginTop: "2rem",
                  backgroundColor: "#facc15",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "2rem",
                  border: "2px solid transparent",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#eab308",
                    borderColor: "#facc15",
                    boxShadow: "0px 0px 15px 3px rgba(250, 204, 21, 0.7)",
                  },
                }}
              >
                Catch Me!
              </Button>
            </NavLink>
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
            overflow: "hidden", // Prevent blurred background overflow
          }}
        >
          {/* Blurred Background Image */}
          <img
            src={pokeball}
            alt="Pokeball"
            style={{
              position: "absolute",
              top: 0,
              left: "1rem",
              width: "100%",
              height: "100%",
              objectFit: "cover", // This is equivalent to backgroundSize: 'cover'
              objectPosition: "right center", // This is equivalent to backgroundPosition: 'center right'
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
                filter: `drop-shadow(0px -1px 2px ${
                  pokemonAssets(pokemon).color
                })`,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
