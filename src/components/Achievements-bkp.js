import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Chip, 
  Button
} from "@material-ui/core";
import {achievements} from '../data/achievements-data'
import CustomRating from "./CustomRating";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#233",
    minHeight: "100vh",
    padding: theme.spacing(4),
  },
  card: {
    background: "#2c2c2c",
    color: "white",
    margin: theme.spacing(2, 0),
    borderRadius: 12,
    boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
  },
  title: {
    color: "tan",
    fontWeight: 700,
  },
  meta: {
    color: "#bcd",
    fontSize: "0.95rem",
    marginBottom: theme.spacing(1),
  },
  badge: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    background: "tomato",
    color: "#fff",
    fontWeight: 600,
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
  pageBtn: {
    minWidth: 40,
  },
  activePage: {
    background: "tan",
    color: "#111",
    "&:hover": {
      background: "#d5b27a",
    },
  },
  navBtn: {
    minWidth: 90,
  },
}));

// 🔹 Assign stars based on industry value (example)
const industryStars = {
  Microsoft: 5,
  Oracle: 4,
  MongoDB: 4,
  Neo4J: 3,
};
const Achievements = ({itemsPerPage=5}) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(achievements.length / itemsPerPage));
  const start = (page - 1) * itemsPerPage;
  const displayed = achievements.slice(start, start + itemsPerPage);

  const goTo = (p) => setPage(Math.min(Math.max(1, p), totalPages));

  return (
    <Box className={classes.root}>
      <Typography variant="h4" align="center" style={{ color: "tomato", textTransform: "uppercase", marginBottom: 10 }} gutterBottom>
        🎖 Achievements & Certifications
      </Typography>

      <Divider style={{ background: "tan", marginBottom: 20, width: "70%", marginLeft: "auto", marginRight: "auto" }} />

      <Grid container justifyContent="center">
        {displayed.map((ach, idx) => (
          <Grid item xs={12} sm={10} md={8} key={start + idx}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" className={classes.title}>
                  {ach.title}
                </Typography>
                <Typography className={classes.meta}>
                  {ach.org} • {ach.year}
                </Typography>

                <Typography style={{ color: "#ddd", marginTop: 6 }}>
                  {ach.description || ""}
                </Typography>
                {/* Custom Stars */}
                <div className={classes.starsContainer}>
                  <CustomRating value={industryStars[ach.org] || 0} org={ach.org} />
                </div>
                <Box mt={1}>
                  {Array.isArray(ach.badges) &&
                    ach.badges.map((b, i) => (
                      <Chip key={i} label={b} size="small" className={classes.badge} />
                    ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* custom pagination controls */}
      <Box className={classes.pagination}>
        <Button
          variant="outlined"
          className={classes.navBtn}
          onClick={() => goTo(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>

        {/* simple page-number buttons (for few pages this is fine) */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <Button
            key={p}
            onClick={() => goTo(p)}
            variant={p === page ? "contained" : "outlined"}
            className={`${classes.pageBtn} ${p === page ? classes.activePage : ""}`}
          >
            {p}
          </Button>
        ))}

        <Button
          variant="outlined"
          className={classes.navBtn}
          onClick={() => goTo(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Achievements;