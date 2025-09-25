import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

type Theme = 'light' | 'dark' | 'primary' | 'secondary' | 'success' | 'info';


interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

const themes: Theme[] = ['light', 'dark', 'primary', 'secondary','success', 'info'];

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('color') as Theme) || 'light'
  );

  const applyTheme = (theme: Theme) => {
    const html = document.documentElement;
    themes.forEach((t) => html.classList.remove(t));
    html.classList.add(theme);

    localStorage.setItem('color', theme);

    const computed = getComputedStyle(html);
    html.style.setProperty(
      '--inline-app-bg',
      computed.getPropertyValue('--color-app-bg')
    );
    html.style.setProperty(
      '--inline-app-bg-main',
      computed.getPropertyValue('--color-app-bg-main')
    );
    html.style.setProperty(
      '--inline-app-text',
      computed.getPropertyValue('--color-app-text')
    );
    html.style.setProperty(
      '--inline-app-text-light',
      computed.getPropertyValue('--color-app-text-light')
    );
    html.style.setProperty(
      '--inline-app-text-dark',
      computed.getPropertyValue('--color-app-text-dark')
    );

    setTheme(theme);
  };

  const toggleTheme = () => {
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    applyTheme(themes[nextIndex]);
  };

  useEffect(() => {
    applyTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
