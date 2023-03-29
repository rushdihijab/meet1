import React, { Component } from 'react';
import Event from './Event';
import { OfflineAlert } from './Alert';
class EventList extends Component {
    state = {
        showCacheAlert: true,
      };

      hideAlert = () => {
        this.setState({
          showCacheAlert: false,
        });
      };


    render() {
        const { events } = this.props;
        return (
            <div>
            {!navigator.onLine ? (
              <div
                onClick={this.hideAlert}
                style={
                  this.state.showCacheAlert
                    ? { display: "flex", justifyContent: "center" }
                    : { display: "none" }
                }
              >
                <OfflineAlert text="Data is coming from cache, internet connection required for updated events " />
              </div>
            ) : (
              <></>
            )}
        
            <ul className="EventList">
                {events.map(event =>
                    <li key={event.id}>
                        <Event event={event} />
                    </li>
                )}
            </ul>
        
            </div>
        );
    }
}

export default EventList; 
