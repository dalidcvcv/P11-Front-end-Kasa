import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown({ title, description, className }) {
    const [isVisible, setVisible] = useState(false);

    function deploy() {
        setVisible(!isVisible);
    }

    return (
        <div className={`${className}`}>
            <div className="dropdown" onClick={deploy}>
                {title} 
                <img 
                    className={`arrow ${!isVisible ? 'arrowUp' : 'arrowDown'}`} 
                    src="/arrowUp.svg" 
                    alt="chevron"
                />
            </div>
            {isVisible && (
                <div className="drop-container_text-description">
                    {description}
                </div>
            )}
        </div>
    );
}
export default Dropdown;
