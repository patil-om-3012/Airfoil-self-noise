import React, { useState } from "react";
import Form from "./Form";
import Description from "./Description";
import Text from './Text';

function App() {
    const [results, setPrediction] = useState(null);

    const handlePrediction = (formData) => {
        const url = 'http://127.0.0.1:5000/predict';

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPrediction(data.results); // Ensure data.results is what you expect
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <Description />
            <Text />
            <Form onSubmit={handlePrediction} />
                <div style={{ textAlign: 'center' }}>
                <h3>Predicted SPL in dB</h3>
                <p>{results}</p>
            </div>
            

        </div>
    );
}

export default App;
