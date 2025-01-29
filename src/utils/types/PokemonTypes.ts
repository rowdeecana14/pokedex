export type InitialPokemonType = {
  name: string;
  url: string;
};
export type PokemonSubType = {
  name: string;
  url: string;
};

export type PokemonType = [
  {
    slot: number;
    type: PokemonSubType;
  }
];


export type PokemonSize = {
  width: number;
  height: number;
  size: "small" | "medium"
};

export type FullPokemonType = PokemonType & {
  id: number;
  name: string;
  types: PokemonType;
  weight: number;
  height: number;
  stats: [{ base_stat: number; stat: { name: string } }];
  // abilities?: [{ ability: { name: string, url: string }, is_hidden: boolean, slot: number }];
  // base_experience? : number,
  // cries?: {
  //   latest: string,
  //   legacy: string
  // },
  // forms?:  [{ name: string; url: string }];
  // game_indices?: [{ game_index: number, version: { name: string, url: string } }];
  // held_items?: any[],
  // is_default?: number,
  // location_area_encounters?: string,
  // moves?: any[],
  // order: number,
};
