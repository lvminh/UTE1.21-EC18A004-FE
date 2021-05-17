import React from 'react'
// import { Router, Route, Switch } from 'react-router'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
// import Slider from '../../components/Slider'
import bell from '../../assets/Icons/bell.svg'
// import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import HomeIcon from '@material-ui/icons/Home';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import avtImage from '../../assets/1.JPG';
import TextField from '@material-ui/core/TextField';


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

function TabPanel2(props) {
    const { children, value2, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value2 !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value2 === index && (
                <>{children}</>
            )}
        </div>
    );
}
TabPanel2.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        backgroundColor: 'none',
        alignItems: "center",
        justifyContent:"space-between"
    },
    card: {
        background: "#E5E5E5",
        width: "990px",
        height: "700px",
        borderRadius: "25px"
    },
    cardChild: {
        width: "100%",
        borderRadius: "25px",
        height: "100%",
    },
    cardChildInfnor: {
        width: "100%",
        borderRadius: "25px",
        height: "100%",
        background: "rgba(207, 200, 200, 0.59)"
    },
    cardChildHalf: {
        width: "100%",
        borderRadius: "25px",
        // height:"100%"
    },
    tabs: {
        height: "500px",
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabs2: {
        height: "150px",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 25,
        fontFamily: "AV",
        fontWeight: 700,
        fontFamily: "BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif"
    },
    pos: {
        marginBottom: 12,
    },
    allCard: {
        height: "100%"
    },
    large: {
        width: "100px",
        height: "100px",
    },
}));
function Yourpage() {
    const [firstName] = React.useState('Trung');
    const classes = useStyles();
    const [fixx, setFix] = React.useState(true);
    const [value, setValue] = React.useState(0);
    const [value2, setValue2] = React.useState(0);
    const [oldPassword, setOldPassword] = React.useState();
    const [newPassword, setNewPassword] = React.useState();
    const [confirmPassword, setConfirmPassword] = React.useState();
    const [name, setName] = React.useState('Phạm Thành Trung');
    const [phone, setPhone] = React.useState('0344153425');
    const [mail, setMail] = React.useState('trung08052000@gmail.com');
    const [address, setAddress] = React.useState('0344153425');
    
    const handleChange = (event, newValue) => {
        // this.value1=newValue;
        setValue(newValue);
        // this.value1=newValue;
    };
    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };
    const handleChangeMail = (event) => {
        setMail(event.target.value);
    };
    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    };
    const handleChange2 = (event, newValue) => {
        // this.value1=newValue;
        setValue2(newValue);
    }
    const handleChangeInput = (event) => {
        setOldPassword(event.target.value);
    };
    const handleChangeInputNewPass = (event) => {
        setNewPassword(event.target.value);
    };
    const handleChangeInputConfirmPass = (event) => {
        setConfirmPassword(event.target.value);
    };
    const fix = () => {
        // console.log('fix')
        if (fixx) {
            setFix(false)
            let a = document.querySelector('.btnFix');
            a.innerHTML = "Save"
            a.style.background = "#0E9333"
            a.style.color = "#ffffff"
        } else {
            setFix(true)
            let a = document.querySelector('.btnFix');
            a.innerHTML = "Edit"
            a.style.color = "#000000"
            a.style.background = "#F1CC07"
        }
        // this.setState({ value : 'hey' });
    }
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <>
            <div className="cover accountcover">
                <div className="rec" />
                <div className="page">
                    <Navbar />
                    <div className="main account">
                        <div className="account-page">
                            <div className="row">
                                <div className="col-md-6 offset-6 notification">
                                    <div className="avatar">
                                        <Avatar className={classes.small} alt="Remy Sharp" src={avtImage} />
                                    </div>
                                    <h4>Hello, {firstName}!</h4>
                                    <div className="bell">
                                        <img src={bell}></img>
                                        <div className="noti">05</div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.root}>

                                <Tabs
                                    orientation="vertical"
                                    variant="scrollable"
                                    value={value}
                                    aria-label="Vertical tabs example"
                                    onChange={handleChange}
                                    className={classes.tabs}
                                >
                                    <Tab icon={<HomeIcon />} label="Home" {...a11yProps(0)} />
                                    <Tab icon={<ClearAllIcon />} label="Gonow" {...a11yProps(1)} />
                                    <Tab icon={<StarBorderRoundedIcon />} label="Evalue" {...a11yProps(2)} />
                                    <Tab icon={<SettingsIcon />} label="Setting" {...a11yProps(3)} />
                                </Tabs>
                                <TabPanel value={value} index={0}>
                                    <Card className={classes.card}>
                                        <CardContent className={classes.allCard}>
                                            <div className="row prolife">
                                                <div className="col-md-6">
                                                    <div className="cardCol">
                                                        <Card className={classes.cardChildHalf}>
                                                            <CardContent className="card-child">
                                                                <h3 className={classes.title}>Your Card</h3>
                                                                <div className="row your-card">
                                                                    <div className="col-md-8 your-card-title">
                                                                        <p>192209*** - VP Bank</p>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="btnDel">Delete</div>
                                                                    </div>
                                                                </div>
                                                                <div className="row your-card ">
                                                                    <div className="col-md-8 your-card-title">
                                                                        <p>192209*** - VP Bank</p>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="btnDel">Delete</div>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                            {/* <CardActions>

                                                            </CardActions> */}
                                                        </Card>
                                                        <Card className={classes.cardChildHalf}>
                                                            <CardContent className="card-child">
                                                                <h3 className={classes.title}>Your Order</h3>
                                                                <div className="row your-order">
                                                                    <div className="col-md-8 your-order-title">
                                                                        <p>Ship to Hoài</p>
                                                                        <span>25/3/2021 9:00 Am</span>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="spanStatusComp">Completed</div>
                                                                    </div>
                                                                </div>
                                                                <div className="row your-order ">
                                                                    <div className="col-md-8 your-order-title">
                                                                        <p>Ship to Linh</p>
                                                                        <span>25/3/2021 9:00 Am</span>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="spanStatusComm">Comming</div>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                            {/* <CardActions>

                                                            </CardActions> */}
                                                        </Card>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <Card className={classes.cardChild}>
                                                        <CardContent>
                                                            <div className="cardd">
                                                                <div className="card-header">
                                                                    <div className="card-title">
                                                                        <h3 className={classes.title}>Your Prolife</h3>
                                                                    </div>
                                                                    <div className="avt">
                                                                        <Avatar className={classes.large} alt="Remy Sharp" src={avtImage} />
                                                                    </div>
                                                                    <div className="rectang">
                                                                    </div>
                                                                    <div className="rectangel">
                                                                    </div>
                                                                </div>
                                                                <div className="card-content colRight">
                                                                    <h3>Phạm Thành Trung</h3>
                                                                    <p>trung08052000@gmail.com</p>
                                                                    <p>0344153***</p>
                                                                    <p>Username: Nhokbeobun</p>
                                                                    <p>Password:****************</p>
                                                                    <div className="btnFix">Edit</div>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                        <CardActions>

                                                        </CardActions>
                                                    </Card>
                                                </div>
                                            </div>
                                            {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                Word of the Day
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                                be{bull}nev{bull}o{bull}lent
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                                adjective
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                well meaning and kindly.
                                                <br />
                                                {'"a benevolent smile"'}
                                            </Typography> */}
                                        </CardContent>
                                        {/* <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions> */}
                                    </Card>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                Word of the Day
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                                be{bull}nev{bull}o{bull}lent
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                                adjective
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                well meaning and kindly.
                                                <br />
                                                {'"a benevolent smile"'}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                Word of the Day
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                                be{bull}nev{bull}o{bull}lent
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                                adjective
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                well meaning and kindly.
                                                <br />
                                                {'"a benevolent smile"'}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <h3 className={classes.title}>Your Card</h3>
                                            <div className='row'>
                                                <div className="col-3">
                                                    <Tabs
                                                        orientation="vertical"
                                                        variant="scrollable"
                                                        value={value2}
                                                        aria-label="Vertical tabs example"
                                                        onChange={handleChange2}
                                                        className={classes.tabs2}
                                                    >
                                                        <Tab label="Account" {...a11yProps(0)} />
                                                        <Tab label="Change Password" {...a11yProps(1)} />
                                                        <Tab label="Log Out" {...a11yProps(2)} />
                                                    </Tabs>
                                                </div>
                                                <div className='col-9'>
                                                    <TabPanel value={value2} index={0}>
                                                        <Card className={classes.cardChildInfnor}>
                                                            <CardContent>
                                                                <div className="InforUser">
                                                                    <div className="avatar col-3">
                                                                        <Avatar className={classes.large} alt="Remy Sharp" src={avtImage} />
                                                                        <span>Edit</span>
                                                                    </div>
                                                                    <div className="informationUser col-9">
                                                                        <div className="row informationUser_account">
                                                                            <TextField disabled={fixx}
                                                                                id="standard-disabled"
                                                                                label="Name:"
                                                                                value={name}
                                                                                onChange={handleChangeName}
                                                                                className="col-12" />
                                                                            {/* <input> Phạm Thành Trung</input> */}
                                                                        </div>
                                                                        <div className="row informationUser_account">
                                                                            <TextField disabled={fixx} id="standard-disabled"
                                                                                label="Phone:"
                                                                                value={phone}
                                                                                onChange={handleChangePhone}
                                                                                className="col-12" />
                                                                            {/* <input> Phạm Thành Trung</input> */}
                                                                        </div>
                                                                        <div className="row informationUser_account">
                                                                            <TextField disabled={fixx}
                                                                                id="standard-disabled"
                                                                                label="Email:"
                                                                                value={mail}
                                                                                onChange={handleChangeMail}
                                                                                className="col-12" />
                                                                            {/* <input> Phạm Thành Trung</input> */}
                                                                        </div>
                                                                        <div className="row informationUser_account">
                                                                            <TextField disabled={fixx}
                                                                                id="standard-disabled"
                                                                                label="Address:"
                                                                                value={address}
                                                                                onChange={handleChangeAddress}
                                                                                className="col-12" />
                                                                            {/* <input> Phạm Thành Trung</input> */}
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className="btnFix col-2 offset-6" onClick={fix}>Edit</div>
                                                            </CardContent>

                                                        </Card>
                                                    </TabPanel>
                                                    <TabPanel value={value2} index={1}>
                                                        <Card className={classes.cardChildInfnor}>
                                                            <Card className={classes.cardChildInfnor}>
                                                                <CardContent>
                                                                    <div className="InforUser">
                                                                        <div className="informationUser col-12">
                                                                            <div className="row informationUser_changepassword">
                                                                                <TextField
                                                                                    id="standard-multiline-flexible"
                                                                                    label="Old Password:"
                                                                                    value={oldPassword}
                                                                                    onChange={handleChangeInput}
                                                                                    className="col-12"
                                                                                />
                                                                                {/* <input> Phạm Thành Trung</input> */}
                                                                            </div>
                                                                            <div className="row informationUser_changepassword">
                                                                                <TextField
                                                                                    id="standard-multiline-flexible"
                                                                                    label="New Password:"
                                                                                    value={newPassword}
                                                                                    onChange={handleChangeInputNewPass}
                                                                                    className="col-12"
                                                                                />
                                                                                {/* <input> Phạm Thành Trung</input> */}
                                                                            </div>
                                                                            <div className="row informationUser_changepassword">
                                                                                <TextField
                                                                                    id="standard-multiline-flexible"
                                                                                    label="Confirm Password:"
                                                                                    value={confirmPassword}
                                                                                    onChange={handleChangeInputConfirmPass}
                                                                                    className="col-12"
                                                                                />                                                                                {/* <input> Phạm Thành Trung</input> */}
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div className="btnSave col-2 offset-5">Save</div>
                                                                </CardContent>
                                                            </Card>
                                                        </Card>
                                                    </TabPanel>
                                                    <TabPanel value={value2} index={2}>
                                                        <Card className={classes.cardChild}>

                                                        </Card>
                                                    </TabPanel>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabPanel>

                            </div>
                        </div>
                    </div>
                    <div className="footer" id="footer">
                        <Footer />
                    </div>
                </div>
                <div className="bot" />
            </div>
        </>
    )
}

export default Yourpage
