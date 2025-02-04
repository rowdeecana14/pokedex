import { useState, useEffect, useRef } from "react";
import { getPokemons, getPokemon } from "../../store/Api";
import { FullPokemonType, InitialPokemonType } from "../types/PokemonTypes";

export default function useInfiniteScroll() {
  const [pokemons, setPokemons] = useState<FullPokemonType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const rowsPerPage = 12;
  const pageRef = useRef(1);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchData = async (page: number) => {
    if (!hasMore) return;
    setIsFetchingMore(true);

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

        setPokemons((prev) => [...prev, ...pokemons]);
        if (pokemons.length < rowsPerPage) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsFetchingMore(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(pageRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isFetchingMore) {
          console.log("testing")
          pageRef.current += 1;
          fetchData(pageRef.current);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasMore, isFetchingMore]);

  return {
    pokemons,
    isLoading,
    isFetchingMore,
    observerRef,
  };
}
