import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

export default function Activity({ activityDetails }) {
  const cover = activityDetails.attachments.find(t => t.id === activityDetails.idAttachmentCover);
  const otherAttachments = activityDetails.attachments.find(t => t !== cover);
  const location = activityDetails ?.desc.match(/location:?\s?(http.*)\s?/i);
  const journey = activityDetails ?.desc.match(/journey:?\s?(http.*)\s?/i);
  return (
    <Card className="activity">
      {cover && <CardMedia crossOrigin="anonymous" className="media" image={cover.previews[3].url} title={activityDetails.name} />}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {activityDetails.name}
        </Typography>
      </CardContent>
      <CardActions className="actions">
        {otherAttachments && (
          <Button variant="outlined" color="primary" href={otherAttachments.url}>
            <i className="fas fa-file-alt" /> Booking
          </Button>
        )}
        {journey && (
          <Button variant="contained" color="secondary" href={journey[1]}>
            <i className="fas fa-subway 2x" /> Journey
          </Button>
        )}
        {location && (
          <Button variant="contained" color="secondary" href={location[1]}>
            <i className="fas fa-compass 2x" /> Directions
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

Activity.propTypes = {
  activityDetails: PropTypes.object
}