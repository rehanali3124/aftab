import {
  AppBar,
  Icon,
  Toolbar,
  Typography,
  styled,
  Input,
  Box,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import React from "react";
import { Mail, } from "@mui/icons-material";
import NotificationsIcon from '@mui/icons-material/Notifications';
const Navbar = () => {
  const Styledbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:"20px"
  }));

  return (
    <>
      <AppBar position="static">
        <Styledbar>
          <Icon sx={{ display: { xs: "block", sm: "none" } }}>
            <PetsIcon />
          </Icon>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            LosAgel
          </Typography>
          <Search>
            <InputBase placeholder="search.." />
          </Search>
          <Icons>
            
            <Badge badgeContent={4} color="error">
              <Mail  />
            </Badge>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.flhe3-2.fna.fbcdn.net/v/t39.30808-6/269964888_1006956870162340_4846915202112324744_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=-TPIC3TIJTEAX8F_ie4&tn=mo1Pe2oLgWb4Zhe1&_nc_ht=scontent.flhe3-2.fna&oh=00_AT-1QnzGXo8PmvrvZxnv2-DVSlUZ8TW5jcatXKOPUzArtw&oe=62A2733D"
            />
          </Icons>
        </Styledbar>
      </AppBar>
    </>
  );
};

export default Navbar;
