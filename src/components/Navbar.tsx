import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

const Navbar = () => {
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
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              color="inherit"
              href="#hero"
              sx={{
                mr: 1,
                fontSize: "0.9rem",
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              href="#about"
              sx={{
                mr: 1,
                fontSize: "0.9rem",
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              href="#experience"
              sx={{
                mr: 1,
                fontSize: "0.9rem",
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              Experience
            </Button>
            <Button
              color="inherit"
              href="#projects"
              sx={{
                mr: 2,
                fontSize: "1rem",
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              Projects
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="#contact"
              sx={{ borderRadius: "50px", px: 3 }}
            >
              Let's Talk
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
