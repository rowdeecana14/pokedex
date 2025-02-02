import "./PokemonList.css";
import "../pagination/Pagination.css";

import PokemonCard from "../pokemon-card/PokemonCard";
import Loader from "../loader/Loader";
import {
  Box,
  Grid,
  Container,
  Typography,
  Pagination,
  Stack,
} from "@mui/material";
import { useState, useEffect } from "react";
import {
  FullPokemonType,
  InitialPokemonType,
} from "../../utils/types/PokemonTypes";
import { pokemonAssets } from "../../utils/helpers/pokemonAssets";
import { getPokemons, getPokemon } from "../../store/Api";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<FullPokemonType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const rowsPerPage = 40; 
  const pokedex = new URL(`/src/assets/pokedex.svg`, import.meta.url).href;

  const fetchData = async (page: number) => {
    setIsLoading(true);
    try {
      const offset = (page - 1) * rowsPerPage;
      const response = await getPokemons({
        offset: offset,
        limit: rowsPerPage,
      });

      if (response.success) {
        const promises = response.data.results.map(
          async (pokemon: InitialPokemonType) => await getPokemon(pokemon.name)
        );

        const pokemonsData = await Promise.all(promises);
        const pokemons: FullPokemonType[] = pokemonsData.map((pokemonData) => ({
          ...pokemonData.data,
        }));

        setPokemons(pokemons);
        setTotalPages(Math.ceil(response.data.count / rowsPerPage));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container maxWidth="lg" sx={{ marginTop: "6rem" }}>
          <Box marginBottom={6}>
            <Typography variant="h3" className="title">
              Filter P
              <i
                className="title-pokeball"
                style={{
                  backgroundImage: `url('${pokedex}')`,
                  backgroundRepeat: "no-repeat",
                }}
              ></i>
              kemons
            </Typography>
          </Box>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {pokemons.map((pokemon) => (
              <PokemonCard
                key={`p-${pokemon.id}`}
                pokemon={pokemon}
                assets={pokemonAssets(pokemon)}
              />
            ))}
          </Grid>

          <Stack spacing={2} alignItems="center" mt={2} mb={2}>
            <Pagination
              className="custom-pagination"
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              boundaryCount={2} 
            />
          </Stack>
        </Container>
      )}
    </>
  );
}
