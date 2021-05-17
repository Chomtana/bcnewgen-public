window.web3client = window.ethereum || window.web3 ? new Web3(window.ethereum || window.web3.currentProvider) : new Web3();
