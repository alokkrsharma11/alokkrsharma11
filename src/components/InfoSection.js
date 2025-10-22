import React, { useState } from "react";
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
  TablePagination,
  Chip,
} from "@material-ui/core";

const InfoSection = ({ title, data, columns, classes }) => {
  
  const [tabValue, setTabValue] = useState(0);

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box component="div" className={classes.mainContainer}>

      <Typography variant="h4" className={classes.heading}>
        {title}
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
        <Grid container justifyContent="center" spacing={3} style={{ marginTop: "2rem" }}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  {columns.map((col, i) => (
                    <Typography
                      key={i}
                      variant={i === 0 ? "h6" : "body2"}
                      className={i === 0? classes.title: (i === 1)? classes.subTitle: classes.body}
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
      )}

      {/* Table View */}
      {tabValue === 1 && (
        <Paper className={classes.tableContainer}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow className={classes.tableHeader}>
                  {columns.map((col, i) => (
                    <TableCell key={i} className={classes.tableCell}>
                      {col.headerName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((item, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {columns.map((col, i) => (
                      <TableCell key={i}
                      variant={i === 0 ? "h6" : "body2"}
                      className={i === 0? classes.title: (i === 1)? classes.subTitle: classes.body}
                      gutterBottom
                      style={col.style || {}}>
                        {col.render ? col.render(item[col.field], item) : item[col.field]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination Controls */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={data.length}
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

export default InfoSection;