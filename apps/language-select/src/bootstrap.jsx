import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import LanguageSelect from './app/language-select';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <LanguageSelect selectedLanguage={(langObj) => console.log(langObj)} />
  </StrictMode>
);
