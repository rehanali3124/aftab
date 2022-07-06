import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Badge, Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 250, md: 800 },
  height: { xs: 500 },
  overflow: { xs: "scroll", md: "hidden" },

  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

const PaymentModal = () => {
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
              sx={{ fontWeight: "900", fontSize: { xs: "24px", md: "40px" } }}
            >
              Add Payment details.
            </Typography>
            <Stack>
              <Typography
                variant="p"
                sx={{ color: "#BCBCBC", fontSize: { xs: 16, md: 18 } }}
              >
                Please add your account details below so that you
              </Typography>
              <Typography
                variant="p"
                sx={{ color: "#BCBCBC", fontSize: { xs: 16, md: 18 } }}
              >
                can further proceed.
              </Typography>
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }}>
              <Box
                sx={{
                  borderRight: "1px solid #BCBCBC",
                  width: { xs: "100%", md: "65%" },
                  padding: { xs: "10px", md: "20px" },
                }}
              >
                <Stack spacing={1}>
                  <Stack mt={2} spacing={1}>
                    <Typography variant="p" sx={{ fontWeight: "500" }}>
                      Name
                      <Typography
                        variant="span"
                        color="#BCBCBC"
                        sx={{ marginLeft: "10px" }}
                      >
                        ( on card)
                      </Typography>
                    </Typography>
                    <TextField
                      placeholder="John"
                      size="small"
                      sx={{
                        background: "#F1ECEC",

                        borderRadius: "5px",
                        border: "0px solid #BCBCBC",
                      }}
                    />
                  </Stack>
                  <Stack mt={2} spacing={1}>
                    <Typography variant="p" sx={{ fontWeight: "500" }}>
                      Card Number
                    </Typography>
                    <TextField
                      placeholder="4598000-1234"
                      size="small"
                      sx={{
                        background: "#F1ECEC",

                        borderRadius: "5px",
                        border: "0px solid #BCBCBC",
                      }}
                    />
                  </Stack>
                  <Stack mt={2} spacing={1}>
                    <Stack direction="row" spacing={10}>
                      <Typography variant="p" sx={{ fontWeight: "500" }}>
                        Expiration
                      </Typography>
                      <Typography variant="p" sx={{ fontWeight: "500" }}>
                        CVC
                      </Typography>
                    </Stack>
                    <Stack spacing={2} direction="row">
                      <TextField
                        placeholder="09"
                        size="small"
                        sx={{
                          background: "#F1ECEC",
                          width: "75px",
                          textAlign: "center",
                          borderRadius: "5px",
                          border: "0px solid #BCBCBC",
                        }}
                      />
                      <Typography
                        variant="p"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "30px",
                          color: "#BCBCBC",
                        }}
                      >
                        /
                      </Typography>
                      <TextField
                        placeholder="3"
                        size="small"
                        sx={{
                          background: "#F1ECEC",
                          textAlign: "center !important",
                          width: "75px",
                          borderRadius: "5px",
                          border: "0px solid #BCBCBC",
                        }}
                      />

                      <TextField
                        size="small"
                        sx={{
                          background: "#F1ECEC",
                          width: "auto",
                          textAlign: "center",
                          borderRadius: "5px",
                          border: "0px solid #BCBCBC",
                        }}
                      />
                    </Stack>
                  </Stack>

                  <Button
                    sx={{
                      backgroundColor: "#9ED5E3",
                      color: "white",
                      width: { xs: "90%", md: "45%" },
                      marginTop: "20px !important",
                    }}
                    variant="contained"
                    size="medium"
                  >
                    Request booking
                  </Button>
                </Stack>
              </Box>
              <Divider orientation={{ md: "vertically" }}></Divider>
              <Box sx={{ padding: "10px" }}>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ fontWeight: "500", fontSize: "18px" }}
                >
                  Order Summary
                </Typography>
                <Stack mt={4}>
                  <Stack direction="row" spacing={1}>
                    <img width="80" height="50" />
                    <Stack
                      direction="row"
                      spacing={10}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ fontSize: "14px" }}>
                        I will be taking care of you child.
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        <Badge
                          badgeContent={4}
                          color="primary"
                          sx={{ backgroundColor: "#F1ECEC" }}
                        ></Badge>
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Typography
                  variant="h6"
                  color="initial"
                  mt={4}
                  sx={{ fontWeight: "500", fontSize: "18px" }}
                >
                  Apply Voucher
                </Typography>
                <Stack direction="row" spacing={2} mt={1}>
                  <TextField
                    size="small"
                    sx={{
                      background: "#F1ECEC",
                      textAlign: "center !important",
                      width: { xs: "80%" },
                      borderRadius: "5px",
                      border: "0px solid #BCBCBC",
                    }}
                  />
                  <Button
                    sx={{
                      backgroundColor: "#9ED5E3",
                      color: "white",
                      width: { xs: "10%", md: "30%" },
                    }}
                    variant="contained"
                    size="small"
                  >
                    Apply
                  </Button>
                </Stack>
                <Stack spacing={1} mt={2} sx={{ width: "75%" }}>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "2px solid #F1ECEC",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ fontWeight: "500", fontSize: "18px" }}
                    >
                      Total hours
                    </Typography>
                    <Typography variant="span" color="#BCBCBC">
                      6
                    </Typography>
                  </Stack>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="p"
                      sx={{ fontWeight: "500", fontSize: "18px" }}
                    >
                      Subtotal
                    </Typography>
                    <Typography variant="span" color="#BCBCBC">
                      $ 6
                    </Typography>
                  </Stack>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="p"
                      sx={{ fontWeight: "500", fontSize: "18px" }}
                    >
                      Tax
                    </Typography>
                    <Typography variant="span" color="#BCBCBC">
                      $ 6
                    </Typography>
                  </Stack>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="p"
                      sx={{ fontWeight: "500", fontSize: "18px" }}
                    >
                      Total
                    </Typography>
                    <Typography variant="span" color="#BCBCBC">
                      $ 6
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PaymentModal;
