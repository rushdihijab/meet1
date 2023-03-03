import React, { Component } from 'react';

class Event extends Component {
    state = {
        showDetails: false
    }

    handleShowDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        });
    }

    render() {
        const { event } = this.props;
        const { showDetails } = this.state;

        return (
            <div className="event">
                <div className="event-info">
                    <div className="event-summary">{event.summary}</div>
                    <div className="event-date"> {new Date(event.start.dateTime).toString()} {new Date(event.start.dateTime).toString()}</div>
                    <div className="event-location">{event.location}</div>
                </div>
                {showDetails && (
                    <div className="event-details">
                        <div className="event-description">{event.description}</div>
                    </div>
                )}
                <button className="show-details-btn" onClick={this.handleShowDetails}>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
        );
    }
}

export default Event;