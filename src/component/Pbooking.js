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
  width: {xs:276,md:500},

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
              variant="h4"
              color="#9ED5E3"
              sx={{ fontWeight: "900", fontSize:{xs:"24px" ,md:"40px"} }}
            >
              Proceed the booking.
            </Typography>
            <Stack>
            <Typography variant="p"  sx={{  color:"#BCBCBC",fontSize:{xs:16,md:18}}}>
              Answer the questions below and briefly describe 
            </Typography>
            <Typography variant="p"  sx={{  color:"#BCBCBC",fontSize:{xs:16,md:18}}}>
            the service you
              want.
            </Typography>
            </Stack>
            

            <Stack spacing={1}>
              <Stack mt={2} spacing={1}>
                <Typography
                  variant="p"
                  
                  sx={{ fontWeight: "500" }}
                >
                  How old is your child?
                </Typography>
                <TextField
                  placeholder="Answer"
                  size="small"
                  sx={{
                    background: "#F1ECEC",
                    width: "75%",

                    borderRadius: "5px",
                    border: "0px solid #BCBCBC",
                  }}
                />
              </Stack>
              <Stack mt={2} spacing={1}>
                <Typography
                  variant="p"
                  
                  sx={{ fontWeight: "500" }}
                >
                  Does he/she go to school?
                </Typography>
                <TextField
                  placeholder="Answer"
                  size="small"
                  sx={{
                    background: "#F1ECEC",
                    width: "75%",

                    borderRadius: "5px",
                    border: "0px solid #BCBCBC",
                  }}
                />
              </Stack>
              <Stack mt={2} spacing={1}>
                <Typography
                  variant="p"
                  
                  sx={{ fontWeight: "500" }}
                >
                  Does he talk?
                </Typography>
                <TextField
                  placeholder="Answer"
                  size="small"
                  sx={{
                    background: "#F1ECEC",
                    width: "75%",

                    borderRadius: "5px",
                    border: "0px solid #BCBCBC",
                  }}
                />
              </Stack>
              <Stack mt={2} spacing={1}>
                <Typography
                  variant="p"
                  
                  sx={{ fontWeight: "500" }}
                >
                 Briefly Describe <Typography variant="span" color="#BCBCBC">( what are you expecting from the service provider)</Typography>
                </Typography>

                <TextField
                  sx={{
                    background: "#F1ECEC",
                    color:"#F1ECEC",
                    borderRadius: "5px",
                    border: "0px solid #BCBCBC",
                  }}
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  placeholder="Briefly describe here."
                />
              </Stack>
              <Button sx={{backgroundColor:"#9ED5E3",color:"white",width:{xs:"70%",md:"35%"}}} variant="contained" size="medium">Request booking</Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
