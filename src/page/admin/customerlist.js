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
        minHeight: 300,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '25px',
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    decideModal: {
        position: 'absolute',
        width: 400,
        minHeight: 200,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
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
  
function createData(name, username, phone, email, address, dayofbirth, state) {
return { name, username, phone, email, address, dayofbirth, state};
}
// data test
const rows = [
createData('Huynh Thanh Tam', 'tamhuynh2605', '0909020210', 'tamhuynh@gmail.com', 'Ba Ria', '26/05/2000', true),
createData('Nguyen Khoa Danh', 'dannk1312', '0909020211', 'dannk@gmail.com', 'Ba Ria', '13/12/2000', false),
createData('Ho Duy Tan', 'tanho1111', '0909020212', 'tancubu@gmail.com', 'Tien Giang', '11/11/2000', true),
createData('Nguyen Thi Nhu Quynh', 'quynhntn', '0909020213', 'quynhntn@gmail.com', 'Quang Ngai', '02/09/2000', true),
createData('Pham Thanh Trung', 'trungpham', '0909020214', 'trungpham@gmail.com', 'TPHCM', '24/01/2000', true),
createData('Phung Vinh Duc', 'ducphung113', '0909020215', 'duccong113@gmail.com', 'Khanh Hoa', '31/01/2000', true),
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
// modal

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
        <h2 style={{textAlign:'center'}}>TH??NG TIN KH??CH H??NG</h2>
        <Divider style={{margin: '20px 0'}}></Divider>
        <Line attr='T??i kho???n:' content={props.value.username}></Line>
        <Line attr='H??? t??n:' content={props.value.name}></Line>
        <Line attr='Email:' content={props.value.email}></Line>
        <Line attr='S??? ??i???n tho???i:' content={props.value.phone}></Line>
        <Line attr='?????a ch???:' content={props.value.address}></Line>
        <Line attr='Ng??y sinh:' content={props.value.dayofbirth}></Line>
        <Line attr='G??i ????ng k??:' content={props.value.company}></Line>
        <Divider style={{margin: '20px 0'}}></Divider>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="contained" style={{backgroundColor: 'red', color: 'white'}}>Ch???n truy c???p</Button>
            <Button variant="contained" style={{backgroundColor: 'gray', color: 'white'}} onClick={handleClose}>H???y</Button>
        </div>
        </div>
    );
  
    return (
      <>
        <IconButton variant='contained' onClick={handleOpen} title='Chi ti???t'>
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

function Access(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = props.value.state === true ? (
        <div className={classes.decideModal}>
            <h2 style={{textAlign:'center', color: 'red'}}>KH??A T??I KHO???N</h2>
            <Divider style={{margin: '20px 0'}}></Divider>
            <p>B???n ch???c ch???n mu???n kh??a t??i kho???n <b>{props.value.username}</b> ch??? ?</p>
            <p style={{textAlign: 'justify'}}>T??i kho???n n??y s??? kh??ng truy c???p ???????c cho ?????n khi b???n k??ch ho???t tr??? l???i.</p>
            <Divider style={{margin: '20px 0'}}></Divider>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="contained" style={{backgroundColor: 'red', color: 'white'}}>Ch???n</Button>
                <Button variant="contained" style={{backgroundColor: 'gray', color: 'white'}} onClick={handleClose}>H???y</Button>
            </div>
        </div>
    ) : (
        <div className={classes.decideModal}>
            <h2 style={{textAlign:'center', color: 'green'}}>K??CH HO???T T??I KHO???N</h2>
            <Divider style={{margin: '20px 0'}}></Divider>
            <p style={{textAlign: 'justify'}}>T??i kho???n <b>{props.value.username}</b> s??? ???????c k??ch ho???t tr??? l???i.</p>
            <Divider style={{margin: '20px 0'}}></Divider>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="contained" style={{backgroundColor: 'green', color: 'white'}}>K??ch ho???t</Button>
                <Button variant="contained" style={{backgroundColor: 'gray', color: 'white'}} onClick={handleClose}>H???y</Button>
            </div>
        </div>
    );
    
    return (
    <>
        {props.value.state === true ?
            <Button style={{backgroundColor: 'green', color: 'white'}} variant='contained' onClick={handleOpen} title='Ch???n'>??ang ho???t ?????ng</Button>
            :
            <Button style={{backgroundColor: 'red', color: 'white'}} variant='contained' onClick={handleOpen} title='K??ch ho???t'>Ch???n truy c???p</Button>
        }
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
const CustomerList = (props) => {
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
                        QU???N L?? T??I KHO???N KH??CH H??NG
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
                            <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="T??m ki???m ..." 
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
                        <StyledTableCell align="center">T??c v???</StyledTableCell>
                        <StyledTableCell align="center">T??i kho???n</StyledTableCell>
                        <StyledTableCell align="center">H??? t??n</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">S??T</StyledTableCell>
                        <StyledTableCell align="center">Tr???ng th??i</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="center" style={{padding:'8px'}}>
                                <Info value={row}></Info>
                            </StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}>{row.username}</StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}>{row.name}</StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}>{row.email}</StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}>{row.phone}</StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}>
                                <Access value={row}></Access>    
                            </StyledTableCell>
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

export default CustomerList;