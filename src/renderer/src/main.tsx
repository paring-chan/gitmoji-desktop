import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { GitmojiList } from './components/GitmojiList'
import './stylesheets/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<GitmojiList />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
