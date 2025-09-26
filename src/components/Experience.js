import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
  description: {
    textAlign: "left !important;"
  }
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Divider style={{ background: "tan", marginBottom: "2rem" }} />
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Till Now
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Associate Technical Manager
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Accenture Solutions Pvt. Ltd.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul className={classes.description}>
            <li>Leading a team of 20+ developers, overseeing end-to-end project delivery and ensuring milestones are achieved on time and within scope.</li>
            <li>Conducting in-depth code reviews to uphold coding standards, ensure maintainability, and enforce best practices across the codebase.</li>
            <li>Collaborating with global clients to gather and refine technical and functional requirements, align on deliverables, and deliver high-quality, optimized solutions.</li>
            <li>Estimating effort and planning for new and existing modules, including functionality sizing, project timelines, and infrastructure provisioning.</li>
            <li>Managing Agile delivery, including sprint planning, task allocation, user story tracking, and ensuring consistent team velocity.</li>
            <li>Overseeing project financials, including resource cost estimation, budget tracking, and forecasting to ensure efficient project management and delivery.</li>
            </ul>
          </Typography>
        </Box><Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Technical Lead
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Accenture Solutions Pvt. Ltd.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul className={classes.description}>
            <li>Designed and developed full-stack applications using Java 8 and ReactJS.</li>
            <li>Led front-end and back-end integration for Human Capital Management modules.</li>
            <li>Mentored junior developers and facilitated Agile ceremonies.</li>
            <li>Improved application performance through code optimization and query tuning.</li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Senior Software Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Accenture Solutions Pvt. Ltd.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul className={classes.description}>
            <li>Developed and deployed microservices for Java-based applications.</li>
            <li>Wrote optimized SQL queries and supported UAT and production deployment.</li>
            <li>Participated in sprint planning and daily standups.</li>
            <li>Ensured smooth deployment and configuration of applications on Apache Tomcat with MySQL backend.</li>
            </ul>
          </Typography>
          
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Senior Engineer - Developer (@ Mahindra Comviva)
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Tarang Software Pvt. Ltd.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul className={classes.description}>
            <li>Developed business-critical microservices using Core Java (1.6), RESTful APIs, and the MuleSoft integration framework.</li>
            <li>Implemented business logic validations across services to ensure accurate transaction processing.</li>
            <li>Performed performance benchmarking and load testing using JMeter, identifying and resolving bottlenecks.</li>
            <li>Collaborated with cross-functional teams for integration and delivery of telecom solutions within defined SLAs.</li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2015
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Senior Software Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            SNUG Technology Pvt. Ltd.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul className={classes.description}>
            <li>Designed and developed a 3rd-party banking web portal using JSP, Servlets, and SOAP/REST Web Services, enabling real-time account management and customer onboarding.</li>
            <li>Engineered international Telecom IVR (Interactive Voice Response) solutions, integrating with telecom networks for seamless voice interactions.</li>
            <li>Contributed to backend service orchestration and API development for high-volume banking operations.</li>
            <li>Supported deployment, testing, and client demo cycles, ensuring on-time delivery with minimal defects.</li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2012
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            three60 Technology Pvt. Ltd.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul className={classes.description}>
            <li>Developed the financial module of a School ERP solution, including fees, payroll, and inventory management features using Java, JSP, and Servlets.</li>
            <li>Integrated payment gateway services for secure and seamless online fee transactions, improving operational efficiency for schools.</li>
            <li>Ensured smooth deployment and configuration of applications on Apache Tomcat with MySQL backend.</li>
            <li>Collaborated with the product team to enhance usability and ensure regulatory compliance.</li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2011
        </Typography>
      </Box>
    </Box>
  );
};

export default Experience;
