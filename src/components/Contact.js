import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "#fff",
    backgroundColor: "tomato",
    borderColor: "tan",
    "&:hover": {
      color: "#000",
      backgroundColor: "tan",
    },
  },
  field: {
    margin: "1rem 0rem",
  },
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
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    sender: "",
    message: "",
    appName: ""
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, appName: "About Me (alokkrsharma11)", [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://spring-boot-mailer-service.onrender.com/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", sender: "", message: "" });
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
      <Grid container justifyContent="center">
        <Box component="form" className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>

          <InputField
            name="name"
            fullWidth
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
            value={formData.name}
            onChange={handleChange}
          />

          <InputField
            name="sender"
            fullWidth
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
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
            inputProps={{ className: classes.input }}
            value={formData.message}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="outlined"
            fullWidth
            endIcon={<Send />}
            className={classes.button}
          >
            Contact Me
          </Button>

          {status && (
            <Typography
              variant="body1"
              style={{ color: "tan", marginTop: "1rem", textAlign: "center" }}
            >
              {status}
            </Typography>
          )}
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;