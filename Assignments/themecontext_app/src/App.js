
import { ThemeProvider } from './ThemeProvider';
import { ThemeToggler } from './ThemeToggler';
import { ThemedComponent } from './ThemeComponent';

export function App() {
  return <>
    <ThemeProvider>
      <div style={{ padding: '2rem' }}>
        <ThemeToggler />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  </>
}

