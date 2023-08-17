import { ListItemButton, ListItemText } from "@mui/material";

const DropdownItem = ({ text, ...props }) => {
  return (
    <ListItemButton disableRipple>
      <ListItemText primary={text} {...props} />
    </ListItemButton>
  );
};

export default DropdownItem;
