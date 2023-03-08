import './App.css';

const ipfsHash = "QmdbLtLJrnBSaxoftZxCyKZskM4X9aAFdVV3Yntc1Y9BMZ"
const imageURL = `http://localhost:8080/ipfs/${ipfsHash}`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imageURL} />
      </header>
    </div>
  );
}
export default App;