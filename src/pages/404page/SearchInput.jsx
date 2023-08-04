import { Box, Button, InputBase } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchInput = () => {
  return (
    <Box
      width="100%"
      display="flex"
      overflow="hidden"
      alignItems="stretch"
      borderRadius={2}
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
        }}
      >
        <InputBase
          placeholder="Search for..."
          type="search"
          sx={{
            fontSize: "16px",
            color: "black",
            p: "6px 10px",
            flexGrow: "1",
            fontWeight: "medium",
            backgroundColor: "white",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0",
            minWidth: "45px",
            padding: "0",
          }}
        >
          <SearchRoundedIcon sx={{ fontSize: "22px", color: "#fff" }} />
        </Button>
      </form>
    </Box>
  );
};

export default SearchInput;
