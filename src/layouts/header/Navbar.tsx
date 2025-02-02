import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Logo from "../../assets/pokedex-v2.png";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

export default function Navbar() {
  
  return (
    <Container maxWidth="lg" id="header">
      <Toolbar disableGutters>
        <Box sx={{ mr: 1, flexGrow: 1, alignSelf: "flex-end" }}>
          <NavLink
            to="/"
            color="white"
          >
            <img src={Logo} alt="Pokemon Logo" height="55" />
          </NavLink>
        </Box>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search …"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Tooltip title="Advance Filters" placement="bottom">
          <NavLink
            to="/filter"
            style={{ color: 'white'}}

          >

            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <FilterAltIcon />
            </IconButton>
          </NavLink>
        </Tooltip>

        <Tooltip title="Favorite Pokémon" placement="bottom">
          <NavLink
            to="/favorite"
            style={{ color: 'white'}}
          >
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <FavoriteIcon />
            </IconButton>
          </NavLink>

        </Tooltip>

      </Toolbar>
    </Container>
  );
}
