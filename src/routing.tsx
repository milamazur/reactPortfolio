import {FunctionComponent} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/home.tsx'
import About from './pages/about/about.tsx'
import Portfolio from './pages/portfolio/portfolio.tsx'


const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/portfolio'} element={<Portfolio/>}/>
            {/*<Route path={'*'} element={<PageNotFound/>}/>*/}
        </Routes>
    )
}

export default Routing
