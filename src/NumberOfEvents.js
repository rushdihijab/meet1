import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: this.props.numberOfEvents,
    };

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({
            numberOfEvents: value,
        });

      this.setState({
        numberOfEvents: value,
      });
      this.props.updateNumEvents(value);
    };

    render() {
        return (
            <div className="NumberOfEvents">
                <p>number of events would you like to see?</p>
                <input
                    type="number"
                    className="number"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;
