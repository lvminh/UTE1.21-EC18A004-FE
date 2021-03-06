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
import GoogleLogin from 'react-google-login';
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
    Roler: {
        width: '75%',
        margin: '20px auto'
    },
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
    loginGG: {
        marginBottom: 10,
    },
}));
function Regist(props) {
    let router = useHistory()
    // const { children, className} = props;
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");

    const [role, setRole] = React.useState('');
    localStorage.setItem("loginGG", "NO")
    // const handleChange = (event) => {
    //     setRole(event.target.value);
    // };
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
    };
    // const responseGoogle=(response)=>{
    //     // router.push("/yourpage")
    //     console.log(response);
    //     console.log(response.profileObj.email);
    //     localStorage.setItem("loginGG","YES")
    //     localStorage.setItem("user-infor",JSON.stringify(response.profileObj))
    //     // localStorage.setItem("personName",response.profileObj.name)
    //     // localStorage.setItem("personMail",response.profileObj.email)
    //     // console.log(localStorage.getItem("person"));
    //     // registed();
    // }  
    const responseGoogleRegist = (response) => {
        // router.push("/yourpage")
        console.log(response);
        console.log(response.profileObj.email);
        // localStorage.setItem("loginGG","YES")
        localStorage.setItem("user-infor", JSON.stringify(response.profileObj))
        // localStorage.setItem("personName",response.profileObj.name)
        // localStorage.setItem("personMail",response.profileObj.email)
        // console.log(localStorage.getItem("person"));
        // registed();
        if (response.profileObj.email === email) {
            console.log('oke')
            registed()
            router.push("/regist")
        }
    }
    async function login() {
        if(role==='user'){
            let item = { email, password };
            let result = await fetch("http://localhost:5000/account/auth/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            console.log(JSON.stringify(result.accessToken));
            infor(result.accessToken);
            localStorage.setItem("loginGG", "NO")
            router.push("/yourpage")
        }else if(role==='company'){
            console.log('company')
            let item = { email, password };
            let result = await fetch("http://localhost:5000/account/auth/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            console.log(JSON.stringify(result.accessToken));
            infor(result.accessToken);
            localStorage.setItem("loginGG", "NO")
            router.push("/partner")
        }else if(role==='admin'){
            router.push("/admin")
            
        }
        
    }
    async function infor(id) {
        let infor = await fetch("http://localhost:5000/account/read", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + id
            },
            // body: JSON.stringify('Bearer'+ id)
        })
        infor = await infor.json();
        console.log(JSON.stringify(infor));
        localStorage.setItem("user-infor", JSON.stringify(infor));
    }
    async function registed() {
        if (role === 'user') {
            let item = { email, phone, role, password, name };
            console.log(item)
            let result = await fetch("http://localhost:5000/account/create/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            console.log(JSON.stringify(result.accessToken));
            infor(result.accessToken);
        } else {
            let item = { email, phone, role, password, name,address };
            console.log(item)
            let result = await fetch("http://localhost:5000/account/create/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(item)

            });
            result = await result.json();
            console.log(JSON.stringify(result.accessToken));
            infor(result.accessToken);
        }


        _refreshPage()
    }
    function _refreshPage() {
        console.log("Clicked");
        window.location.reload();
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
                                        N??i b???n c?? th??? an t??m g???i h??ng cho kh??ch h??ng, ng?????i th??n & b???n b?? c???a m??nh
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 registPage_right login">
                                    <div className="form_regist">
                                        <div className="form_regist-title">????ng Nh???p</div>
                                        <div className="form_regist-child">
                                            <p>T??n ????ng nh???p:</p>
                                            <input type="text" placeholder="Email"
                                                onChange={(e) => setEmail(e.target.value)}></input>
                                        </div>
                                        <div className="form_regist-child">
                                            <p>M???t kh???u:</p>
                                            <input type="password" placeholder="Password"
                                                onChange={(e) => setPassword(e.target.value)}></input>
                                        </div>
                                        <div className="form_regist-child">
                                            <FormControl className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-label" className={classes.label}>Vai tr??:</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={role}
                                                    onChange={(e) => setRole(e.target.value)}
                                                    className={classes.label}
                                                >
                                                    <MenuItem value={'user'}>Ng?????i d??ng</MenuItem>
                                                    <MenuItem value={'company'}>?????i t??c</MenuItem>
                                                    <MenuItem value={'admin'}>Qu???n tr???</MenuItem>

                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="row buttons">
                                            <StyledButton onClick={login}>????ng Nh???p</StyledButton>
                                        </div>
                                        {/* <div>
                                            <GoogleLogin
                                            className={classes.loginGG}
                                                clientId="163857639957-rlvbfnhcjrcn5g14ds7vqam720ohcp0b.apps.googleusercontent.com"
                                                buttonText="Login with Google"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                            />
                                        </div> */}
                                        <div className="row buttons">
                                            <StyledButton onClick={callRegist}>T???o T??i Kho???n</StyledButton>
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
                                        ????ng k?? tr??? th??nh th??nh vi??n c???a ch??ng t??i v?? nh???n nhi???u ??u ????i
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 registPage_right registt">
                                    <div className="form_regist">
                                        <div className="form_regist-title">T???o T??i Kho???n</div>
                                        <div className="form_regist-child">
                                            <p>T??n ????ng nh???p:</p>
                                            <input type="text" placeholder="Email"
                                                onChange={(e) => setEmail(e.target.value)}></input>
                                        </div>

                                        <div className="form_regist-child">
                                            <p>M???t kh???u:</p>
                                            <input type="password" placeholder="Password"
                                                onChange={(e) => setPassword(e.target.value)}></input>
                                        </div>
                                        <div className="form_regist-child">
                                            <p>??i???n tho???i:</p>
                                            <input type="number" placeholder="Phone"
                                                onChange={(e) => setPhone(e.target.value)}></input>
                                        </div>
                                        <div className="form_regist-child">
                                            <p>T??n:</p>
                                            <input type="text" placeholder="Name"
                                                onChange={(e) => setName(e.target.value)}></input>
                                        </div>
                                        {role === 'company' ? (
                                            <div className="form_regist-child">
                                                <p>?????a ch???:</p>
                                                <input type="text" placeholder="Address"
                                                    onChange={(e) => setAddress(e.target.value)}></input>
                                            </div>
                                        ) : (
                                            <div className="form_regist-child">
                                            </div>
                                        )}

                                        <FormControl className={classes.Roler}>
                                            <InputLabel id="demo-simple-select-label" className={classes.label}>Role:</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                                className={classes.label}
                                            >
                                                <MenuItem value={'user'}>Ng?????i d??ng</MenuItem>
                                                <MenuItem value={'company'}>?????i t??c</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <div className="row buttons">
                                            {/* <StyledButton onClick={registed}>Login</StyledButton> */}
                                            <GoogleLogin
                                                className={classes.loginGG}
                                                clientId="163857639957-rlvbfnhcjrcn5g14ds7vqam720ohcp0b.apps.googleusercontent.com"
                                                buttonText="X??c th???c qua Google"
                                                onSuccess={responseGoogleRegist}
                                                onFailure={responseGoogleRegist}
                                                cookiePolicy={'single_host_origin'}
                                            />
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
