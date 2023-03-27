import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: this.props.numberOfEvents,
        errorText: '',
    };

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1) {
            this.setState({
                errorText: 'Select number from 1 to 32',
                numberOfEvents: 1,
            });
        } else if (value > 32) {
            this.setState({
                errorText: 'Select number from 1 to 32',
                numberOfEvents: 32,
            });
        } else {
            this.setState({
                errorText: '',
                numberOfEvents: value,
            });
            this.props.updateNumEvents(value);
        }
    };

    render() {
        return (
            <div className="NumberOfEvents">
                <p>Number of events would you like to see?</p>
                <input
                    type="number"
                    className="number"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
                <ErrorAlert text={this.state.errorText} />
            </div>
        );
    }
}

export default NumberOfEvents;
