import React from 'react';


function NavLink(props) {
    return <div className={props.className}>
            <a href={props.link}>
                {props.name}
            </a>
        </div>
}

export default NavLink;