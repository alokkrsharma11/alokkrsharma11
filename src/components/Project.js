import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  Divider,
  Chip,
} from "@material-ui/core";
import { projects } from '../data/projects-data';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    minHeight: "100vh",
    padding: theme.spacing(1),
  },
  cardContainer: {
    background: "#2c2c2c",
    color: "white",
    margin: theme.spacing(2),
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    height: 180,
  },
  cardContent: {
    flexGrow: 1,
  },
  badge: {
    margin: theme.spacing(0.5),
    background: "tomato",
    color: "white",
    fontWeight: "bold",
  },
  sectionTitle: {
    margin: theme.spacing(3, 0, 2),
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "tan",
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  description: {
    marginBottom: theme.spacing(1),
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(1, 2),
  },
}));
/*
const groupedProjects = projects.reduce((acc, project) => {
  if (!acc[project.category]) acc[project.category] = [];
  acc[project.category].push(project);
  return acc;
}, {});
*/
const Project = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        My Projects
      </Typography>
      <Divider style={{ background: "tan", marginBottom: "2rem" }} />
      
          <Grid container justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={classes.cardContainer}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" className={classes.description}>
                      {project.description}
                    </Typography>
                    {/* Example badges */}
                    <Box>
                      {project.category && (
                        <Chip label={project.category} size="small" className={classes.badge} />
                      )}
                    </Box>
                  </CardContent>
                  <Box className={classes.actions}>
                    <Button size="small" color="primary" variant="contained">
                      Show More
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        
    </Box>
  );
};

export default Project;