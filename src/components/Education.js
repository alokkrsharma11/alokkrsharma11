import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    minHeight: "100vh",
    padding: theme.spacing(3),
  },
  heading: {
    color: "tomato",
    padding: "2rem 0",
    textTransform: "uppercase",
    textAlign: "center",
  },
  card: {
    background: "#2b2b2b",
    color: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 24px rgba(0,0,0,0.5)",
    },
  },
  title: {
    fontWeight: "bold",
    color: "tan",
  },
  subText: {
    color: "#bbb",
    fontSize: "0.9rem",
  },
}));

const education = [
  {
    degree: "Master of Computer Applications (M.C.A)",
    institution: "IMS Noida, Gautam Buddha Technical University, India",
    year: "2008 – 2011",
    details: "Graduated with First Class Honors (75.7%). Specialized in Software Engineering, Data Structures, and Database Systems.",
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    institution: "Gurukul Kangri University, Haridwar, India",
    year: "2005 – 2008",
    details: "Graduated with First Class (75.5%). Specialized in Physics, Chemistry and Mathmatics subjects.",
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Uttarakhand State Board",
    year: "2004-2005",
    details: "Completed with distinction in Mathematics and overall percentage was 64.20%.",
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Uttarakhand State Board",
    year: "2002 – 2003",
    details: "Achieved excellent academic performance (overall 64.33%) in all core subjects and distinction in Arts.",
  },
];

const Education = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" className={classes.heading}>
        My Education
      </Typography>
      <Divider style={{ background: "tan", marginBottom: "2rem" }} />

      <Grid container justifyContent="center" spacing={3}>
        {education.map((edu, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" className={classes.title} gutterBottom>
                  {edu.degree}
                </Typography>
                <Typography variant="body2" className={classes.subText}>
                  {edu.institution}
                </Typography>
                <Typography variant="body2" className={classes.subText}>
                  {edu.year}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: "0.5rem", color: "#ddd" }}
                >
                  {edu.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;