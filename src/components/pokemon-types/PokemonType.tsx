import Chip from "@mui/material/Chip";

import { PokemonSubType, PokemonSize } from "../../utils/types/PokemonTypes";
import { formatString } from "../../utils/helpers/formatString";
import PokemonColors from "../../data/PokemonColors.json";

export default function PokemonType({
  type,
  size,
}: Readonly<{ type: PokemonSubType; size: PokemonSize }>) {
  const [{ color }] = PokemonColors.filter((pokemonType) => {
    return type.name === pokemonType.name;
  });
  const image = new URL(
    `/src/assets/pokemon-types/${type.name}.svg`,
    import.meta.url
  ).href;
  const name = formatString(type.name);

  return (
    <Chip
      size={size.size}
      avatar={
        <img alt={name} src={image} width={size.width} height={size.height} />
      }
      label={name}
      sx={{
        color: "white",
        background: color,
      }}
    />
  );
}
