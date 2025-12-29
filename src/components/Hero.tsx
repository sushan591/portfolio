import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  keyframes,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import heroBg from "../assets/hero_bg.png";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        backgroundImage: `linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.6)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "150px",
          background: "linear-gradient(to top, #0A0A0A, transparent)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="flex-start" sx={{ maxWidth: "800px" }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "3rem", md: "5rem" },
              lineHeight: 1.1,
              background: "linear-gradient(45deg, #FFFFFF 30%, #b3b3b3 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span style={{ color: "#00E676", WebkitTextFillColor: "#00E676" }}>
              Sushan Shrestha
            </span>{" "}
            <br />
            Full Stack Developer
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: "600px", lineHeight: 1.6 }}
          >
            Building scalable, production-grade systems with React and Node.js.
            Focused on clean code, performance optimization, and robust API
            integration.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="#projects"
              sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#contact"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                borderColor: "rgba(255,255,255,0.2)",
                color: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          animation: `${float} 2s infinite ease-in-out`,
          color: "rgba(255,255,255,0.5)",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ mb: 1, letterSpacing: 2 }}>
          SCROLL
        </Typography>
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
};

export default Hero;
