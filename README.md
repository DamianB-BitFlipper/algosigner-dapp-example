# AlgoSigner and WalletConnect DApp Examples

A sample dApp demonstrating integration with the AlgoSigner and WalletConnect. 

### Functions
Demonstrates a basic scenario of creating, signing and send a application NoOp transaction. 

* For AlgoSigner, the signed transaction binary blob is already encoded in base64 when returned by the extension, in addition to the standard encoding the Algorand SDK performs. No extra steps are required to send it through AlgoSigner - which expects and requires the base64 encoding of the binary blob.  

### Prerequisites
1. Chrome Browser
2. Installation
   * Install of AlgoSigner - <a href="https://chrome.google.com/webstore/detail/algosigner/kmmolakhbgdlpkjkcjkebenjheonagdm" target="_blank" rel="noopener noreferrer">Chrome Store</a>
   * Install of Algorand smartphone wallet
3. Initial Setup
   * Imported or Created TestNet Wallet in AlgoSigner
   * Imported or Created TestNet Wallet in the Algorand smartphone wallet
4. Host the application yourself. Clone this project and run `python3 -m http.server 9000` from the directory 
