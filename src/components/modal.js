import React from 'react';


function Modal(props) {
    
    return  (
        <div>
            <button className='modal-btn'>
                <div className="white-circle"></div>
            </button>
            <h3 className="font-25 color-white">{props.content}</h3>
        </div>
    );
}

export default Modal;