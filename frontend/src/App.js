import Banner from './components/Banner';
import Series from './components/Series';
import './global.css'
function App() {
  return (
    <div className="App">
      <Banner/>
      <section className='container-series'>
        <Series/>
      </section>
        
    </div>
  );
}

export default App;
