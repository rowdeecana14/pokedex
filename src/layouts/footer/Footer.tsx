import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <Box
      sx={{
        color: "#fff",
        width: "100%", 
        borderTop: "1px solid #383e60",
        position: "relative",
        bottom: 0,
      }}
    >
      <Container maxWidth="lg" sx={{ width: "100%" }}>
        {/* Full width container */}
        <Box
          sx={{
            display: {
              xs: "block", // Stack items vertically on mobile
              sm: "flex", // Align items horizontally on larger screens
            },
            justifyContent: "space-between",
            alignItems: "center", // Center items vertically
            width: "100%", // Full width for the footer container
            pt: 2,
          }}
        >
          {/* Left side of the footer with text */}
          <Stack
            direction="column"
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            <Typography variant="caption" display="block">
              Image rights for Nintendo & The Pokémon Company.
            </Typography>
            <Typography variant="caption" display="block">
              Data taken from API - pokeapi.co.
            </Typography>
            <Typography variant="caption" display="block">
              Copyright © rDev {new Date().getFullYear()}
            </Typography>
          </Stack>

          {/* Right side of the footer with social media icons */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: { xs: "1rem" }, // Add margin on mobile
              justifyContent: { xs: "center" }, // Center icons on mobile
            }}
          >
            <IconButton
              color="inherit"
              href="https://github.com/rowdeecana14"
              target="_blank"
              aria-label="GitHub"
              sx={{ alignSelf: "center" }}
            >
              <GitHubIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/rowdeec/"
              target="_blank"
              aria-label="Facebook"
              sx={{ alignSelf: "center" }}
            >
              <FacebookIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/rudy-ca%C3%B1a-446b5a248/"
              target="_blank"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center" }}
            >
              <LinkedInIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
