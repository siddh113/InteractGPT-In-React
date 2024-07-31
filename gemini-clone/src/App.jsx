import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { ThemeProvider } from './Context/themeContext'

const App = () => {
  return (
    <ThemeProvider>
    <Sidebar/>
    <Main />
    </ThemeProvider>
  )
}

export default App