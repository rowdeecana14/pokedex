export async function getPokemons() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=500"
    );
    const data = await response.json();

    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
}

export async function getPokemon(name: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();

    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
}

export async function getRamdomPokemons(count: number = 20) {
  try {
    const totalPokemon = 898;
    const randomIds = new Set();

    while (randomIds.size < count) {
      const randomId = Math.floor(Math.random() * totalPokemon) + 1;
      randomIds.add(randomId);
    }

    const pokemonPromises = Array.from(randomIds).map((id) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>
        response.json()
      )
    );

    const data = await Promise.all(pokemonPromises);

    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
}
