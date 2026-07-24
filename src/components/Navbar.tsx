import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import { LINKS } from "../links";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(10, 10, 10, 0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 80 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              background: "linear-gradient(45deg, #FFFFFF 30%, #b3b3b3 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sushan.
          </Typography>

          {/* Desktop nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.href}
                color="inherit"
                href={item.href}
                sx={{
                  mr: 1,
                  fontSize: "0.9rem",
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {item.label}
              </Button>
            ))}
            <IconButton
              component="a"
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{
                mr: 2,
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <Button
              variant="outlined"
              href={LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DescriptionIcon />}
              sx={{
                borderRadius: "50px",
                px: 3,
                borderColor: "rgba(255,255,255,0.2)",
                color: "white",
                "&:hover": {
                  borderColor: "primary.main",
                  color: "primary.main",
                },
              }}
            >
              Resume
            </Button>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            bgcolor: "background.default",
            borderLeft: "1px solid rgba(255,255,255,0.05)",
          },
        }}
      >
        <List sx={{ pt: 4 }}>
          {navItems.map((item) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href={LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText
                primary="Resume"
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Stack direction="row" spacing={1} sx={{ px: 2, mt: 2 }}>
          <IconButton
            component="a"
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            sx={{ color: "text.secondary" }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{ color: "text.secondary" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
