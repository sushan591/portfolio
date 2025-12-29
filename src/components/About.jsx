import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Paper,
  Stack,
  Avatar,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import BuildIcon from "@mui/icons-material/Build";

const skills = [
  {
    category: "Languages & Frameworks",
    icon: <CodeIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    items: [
      "React (Hooks, Context)",
      "Redux",
      "Node.js (Express)",
      "JavaScript",
      "TypeScript",
      "jQuery",
    ],
  },
  {
    category: "Database",
    icon: <StorageIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "MS SQL Server"],
  },
  {
    category: "DevOps & Deployment",
    icon: <CloudQueueIcon sx={{ fontSize: 40, color: "#29b6f6" }} />,
    items: [
      "Docker",
      "AWS (Lambda, EC2, S3, CDK)",
      "Azure VM",
      "Route53",
      "ECS",
      "EventBridge",
    ],
  },
  {
    category: "Tools & Others",
    icon: <BuildIcon sx={{ fontSize: 40, color: "#ffa726" }} />,
    items: [
      "Git",
      "CI/CD",
      "Nginx",
      "Kafka",
      "Cypress",
      "Socket.io",
      "REST API",
      "Microservices",
    ],
  },
];

const About = () => {
  return (
    <Box id="about" sx={{ py: 15, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ mb: 8, fontWeight: "bold", textAlign: "center" }}
        >
          About Me
        </Typography>

        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -20,
                  left: -20,
                  width: "100%",
                  height: "100%",
                  border: "2px solid #00E676",
                  borderRadius: 4,
                  zIndex: 0,
                },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: "background.paper",
                  borderRadius: 4,
                  position: "relative",
                  zIndex: 1,
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "primary.main", fontWeight: 700 }}
                >
                  Full Stack Developer
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ color: "text.secondary", lineHeight: 1.8 }}
                >
                  Full Stack Developer with 8+ years of experience in Node.js
                  and React.js. Skilled in building scalable, production-grade
                  systems, optimizing performance, and integrating robust APIs.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.8 }}
                >
                  Strong collaborator with global teams, focused on clean code,
                  DevOps best practices, and continuous learning.
                </Typography>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
              Technical Skills
            </Typography>
            <Grid container spacing={3}>
              {skills.map((skill) => (
                <Grid item xs={12} sm={6} key={skill.category}>
                  <Paper
                    sx={{
                      p: 3,
                      height: "100%",
                      bgcolor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: 3,
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        bgcolor: "rgba(255,255,255,0.05)",
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{ mb: 2 }}
                    >
                      {skill.icon}
                      <Typography variant="h6" fontWeight={600}>
                        {skill.category}
                      </Typography>
                    </Stack>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {skill.items.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          size="small"
                          sx={{
                            bgcolor: "background.paper",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
