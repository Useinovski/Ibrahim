import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import About from './components/About';
import Ideas from './components/Ideas';
import Projects from './components/Projects';




function App() {

  const [activeView, setActiveView] = useState('about');


  useEffect(() => {
    // Optional: Any side effects on view change can go here
    console.log(`Switched to view: ${activeView}`);
  }, [activeView]);

  const renderContent = () => {
    switch (activeView) {
      case 'about':
        return <About />;
      case 'ideas':
        return <Ideas />;
      case 'projects':
        return <Projects />;
      default:
        return <div>Not found</div>;
    }
  };

  return (

    <div className="app-container min-h-screen bg-[color:var(--forest-dark)] flex flex-col">
      <Navbar onNavClick={setActiveView} activeView={activeView} />
      <main className=" pt-24 px-6 bg-[color:var(--forest-dark)] text-gray-900 flex-grow">
        {renderContent()}
      </main>
    </div>
  )
}

export default App

/*    <div className="app-container" style={{ display: 'flex' }}>
      <Navbar onNavClick={setActiveView} activeView={activeView} />
      <main style={{ padding: '20px', flex: 1 }}>
        {renderContent()}
      </main>
    </div> 

 <div className="app-container flex" >
      <Navbar onNavClick={setActiveView} activeView={activeView} />
      <main className="flex-1 bg-[color:var(--mist-white)] text-gray-900 p-6 ml-56">
        {renderContent()}
      </main>
    </div>






    
*/