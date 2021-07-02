import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Reviews from './components/Reviews.js';
import Rating from './components/Rating.js';
import Sentiment from './components/Sentiment.js';
import Visitors from './components/Visitors.js';

import './App.css';

function App() {
  return (
    <div className="container">

      <Header />
      <Sidebar />
      <Reviews />
      <Rating />
      <Sentiment />
      <Visitors />
    </div>
  );
}

export default App;
