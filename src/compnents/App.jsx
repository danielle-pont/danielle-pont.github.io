import '../index.css';
import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <div className="App">
        <div className="main">
          <Navbar />
          <Content />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;