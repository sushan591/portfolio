import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Stack,
  Card,
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = React.useState(""); // "submitting" | "success" | "error" | ""

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // ----------------------------------------------------------------------
    // NOTE: The endpoint is now loaded from the environment variable VITE_FORMSPREE_ENDPOINT
    // defined in the .env file.
    // ----------------------------------------------------------------------
    const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Box id="contact" sx={{ py: 15 }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ mb: 8, fontWeight: "bold", textAlign: "center" }}
        >
          Get In Touch
        </Typography>
        <Card
          sx={{
            p: 6,
            bgcolor: "background.paper",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 4,
          }}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
                Let's Talk
              </Typography>
              <Typography
                color="text.secondary"
                paragraph
                sx={{ fontSize: "1.1rem", lineHeight: 1.7, mb: 4 }}
              >
                I'm currently available for freelance projects and full-time
                opportunities. If you have a project that needs some creative
                touch, let's chat.
              </Typography>
              <Box>
                <Typography
                  variant="overline"
                  color="text.secondary"
                  display="block"
                >
                  Contact Details
                </Typography>
                <Typography variant="body1" sx={{ color: "white", mb: 1 }}>
                  Thaiba, Lalitpur
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="tel:+9779849787330"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    display: "block",
                    mb: 1,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  +977-9849787330
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="mailto:sushan.shr10@gmail.com"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  sushan.shr10@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {status === "success" ? (
                <Stack
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: "100%" }}
                >
                  <Typography variant="h5" color="primary.main">
                    Message Sent!
                  </Typography>
                  <Typography color="text.secondary" align="center">
                    Thanks for reaching out. I'll get back to you soon.
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => setStatus("")}
                    sx={{ mt: 2 }}
                  >
                    Send Another
                  </Button>
                </Stack>
              ) : (
                <Stack spacing={3} component="form" onSubmit={handleSubmit}>
                  <TextField
                    name="name"
                    label="Name"
                    variant="filled"
                    fullWidth
                    required
                    value={formData.name}
                    onChange={handleChange}
                    InputProps={{
                      disableUnderline: true,
                      sx: { borderRadius: 2 },
                    }}
                  />
                  <TextField
                    name="email"
                    label="Email"
                    type="email"
                    variant="filled"
                    fullWidth
                    required
                    value={formData.email}
                    onChange={handleChange}
                    InputProps={{
                      disableUnderline: true,
                      sx: { borderRadius: 2 },
                    }}
                  />
                  <TextField
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    variant="filled"
                    fullWidth
                    required
                    value={formData.message}
                    onChange={handleChange}
                    InputProps={{
                      disableUnderline: true,
                      sx: { borderRadius: 2 },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={status === "submitting"}
                    sx={{ py: 1.5, fontSize: "1rem" }}
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                  {status === "error" && (
                    <Typography color="error" variant="body2" align="center">
                      Something went wrong. Please try again.
                    </Typography>
                  )}
                </Stack>
              )}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default Contact;
