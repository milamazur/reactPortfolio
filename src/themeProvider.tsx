import { createContext, FunctionComponent, PropsWithChildren, useState, useEffect } from 'react';

interface IThemeContext {
    currentTheme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
    currentTheme: 'light',
    toggleTheme: () => {},
});

const ThemeProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = window.localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    const toggleTheme = () => {
        setTheme((previousTheme) => {
            const newTheme = previousTheme === 'light' ? 'dark' : 'light';
            window.localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        document.body.className = theme === 'light' ? 'lightTheme' : 'darkTheme';
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider
