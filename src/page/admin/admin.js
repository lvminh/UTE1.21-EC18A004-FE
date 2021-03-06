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
import Approval from './approval';
import BusinessState from './businessstate';
import CustomerList from './customerlist';
import ServicePack from './servicepack';
import PartnerList from './partnerlist';
import OrderList from './orderlist';
import {useHistory} from 'react-router-dom';

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

const Admin = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);
   
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div className="admin-cover">
            <div className="sidebar">
                <div className={classes.linksContainer}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs"
                        className={classes.tabs}
                    >
                        <Tab label="Ph?? duy???t doanh nghi???p" {...a11yProps(0)} className={classes.links}/>
                        <Tab label="T??i kho???n kh??ch h??ng" {...a11yProps(1)} className={classes.links}/>
                        <Tab label="T??i kho???n ?????i t??c" {...a11yProps(2)} className={classes.links}/>
                        <Tab label="G??i d???ch v???" {...a11yProps(3)} className={classes.links}/>
                        <Tab label="Qu???n l?? ????n h??ng" {...a11yProps(4)} className={classes.links}/>
                        <Tab label="T??nh h??nh kinh doanh" {...a11yProps(5)} className={classes.links}/>
                    </Tabs>
                </div>
                <Button variant="contained" color="primary" onClick={() => history.push('/')} style={{backgroundColor: 'black'}} id='logout-btn'>????ng xu???t</Button>
            </div>
            <div className="admin-main">
                <AppBar position="static" className={classes.blackLine}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Avatar alt="Avatar" src={avatar} className={classes.large} />
                        </IconButton>
                        <Typography variant="h6" color="inherit" style={{float:'right'}}>
                            Qu???n tr??? vi??n
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="content">
                    <TabPanel value={value} index={0}>
                        <Approval></Approval>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <CustomerList></CustomerList>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <PartnerList></PartnerList>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <ServicePack></ServicePack>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <OrderList></OrderList>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <BusinessState></BusinessState>
                    </TabPanel>
                </div>
            </div>
        </div>
    );
}

export default Admin;