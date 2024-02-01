import "./scss/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './assets/nav/Nav';
import Options from './assets/options/options';
import DocksPage from './assets/docks/DocsPage';
import Bottom from './assets/bottombanner/Bottom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <div className='text-center'>
        <div className='row'>
          <Options/>
          <DocksPage/>
        </div>
      </div>
      <Bottom/>
    </div>
  )
}

export default App
