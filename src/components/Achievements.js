import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
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
import { achievements } from "../data/achievements-data";

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
  achievementTitle: {
    fontWeight: "bold",
    color: "tan",
  },
  orgYear: {
    fontWeight: "bold",
    color: "tomato",
  },
  badges: {
    marginTop: theme.spacing(1),
    "& > *": {
      marginRight: theme.spacing(1),
      background: "tomato",
      color: "yellow",
    },
    
  },
  tabRoot: {
    color: "tan",
    fontWeight: "bold",
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
  star: {
    color: "#FFD700",
    marginRight: theme.spacing(0.5),
  },
}));

// Optional: sort achievements by "industryValue" descending if exists
const sortedAchievements = [...achievements].sort(
  (a, b) => (b.year || 0) - (a.year || 0)
);

const Achievements = () => {
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

  // Paginated achievements
  const paginatedAchievements = sortedAchievements.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" className={classes.heading}>
        My Achievements
      </Typography>
      <Divider style={{ background: "tan", marginBottom: "2rem" }} />

      {/* Tabs */}
      <Tabs value={tabValue} onChange={handleChange} indicatorColor="secondary" centered>
        <Tab label="Card View" className={classes.tabRoot} />
        <Tab label="Table View" className={classes.tabRoot} />
      </Tabs>

      {/* Card View */}
      {tabValue === 0 && (
        <Grid container justifyContent="center" spacing={3} style={{ marginTop: "2rem" }}>
          {sortedAchievements.map((ach, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" className={classes.achievementTitle}>
                    {ach.title}{" "}
                    {Array.from({ length: ach.stars || 0 }).map((_, idx) => (
                      <span key={idx} className={classes.star}>★</span>
                    ))}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className={classes.orgYear}>
                    {ach.org} : {ach.year} {ach.expiry !== '--'?'- ' + ach.expiry: ''} {ach.renewed !== '--'?'(Renewed on: ' + ach.renewed +')':'' }
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: "0.5rem" }}>
                    {ach.description}
                  </Typography>
                  {ach.badges && (
                    <div className={classes.badges}>
                      {ach.badges.map((badge, idx) => (
                        <Chip key={idx} label={badge} size="small" className={classes.tabRoot} />
                      ))}
                    </div>
                  )}
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
                  <TableCell className={classes.tableCell}>Title</TableCell>
                  <TableCell className={classes.tableCell}>Org</TableCell>
                  <TableCell className={classes.tableCell}>Year</TableCell>
                  <TableCell className={classes.tableCell}>Expiry</TableCell>
                  <TableCell className={classes.tableCell}>Renewed on</TableCell>
                  <TableCell className={classes.tableCell}>Badges</TableCell>
                  <TableCell className={classes.tableCell}>Stars</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedAchievements.map((ach, i) => (
                  <TableRow key={i}>
                    <TableCell className={classes.achievementTitle}>{ach.title}</TableCell>
                    <TableCell className={classes.orgYear}>{ach.org}</TableCell>
                    <TableCell className={classes.orgYear}>{ach.year}</TableCell>
                    <TableCell className={classes.orgYear}>{ach.expiry}</TableCell>
                    <TableCell className={classes.orgYear}>{ach.renewed}</TableCell>
                    <TableCell>
                      {ach.badges && (
                            <div className={classes.badges}>
                            {ach.badges.map((badge, idx) => (
                                <Chip key={idx} label={badge} size="small" className={classes.tabRoot} />
                            ))}
                            </div>
                        )}
                    </TableCell>
                    <TableCell>
                      {Array.from({ length: ach.stars || 0 }).map((_, idx) => (
                        <span key={idx} className={classes.star}>★</span>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination style={{color: 'white'}}
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={sortedAchievements.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </Box>
  );
};

export default Achievements;