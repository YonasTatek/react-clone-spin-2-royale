import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EventNoteIcon from "@mui/icons-material/EventNote";

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#201BAC" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            style={{ fontWeight: "bold" }}
          >
            0:54 Spin 2 Win Royale
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <MonetizationOnIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <EventNoteIcon />
            </IconButton>
            <Button
              size="small"
              variant="contained"
              style={{ backgroundColor: "#D7E311", color: "#110D8B" }}
            >
              #69126
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
