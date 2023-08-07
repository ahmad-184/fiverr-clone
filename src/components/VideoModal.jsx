import { Modal, Fade, Box, Backdrop, useTheme } from "@mui/material";

const VideoModal = ({ open, handleClose, video }) => {
  const theme = useTheme();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "850px",
            boxShadow: 24,
            lineHeight: "0",
            outline: "none",
            "& video": {
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              borderRadius: 1,
            },
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <video autoPlay controls preload="metadata" crossOrigin="anonymous">
            <source src={video} type="video/mp4" />
          </video>
        </Box>
      </Fade>
    </Modal>
  );
};

export default VideoModal;
