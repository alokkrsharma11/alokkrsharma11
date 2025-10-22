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
  tabRoot: {
    color: "tan",
    fontWeight: "bold",
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: "tomato",
    color: "white",
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
  subTitle: {
    color: "tan",
    fontWeight: "bold",
  },
  title: {
    color:"tomato",
  },
  body:{
    color: "white",
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
      <Divider style={{ background: "tan", marginBottom: "2rem" }} />

      <Card className={classes.card}>
        {summary.map((item, index) => (
        <CardContent key={index}>
          {item.points.map((point, i) => (
              <Typography
                key={i}
                variant={"body2"}
                className={classes.body}
                gutterBottom
                style={{color:"tan"}}
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