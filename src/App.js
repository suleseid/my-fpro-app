
import './App.css';
import Header from './header.js';
import Contents from './contents.js';
import Footer from './footer.js';



function App() {
  return (
    <div className="app">
     <Header/>
     <div className="layout">
      <Contents/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
