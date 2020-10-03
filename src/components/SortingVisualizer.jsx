import React, { Component } from "react";
import "./SortingVisualizer.css";

class Sorting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromFunction(10, 500));
        }
        this.setState({ array });
    }

    render() {
        const { array } = this.state;

        return (
            <React.Fragment>
            <button onClick={() => this.resetArray()}>Generate</button><br />
            <div className="array-container">
            {array.map((value, idx) => (
                <div
                className="array-bar"
                key={idx}
                style={{ 
                    height:`${value}px`
                 }}
                />
                ))}
            </div>
            </React.Fragment>
        );
    }
}

function randomIntFromFunction(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Sorting;