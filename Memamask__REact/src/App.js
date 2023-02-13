import './App.css';
import { useState } from "react";

function App() {

  const [WallletAddress, setWallletAddress] = useState("")


  async function connectWallet() {
    if (typeof window.ethereum !=='undefined'){
      await requestAccount();

      const provider =new ethers.providers.Web3Provider(window.ethereum)
    }
  }


  async function requestAccount() {
    console.log('request account...');

    //Verifica si metamask existe
    if(window.ethereum){
      console.log('Metamask detectad');

      try {
        const accounts= await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        setWallletAddress(accounts[0])
        console.log(accounts);
      } catch (error) {
        console.log(error);
      }

    }else{
      console.log('Metmask no detected');
    }


  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestAccount}>AquiPutito</button>
        <p2>{`Walllet Address`}</p2>
        <h2> {WallletAddress}</h2>
      </header>
    </div>
  );
}

export default App;
