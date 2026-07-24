import {
  Avatar,
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Paper,
  Stack,
} from "@mui/material";
import profileImg from "../assets/sushan-img.jpg";
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
          <Grid size={{ xs: 12, md: 5 }}>
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
                <Stack
                  direction="row"
                  spacing={2.5}
                  alignItems="center"
                  sx={{ mb: 3 }}
                >
                  <Avatar
                    src={profileImg}
                    alt="Sushan Shrestha"
                    sx={{
                      width: 96,
                      height: 96,
                      border: "3px solid",
                      borderColor: "primary.main",
                    }}
                  />
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      Sushan Shrestha
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      Full Stack Software Engineer
                    </Typography>
                  </Box>
                </Stack>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ color: "text.secondary", lineHeight: 1.8 }}
                >
                  I'm Sushan, a full stack developer from Lalitpur, Nepal,
                  with 9+ years of experience. Since 2021 I've been at
                  Outcode, building MERN-stack products — REST APIs in Node.js
                  and Express, React frontends, and serverless microservices
                  on AWS Lambda.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.8 }}
                >
                  Before that I built web platforms with Laravel and led
                  client delivery cycles end to end. Along the way I picked up
                  habits I've kept: Docker-first deployments, CI/CD for
                  everything, and database schemas tuned before they hurt.
                </Typography>
              </Paper>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
              Technical Skills
            </Typography>
            <Grid container spacing={3}>
              {skills.map((skill) => (
                <Grid size={{ xs: 12, sm: 6 }} key={skill.category}>
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
