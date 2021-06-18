import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// table
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
// useStyles
const useStyles = makeStyles((theme) => ({
    whiteLine: {
        backgroundColor: 'white',
        height: 50,
        width: '100%'
    },
    input: {
        boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'
    },
    table: {
        minWidth: 700,
    },
    roundBtn: {
        borderRadius: 25,
        color: 'white'
    },
    infoModal: {
        position: 'absolute',
        width: 600,
        minHeight: 200,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '25px',
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}))
// styled table
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
const stateName = [{name: 'Đã nhận', color: 'blue'},{name: 'Đang giao', color: 'orange'} , {name: 'Đã giao', color: 'green'}];

  function createData(name, username, phone, address, total, partner, state) {
    return { name, username, phone, address, total, partner, state};
  }
  // data test
  const rows = [
    createData('Huynh Thanh Tam', 'tamhuynh2605', '0909020210', 'Ba Ria', 26500, 'Grab', 0),
    createData('Nguyen Khoa Danh', 'dannk1312', '0909020211', 'Ba Ria', 40000, 'Ahamove', 1),
    createData('Ho Duy Tan', 'tanho1111', '0909020212', 'Tien Giang', 20000, 'GoJek', 1),
    createData('Nguyen Thi Nhu Quynh', 'quynhntn', '0909020213', 'Quang Ngai', 15500, 'Grab', 0),
    createData('Pham Thanh Trung', 'trungpham', '0909020214', 'TPHCM', 84000, 'Lalamove', 2),
    createData('Phung Vinh Duc', 'ducphung113', '0909020215', 'Khanh Hoa', 96000, 'Bee', 2),
  ];

// pagination component
function TablePaginationActions(props) {
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    return (
      <>
        <IconButton 
            onClick={handleBackButtonClick} 
            disabled={page === 0} 
            aria-label="previous page"
        >
            <KeyboardArrowLeft />
        </IconButton>
        <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
        >
            <KeyboardArrowRight />
        </IconButton>
      </>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

// Modal

function Info(props) {
    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const Line = (props) => {
        return <p><b>{props.attr}</b> {props.content}</p>
    }
  
    const body = (
      <div className={classes.infoModal}>
        <h2 style={{textAlign:'center'}}>THÔNG TIN ĐƠN HÀNG</h2>
        <Divider style={{margin: '20px 0'}}></Divider>
        <Line attr='Tên khách hàng:' content={props.value.name}></Line>
        <Line attr='Username:' content={props.value.username}></Line>
        <Line attr='Địa chỉ:' content={props.value.address}></Line>
        <Line attr='Công ty giao hàng:' content={props.value.partner}></Line>
        <Line attr='Tổng hóa đơn:' content={props.value.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}></Line>
        <Divider style={{margin: '20px 0'}}></Divider>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h3" style={{color: stateName[props.value.state].color}}>{stateName[props.value.state].name}</Typography>
            <Button variant="contained" style={{backgroundColor: 'gray', color: 'white'}} onClick={handleClose}>Đóng</Button>
        </div>
      </div>
    );
  
    return (
      <>
        <IconButton variant='contained' onClick={handleOpen} title='Chi tiết'>
            <InfoIcon color='primary' size='large'></InfoIcon>
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
        >
          {body}
        </Modal>
      </>
    );
}

// main component
const OrderList = (props) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [search, setSearch] = React.useState('');
    const rowsPerPage = 5;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleOnSearchClick = () => {
        if(search === '')
            return;
        alert(search);
    };

    return (
        <div className='main-container'>
            <AppBar position="static" className={classes.whiteLine}>
                <Toolbar variant='dense'>
                    <Typography variant="h6" style={{color: 'black'}}>
                        QUẢN LÝ ĐƠN HÀNG
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth='lg' style={{marginTop: 20}}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={5}
                    style={{marginBottom: 1}}
                >
                    <Grid item sm={6} style={{padding: '10px 24px'}}>
                        <div className="searchBar">
                            <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Tìm kiếm ..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={e => {if(e.key === 'Enter') handleOnSearchClick()}}/>
                            <button id="searchQuerySubmit" type="button" name="searchQuerySubmit" onClick={handleOnSearchClick}>
                                <SearchIcon style={{height:24,width:24}}></SearchIcon>
                            </button>
                        </div>
                    </Grid>
                </Grid>
    {/*------------------------- TABLE data  ------------------------------------*/}
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="table pagination">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Chi tiết</StyledTableCell>
                        <StyledTableCell align="center">Khách hàng</StyledTableCell>
                        <StyledTableCell align="center">Công ty giao</StyledTableCell>
                        <StyledTableCell align="center">Tổng tiền</StyledTableCell>     
                        <StyledTableCell align="center">Trạng thái</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="center" style={{padding:'8px'}}>
                                <Info value={row}></Info>
                            </StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}>{row.name}</StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}>{row.partner}</StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}>{row.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px', color: stateName[row.state].color}}>{stateName[row.state].name}</StyledTableCell>
                        </StyledTableRow>
                    ))}

                    {emptyRows > 0 && (
                        <StyledTableRow style={{ height: 53 * emptyRows }}>
                            <StyledTableCell colSpan={6} />
                        </StyledTableRow>
                    )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                            rowsPerPageOptions={[]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
                </TableContainer>
            </Container>
        </div>
    );
}

export default OrderList;