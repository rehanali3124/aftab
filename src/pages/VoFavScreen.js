import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Divider, List, ListItem, Stack } from "@mui/material";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Imae from "../component/imae";
const VoFavScreen = () => {
  return (
    <>
      <Stack
        spacing={1}
        sx={{
          width: { xs: "85%", md: "70%" },
          margin: { xs: "5px", md: "auto" },
          padding: { xs: "15px", md: "18px" },
          display: { xs: "flex", md: "block" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
        }}
      >
        <Typography
          variant="h4"
          color="#C8C5C5"
          sx={{ fontSize: { xs: "18px", md: "34px" } }}
        >
          My Favourite
        </Typography>
        <Divider width="40%"></Divider>
      </Stack>

      <List>
        <ListItem>
          <Stack
            spacing={1}
            direction="row"
            sx={{
              width: { xs: "100%", md: "75%" },
              margin: { xs: "5px", md: "auto" },
              marginTop: { xs: "5px", md: "10px" },

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <HighlightOffIcon sx={{ color: "grey", cursor: "pointer" }} />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRclj_sXYIzdS2d96sSyzAL8J7aKQzu2N93dA&usqp=CAU"
                width="80"
              />
              <Stack>
                <Typography
                  variant="h5"
                  sx={{ fontSize: { xs: "0.8rem", md: "1.2rem !important" } }}
                >
                  I will be taking care of you child.
                </Typography>
                <Typography
                  variant="span"
                  sx={{ fontSize: "14px", color: "#C8C5C5" }}
                >
                  By : Jospeh
                </Typography>
              </Stack>
            </Stack>

            <Button
              variant="outlined"
              size="small"
              sx={{
                display: "flex",
                justifyContent: "center",
                width: { xs: "110px", md: "160" },
                
              }}
            >
              View gig
            </Button>
            {/* <RemoveRedEyeRoundedIcon
              sx={{ display: { xs: "block", md: "none" },display:"flex",justifyContent: "flex-end",}}
            /> */}
          </Stack>
        </ListItem>
        <ListItem>
          <Stack
            spacing={1}
            direction="row"
            sx={{
              width: { xs: "100%", md: "75%" },
              margin: { xs: "5px", md: "auto" },
              marginTop: { xs: "5px", md: "10px" },

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <HighlightOffIcon sx={{ color: "grey", cursor: "pointer" }} />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRclj_sXYIzdS2d96sSyzAL8J7aKQzu2N93dA&usqp=CAU"
                width="80"
              />
              <Stack>
                <Typography
                  variant="h5"
                  sx={{ fontSize: { xs: "0.8rem", md: "1.2rem !important" } }}
                >
                  I will be taking care of you child.
                </Typography>
                <Typography
                  variant="span"
                  sx={{ fontSize: "14px", color: "#C8C5C5" }}
                >
                  By : Jospeh
                </Typography>
              </Stack>
            </Stack>

            <Button
              variant="outlined"
              size="small"
              sx={{
                display: "flex",
                justifyContent: "center",
                width: { xs: "110px", md: "160" },
                
              }}
            >
              View gig
            </Button>
            {/* <RemoveRedEyeRoundedIcon
              sx={{ display: { xs: "block", md: "none" },display:"flex",justifyContent: "flex-end",}}
            /> */}
          </Stack>
        </ListItem>
        <ListItem>
          <Stack
            spacing={1}
            direction="row"
            sx={{
              width: { xs: "100%", md: "75%" },
              margin: { xs: "5px", md: "auto" },
              marginTop: { xs: "5px", md: "10px" },

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <HighlightOffIcon sx={{ color: "grey", cursor: "pointer" }} />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRclj_sXYIzdS2d96sSyzAL8J7aKQzu2N93dA&usqp=CAU"
                width="80"
              />
              <Stack>
                <Typography
                  variant="h5"
                  sx={{ fontSize: { xs: "0.8rem", md: "1.2rem !important" } }}
                >
                  I will be taking care of you child.
                </Typography>
                <Typography
                  variant="span"
                  sx={{ fontSize: "14px", color: "#C8C5C5" }}
                >
                  By : Jospeh
                </Typography>
              </Stack>
            </Stack>

            <Button
              variant="outlined"
              size="small"
              sx={{
                display: "flex",
                justifyContent: "center",
                width: { xs: "100px", md: "160" },
                
              }}
            >
              View gig
            </Button>
            {/* <RemoveRedEyeRoundedIcon
              sx={{ display: { xs: "block", md: "none" },display:"flex",justifyContent: "flex-end",}}
            /> */}
          </Stack>
        </ListItem>
        
      </List>

      <Stack
        spacing={1}
        sx={{
          width: { xs: "85%", md: "70%" },
          margin: { xs: "5px", md: "auto" },
          padding: { xs: "15px", md: "18px" },
          display: { xs: "flex", md: "block" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
        }}
      >
        <Typography
          variant="h4"
          color="#C8C5C5"
          sx={{ fontSize: { xs: "18px", md: "34px" } }}
        >
          My Vouchers
        </Typography>
        <Divider width="40%"></Divider>
      </Stack>
      <Imae />
    </>
  );
};

export default VoFavScreen;
