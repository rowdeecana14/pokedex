import { useState, useEffect } from 'react';
import { PokemonType as PType, PokemonSize } from '../../utils/types/PokemonTypes';
import PokemonType  from './PokemonType';

export default function PokemonTypes({ types, size }: Readonly<{ types: PType, size: PokemonSize }>) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  });

  return (
    <>
      {
        isLoading ? <h2>Loading</h2>
          : (
            <>
              {
                types.map((type, index) => (
                  <PokemonType key={`t-${type.type.name}-${index}`} type={type.type} size={size} />
                ))
              }
            </>
          )
      }
    </>
  );
}