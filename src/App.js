import Sidebar from 'components/Sidebar';
import Content from 'components/Content';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar/>
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
