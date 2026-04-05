import './App.css'
import Home from './components/home/home'
import LeftSlide from './components/leftSlide/leftSlide'
import { ChatProvider } from './context/ChatContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <div className="flex h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
          <LeftSlide />
          <div className="flex-1 overflow-auto bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
            <Home />
          </div>
        </div>
      </ChatProvider>
    </ThemeProvider>
  )
}

export default App;
