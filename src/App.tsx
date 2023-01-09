import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/globa'
import { defaultTheme } from './styles/themes/default'


export default function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      

      <Transactions />
      <GlobalStyle />
    </ThemeProvider>

  )
}


