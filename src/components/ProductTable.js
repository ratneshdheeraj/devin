import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Box,
  TablePagination,
  Typography,
  TableSortLabel,
  Chip,
  IconButton,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const ProductTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState('brand');
  const [order, setOrder] = useState('asc');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => {
    const aValue = a[orderBy];
    const bValue = b[orderBy];
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return order === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return order === 'asc'
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  const columns = [
    { id: 'brand', label: 'Brand', minWidth: 100 },
    { id: 'productName', label: 'Product Name', minWidth: 300 },
    { id: 'asin', label: 'ASIN', minWidth: 100 },
    { id: 'upcEan', label: 'UPC/EAN', minWidth: 120 },
    { id: 'price', label: 'Price', minWidth: 90, format: (value) => `$${value.toFixed(2)}` },
    { id: 'moq', label: 'MOQ', minWidth: 70, align: 'right' },
    { id: 'amazonBuybox', label: 'Amazon Buybox', minWidth: 130, format: (value) => `$${value.toFixed(2)}` },
    { id: 'amazonFees', label: 'Amazon Fees', minWidth: 120, format: (value) => `$${value.toFixed(2)}` },
    { id: 'profit', label: 'Profit', minWidth: 90, format: (value) => `$${value.toFixed(2)}` },
    { id: 'margin', label: 'Margin', minWidth: 90 },
    { id: 'roi', label: 'ROI', minWidth: 90 },
  ];

  const getROIColor = (roi) => {
    const roiValue = parseFloat(roi);
    if (roiValue >= 100) return 'success';
    if (roiValue >= 50) return 'primary';
    if (roiValue >= 25) return 'warning';
    return 'error';
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          Product Database
        </Typography>
        <TextField
          size="small"
          placeholder="Search Products"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <IconButton>
          <FilterListIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body2" color="text.secondary">
          Total Products: {filteredData.length}
        </Typography>
      </Box>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    fontWeight: 'bold',
                  }}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === 'roi' ? (
                          <Chip
                            label={value}
                            size="small"
                            color={getROIColor(value)}
                            variant="outlined"
                          />
                        ) : column.format ? (
                          column.format(value)
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ProductTable; 