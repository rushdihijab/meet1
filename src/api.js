import { mockData } from './mock-data';
//  the extractLocations function extracts and returns all unique locations from an array of event objects.

export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
};

export const getEvents = async () => {
    return mockData;
};
