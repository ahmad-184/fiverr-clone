import { useState, lazy, Suspense } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import Container from "../../../containers/Container";
import { ImagePoster } from "../../../components";

import { contentData, imageSourceData } from "./data";

const VideoModal = lazy(() => import("../../../components/VideoModal"));
const videoSellingProposition =
  "https://res.cloudinary.com/dnlnbcbt0/video/upload/v1691267251/videos/vmvv3czyk2ifedefkau7_ktjjry.mp4";

const SellingProposition = () => {
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();

  const handleOpenModal = () => setOpenModal((prev) => !prev);
  const handleCloseModal = () => setOpenModal((prev) => !prev);

  return (
    <section>
      <Container
        py={5}
        backgroundColor="#f1fdf7"
        display="flex"
        justifyContent="center"
        sx={{
          [theme.breakpoints.down("md")]: {
            my: 2,
          },
          [theme.breakpoints.up("md")]: {
            py: 7,
          },
          [theme.breakpoints.up("lg")]: {
            py: 11,
          },
        }}
      >
        <Grid
          container
          sx={{
            maxWidth: "1350px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              [theme.breakpoints.down("md")]: {
                mb: 6,
              },
              [theme.breakpoints.up("md")]: {
                pr: "11%",
              },
              [theme.breakpoints.up("lg")]: {
                pr: "14%",
              },
            }}
          >
            <Typography
              variant="h5"
              fontSize="28px"
              fontWeight="bold"
              color="grey.800"
              lineHeight="130%"
              mb={2.5}
              sx={{
                [theme.breakpoints.up("sm")]: {
                  fontSize: "32px",
                },
                [theme.breakpoints.up("md")]: {
                  mb: 3,
                },
              }}
            >
              The best part? Everything.
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              gap={2.3}
              sx={{
                [theme.breakpoints.up("md")]: {
                  gap: 3,
                },
              }}
            >
              {contentData.map((item, index) => (
                <Box key={index}>
                  <Box display="flex" gap={1}>
                    <CheckCircleOutlineRoundedIcon
                      sx={{ color: "grey.600", fontSize: "29px" }}
                    />
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="grey.800"
                      sx={{
                        [theme.breakpoints.up("sm")]: {
                          fontSize: "18px",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    fontSize="18px"
                    color="grey.700"
                    fontWeight="medium"
                  >
                    {item.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
            <ImagePoster
              image="https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_700,dpr_1.0/v1691273366/images/selling-proposition-still-1400-x1_eql3ei.png"
              imageSourceData={imageSourceData}
              handleOpenModal={handleCloseModal}
            />
          </Grid>
        </Grid>
        <Suspense>
          <VideoModal
            video={videoSellingProposition}
            open={openModal}
            handleClose={handleCloseModal}
          />
        </Suspense>
      </Container>
    </section>
  );
};

export default SellingProposition;
