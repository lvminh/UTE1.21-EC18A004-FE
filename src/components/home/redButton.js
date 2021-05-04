import React from 'react';


function RedButton(props) {
    return  <button className={props.className}>
            {props.name}
        </button>
}

export default RedButton;