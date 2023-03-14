import './App.css';
import erc721 from './assets/erc721/metadata/0000000000000000000000000000000000000000000000000000000000000000.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My ERC721 Token Display</h1>
        <img src={erc721.image} alt="rose.jpg"/>
      </header>
    </div>
  );
}
export default App;
