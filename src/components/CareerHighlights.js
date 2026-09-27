import { highlights } from "../data/highlights-data";
import InfoSection from "./InfoSection";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { summary } from "../data/summary-data";

const highlightColumns = [
  { field: "type", headerName: "Type" },
  { field: "title", headerName: "Title" },
  { field: "description", headerName: "Description" },
  { field: "outcome", headerName: "Outcome", style: { color: "lightgreen" } },
  { field: "year", headerName: "Year" },
];


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "var(--page-bg)",
    minHeight: "100vh",
    padding: theme.spacing(3),
  },
  heading: {
    color: "var(--accent)",
    padding: "2rem 0",
    textTransform: "uppercase",
    textAlign: "center",
  },
  card: {
    background: "var(--card-bg)",
    color: "var(--primary-text)",
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
  tabRoot: {
    color: "var(--secondary)",
    fontWeight: "bold",
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: "var(--accent) !important",
    color: "var(--on-accent) !important",
    fontWeight: "bold",
  },
  tableContainer: {
    background: "var(--card-bg)",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    marginTop: theme.spacing(4),
  },
  tableHeader: {
    background: "var(--card-bg-alt)",
  },
  tableCell: {
    color: "var(--secondary)",
    fontWeight: "bold",
  },
  subTitle: {
    color: "var(--secondary)",
    fontWeight: "bold",
  },
  title: {
    color: "var(--accent)",
  },
  body:{
    color: "var(--primary-text)",
  },
  outcome: {
    color:"green"
  }
}));


const CareerHighlights = () => {  
  const classes = useStyles();
  return (  
  <Box component="div" className={classes.mainContainer}>

      <Typography variant="h4" className={classes.heading}>
        Summary
      </Typography>
      <Divider style={{ background: "var(--secondary)", marginBottom: "2rem" }} />

      <Card className={classes.card}>
        {summary.map((item, index) => (
        <CardContent key={index}>
          {item.points.map((point, i) => (
              <Typography
                key={i}
                variant={"body2"}
                className={classes.body}
                gutterBottom
                style={{color:"var(--secondary)"}}
              >
                ★  {point}
              </Typography>
            ))}
        
         
        </CardContent>
        ))}
      </Card>

   <InfoSection title="Key Highlights" data={highlights} columns={highlightColumns} classes={classes}/>;
   </Box>
)};

export default CareerHighlights;