import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
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
            <Stack
              direction="row"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img src="../images/email.png" />
              <img src="/public/images/Group.png" />
            </Stack>
            <Stack>
              <Typography
                variant="h6"
                color="#9ED5E3"
                sx={{
                  fontWeight: " 800 !important",
                  fontSize: "29px",
                  textAlign: "center",
                }}
              >
                Authenticate yourself
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >We´ve sent you a code on your  phone 
              ********456 please verify below.`</Typography>
            </Stack>
            <Stack direction="row" spacing={2} mt={1}>
              <TextField
                id="input-with-sx"
                variant="standard"
                sx={{
                  fontSize: "x-large !important",
                  textAlign: "center !important",
                }}
              />
              <TextField
                id="input-with-sx"
                variant="standard"
                sx={{
                  fontSize: "x-large !important",
                  textAlign: "center !important",
                }}
              />
              <TextField
                id="input-with-sx"
                variant="standard"
                sx={{
                  fontSize: "x-large !important",
                  textAlign: "center !important",
                }}
              />
              <TextField
                variant="standard"
                sx={{
                  fontSize: "x-large !important",
                  textAlign: "center !important",
                }}
              />
            </Stack>
            <Stack mt={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#9ED5E3 !important",
                  textDecoration: "none !important",
                }}
              >
                Varify
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
