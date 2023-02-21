import * as React from 'react'
import { useState } from 'react'

import { Link, Route, Routes } from 'react-router-dom'

const LanguageSelect = React.lazy(() => import('language-select/Module'))

const ObsFrame = React.lazy(() => import('obs-frame/Module'))

export function App() {
  const [url, setUrl] = useState('')
  const parseSelectedLanguage = (langObject) => {
    setUrl(langObject.zipball_url)
  }

  return (
    <React.Suspense fallback={null}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <LanguageSelect selectedLanguage={parseSelectedLanguage} />
            <ObsFrame url={url} />
          </div>
        </div>
      </div>
    </React.Suspense>
  )
}

export default App
