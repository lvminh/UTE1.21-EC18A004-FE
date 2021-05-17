import React from 'react'
// import ReactDOM from 'react-dom';
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// import Slider from '../../components/Slider'
const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(180deg, #FFE248 35.21%, rgba(252, 212, 0, 0.66) 100%);',
        //   borderRadius: 3,
        borderRadius: 50,
        color: '#D40000',
        height: 50,
        fontSize: 25,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },

})(Button);
const useStyles = makeStyles((theme) => ({
    formControl: {
        // margin: theme.spacing(1),
        minWidth: '100%',
        color: '#ffffff',
        // fontSize:25
    },
    label: {
        color: '#ffffff',
        marginTop: -10,
        fontSize: 25,
    },
    d: {
        marginTop: theme.spacing(100),
    },
}));
function Regist(props) {
    let router = useHistory()
    const { children, className, ...other } = props;
    const classes = useStyles();
    const [defaultt, setRole] = React.useState('OK');
    const handleChange = (event) => {
        setRole(event.target.value);
    };
    const callRegist = () => {
        let a = document.querySelector('.loginPage');
        let b = document.querySelector('.RegistPage');

        // let c = document.querySelector('.RegistPage .registPage_left');
        // let d = document.querySelector('.RegistPage .registPage_right');
        a.style.transform = "translateX(-100%)"
        // a.style.display="none";
        // b.style.display="inherit"
        b.style.transform = "translateX(-52%)"
        // c.style.display="block";
        // d.style.display="block"
        console.log(a, b);
    }
    return (
        <>
            <div className="cover registcover">
                <div className="rec" />
                <div className="page">
                    <Navbar />
                    <div className="main registPage">
                        <div className="form-login">
                            <div className="row coverregist loginPage container ">
                                <div className="col-md-6 registPage_left login">
                                    <div className="regist_wellcome">
                                        <p>Welcome to</p>
                                        <h2>EasyGo</h2>
                                    </div>
                                    <div className="regist_decription">
                                        <p>
                                            Where you can safely send goods to your customers, relatives & friends
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 registPage_right login">
                                    <div className="form_regist">
                                        <div className="form_regist-title">Login</div>
                                        <div className="form_regist-child">
                                            <p>Username:</p>
                                            <input></input>
                                        </div>
                                        <div className="form_regist-child">
                                            <p>Password:</p>
                                            <input></input>
                                        </div>
                                        <div className="form_regist-child">
                                            <FormControl className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-label" className={classes.label}>Role:</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={defaultt}
                                                    onChange={handleChange}
                                                    className={classes.label}
                                                >
                                                    <MenuItem value={1}>User</MenuItem>
                                                    <MenuItem value={2}>Partner</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="row buttons">
                                            <StyledButton onClick={() => router.push("/yourpage")}>Login</StyledButton>
                                        </div>
                                        <div className="row buttons">
                                            <StyledButton onClick={callRegist}>Create Account</StyledButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row coverregist RegistPage container ">
                                <div className="col-md-6 registPage_left registt">
                                    <div className="regist_wellcome">
                                        <p>Welcome to</p>
                                        <h2>EasyGo</h2>
                                    </div>
                                    <div className="regist_decription">
                                        <p>
                                            Register to become our member and get many offers
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 registPage_right registt">
                                    <div className="form_regist">
                                        <div className="form_regist-title">Create Account</div>
                                        <div className="form_regist-child">
                                            <p>Username:</p>
                                            <input></input>
                                        </div>
                                        <div className="form_regist-child">
                                            <p>Password:</p>
                                            <input></input>
                                        </div>
                                        <div className="form_regist-child">
                                            <p>Phone:</p>
                                            <input></input>
                                        </div>
                                        <div className="form_regist-child">
                                            <p>Email:</p>
                                            <input></input>
                                        </div>
                                        {/* <div className="form_regist-child role">
                                            <FormControl className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-label" className={classes.label}>Role:</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={defaultt}
                                                    onChange={handleChange}
                                                    className={classes.label}
                                                >
                                                    <MenuItem value={1}>User</MenuItem>
                                                    <MenuItem value={2}>Partner</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div> */}
                                        <div className="row buttons">
                                            <StyledButton onClick={() => router.push("/yourpage")}>Login</StyledButton>
                                        </div>
                                    </div>
                                </div>
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
// Regist.propTypes = {
//     children: PropTypes.node,
//     classes: PropTypes.object.isRequired,
//     className: PropTypes.string,
//   };

export default (Regist)
