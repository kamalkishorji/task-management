import React from "react";
import { Box, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import CustomButton from "../button/index";

const ConfirmModal = ({ isOpen, handleCancel, handleConfirm }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "376px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <span className="delete-user-text">Do you want to delete?</span>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <CustomButton
                  handleButtonClick={handleConfirm}
                  title={"Confirm"}
                />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <CustomButton
                  className={"modal-cancel"}
                  isDelete={true}
                  handleButtonClick={handleCancel}
                  title={"Cancel"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
