import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import classes from "./PokemonCard.module.css";
import { FullPokemonType, PokemonSize } from "../../utils/types/PokemonTypes";
import { formatId } from "../../utils/helpers/formatId";
import { formatString } from "../../utils/helpers/formatString";
import PokemonTypes from "../pokemon-types/PokemonTypes";

export default function PokemonCard({
  pokemon,
  assets,
}: Readonly<{ pokemon: FullPokemonType; assets: any }>) {
  const size: PokemonSize = {
    size: "small",
    height: 12,
    width: 12,
  };

  const pokeball = new URL(`/src/assets/pokeball.svg`, import.meta.url).href;

  return (
    <Grid item xs={12} sm={6} lg={4} xl={3}>
      <Box
        className={classes.cardContainer}
        sx={{
          "&:hover": {
            borderColor: assets.color,
          },
        }}
      >
        <Box
          className={classes.cardOverlay}
          sx={{
            "&::after": {
              background: assets.color,
            },
          }}
        ></Box>
        <Grid container direction="row" marginY={"1rem"} marginLeft={"1rem"}>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "0.9rem",
                lineHeight: "135%",
                fontWeight: 700,
              }}
            >
              {formatId(pokemon?.id || 0)}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: "1.5rem",
                lineHeight: "135%",
                fontWeight: 700,
              }}
            >
              {formatString(pokemon?.name || "")}
            </Typography>

            <Stack
              width={"70%"}
              marginTop={"1rem"}
              direction="column"
              spacing={1}
            >
              <PokemonTypes
                key={`pokemon-${pokemon.id}`}
                types={pokemon.types}
                size={size}
              />
            </Stack>
          </Grid>
          <Grid item xs={6} marginBottom={"0.5rem"}>
            <div className={classes.cardImageBackground}>
              <img src={pokeball} alt="pokeball" />
            </div>
            <div className={classes.cardImagePokemon}>
              <img src={assets.pokemonImage} alt={pokemon.name} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
