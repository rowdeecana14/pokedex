import { Grid, Button, Container, Box, Typography, Stack } from "@mui/material";
import styles from "./HeroSection.module.css";
import { PokemonSubType } from "../../utils/types/PokemonTypes";
import { formatString } from "../../utils/helpers/formatString";

export default function Divider({ type, color }: Readonly<{ type: PokemonSubType, color: string }>) {
  const image = new URL(
    `/src/assets/pokemon-types/${type.name}.svg`,
    import.meta.url
  ).href;
  const name = formatString(type.name);

  return (
    <Grid item xs={12} md={1}>
      <Box
        sx={{
          alignItems: "center",
        }}
        className={styles.heroDivider}
      >
        <img
          style={{
          marginTop: "1rem",
            marginBottom: "1rem",
            zIndex: "-1 !important",
            filter: `drop-shadow(0px -1px 2px ${color})`
          }}
          width={"50px"}
          src={image}
          alt={name}
        />
      </Box>
    </Grid>
  );
}
