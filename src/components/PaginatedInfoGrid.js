import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 200,
    padding: theme.spacing(2),
  },
  typeText: {
    fontWeight: "bold",
  },
  titleText: {
    fontSize: "1.1rem",
    fontWeight: 600,
  },
  bodyText: {
    fontSize: "0.9rem",
    color: "#555",
  },
  chip: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  pagination: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(1),
  },
}));

const PaginatedInfoGrid = ({ data, columns, rowsPerPage = 6 }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedData = data.slice(start, end);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <>
      <Grid container justifyContent="center" spacing={3} style={{ marginTop: "2rem" }}>
        {paginatedData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <CardContent>
                {columns.map((col, i) => (
                  <Typography
                    key={i}
                    variant={col.variant || "body2"}
                    className={classes[col.className]}
                    gutterBottom
                    style={col.style || {}}
                  >
                    {col.render ? col.render(item[col.field], item) : item[col.field]}
                  </Typography>
                ))}
                <Box mt={1}>
                  <Chip label={item.type || "Info"} size="small" className={classes.chip} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Box className={classes.pagination}>
          <Button
            variant="outlined"
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <Typography variant="body2" style={{ padding: "0 1rem" }}>
            Page {page + 1} of {totalPages}
          </Typography>
          <Button
            variant="outlined"
            disabled={page === totalPages - 1}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Box>
      )}
    </>
  );
};

// Example usage in CareerHighlights
const careerHighlights = [
  {
    type: "Leadership & Contribution",
    title: "Team Leadership at Accenture",
    description: "Led a 20+ member team, drove Agile ceremonies, and ensured on-time delivery of multiple projects.",
    outcome: "Improved team productivity by 30% and enhanced cross-functional collaboration.",
    year: "2021–Present",
  },
  {
    type: "Learning & Growth",
    title: "Generative AI & React.js",
    description: "Deepening expertise in AI & React.js to develop intelligent and dynamic applications.",
    outcome: "Building AI-driven enterprise workflows and modern web interfaces.",
    year: "Ongoing",
  },
  // add more items here
];

const highlightColumns = [
  { field: "type", headerName: "Category", className: "typeText" },
  { field: "title", headerName: "Title", className: "titleText" },
  { field: "description", headerName: "Description", className: "bodyText" },
  { field: "outcome", headerName: "Impact", className: "bodyText", style: { color: "lightgreen" } },
  { field: "year", headerName: "Year", className: "bodyText" },
];

const CareerHighlights = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <>
      <Tabs
        value={tabValue}
        onChange={(e, newVal) => setTabValue(newVal)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Highlights" />
        <Tab label="Other Info" />
      </Tabs>

      {tabValue === 0 && (
        <PaginatedInfoGrid data={careerHighlights} columns={highlightColumns} rowsPerPage={6} />
      )}

      {tabValue === 1 && <Box mt={3}>Other Info Content Here</Box>}
    </>
  );
};

export default CareerHighlights;