import { FullPokemonType } from '../../utils/types/PokemonTypes';
import PokemonColors from "../../data/PokemonColors.json"

export const pokemonAssets = (pokemon: FullPokemonType) => {
    const firstType = pokemon.types.length > 0 ? pokemon.types[0].type.name : 'grass';

    const [{ color }] = PokemonColors.filter((type) => {
      return firstType === type.name;
    });

    const typeImage = new URL(
      `/src/assets/pokemon-types/${pokemon.name}.svg`,
      import.meta.url
    ).href;

    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`

    return {
      color,
      typeImage,
      pokemonImage
    };
  }