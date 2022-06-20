import '../index.css';
import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'
import NextFeatureLower from './NextFeatureLower'

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Content />
        <NextFeatureLower />
        <Footer />
      </div>
    </>
  );
}

export default App;