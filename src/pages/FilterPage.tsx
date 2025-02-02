import PokemonList from "../components/pokemon-list/PokemonList";
import { Container } from "@mui/material";

export default function FilterPage() {
  return (
    <Container sx={{ marginBottom: "5rem" }}>
      <PokemonList />
    </Container>
  );
}
