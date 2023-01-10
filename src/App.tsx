import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContexts'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/globa'
import { defaultTheme } from './styles/themes/default'


export default function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>

      <GlobalStyle />
    </ThemeProvider>

  )
}


