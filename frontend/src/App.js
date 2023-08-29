import Aside from './components/Aside';
import Banner from './components/Banner';
import Series from './components/Series';
import './global.css'
function App() {
  return (
    <div className="App">
      <Banner/>
      <main>
        <section className='container-series'>
            <Series/>
          </section>

          <section className='aside'>
            <Aside/>
          </section>
 
      </main>

      
      
    </div>
  );
}

export default App;
