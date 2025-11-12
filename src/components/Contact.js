import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Send from "@material-ui/icons/Send";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "linear-gradient(135deg, #233 90%)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  card: {
    background: "#2b2b2b",
    borderRadius: "16px",
    padding: theme.spacing(5),
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    backdropFilter: "blur(8px)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
    },
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: theme.spacing(3),
    fontWeight: 600,
    letterSpacing: 1,
  },
  form: {
    width: "100%",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: theme.spacing(2),
    color: "#fff",
    backgroundColor: "tomato",
    borderColor: "tan",
    transition: "0.3s ease",
    "&:hover": {
      color: "#000",
      backgroundColor: "tan",
    },
  },
  field: {
    margin: theme.spacing(2, 0),
  },
  divider: {
    backgroundColor: "tomato",
    width: "2px",
    height: "auto",
    //margin: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  personalText: {
    color: "tan",
    textAlign: "left",
    lineHeight: 1.5,
    "& a": {
      color: "tomato",
      textDecoration: "none",
      "&:hover": { textDecoration: "underline" },
    },
  },
  mapContainer: {
    marginTop: "1.5rem",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 0 10px rgba(255,255,255,0.2)",
  },
  mapIframe: {
    border: 0,
    width: "100%",
    height: "200px",
  },
  ".MuiGrid-spacing-xs-4 > .MuiGrid-item": {
    margin: "16px",
}
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tomato",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tomato",
      },
    },
    ".MuiGrid-item": {
      margin: "16px",
    }
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    sender: "",
    message: "",
    appName: "About Me (alokkrsharma11)",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch(
        "https://spring-boot-mailer-service.onrender.com/api/sendMail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", sender: "", message: "", appName: "About Me (alokkrsharma11)" });
      } else {
        const errText = await response.text();
        setStatus(`❌ Failed to send: ${errText}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {/* LEFT PANEL */}
        <Grid item xs={12} md={5}>
          <Paper className={classes.card} elevation={3}>
            <Typography variant="h5" className={classes.heading}>
              Personal Details
            </Typography>
            <Typography variant="body1" className={classes.personalText}>
              <strong>Name:</strong> Alok Kumar Sharma<br />
              <strong>Email:</strong>{" "}
              <a href="mailto:alokkrsharma.in@gmail.com">alokkrsharma.in@gmail.com</a>
              <br />
              <strong>Phone:</strong> +91-8010624572<br />
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/alokkrsharma11"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/alokkrsharma11
              </a>
              <br />
              <strong>Location:</strong> Gurugram, India
            </Typography>
            {/* MAP */}
            <Box className={classes.mapContainer}>
              <iframe
                className={classes.mapIframe}
                title="Alok Sharma Location"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.610466981658!2d77.03473257508352!3d28.47216327575273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e90d47f92d%3A0x62b57eec6b3b05b!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1698775188183!5m2!1sen!2sin"
              ></iframe>
            </Box>
          </Paper>
        </Grid>

        {/* DIVIDER */}
        <Divider
          orientation="vertical"
          flexItem
          className={classes.divider}
          style={{ margin: "0 30px" }}
        />


        {/* RIGHT PANEL */}
        <Grid item xs={12} md={5}>
          <Paper className={classes.card} elevation={3}>
            <Typography variant="h5" className={classes.heading}>
              Hire or Contact Me
            </Typography>

            <form onSubmit={handleSubmit} className={classes.form}>
              <InputField
                name="name"
                fullWidth
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
              />
              <InputField
                name="sender"
                fullWidth
                label="Email"
                variant="outlined"
                className={classes.field}
                value={formData.sender}
                onChange={handleChange}
              />
              <InputField
                name="message"
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                minRows={4}
                className={classes.field}
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                endIcon={<Send />}
                className={classes.button}
              >
                Send Message
              </Button>
            </form>

            {status && (
              <Typography
                variant="body1"
                style={{
                  color: "tan",
                  marginTop: "1rem",
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                {status}
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;