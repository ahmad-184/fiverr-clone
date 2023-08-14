import { lazy, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { ImagePoster } from "../../../components";

const VideoModal = lazy(() => import("../../../components/VideoModal"));

const Slides = ({ item }) => {
  const [opneModal, setOpenModal] = useState(false);
  const theme = useTheme();

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <VideoModal
        open={opneModal}
        handleClose={handleCloseModal}
        video={item.video}
      />
      <Grid
        container
        gap={3}
        sx={{
          [theme.breakpoints.up("md")]: {
            gap: 0,
            alignItems: "center",
            justifyContent: "space-between",
          },
        }}
      >
        <Grid xs={12} sm={12} md={5.3} lg={4.5} xl={4.5}>
          <Box>
            <ImagePoster
              image={item.img}
              imageSourceData={item.image_sources}
              handleOpenModal={handleOpenModal}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6.2} lg={6.9} xl={6.8}>
          <Box
            sx={{
              userSelect: "none",
              [theme.breakpoints.up("md")]: {
                maxWidth: "90%",
              },
            }}
          >
            <Box
              mb={2}
              sx={{
                [theme.breakpoints.up("lg")]: {
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                },
              }}
            >
              <Typography
                variant="h4"
                fontSize={18}
                fontWeight="medium"
                color="grey.600"
                mb={0.5}
                sx={{
                  [theme.breakpoints.up("md")]: {
                    fontSize: "20px",
                  },
                }}
              >
                {item.text}
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  "& img": {
                    marginLeft: "-4px",
                  },
                  [theme.breakpoints.up("lg")]: {
                    marginLeft: 2.3,
                    "& img": {
                      marginLeft: "11px !important",
                    },
                    "&::before": {
                      content: "''",
                      position: "absolute",
                      height: "55%",
                      left: 0,
                      width: "1px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "#c5c6c9",
                    },
                  },
                }}
              >
                <img
                  style={{
                    height: "36px",
                    display: "block",
                  }}
                  src={item.companyLogo}
                  alt="testimonials companies"
                />
              </Box>
            </Box>
            <Typography
              variant="body1"
              color="#003912"
              fontWeight="medium"
              fontFamily="Domaine-Display"
              fontSize="25px"
              sx={{
                letterSpacing: "0.3px",
                [theme.breakpoints.up("lg")]: {
                  fontSize: "32px",
                  lineHeight: "44px",
                },
              }}
            >
              "{item.quote}"
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Slides;
