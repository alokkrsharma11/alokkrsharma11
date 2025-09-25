import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Divider,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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
  sectionTitle: {
    margin: theme.spacing(2, 0),
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "tan",
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
  skillName: {
    fontWeight: "bold",
    color: "tan",
  },
  progress: {
    height: "8px",
    borderRadius: "4px",
    marginTop: theme.spacing(1),
    backgroundColor: "#444",
  },
  tableContainer: {
    background: "#2b2b2b",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    marginTop: theme.spacing(4),
  },
  tableHeader: {
    background: "#444",
  },
  tableCell: {
    color: "tan",
    fontWeight: "bold",
  },
  tabRoot: {
    color: "tan",
    fontWeight: "bold",
  },
}));

// ✅ Example skills data
const skills = [
  { category: "Programming Languages", name: "Java", level: 90 },
  { category: "Programming Languages", name: "JavaScript", level: 85 },
  { category: "Programming Languages", name: "Python", level: 70 },
  { category: "Frameworks", name: "Spring Boot", level: 80 },
  { category: "Frameworks", name: "React.js", level: 85 },
  { category: "Frameworks", name: "Node.js", level: 75 },
  { category: "Databases", name: "MySQL", level: 85 },
  { category: "Databases", name: "MongoDB", level: 80 },
  { category: "Databases", name: "PostgreSQL", level: 70 },
  { category: "Cloud & DevOps", name: "AWS", level: 80 },
  { category: "Cloud & DevOps", name: "Azure", level: 70 },
  { category: "Cloud & DevOps", name: "Docker / Kubernetes", level: 65 },
];

// Group skills by category for card view
const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});

const Skills = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" className={classes.heading}>
        My Skillset
      </Typography>
      <Divider style={{ background: "tan", marginBottom: "2rem" }} />

      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor="secondary"
        centered
      >
        <Tab label="Card View" className={classes.tabRoot} />
        <Tab label="Table View" className={classes.tabRoot} />
      </Tabs>

      {/* Card View */}
      {tabValue === 0 && (
        <Grid container justify="center" spacing={3} style={{ marginTop: "2rem" }}>
          {Object.keys(groupedSkills).map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {category}
                  </Typography>
                  {groupedSkills[category].map((skill, i) => (
                    <div key={i} style={{ marginBottom: "1rem" }}>
                      <Typography variant="body1" className={classes.skillName}>
                        {skill.name}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        className={classes.progress}
                        color="secondary"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Table View */}
      {tabValue === 1 && (
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table>
            <TableHead>
              <TableRow className={classes.tableHeader}>
                <TableCell className={classes.tableCell}>Category</TableCell>
                <TableCell className={classes.tableCell}>Skill</TableCell>
                <TableCell className={classes.tableCell}>Proficiency</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {skills.map((skill, index) => (
                <TableRow key={index}>
                  <TableCell className={classes.skillName}>
                    {skill.category}
                  </TableCell>
                  <TableCell className={classes.skillName}>
                    {skill.name}
                  </TableCell>
                  <TableCell>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      className={classes.progress}
                      color="secondary"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Skills;