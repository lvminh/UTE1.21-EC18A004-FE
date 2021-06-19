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
import TextField from '@material-ui/core/TextField';
//icon
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';

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
        borderRadius: '5px',
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
// data test
function createData(code, duration, price) {
    return { code, duration, price};
    }
    // data test
    const rows = [
    createData('DV2021-24', 24, 10000000),
    createData('DV2021-36', 36, 15000000),
    createData('DV2021-48', 48, 20000000),
    createData('DV2021-12', 12, 500000),
    createData('DV2021-1', 1, 100000),
    createData('DV2021-6', 6, 250000),
    createData('DV2021-24', 24, 10000000),
    createData('DV2021-36', 36, 15000000),
    createData('DV2021-48', 48, 20000000),
    createData('DV2021-12', 12, 500000),
    createData('DV2021-1', 1, 100000),
    createData('DV2021-6', 6, 250000),
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
  
    const [name, setName] = React.useState(props.value.name);
    const [desc, setDesc] = React.useState(props.value.desc);
    const [maxWeight, setMaxWeight] = React.useState(props.value.maxWeight);
    const [midPoint, setMidPoint] = React.useState(props.value.midPoint);
    const [feePerPoint, setFeePerPoint] = React.useState(props.value.feePerPoint);
    const [cancelFee, setCancelFee] = React.useState(props.value.cancelFee);
    const [startCost, setStartCost] = React.useState(props.value.startCost);
    const [nextCost, setNextCost] = React.useState('');


    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleModify = () => {

    }

    const body = (
      <div className={classes.infoModal}>
        <h2 style={{textAlign:'center'}}>THÔNG TIN DỊCH VỤ</h2>
        <Divider style={{margin: '20px 0'}}></Divider>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField label="Tên dịch vụ" required fullWidth value={name} onChange={e => setName(e.target.value)}></TextField><br/>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Mô tả" required fullWidth value={desc} onChange={e => setDesc(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Cân nặng tối đa (kg)" fullWidth type='number' InputProps={{inputProps: { min: 0}}} value={maxWeight} onChange={e => setMaxWeight(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Phí hủy đơn (%)" fullWidth type='number' InputProps={{inputProps: { min: 0, step: 0.1}}} value={cancelFee} onChange={e => setCancelFee(e.target.value)}></TextField><br/>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Số điểm trung chuyển tối đa" fullWidth type='number' InputProps={{inputProps: { min: 0}}} value={midPoint} onChange={e => setMidPoint(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Phí mỗi điểm (VND)" fullWidth type='number' InputProps={{inputProps: { min: 0}}} value={feePerPoint} onChange={e => setFeePerPoint(e.target.value)}></TextField><br/>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Giá khởi điểm (VND)" fullWidth required type='number' InputProps={{inputProps: { min: 0}}} value={startCost} onChange={e => setStartCost(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Giá mỗi km sau đó" id='nextCost' fullWidth placeholder='VD: 3:5000,5:5500' required value={nextCost} onChange={e => setNextCost(e.target.value)}></TextField><br/>
            </Grid>
        </Grid>
        <Divider style={{margin: '20px 0'}}></Divider>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="contained" style={{backgroundColor: 'green', color: 'white'}} onClick={handleModify}>Chỉnh sửa</Button>
            <Button variant="contained" style={{backgroundColor: 'gray', color: 'white'}} onClick={handleClose}>Hủy</Button>
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

function Add(props) {
    const classes = useStyles();
    const {category} = props;
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    // console.log(category);

    const [name, setName] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [maxWeight, setMaxWeight] = React.useState(10);
    const [midPoint, setMidPoint] = React.useState(0);
    const [feePerPoint, setFeePerPoint] = React.useState(0);
    const [cancelFee, setCancelFee] = React.useState(0);
    const [startCost, setStartCost] = React.useState(5000);
    const [nextCost, setNextCost] = React.useState('');
    var costTable = [{milestone: 0, price: startCost}];
    console.log(category);
    // const categories = category === null ? [{categoryId: category[0]._id, price: freeze},
    //                     {categoryId: category[1]._id, price: electronic}] : null;
    
    const getCost = (str) => {
        let t = 0;
        let costArr = [];
        for(let i=0;i<str.length;i++){
            if(str.charAt(i) === ','){
                let sub = str.substring(t,i);
                costArr.push(sub);
                t=++i;
            }
            if(i === str.length-1) {
                let sub = str.substring(t,str.length);
                costArr.push(sub);
            }
        }
        let mile = []
        let cost = []
        for(let i =0;i<costArr.length;i++){
            mile.push(parseInt(costArr[i].substring(0, costArr[i].indexOf(':'))));
            cost.push(parseInt(costArr[i].substring(costArr[i].indexOf(':') + 1, costArr[i].length)));
        }
        let check = true;
        for(let i =0;i<mile.length - 1;i++){
            if(mile[i] >= mile[i+1]){check=false;break;}
        }
        const newArr = costTable.map(num => num);
        if(check){
            for(let i=0;i<costArr.length;i++){
                newArr.push({milestone: mile[i], price: cost[i]}) // lỗi
            }
        }else {alert('Vui lòng nhập số km sau lớn hơn km trước'); return;}
        let ob= JSON.stringify({name: name, description: desc, rule: 
            { middlePoint: {maxPoint: midPoint, price: feePerPoint}, maxWeight: maxWeight, cancelFeePercent: cancelFee, cost: newArr, 
        }});//surchargeProductCategory: categories}});
        alert(ob);
        // const tokenCom = 'eyJhbGciOiJIUzI1NiJ9.NjBjYTExNjY3ZGNiYWUxMDg4YzQxZDEy.vDhzh2rYw17aqlFw9mBKN2zTbrwJkgWkJGQGNKzU3Mc';
        

        // setName(''); setDesc(''); setFeePerPoint(0); setMaxWeight(0); setMidPoint(0); setNextCost(''); setStartCost(5000);
        // setElectronic(2500); setFreeze(5000); 
    }

    const handleAdd = () => {
        let check = true;
        let message = '';
        if(!name) {message += 'Chưa nhập tên | '; check = false}
        if(!desc) {message += 'Chưa nhập mô tả | '; check = false}
        // if(!midPoint && feePerPoint) {message += 'Không có điểm giữa nên không thể định giá mỗi điểm | '; check = false}
        if(!nextCost) {message += 'Chưa nhập định dạng giá | '; check = false}
        
        // Check next n km cost
        if(nextCost.length > 2 && check){
            let colon = [];
            let comma = [];
            for(let i=0;i<nextCost.length;i++){
                if((nextCost.charAt(i) < '0' || nextCost.charAt(i) > '9') && nextCost.charAt(i) !== ':' && nextCost.charAt(i) !== ','){
                    check = false;  message += 'Sai format giá mỗi km '; break;
                }
                if(nextCost.charAt(i) === ':') colon.push(i);
                if(nextCost.charAt(i) === ',') comma.push(i);
            }
            if(colon.length - comma.length === 1 && check){
                for(let i=0;i<comma.length;i++)
                    if(colon[i] < comma[i] && comma[i] > colon[i+1]){ check = false;  message += 'Sai format giá mỗi km ';break;}
            } else {check = false;  message += 'Sai format giá mỗi km ';}
            if(check){
                for(let i=0;i<colon.length;i++){
                    if((nextCost.charAt(colon[i] - 1) < '0' || nextCost.charAt(colon[i] - 1) > '9') || (nextCost.charAt(colon[i] + 1) < '1' || nextCost.charAt(colon[i] + 1) > '9')){
                        check = false;  message += 'Sai format giá mỗi km '; break;
                    }
                }
            }
        } else if(nextCost.length < 2 && check) {check = false;  message += 'Sai format giá mỗi km ';} else check = false;

        if(check)
            getCost(nextCost);
        else alert(message);
    }
    const body = (
      <div className={classes.infoModal}>
        <h2 style={{textAlign:'center'}}>THÊM DỊCH VỤ</h2>
        <Divider style={{margin: '20px 0'}}></Divider>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField label="Tên dịch vụ" required fullWidth value={name} onChange={e => setName(e.target.value)}></TextField><br/>
            </Grid>
            <Grid item xs={6}>
                <div id='test'></div>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Mô tả" required fullWidth value={desc} onChange={e => setDesc(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Cân nặng tối đa (kg)" fullWidth type='number' InputProps={{inputProps: { min: 0}}} value={maxWeight} onChange={e => setMaxWeight(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Phí hủy đơn (%)" fullWidth type='number' InputProps={{inputProps: { min: 0, step: 0.1}}} value={cancelFee} onChange={e => setCancelFee(e.target.value)}></TextField><br/>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Số điểm trung chuyển tối đa" fullWidth type='number' InputProps={{inputProps: { min: 0}}} value={midPoint} onChange={e => setMidPoint(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Phí mỗi điểm (VND)" fullWidth type='number' InputProps={{inputProps: { min: 0}}} value={feePerPoint} onChange={e => setFeePerPoint(e.target.value)}></TextField><br/>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Giá khởi điểm (VND)" fullWidth required type='number' InputProps={{inputProps: { min: 0}}} value={startCost} onChange={e => setStartCost(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Giá mỗi km sau đó" id='nextCost' fullWidth placeholder='VD: 3:5000,5:5500' required value={nextCost} onChange={e => setNextCost(e.target.value)}></TextField><br/>
            </Grid>
            {/* {category !== null ? <><Grid item xs={6}>
                <TextField label={'Phụ phí ' + category[0].name} fullWidth required type='number' InputProps={{inputProps: { min: 0}}} value={freeze} onChange={e => setFreeze(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField label={'Phụ phí ' + category[1].name} fullWidth required type='number' InputProps={{inputProps: { min: 0}}} value={electronic} onChange={e => setElectronic(e.target.value)}></TextField>
            </Grid></> : null} */}
        </Grid>
        <Divider style={{margin: '20px 0'}}></Divider>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="contained" style={{backgroundColor: 'green', color: 'white'}} onClick={handleAdd}>Thêm</Button>
            <Button variant="contained" style={{backgroundColor: 'gray', color: 'white'}} onClick={handleClose}>Hủy</Button>
        </div>
        </div>
    );
  
    return (
      <>
        <Button variant='contained' style={{backgroundColor:'green', color: 'white'}} onClick={handleOpen}>
            <Typography>Thêm dịch vụ</Typography>
            <Divider orientation="vertical" flexItem style={{backgroundColor: 'white', margin: '0 10px'}}/>
            <AddIcon></AddIcon>
        </Button>
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
const ServicePrice = (props) => {
    const { category } = props;
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
                        QUẢN LÝ GIÁ DỊCH VỤ
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
                    <Grid item sm={6} style={{padding: '10px 24px'}}>
                        <Add category={category}></Add>
                    </Grid>
                </Grid>
    {/*------------------------- TABLE data  ------------------------------------*/}
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="table pagination">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Tác vụ</StyledTableCell>
                        <StyledTableCell align="center">Tên dịch vụ</StyledTableCell>
                        <StyledTableCell align="center">Giá khởi điểm</StyledTableCell>
                        <StyledTableCell align="center">Phí hủy đơn</StyledTableCell>
                        <StyledTableCell align="center">Số đơn đã đặt</StyledTableCell>
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
                            <StyledTableCell align="center" style={{padding:'8px'}}></StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}></StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}></StyledTableCell>
                            <StyledTableCell align="center" style={{padding:'8px'}}></StyledTableCell>
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
                <div id='test'></div>
            </Container>
        </div>
    );
}

export default ServicePrice;