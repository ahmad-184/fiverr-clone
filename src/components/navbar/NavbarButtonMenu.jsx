import { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const BSItems = [
  {
    title: "Fiverr Pro",
    desc: "Top freelancers and professional business tools for any project",
  },
  {
    title: "Fiverr Certified",
    desc: "Your own branded marketplace of certified experts",
  },
  {
    title: "Fiverr Enterprise",
    desc: "SaaS to manage your freelance workforce and onboard additional talent",
  },
  { title: "Contact sales" },
];

const NavbarButtonMenu = ({ activeOnScroll }) => {
  const [bsMenuEl, setBsMenuEl] = useState(null);

  const isBsMenuOpen = Boolean(bsMenuEl);
  const handleOpenBsMenu = (event) => setBsMenuEl(event.currentTarget);
  const handleCloseBsMenu = () => setBsMenuEl(null);

  return (
    <Box
      display={{
        xs: "none",
        sm: "none",
        md: "block",
        lg: "block",
        xl: "block",
      }}
    >
      <Button
        id="bs-menu"
        aria-controls={isBsMenuOpen ? "bs-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isBsMenuOpen ? "true" : undefined}
        onClick={handleOpenBsMenu}
        sx={{
          color: activeOnScroll ? "grey.800" : "#fff",
          textTransform: "capitalize",
          fontSize: "1rem",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: !activeOnScroll
              ? "transparent !important"
              : "rgba(29, 191, 115, 0.04)",
          },
          "& .css-i4bv87-MuiSvgIcon-root": {
            transition: "0.2s transform ease",
            transform: isBsMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
          },
        }}
        endIcon={<KeyboardArrowDownIcon />}
        disableRipple
      >
        Business solutions
      </Button>
      <Menu
        id="bs-menu"
        MenuListProps={{
          "aria-labelledby": "bs-menu",
        }}
        anchorEl={bsMenuEl}
        open={isBsMenuOpen}
        onClose={handleCloseBsMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .css-1p9bt8o-MuiButtonBase-root-MuiMenuItem-root": {
            whiteSpace: "unset",
            width: "360px",
          },
        }}
      >
        {BSItems.map((item, index) => (
          <MenuItem onClick={handleCloseBsMenu} disableRipple key={index}>
            <Box display="flex" flexDirection="column" width="100%">
              <Typography variant="body1" fontWeight="bold" color="grey.800">
                {item.title}
              </Typography>
              {item.desc && (
                <Typography fontSize="14px" fontWeight="500" color="grey.700">
                  {item.desc}
                </Typography>
              )}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NavbarButtonMenu;
