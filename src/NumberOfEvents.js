import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
    };

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({
            numberOfEvents: value,
        });
        // this.props.updateEvents(null, value);
    };

    render() {
        return (
            <div className="NumberOfEvents">
                <input
                    type="text"
                    className="number"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;
