import React, { useState, useEffect } from "react";
import { Typography, Stack, Grid, Box, Alert, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";

const URL = import.meta.env.VITE_URL;

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const styles = (theme) => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important",
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const formData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      message: data.get("message"),
    };

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setAlert({
        severity: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlert({
        severity: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear form inputs on successful email submission
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        setAlert({
          severity: "success",
          message: "Email sent successfully!",
        });
      } else {
        setAlert({
          severity: "error",
          message: "Failed to send email. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({
        severity: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setAlert(null);
      }, 5000);
    }
  };

  const handleCloseAlert = () => {
    setAlert(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [alert]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Stack
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-mirror="true"
      direction="column"
      id="contact-me"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        borderRadius: "5px",
        marginBottom: "50px",
      }}
    >
      <Stack
        style={{ width: "100%", padding: "20px" }}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          color="initial"
          fontWeight={500}
          fontFamily={"Poppins"}
          sx={{ marginTop: "20px", textDecoration: "underline" }}
        >
          Contact Me
        </Typography>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  sx={{
                    "& label.Mui-focused": {
                      color: "#d5c455",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#d5c455",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  sx={{
                    "& label.Mui-focused": {
                      color: "#d5c455",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#d5c455",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{
                    "& label.Mui-focused": {
                      color: "#d5c455",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#d5c455",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  name="message"
                  label="Message"
                  type="text"
                  id="message"
                  autoComplete="message"
                  sx={{
                    "& label.Mui-focused": {
                      color: "#d5c455",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#d5c455",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="text"
              color="primary"
              loading={loading}
              sx={{
                textAlign: "left",
                backgroundColor: "#d5c455",
                color: "white",
                border: "2px solid #d5c455 !important",
                height: "50px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#8dc63f",
                  border: "2px solid #8dc63f !important",
                },
              }}
            >
              Submit
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Stack>
      {alert && (
        <Alert
          severity={alert.severity}
          onClose={handleCloseAlert}
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          {alert.message}
        </Alert>
      )}
    </Stack>
  );
};

export default ContactMe;
