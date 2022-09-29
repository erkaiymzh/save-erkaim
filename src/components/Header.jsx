import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InstagramIcon from "@mui/icons-material/Instagram";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, height: "40px" }}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "white",
          height: "40px",
        }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}>
          #Эркаядолжнажить #saveErkaim
          <div>
            <FavoriteBorderIcon
              style={{ color: "black", paddingTop: "10px" }}
            />
            <a
              href="https://instagram.com/save_erkaim?igshid=YmMyMTA2M2Y="
              target="_blank">
              <InstagramIcon style={{ color: "black", paddingTop: "10px" }} />
            </a>

            <HelpOutlineIcon style={{ color: "black", paddingTop: "10px" }} />
          </div>
        </Typography>
      </AppBar>
    </Box>
  );
}
