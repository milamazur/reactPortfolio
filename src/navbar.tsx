import { FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './main.css';
import AddIcon from '@mui/icons-material/Add'
import MenuIcon from '@mui/icons-material/Menu'
import {styled} from '@mui/system'
import {IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'


const StyledIcon = styled(IconButton)({
    color: '#130b30',
    position: 'fixed',
    top: '5px',
    right: '10px',
    zIndex: 1000,
    '&:focus': {
        outline: 'none !important'
    },
    '& .MuiSvgIcon-root': {
        fontSize: '2rem',
    },
});

const Navbar: FunctionComponent = () => {
    const [navigationOpen, setNavigation] = useState(false);
    const [navigationHover, setNavigationHover] = useState(false);

    return (
        <div >
            <nav>
                <div className="flex">

                    <StyledIcon
                        edge="start"
                        onMouseEnter={() => setNavigationHover(true)}
                        onMouseLeave={() => setNavigationHover(false)}
                    >
                        {navigationOpen ? (
                            <CloseIcon onClick={() => setNavigation(false)}/>
                        ) : (
                            navigationHover ? <AddIcon onClick={() => setNavigation(true)}/> : <MenuIcon/>
                        )}
                    </StyledIcon>
                </div>
            </nav>


            {navigationOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-transparent flex items-center justify-center backdrop-filter backdrop-blur-md">
                    <div className="bg-transparent flex flex-col items-center justify-center min-h-screen">
                        <ul className="bg-transparent space-y-4">
                            <li>
                                <NavLink to="/home" className="flex justify-center text-5xl py-8 rounded-full bg-pink-500 text-black no-underline items-center text-center" onClick={() => setNavigation(false)}>
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="flex justify-center text-5xl py-8 rounded-full bg-yellow-200 text-black no-underline items-center text-center" onClick={() => setNavigation(false)}>
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" className="flex justify-center text-5xl py-8 px-20 rounded-full bg-blue-300 text-black no-underline items-center text-center" onClick={() => setNavigation(false)}>
                                    PORTFOLIO
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

