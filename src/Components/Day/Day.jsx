import React from 'react';
import PropTypes from "prop-types";
import Activity from './Activity';
import ReactFitText from 'react-fittext';
import { Button } from '@material-ui/core';
export default function Day({ name, cards, mapLink }) {
  return (
    <div className="day">
      <div className="day-title">
        <ReactFitText compressor={1.6}>
          <div className="text">
            <i className="fas fa-calendar-day" />
            {name}
          </div>
        </ReactFitText>

        {mapLink && (
          <Button className="itinerary-button" variant="outlined" color="primary" href={mapLink}>
            <i className="fas fa-map-marked-alt 2x" /> Itinerary
          </Button>
        )}
      </div>

      <div className="card-list">
        {cards.map(t => (
          <Activity key={t.name} activityDetails={t} />
        ))}
      </div>
    </div>
  );
}

Day.propTypes = {
  name: PropTypes.string,
  cards: PropTypes.array,
  mapLink: PropTypes.string,
}
