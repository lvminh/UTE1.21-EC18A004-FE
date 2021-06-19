import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import GgMap from '../../components/GgMap'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';

//input map
function loadScript(src, position, id) {
    if (!position) {
        return;
    }
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}
const autocompleteService = { current: null };






const deliveryPackpage = [
    { title: 'Super fast delivery', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
];

const useStyles = makeStyles((theme) => ({
    icon: {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(2),
    },
    formControl: {
        // margin: theme.spacing(1),
        width: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));


function Gonow() {
    const [pickUp, setPickUp] = useState();
    const [pickUpName, setPickUpName] = useState();
    const [pickUpPhone, setPickUpPhone] = useState();
    const [delivery, setDeli] = useState();
    const [deliveryName, setDeliName] = useState();
    const [deliveryPhone, setDeliPhone] = useState();
    const handleChangePickUp = (event) => {
        setPickUp(event.target.value);
    };
    const handleChangePickUpName = (event) => {
        setPickUpName(event.target.value);
    };
    const handleChangePickUpPhone = (event) => {
        setPickUpPhone(event.target.value);
    };
    const handleChangeDeli = (event) => {
        setDeli(event.target.value);
    };
    const handleChangeDeliName = (event) => {
        setDeliName(event.target.value);
    };
    const handleChangeDeliPhone = (event) => {
        setDeliPhone(event.target.value);
    };


    const classes = useStyles();

    //select
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    //radio
    const [valueRadio, setValueRadio] = React.useState('country');

    const handleChangeRadio = (event) => {
        setValueRadio(event.target.value);
    };


    return (
        <>
            <div className="cover goNowCover">
                <div className="rec" />
                <div className="page">
                    <Navbar />
                    <div className="main goNowPage">
                        <div className="row">
                            <div className="col-6 goNowPage-left">
                                <div className="Route">
                                    <h3>Route</h3>
                                    <div className="Route-Pickup bgcolor">
                                        <p>Vị trí nhận:</p>
                                        <TextField
                                            id="standard-multiline-flexible"
                                            label="Địa chỉ:"
                                            onChange={handleChangePickUp}
                                            className="col-12"
                                        />
                                        <div className="row namePhonePickUp">
                                            <div className="col-6 pickupName">
                                                <TextField
                                                    id="standard-multiline-flexible"
                                                    label="Tên người gửi:"
                                                    onChange={handleChangePickUpName}
                                                    className="col-12"
                                                />
                                            </div>
                                            <div className="col-6 pickupPhone">
                                                <TextField
                                                    id="standard-multiline-flexible"
                                                    label="Điện thoại:"
                                                    onChange={handleChangePickUpPhone}
                                                    className="col-12"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Route-Deli bgcolor">
                                        <p>Giao hàng tới:</p>
                                        <TextField
                                            id="standard-multiline-flexible"
                                            label="Địa chỉ:"
                                            onChange={handleChangeDeli}
                                            className="col-12"
                                        />
                                        <div className="row namePhonePickUp">
                                            <div className="col-6 pickupName">
                                                <TextField
                                                    id="standard-multiline-flexible"
                                                    label="Tên người nhận:"
                                                    onChange={handleChangeDeliName}
                                                    className="col-12"
                                                />
                                            </div>
                                            <div className="col-6 pickupPhone">
                                                <TextField
                                                    id="standard-multiline-flexible"
                                                    label="Điện thoại:"
                                                    onChange={handleChangeDeliPhone}
                                                    className="col-12"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Delivery-Unit">
                                    <h3>Đơn vị giao hàng</h3>
                                    <div className="col-12">
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-label">Chọn đơn vị giao hàng</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={1}>Grab</MenuItem>
                                                <MenuItem value={2}>Giao Hàng Tiết Kiệm</MenuItem>
                                                <MenuItem value={3}>Ahamove</MenuItem>
                                                <MenuItem value={4}>Lalamove</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="col-12">
                                        <div className="choosePrice">
                                            <p>Giá:</p>
                                            <div className="row">
                                                <div className="col-11 offset-1">
                                                    <FormControl component="fieldset">
                                                        <RadioGroup aria-label="gender" name="gender1" value={valueRadio} onChange={handleChangeRadio}>
                                                            <FormControlLabel value="country" control={<Radio />} label="20.000 - 1km " />
                                                            <FormControlLabel value="network" control={<Radio />} label="35.000 - 1km" />
                                                            <FormControlLabel value="other" control={<Radio />} label="40.000 - 1km" />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 goNowPage-right">
                                <div className="NewOrder">
                                    <h3>Đơn hàng mới</h3>
                                    <Autocomplete
                                        className="col-12"
                                        id="combo-box-demo"
                                        options={deliveryPackpage}
                                        getOptionLabel={(option) => option.title}
                                        style={{ width: "100%" }}
                                        renderInput={(params) => <TextField {...params} label="Chọn gói giao hàng" variant="outlined" />}
                                    />
                                </div>
                                <div className="ggMap">
                                    {/* <Autocomplete
                                        id="google-map-demo"
                                        style={{ width: 300 }}
                                        getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
                                        filterOptions={(x) => x}
                                        options={options}
                                        autoComplete
                                        includeInputInList
                                        filterSelectedOptions
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setOptions(newValue ? [newValue, ...options] : options);
                                            setValue(newValue);
                                        }}
                                        onInputChange={(event, newInputValue) => {
                                            setInputValue(newInputValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} label="Add a location" variant="outlined" fullWidth />
                                        )}
                                        renderOption={(option) => {
                                            const matches = option.structured_formatting.main_text_matched_substrings;
                                            const parts = parse(
                                                option.structured_formatting.main_text,
                                                matches.map((match) => [match.offset, match.offset + match.length]),
                                            );

                                            return (
                                                <Grid container alignItems="center">
                                                    <Grid item>
                                                        <LocationOnIcon className={classes.icon} />
                                                    </Grid>
                                                    <Grid item xs>
                                                        {parts.map((part, index) => (
                                                            <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                                                {part.text}
                                                            </span>
                                                        ))}

                                                        <Typography variant="body2" color="textSecondary">
                                                            {option.structured_formatting.secondary_text}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            );
                                        }}
                                    /> */}
                                    {/* //ggmap in here */}
                                    <GgMap/>
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

export default Gonow
