import './tailwind.output.css';
import { Nav } from './component/Nav.js'
import { About } from './component/About.js'
import { Resume } from './component/Resume.js'
import { Project} from './component/Project.js'
import { Footer } from './component/Footer.js'


function App() {
  return (
    <div className="App font-sans">
      <Nav />
      <About />
      <Resume />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
