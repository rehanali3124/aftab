import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              variant="h6"
              color="#9ED5E3"
              sx={{
                fontWeight: " 800 !important",
                fontSize: "35px",
                textAlign: "center",
              }}
            >
              Sign Up to kati
            </Typography>

            <Stack spacing={1} sx={{ fontSize: "15px" }}>
              <OutlinedInput
               size="small"
                id="outlined-adornment-weight"
                placeholder="Name"
                endAdornment={
                  <InputAdornment position="end">
                    <PersonIcon />
                  </InputAdornment>
                }
               
              />
              <OutlinedInput
              type="password"
               size="small"
                id="outlined-adornment-weight"
                placeholder="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <LockOpenIcon />
                  </InputAdornment>
                }
                
              />
              <OutlinedInput
               size="small"
                id="outlined-adornment-weight"
                placeholder="Email Address"
                endAdornment={
                  <InputAdornment position="end">
                    <MailOutlineIcon />
                  </InputAdornment>
                }
               
              />
              <OutlinedInput

               size="small"
                id="outlined-adornment-weight"
                placeholder="Phone Num"
                endAdornment={
                  <InputAdornment position="end">
                    <PhoneAndroidIcon />
                  </InputAdornment>
                }
               
              />
              <Button
                variant="contained"
                sx={{ backgroundColor: "#9ED5E3 !important" }}
              >
                Continue
              </Button>
              <Divider
                sx={{ fontSize: "12px", margin: "13px 0 13px 0 !important" }}
              >
                OR
              </Divider>
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  fontSize: "12px",
                  fontWeight: "400",
                  textTransform: "none",
                }}
              >
                <Typography variant="p">
                  <FacebookIcon />
                </Typography>
                <Typography variant="p" sx={{ color: "grey !important" }}>
                  Countinue with facebook
                </Typography>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  fontSize: "12px",
                  fontWeight: "400",
                  textTransform: "none",
                }}
              >
                <Typography variant="p">
                  <GoogleIcon />
                </Typography>
                <Typography variant="p" sx={{ color: "grey !important" }}>
                  Countinue with google
                </Typography>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  fontSize: "12px",
                  fontWeight: "400",
                  textTransform: "none",
                }}
              >
                <Typography variant="p">
                  <AppleIcon />
                </Typography>
                <Typography variant="p" sx={{ color: "grey !important" }}>
                  Countinue with apple
                </Typography>
              </Button>
              <Typography
                variant="p"
                color="initial"
                sx={{
                  textAlign: "center",
                  fontSize: "15px",
                  fontWeight: "300",
                }}
              >
                already have an account?
                <Link to=""> Sign in</Link>
              </Typography>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
