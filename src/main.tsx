import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './navbar.tsx'
import Routing from './routing.tsx'
import {BrowserRouter} from 'react-router-dom'
import TopBar from './topBar.tsx'
import ThemeProvider from './themeProvider.tsx'
import SocialIconsFooter from './socialIconsFooter.tsx'



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
    )

root.render(
    <StrictMode>
            <BrowserRouter>
                <ThemeProvider>
                    <TopBar/>
                    <Navbar/>
                    <Routing/>
                    <SocialIconsFooter/>
                </ThemeProvider>
            </BrowserRouter>
    </StrictMode>,
)
