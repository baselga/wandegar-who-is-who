import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/GlobalStyle'
import { Home } from './components/Home/home'
import theme from './theme'
import type { DefaultTheme } from 'styled-components/dist/types'
import { useAppStore } from './store/app.store'
import { GameView } from './components/GameView/GameView'

function App() {
  const gameStarted = useAppStore((state) => state.gameStarted)

  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <GlobalStyle />
      {gameStarted ? <GameView /> : <Home />}      
    </ThemeProvider>
  )
}

export default App
