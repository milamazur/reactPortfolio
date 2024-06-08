import { FunctionComponent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './main.css';

import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import { FiMenu } from "react-icons/fi";

const StyledIcon = styled('button')({
    color: '#130b30',
    position: 'fixed',
    top: '12px',
    right: '18px',
    zIndex: 1000,
    border: 'none',
    background: 'none', 
    cursor: 'pointer', 
    '&:focus': {
        outline: 'none'
    },
    '& svg': { 
        fontSize: '2rem',
    },
});

const Navbar: FunctionComponent = () => {
    const [navigationOpen, setNavigation] = useState(false);
    const [navigationHover, setNavigationHover] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
      }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navigationOpen && event.target!== null &&!(event.target as Element).closest('.navbar-content')) {
                if (!(event.target as Element).closest('a')) {
                    setNavigation(false);
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navigationOpen]);

    return (
        <div>
            <nav>
                <div className="flex">
                    {!isMobileView? (
                        <StyledIcon
                            onMouseEnter={() => setNavigationHover(true)}
                            onMouseLeave={() => setNavigationHover(false)}
                            onClick={() => setNavigation(!navigationOpen)} 
                        >
                            {navigationOpen? (
                                <IoClose />
                            ) : (
                                navigationHover? (
                                    <IoMdAdd />
                                ) : (
                                    <FiMenu />
                                )
                            )}
                        </StyledIcon>
                    ) : (
                        <StyledIcon
                            onClick={() => setNavigation(!navigationOpen)} 
                        >
                            {navigationOpen? (
                                <IoClose />
                            ) : (
                                navigationHover? (
                                    <IoMdAdd />
                                ) : (
                                    <FiMenu />
                                )
                            )}
                        </StyledIcon>
                    )}
                </div>
            </nav>

            {navigationOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-transparent flex items-center justify-center backdrop-filter backdrop-blur-md">
                    <div className="bg-transparent flex flex-col items-center justify-center min-h-screen">
                        <ul className="bg-transparent space-y-4">
                            <li>
                                <NavLink to="/home" className="navlinks flex justify-center py-8 rounded-full bg-pink-500 text-black no-underline items-center text-center" onClick={() => setNavigation(false)}>
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="navlinks flex justify-center py-8 rounded-full bg-yellow-200 text-black no-underline items-center text-center" onClick={() => setNavigation(false)}>
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" className="navlinks flex justify-center py-8 rounded-full bg-blue-300 text-black no-underline items-center text-center" onClick={() => setNavigation(false)}>
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
