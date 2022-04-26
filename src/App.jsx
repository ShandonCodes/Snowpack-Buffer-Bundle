import React, {useState} from 'react';
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import { listen } from "@ledgerhq/logs";
import Btc from "@ledgerhq/hw-app-btc";

function App() {
  // Create the state
  const [loading, setLoading] = useState(false);
  const [bitcoinAddress, setBitcoinAddress] = useState('');

  //Handle Communication to Ledger
  function ledgerActivate () {
    TransportWebUSB.create().then(transport => {
      listen(log => console.debug(log));
      setLoading(true);
  
    const appBtc = new Btc(transport);
    appBtc.getWalletPublicKey(
      "44'/0'/0'/0/0",
      { verify: false, format: "legacy"}
    ).then(addy => {
          setBitcoinAddress(addy.bitcoinAddress);
          console.log(addy)
          console.log(bitcoinAddress);
        });
      })
  }
  
  let addy;
  if (loading && bitcoinAddress === '') {
    addy = <h1>Loading Bitcoin address...</h1>
  }
  else {
    addy = <h1>{bitcoinAddress}</h1>
  }

  // Return the App component.
  return (
    <div className="App">
      <h1>{addy}</h1>
      <button type="button" class="bg-gray-500 text-white" onClick={ledgerActivate}>Login</button>
    </div>
  );
}

export default App;
