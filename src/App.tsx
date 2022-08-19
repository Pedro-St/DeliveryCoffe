import {ThemeProvider} from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'


import{GlobalStyle} from '../styles/global'
import {defaultTheme} from '../styles/themes/default'
import { Header } from './components/Header'
import { ShoppingCartProvider } from './context/ShoppingCartContext'


export function App() {
 return(
  <ShoppingCartProvider>
   <ThemeProvider theme={defaultTheme}> 
        <BrowserRouter>    
            <Router/>   
        </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  </ShoppingCartProvider>
 )
}


