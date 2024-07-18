import React, { useState } from "react";

function Text() {
    const [displayText, setDisplayText] = useState("How are these predictions made? Point your cursor here to know");

    const handleMouseEnter = () => {
        setDisplayText("These predcitions are made by training an ML model on the NASA data set, obtained from a series of aerodynamic and acoustic tests of two and three-dimensional airfoil blade sections conducted in an anechoic wind tunnel.The best model performance as shown by XGBoostRegressor was used to train the dataset.");
    };

    const handleMouseLeave = () => {
        setDisplayText("How are these predictions made? Point your cursor here to know");
    };

    return (
        <div className="text">
            <p
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ padding: '10px' }}
            >
                {displayText}
            </p>
        </div>
    );
}

export default Text;
