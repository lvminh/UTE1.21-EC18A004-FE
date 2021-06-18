import React from 'react';
import {Button} from '@material-ui/core'
// import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import avatar from '../../assets/user.jpg';
//pages
import ServicePrice from './serviceprice';
import PartnerOrderList from './partnerorderlist';
import PartnerServicePack from './partnerservicepack';
import Discount from './discount';

const useStyles = makeStyles((theme) => ({
    links: {
        fontSize: 16,
        color: 'white',
        '&:hover': {
            color: 'black'
        }
    },
    linksContainer: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        height: 400,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '90%'
    },
    tabs: {
        width: '100%'
    },
    blackLine: {
        backgroundColor: 'black',
        height: '10%',
        width: '100%',
        padding: 10
    },
    largeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>{children}</>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Partner = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return(
        <div className="admin-cover">
            <div className="sidebar" style={{backgroundColor: 'rgb(255 103 103)'}}>
                <div className={classes.linksContainer}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs"
                        className={classes.tabs}
                        indicatorColor='primary'
                    >
                        <Tab label="Quản lý giá dịch vụ" {...a11yProps(0)} className={classes.links}/>
                        <Tab label="Quản lý đơn hàng" {...a11yProps(1)} className={classes.links}/>
                        <Tab label="Gói dịch vụ" {...a11yProps(2)} className={classes.links}/>
                        <Tab label="Mã giảm giá" {...a11yProps(3)} className={classes.links}/>
                        <Tab label="Tình hình kinh doanh" {...a11yProps(4)} className={classes.links}/>
                    </Tabs>
                </div>
                <Button variant="contained" color="primary" style={{backgroundColor: 'black'}} id='logout-btn'>Đăng xuất</Button>
            </div>
            <div className="admin-main">
                <AppBar position="static" className={classes.blackLine}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Avatar alt="Avatar" src={avatar} className={classes.large} />
                        </IconButton>
                        <Typography variant="h6" color="inherit" style={{float:'right'}}>
                            Doanh nghiệp
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="content">
                    <TabPanel value={value} index={0}>
                        <ServicePrice></ServicePrice>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <PartnerOrderList></PartnerOrderList>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <PartnerServicePack></PartnerServicePack>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Discount></Discount>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        {/* <OrderList></OrderList> */}
                    </TabPanel>
                </div>
            </div>
        </div>
    );
}

export default Partner;