import { Box } from "@mui/material";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const ImagePoster = ({ handleOpenModal, imageSourceData, image }) => {
  return (
    <Box
      width="100%"
      position="relative"
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
        "& img": {
          width: "100%",
          objectFit: "cover",
          height: "100%",
        },
      }}
      onClick={handleOpenModal}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        p={1.3}
        lineHeight={0}
        backgroundColor="#212121ba"
        borderRadius="50%"
        sx={{
          transform: "translate(-50%,-50%)",
        }}
      >
        <PlayArrowRoundedIcon sx={{ color: "#fff", fontSize: "60px" }} />
      </Box>
      <picture>
        {imageSourceData.map((item, index) => (
          <source
            media={`(min-width:${item.width})`}
            srcSet={item.url}
            key={index}
          />
        ))}

        <img
          style={{ borderRadius: "4px" }}
          alt="Video teaser image"
          src={image}
          loading="lazy"
        />
      </picture>
    </Box>
  );
};

export default ImagePoster;
