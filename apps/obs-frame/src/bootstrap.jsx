import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import ObsFrame from './app/obs-frame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ObsFrame
      url={'https://git.door43.org/unfoldingWord/en_obs/archive/v8.zip'}
    />
  </StrictMode>
);
