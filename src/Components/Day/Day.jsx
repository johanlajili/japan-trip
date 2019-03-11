import React from 'react';
import PropTypes from "prop-types";
import Activity from './Activity';
import { Typography, Button } from '@material-ui/core';
export default function Day({ name, cards, mapLink }) {
  return (
    <div className="day">
      <div className="day-title">
        <div className="text">
          <i className="fas fa-calendar-day" />
          <Typography variant="h6">{name}</Typography>
        </div>

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
