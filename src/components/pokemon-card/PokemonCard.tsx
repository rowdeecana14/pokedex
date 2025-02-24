import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
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

  const type = new URL(
    `/src/assets/pokemon-types/${pokemon.types[0].type.name}.svg`,
    import.meta.url
  ).href;

  return (
    <Grid item xs={12} sm={6} lg={4} xl={4}>
      <Card
        className={classes.cardContainer}
        sx={{
          "&:hover": {
            borderColor: assets.color,
          },
        }}
      >
        {/* Card Content */}
        <CardContent>
          <Box
            className={classes.cardOverlay}
            sx={{
              "&::after": {
                background: assets.color,
              },
            }}
          />
          <Grid container direction="row" marginY={"1rem"} marginLeft={"1rem"}>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                sx={{
                  color: "#ffff",
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
                  color: "#ffff",
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
                <img src={type} alt="attribute" />
              </div>
              <div className={classes.cardImagePokemon}>
                <img src={assets.pokemonImage} alt={pokemon.name} />
              </div>
            </Grid>
          </Grid>
        </CardContent>

        {/* Hover Button */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            marginBottom: "2rem",
            opacity: 0,
            transition: "opacity 0.5s ease-in 0.5s",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#facc15",
              color: "black",
              fontWeight: "bold",
              borderRadius: "2rem",
              border: "2px solid transparent",
              transition: "all 0.5s ease-in",
              "&:hover": {
                backgroundColor: "#eab308",
                borderColor: "#facc15",
                boxShadow: "0px 0px 15px 3px rgba(250, 204, 21, 0.7)",
              },
            }}
          >
            Catch Me!
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
