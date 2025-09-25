import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";

import project1 from "../images/react.png";
import project2 from "../images/org-accelerator.png";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    minHeight: "100vh",
    padding: theme.spacing(3),
  },
  cardContainer: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  sectionTitle: {
    margin: theme.spacing(4, 0, 2),
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "tan"
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
}));

const projects = [
  {
    name: "Jmytra4u",
    description: `Jmytra4u – Your Friendly Guide to Java and other related skills. At Jmytra4u, we believe in being your mitra (friend) on the journey to mastering Java programming. Whether you’re a beginner or looking to sharpen your skills, you’ll find clear explanations, practical examples, and supportive guidance here.`,
    category: "Personal",
    image: project1,
  },
  {
    name: "About Me (alokkrsharma)",
    description: `This is a portfolio which describe my journey so far including my Education, Skills and justify my 14+ years of Experience while I worked on different projects of different domains. It will also showcase my achievement through these many years and you know what this is the same site where you are currently!`,
    category: "Personal",
    image: project1,
  },
  {
    name: "ENI Gold",
    description: `Eni S.p.A. is an Italian multinational energy company headquartered in Rome. It is considered one of the "supermajor" oil companies in the world. 
We, at accenture, are building a GOLD solution for them to track their contracts, capacities, grid elements, and different reportings, etc..`,
    category: "Professional",
    image: project1,
  },
  {
    name: "Intelligent Org. Accelerator",
    description: `Org Accelerator is a product that is built for Accenture Strategy Consultants. This will help analyzing all the activities/processes held within an organization using some historical data, which will be useful for organization re-structuring. It includes n numbers of graphical screens with different types of charts.`,
    category: "Professional",
    image: project2,
  },
  {
    name: "SWINTON",
    description: `Swinton is a solution to maintain the customer-base to UK based insurance organization. With this, the insurance executive can update or analyze the customer details, based on the requirement, whether the customer wants to renew the policies, or he wants some price objections based on some criteria provided!`,
    category: "Professional",
    image: project3,
  },
  {
    name: "3M",
    description: `3M is a global technology company delivering innovative solutions to life's everyday needs. We, at Accenture, provided them an analytical solution to do past or present analysis of the simulated inventory data.`,
    category: "Professional",
    image: project4,
  },
  {
    name: "Telstra",
    description: `Telstra is Australian Telecomm. & Tech. Company. We provided them an analytical solution to do past or present analysis of the spend and revenue, also to do better forecasting for future using the historical data.`,
    category: "Professional",
    image: project5,
  },
  {
    name: "mWallet (Kotak Mahindra)",
    description: `mobiquity Wallet offers a feature-rich digital wallet for end consumers and a robust and flexible platform for wallet providers and their partners. It combines innovations in payments with cutting edge digital technology.`,
    category: "Professional",
    image: project6,
  },
  {
    name: "MOBIQUITY: DISTRIBUTOR HIER. MANAGEMENT",
    description: `3M is a global technology company delivering innovative solutions to life's everyday needs. We, at Accenture, provided them an analytical solution to do past or present analysis of the simulated inventory data.`,
    category: "Professional",
    image: project4,
  },
  {
    name: "MOBIQUITY: UNIFIED WALLET MANAGEMENT",
    description: `Telstra is Australian Telecomm. & Tech. Company. We provided them an analytical solution to do past or present analysis of the spend and revenue, also to do better forecasting for future using the historical data.`,
    category: "Professional",
    image: project5,
  },
  {
    name: "DOOR STEP BANKING SOLUTION",
    description: `mobiquity Wallet offers a feature-rich digital wallet for end consumers and a robust and flexible platform for wallet providers and their partners. It combines innovations in payments with cutting edge digital technology.`,
    category: "Professional",
    image: project6,
  },
  {
    name: "FLM & CBR HELPDESK SOLUTION",
    description: `This solution is developed to use by Bank or the third party who help to Banks to provide First Level Maintenance (FLM) of ATM plus Cash Balancing and Replenishment (CBR) Service to the Banks or MSPs.`,
    category: "Professional",
    image: project4,
  },
  {
    name: "EMTS IVRS + Reporting Solution",
    description: `It's a built for Nigeria based telecom service provider (i.e. Etisalat) IVR solution and Reporting Solution for UBA (United Bank of Africa) with both Inbound and outbound operations based on Avaya Platform 6.0.`,
    category: "Professional",
    image: project5,
  },
  {
    name: "three60 Solution (School ERP Product)",
    description: `A school ERP product used by almost 15 schools all over India. I worked on its financial module (Fees, Payroll and Inventory Management). Apart from that I got exposure of its feedback module for children's study. `,
    category: "Professional",
    image: project6,
  },
];

// ✅ Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = [];
    acc[project.category].push(project);
    return acc;
  }, {});


const Project = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
              Projects
      </Typography>
      {Object.keys(groupedProjects).map((category) => (
        <div key={category}>
          <Typography variant="h4" className={classes.sectionTitle}>
            {category + " Projects"}
          </Typography>
          <Divider />
          <Grid container justify="center">
            {groupedProjects[category].map((project, i) => (
              <Grid item xs={12} sm={8} md={4} key={i}>
                <Card className={classes.cardContainer}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={project.name}
                      height="140"
                      image={project.image}
                      b
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  
                  <CardActions>
                    <Button size="small" color="primary">
                      Show more...
                    </Button>
                  </CardActions>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Box>
  );
};

export default Project;
