import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Divider,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const experiences = [
  {
    company: "Outcode LLC",
    location: "Kathmandu",
    role: "Full Stack Developer",
    period: "Sept 2021 – Present",
    points: [
      "Maintained and refactored production systems built with MERN stack.",
      "Developed RESTful APIs and handled asynchronous data processing using Node.js & Express.",
      "Led integration of new frontend modules using React (Hooks, Context API).",
      "Collaborated with distributed teams and clients for requirement gathering and updates.",
      "Implemented CI/CD pipelines and Dockerized services for streamlined deployments.",
      "Optimized database schemas and queries in MongoDB and PostgreSQL for performance.",
      "Added third-party integrations in AWS Lambda (Node.js) for scalable microservices.",
    ],
  },
  {
    company: "Diagonal Technologies Pvt. Ltd",
    location: "Kathmandu",
    role: "Web Developer",
    period: "Mar 2021 – Sept 2021",
    points: [
      "Built modular microservices and REST APIs with Node.js and Express.",
      "Integrated APIs with responsive frontend apps using React.js.",
      "Used Docker for containerizing services and maintaining consistent environments.",
      "Worked closely with the UI/UX team for feature design and delivery.",
    ],
  },
  {
    company: "H. T. Solution Pvt. Ltd",
    location: "Kathmandu",
    role: "Web Developer",
    period: "Feb 2017 – Feb 2021",
    points: [
      "Led full-stack development for web platforms using PHP (Laravel) and JS.",
      "Managed client communications and delivery cycles with Agile practices.",
      "Conducted daily stand-ups, debugged backend issues, and optimized codebase.",
    ],
  },
];

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 15 }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ mb: 8, fontWeight: "bold", textAlign: "center" }}
        >
          Work Experience
        </Typography>

        <Stack spacing={0} sx={{ position: "relative" }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 20, md: "50%" },
              top: 0,
              bottom: 0,
              width: "2px",
              bgcolor: "rgba(255,255,255,0.1)",
              transform: { xs: "none", md: "translateX(-50%)" },
            }}
          />

          {experiences.map((exp, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                position: "relative",
                mb: 6,
              }}
            >
              {/* Timeline Dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 20, md: "50%" },
                  transform: "translateX(-50%)",
                  width: 40,
                  height: 40,
                  bgcolor: "background.default",
                  border: "2px solid #00E676",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  fontSize: 20,
                  color: "primary.main",
                }}
              >
                <WorkIcon fontSize="small" />
              </Box>

              {/* Content Card */}
              <Box
                sx={{
                  width: { xs: "calc(100% - 60px)", md: "45%" },
                  ml: { xs: 8, md: 0 },
                  mr: { xs: 0, md: index % 2 === 0 ? 0 : "auto" }, // Left for odd
                  textAlign: {
                    xs: "left",
                    md: index % 2 === 0 ? "left" : "right",
                  },
                  ...(index % 2 !== 0 && {
                    ml: { md: "auto" }, // Push to right for odd
                  }),
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    bgcolor: "background.paper",
                    borderRadius: 4,
                    border: "1px solid rgba(255,255,255,0.05)",
                    position: "relative",
                    "&:hover": {
                      borderColor: "primary.main",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    },
                    textAlign: "left", // Always left align text inside card
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    color="primary.main"
                  >
                    {exp.company}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "white", mb: 0.5 }}>
                    {exp.role}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {exp.period} | {exp.location}
                  </Typography>
                  <Divider
                    sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }}
                  />
                  <Stack spacing={1}>
                    {exp.points.map((point, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: "flex", alignItems: "start", gap: 1 }}
                      >
                        <span style={{ color: "#00E676", marginTop: "4px" }}>
                          •
                        </span>
                        {point}
                      </Typography>
                    ))}
                  </Stack>
                </Paper>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Experience;
