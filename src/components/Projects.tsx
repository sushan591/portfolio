import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import zipidImg from "../assets/zipid.png";
import aegixImg from "../assets/aegix.png";
import trackifyImg from "../assets/ecommerce.png"; // Reusing ecommerce as placeholder for Trackify

const projects = [
  {
    title: "ZipId",
    description:
      "A secure, user-friendly platform for Form I-9 verification. Streamlines employee validation with digital compliance tools.",
    tags: ["React", "Node.js", "MongoDB"],
    image: zipidImg,
  },
  {
    title: "Aegix",
    description:
      "Disaster reporting system integrated with AWS Lambda. Features real-time alerts and interactive map-based reporting.",
    tags: ["React", "AWS Lambda", "Node.js"],
    image: aegixImg,
  },
  {
    title: "Trackify",
    description:
      "Internal time-tracking system with robust backend and seamless frontend integration for workforce management.",
    tags: ["Express.js", "React", "PostgreSQL"],
    image: trackifyImg,
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 15 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ mb: 8, fontWeight: "bold", textAlign: "center" }}
        >
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "background.paper",
                  borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    borderColor: "primary.main",
                    "& .MuiCardMedia-root": {
                      transform: "scale(1.05)",
                    },
                  },
                  overflow: "hidden",
                }}
              >
                <Box sx={{ overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      transition: "transform 0.5s ease",
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 3 }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "text.secondary",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    size="small"
                    color="primary"
                    variant="text"
                    sx={{ ml: -1 }}
                  >
                    View Case Study
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
