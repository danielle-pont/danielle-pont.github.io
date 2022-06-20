import '../index.css';
import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <div className="App">
        <div className="main">
          <div className='Navbar'>
            <Navbar />
          </div>
          <div className='Content'>
            <Content />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;