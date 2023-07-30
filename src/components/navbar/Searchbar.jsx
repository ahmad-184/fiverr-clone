import { Box, Button, InputBase, useMediaQuery, useTheme } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Searchbar = ({ activeOnScroll }) => {
  const theme = useTheme();
  const screen_md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      width="100%"
      border="1px solid gray"
      display="flex"
      overflow="hidden"
      alignItems="stretch"
      borderRadius={1}
      sx={{
        display: {
          xs: "none",
          sm: "flex",
          md: "flex",
          lg: "flex",
          xl: "flex",
        },
        visibility: activeOnScroll ? "visible" : "hidden",
        opacity: activeOnScroll ? "1" : "0",
        transition: "opacity .2s ease",
        flexGrow: "1",
      }}
    >
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit form");
        }}
        style={{
          display: "flex",
          width: "100%",
          gap: 5,
        }}
      >
        <InputBase
          placeholder={
            screen_md ? "Find Services" : "What service are looking for today"
          }
          type="search"
          sx={{
            fontSize: "16px",
            color: "black",
            p: "4px 10px",
            flexGrow: "1",
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0",
            minWidth: "45px",
            backgroundColor: "black",
            padding: "0",
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
          }}
        >
          <SearchRoundedIcon sx={{ fontSize: "22px", color: "#fff" }} />
        </Button>
      </form>
    </Box>
  );
};

export default Searchbar;
