import React, { useState } from "react";
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
import ProjectShowMore from "./ProjectShowMore";


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
  name: {
    color: "tan",
    fontWeight: "bold",
    fontSize: "20px",
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  description: {
    marginBottom: theme.spacing(1),
    fontSize: "14px",
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
  const [open, setOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };
  
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
                    <Typography variant="h6"  className={classes.name} gutterBottom>
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
                    <Button size="small" color="primary" variant="contained" onClick={() => handleOpen(project)}>
                      Show More
                    </Button>
                  </Box>
                </Card>
                
              </Grid>
              
            ))}
          </Grid>
        
          {/* Single reusable modal */}
          {selectedProject && (
            <ProjectShowMore
              open={open}
              onClose={() => setOpen(false)}
              title={selectedProject.name}
              description={selectedProject.description}
              skills={selectedProject.skills}
              duration={selectedProject.duration}
              role={selectedProject.role}
              category={selectedProject.category}
              /*actions={
                <>
                  <Button onClick={() => setOpen(false)} color="error" variant="outlined">
                    Cancel
                  </Button>
                  <Button onClick={() => setOpen(false)} color="primary" variant="contained">
                    Ok
                  </Button>
                </>
              }*/
            />
            )}
    </Box>
    
  );
};

export default Project;