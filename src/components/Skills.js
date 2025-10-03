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
  Chip,
  TablePagination,
} from "@material-ui/core";
import { skills } from "../data/skills-data";

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
  chip: {
    marginLeft: theme.spacing(1),
    backgroundColor: "#444",
    color: "white",
    fontWeight: "bold",
  },
}));

// Flatten skills from JSON
const flattenedSkills = skills.flatMap((cat) =>
  cat.items.map((item) => ({
    category: cat.category,
    ...item,
  }))
);

const Skills = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Paginate skills
  const paginatedSkills = flattenedSkills.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
        <Grid
          container
          justifyContent="center"
          spacing={3}
          style={{ marginTop: "2rem" }}
        >
          {skills.map((categoryObj, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {categoryObj.category}
                  </Typography>
                  {categoryObj.items.map((skill, i) => (
                    <div key={i} style={{ marginBottom: "1rem" }}>
                      <Typography
                        variant="body1"
                        className={classes.skillName}
                      >
                        {skill.name}
                        <Chip
                          label={skill.level}
                          size="small"
                          className={classes.chip}
                        />
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={(skill.score / 5) * 100}
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

      {/* Table View with Pagination */}
      {tabValue === 1 && (
        <Paper className={classes.tableContainer}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow className={classes.tableHeader}>
                  <TableCell className={classes.tableCell}>Category</TableCell>
                  <TableCell className={classes.tableCell}>Skill</TableCell>
                  <TableCell className={classes.tableCell}>Level</TableCell>
                  <TableCell className={classes.tableCell}>
                    Proficiency
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedSkills.map((skill, index) => (
                  <TableRow key={index}>
                    <TableCell className={classes.skillName}>
                      {skill.category}
                    </TableCell>
                    <TableCell className={classes.skillName}>
                      {skill.name}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={skill.level}
                        size="small"
                        className={classes.chip}
                      />
                    </TableCell>
                    <TableCell style={{ minWidth: "150px" }}>
                      <LinearProgress
                        variant="determinate"
                        value={(skill.score / 5) * 100}
                        className={classes.progress}
                        color="secondary"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination Controls */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={flattenedSkills.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            sx={{
            "& .MuiTablePagination-root": {
              color: "#d2b48c !important",  
            },
            "& .MuiSvgIcon-root": {
              color: "#d2b48c !important",  
            }
            }}
          />
        </Paper>
      )}
    </Box>
  );
};

export default Skills;