import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { pokemonAssets } from "../../utils/helpers/pokemonAssets";
import { FullPokemonType } from "../../utils/types/PokemonTypes";
import { Grid, Button, Container, Box, Typography, Stack } from "@mui/material";

import { formatString } from "../../utils/helpers/formatString";
import { formatId } from "../../utils/helpers/formatId";
import PokemonTypes from "../pokemon-types/PokemonTypes";
import Divider from "./Divider";

export default function Carousel({
  pokemons,
}: Readonly<{ pokemons: FullPokemonType[] }>) {
  const [isLoading, setIsLoading] = useState(true);

  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const size = {
    size: "medium",
    height: 14,
    width: 14,
  };

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <h3>loading</h3>
      ) : (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {pokemons.map((pokemon) => (
            <SwiperSlide key={`p-${pokemon.id}`}>
              <Container
                maxWidth="lg"
                sx={{
                  marginTop: {
                    xs: "5rem",
                    sm: "5rem",
                    md: "5rem",
                    lg: "5rem",
                  },
                }}
              >
                <Grid container spacing={2} alignItems="center">
                  {/* Left Box */}
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.5rem",
                          fontWeight: 700,
                        }}
                      >
                        {formatId(pokemon?.id || 0)}
                      </Typography>

                      <Stack
                        marginTop={"1rem"}
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <PokemonTypes
                          key={`pokemon-${pokemon.id}`}
                          types={pokemon.types}
                          size={size}
                        />
                      </Stack>

                      <Typography
                        sx={{
                          fontSize: "4rem",
                          fontWeight: 700,
                        }}
                      >
                        {formatString(pokemon?.name || "")}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{ zIndex: "1 !important" }}
                      >
                        Charizard se assemelha a um grande tradicional dragão
                        europeu. Apesar da semelhança, Charizard é
                        explicitamente um Pokémon dos tipos Fogo e Voador, e não
                        um tipo Dragão, exceto em sua forma "Mega Charizard X";
                        No entanto, ele pode aprender ataques do tipo Dragão.
                      </Typography>

                      <Button
                        variant="outlined"
                        size="large"
                        sx={{
                          marginTop: "1.5rem",
                          color: "#091143",
                          background: "#fff",
                          fontWeight: 700,
                          ":hover": {
                            color: "#fff",
                          },
                        }}
                      >
                        More Details
                      </Button>
                    </Box>
                  </Grid>

                  {/* Divider */}
                  <Divider
                    type={pokemon.types[0].type}
                    color={pokemonAssets(pokemon).color}
                  />

                  {/* Right Box */}
                  <Grid item xs={12} md={5}>
                    <Box
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={pokemonAssets(pokemon).pokemonImage}
                        className="slider-img"
                        alt={pokemon.name}
                        width="488"
                        height="600"
                        style={{
                          marginLeft: "1rem",
                          marginRight: "1rem",
                        filter: `drop-shadow(0px -1px 2px ${pokemonAssets(pokemon).color})`
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      )}
    </>
  );
}
