import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import mapLinks from '../data/mapLinks';
import TrelloService from '../Services/TrelloService';
import Day from './Day';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: pink,
    secondary: {
      main: '#cddc39',
    },
  },
});

function App() {
  const [trello, setTrello] = useState(null);
  useEffect(() => {
    TrelloService.getJson().then(json => setTrello(json));
  }, []);

  if (!trello) {
    return <div />;
  }
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              🍪🥜 Japan Trip
            </Typography>
          </Toolbar>
        </AppBar>
        {trello.lists.map((list, i) => (
          <Day 
            name={list.name} 
            key={list.name} 
            mapLink={mapLinks[i]} 
            cards={trello.cards.filter(
              c => c.idList === list.id && !c.closed
              )} 
            />
        ))}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
