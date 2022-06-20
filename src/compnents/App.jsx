import '../index.css';
import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <div className="App">
        <div className="main">
          <div className='Navbar' style={{ position: "relative", zIndex: "2" }}>
            <Navbar />
          </div>
          <div className='Content' style={{ position: "relative", zIndex: "1" }}>
            <Content />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;