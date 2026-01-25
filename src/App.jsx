import './App.css'
import Home from './components/home/home'
import LeftSlide from './components/leftSlide/leftSlide'

function App() {
  return (
    <div className="flex h-screen">
      <LeftSlide />
      <div className="flex-1 overflow-auto bg-gray-50">
        <Home />
      </div>
    </div>
  )
}

export default App;
