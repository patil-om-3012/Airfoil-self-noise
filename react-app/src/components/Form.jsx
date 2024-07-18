import React, { useState } from "react";

function Form({ onSubmit }) {
    const [frequency, setFrequency] = useState("");
    const [angleOfAttack, setAngleOfAttack] = useState("");
    const [chordLength, setChordLength] = useState("");
    const [freeStreamVelocity, setFreeStreamVelocity] = useState("");
    const [suctionSideDisplacementThickness, setSuctionSideDisplacementThickness] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            frequency,
            angle_of_attack: angleOfAttack,
            chord_length: chordLength,
            free_stream_velocity: freeStreamVelocity,
            suction_side_displacement_thickness: suctionSideDisplacementThickness
        });
    };

    return (
        <div className="userForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="frequency">Frequency (Hz):</label><br />
                <input
                    type="number"
                    id="frequency"
                    name="frequency"
                    placeholder="Enter frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    required /><br /><br />

                <label htmlFor="angle">Angle of Attack (°):</label><br />
                <input
                    type="number"
                    id="angle"
                    name="angle_of_attack"
                    placeholder="Enter angle of attack"
                    value={angleOfAttack}
                    onChange={(e) => setAngleOfAttack(e.target.value)}
                    required /><br /><br />

                <label htmlFor="chord">Chord Length (m):</label><br />
                <input
                    type="number"
                    id="chord"
                    name="chord_length"
                    placeholder="Enter chord length"
                    value={chordLength}
                    onChange={(e) => setChordLength(e.target.value)}
                    required /><br /><br />

                <label htmlFor="velocity">Free-Stream Velocity (m/s):</label><br />
                <input
                    type="number"
                    id="velocity"
                    name="free_stream_velocity"
                    placeholder="Enter free-stream velocity"
                    value={freeStreamVelocity}
                    onChange={(e) => setFreeStreamVelocity(e.target.value)}
                    required /><br /><br />

                <label htmlFor="thickness">Suction Side Displacement Thickness (mm):</label><br />
                <input
                    type="number"
                    id="thickness"
                    name="suction_side_displacement_thickness"
                    placeholder="Enter displacement thickness"
                    value={suctionSideDisplacementThickness}
                    onChange={(e) => setSuctionSideDisplacementThickness(e.target.value)}
                    required /><br /><br />

                <button type="submit">Predict</button>
            </form>
        </div>
    );
}

export default Form;
