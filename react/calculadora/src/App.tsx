import React from 'react';
import { Button, IconButton, TextField } from '@mui/material';

import Fingerprint from '@mui/icons-material/Fingerprint';

function App() {
  return (
    <div >

      <TextField id="outlined-basic"  variant="outlined" />
      <div>
        <Button size="small" variant="contained">1</Button>
        <Button size="small" variant="contained">2</Button>
        <Button size="small" variant="contained">3</Button>
      </div>
      <div>
        <Button size="small" variant="contained">4</Button>
        <Button size="small" variant="contained">5</Button>
        <Button size="small" variant="contained">6</Button>
      </div>
      <div>
        <Button size="small" variant="contained">7</Button>
        <Button size="small" variant="contained">8</Button>
        <Button size="small" variant="contained">9</Button>
      </div>
      <Button size="small" variant="contained">0</Button>

      <IconButton
        aria-label="fingerprint"
        color="secondary"
        sx={{ visibility: { xs: 'hidden', sm: 'visible', md: 'hidden', lg: 'visible' } }}
      >
        <Fingerprint />
      </IconButton>

    </div>
  );
}

export default App;
