import "./FetchLoader.css";
import { Box, Typography } from "@mui/material";

export default function FetchLoader() {
  return (
    <Box
      className="catch-ball-loader"
      sx={{
        height: "calc(100vh - 5.5rem)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Catching pokemons
          <span className="dot" style={{ marginLeft: "5px" }}>
            .
          </span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </Typography>
      </Box>
    </Box>
  );
}
