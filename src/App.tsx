import { DefaultTheme, ThemeProvider } from 'styled-components'

import { Home } from './Pages/Home'
import { GlobalStyles } from './styles/globalStyle'
import { Dark } from './styles/theme/dark'
import { light } from './styles/theme/light'
import usePersistedState from './utils/usePersistedState'

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', Dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? Dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Home toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
