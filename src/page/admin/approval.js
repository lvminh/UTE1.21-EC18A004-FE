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
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import CheckIcon from '@material-ui/icons/Check';
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
  
  function createData(company, name, phone, email) {
    return { company, name, phone, email};
  }
  // data test
  const rows = [
    createData('C??ng ty c??? ph???n Grab', 'Grab', '0909020210', 'grabCompany@gmail.com'),
    createData('C??ng ty v???n chuy???n GoJek', 'GoJek', '0909020211', 'gojekCompany@gmail.com'),
    createData('C??ng ty c??? ph???n AhaMove', 'Ahamove', '0909020212', 'ahamoveCompany@gmail.com'),
    createData('C??ng ty c??? ph???n Lalamove', 'Lalamove', '0909020213', 'lalamoveCompany@gmail.com'),
    createData('C??ng ty c??? ph???n Bee', 'Bee', '0909020214', 'beeCompany@gmail.com'),
    createData('C??ng ty c??? ph???n Bee', 'Bee', '0909020214', 'beeCompany@gmail.com'),
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
        <h2 style={{textAlign:'center'}}>TH??NG TIN ?????I T??C</h2>
        <Divider style={{margin: '20px 0'}}></Divider>
        <Line attr='C??ng ty:' content={props.value.company}></Line>
        <Line attr='T??n vi???t t???t:' content={props.value.name}></Line>
        <Line attr='Email:' content={props.value.email}></Line>
        <Line attr='S??? ??i???n tho???i:' content={props.value.phone}></Line>
        <Line attr='?????a ch??? tr??? s???:' content={props.value.company}></Line>
        <Line attr='Ng??y ????ng k?? h???p t??c:' content={props.value.company}></Line>
        <Line attr='G??i ????ng k??:' content={props.value.company}></Line>
        <Divider style={{margin: '20px 0'}}></Divider>
        <Button variant="contained" style={{backgroundColor: 'green'}} className={classes.roundBtn}>H???p t??c</Button>  
        <Button variant="contained" style={{backgroundColor: 'red', marginLeft: 25}} className={classes.roundBtn}>T??? ch???i</Button>
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

function Decide(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = props.type === 'Yes' ? (
        <div className={classes.decideModal}>
            <h2 style={{textAlign:'center', color: 'green'}}>X??C NH???N H???P T??C</h2>
            <Divider style={{margin: '20px 0'}}></Divider>
            <p style={{textAlign: 'justify'}}>B???n ??ang x??c nh???n h???p t??c v???i c??ng ty <b>{props.value.name}</b> c??ng nh?? ?????ng ?? v???i h???p ?????ng ???? ????a ra. B???ng vi???c nh???n x??c nh???n, h??? th???ng s??? t???o t??i kho???n v?? g???i mail cho ?????i t??c x??c nh???n vi???c h???p t??c.</p>
            <Divider style={{margin: '20px 0'}}></Divider>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="contained" style={{backgroundColor: 'green', color: 'white'}}>X??c nh???n</Button>
                <Button variant="contained" style={{backgroundColor: 'gray', color: 'white'}} onClick={handleClose}>H???y</Button>
            </div>
        </div>
    ) : (
        <div className={classes.decideModal}>
            <h2 style={{textAlign:'center', color: 'red'}}>X??C NH???N T??? CH???I</h2>
            <Divider style={{margin: '20px 0'}}></Divider>
            <p style={{textAlign: 'justify'}}>B???n ??ang x??c nh???n t??? ch???i c??ng ty <b>{props.value.name}</b>. B???ng vi???c nh???n x??c nh???n, h??? th???ng s??? g???i mail cho ?????i t??c x??c nh???n h???y b??? h???p t??c.</p>
            <Divider style={{margin: '20px 0'}}></Divider>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="contained" style={{backgroundColor: 'red', color: 'white'}}>X??c nh???n</Button>
                <Button variant="contained" style={{backgroundColor: 'gray', color: 'white'}} onClick={handleClose}>H???y</Button>
            </div>
        </div>
    );
    
    return (
    <>
        {props.type === 'Yes' ?
            <IconButton variant='contained' onClick={handleOpen} title='?????ng ??'>
                <CheckIcon style={{color:'green'}}></CheckIcon>
            </IconButton>
            :
            <IconButton variant='contained' onClick={handleOpen} title='T??? ch???i'>
            <NotInterestedIcon style={{color:'red'}}></NotInterestedIcon>
            </IconButton>
            
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
const Approval = (props) => {
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
                        DUY???T H???P T??C DOANH NGHI???P
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
                        <StyledTableCell align="center">C??ng ty</StyledTableCell>
                        <StyledTableCell align="center">Th????ng hi???u</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Hotline</StyledTableCell>
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
                                <Decide type='Yes' value={row}></Decide>
                                <Decide type='No' value={row}></Decide>
                            </StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}>{row.company}</StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}>{row.name}</StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}>{row.email}</StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}>{row.phone}</StyledTableCell>
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

export default Approval;