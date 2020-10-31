import './tailwind.output.css';
import { Nav } from './component/Nav.js'
import { About } from './component/About.js'
import { Resume } from './component/Resume.js'


function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Resume />
    </div>
  );
}

export default App;
