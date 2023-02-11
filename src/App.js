import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

import data from './data'

function App() {
  
  return (
    <div>
      <Navbar />
      {
        data.map(item => <Card
        key={item.id}
           item={item}
           />)
      }
    </div>
  );
}

export default App;
