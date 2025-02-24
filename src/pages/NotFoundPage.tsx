import { Container, Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  const pokeball = new URL(`/src/assets/pokeball.svg`, import.meta.url).href;

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "calc(100vh - 5.5rem)",
      }}
      
    >
      <Box
        sx={{
          width: "30%",
          height: "30%",
          background:
            `url('${pokeball}') no-repeat center center`,
          backgroundSize: "contain",
        }}
      />
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you're looking for doesn't seem to exist. Maybe try catching
        some Pokémon instead?
      </Typography>

      <Button
        component={NavLink}
        to="/"
        variant="contained"
        size="large"
        sx={{
          marginTop: "2rem",
          backgroundColor: "#facc15",
          color: "black",
          fontWeight: "bold",
          borderRadius: "2rem",
          border: "2px solid transparent",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#eab308",
            borderColor: "#facc15",
            boxShadow: "0px 0px 15px 3px rgba(250, 204, 21, 0.7)",
          },
        }}
      >
        Go Back Home
      </Button>
    </Container>
  );
}
