//import React from 'react';
import DStorage from '/Users/carolmendonca/Desktop/website/src/abis/DStorage.json'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Web3 from 'web3';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Main from '/Users/carolmendonca/Desktop/website/src/Main.js'
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values
const all = 0
const balances = 0
const alli = 0
const lowrisk=0;
const highrisk=0;
const mediumrisk=0;

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    //Setting up Web3
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3 //Declare Web3


    //Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    //Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = DStorage.networks[networkId]
    if(networkData) {
      // Assign contract
      const dstorage = new web3.eth.Contract(DStorage.abi, networkData.address)
      this.setState({ dstorage })
      // Get files amount
      const filesCount = await dstorage.methods.fileCount().call()
      this.setState({ filesCount })

      const name1 =dstorage.methods.name1(this.state.account).call();
      this.setState({ name1 : name1[this.state.account]})
      const name1i =dstorage.methods.name1i(this.state.account).call();
      this.setState({ name1i : name1i[this.state.account]})
      
      const password =dstorage.methods.password(this.state.account).call();
      this.setState({ password })
    
      const passwordi =dstorage.methods.passwordi(this.state.account).call();
      this.setState({ passwordi })
      // const fun = await dstorage.methods.fun(this.state.account).call()
      // this.setState({
      //   fun: [...this.state.all, fun]
      // })

    //   const all = await dstorage.methods.all(this.state.account).call();
    //  this.setState({ all : all[this.state.account]})

      // const occ =dstorage.methods.occ(this.state.account).call();
      // this.setState({ occ })
      const occ = await dstorage.methods.occ(this.state.account).call()
      this.setState({
        occ: [...this.state.all, occ]
      })
      const lowrisk = await dstorage.methods.lowrisk(this.state.account).call()
      this.setState({
        lowrisk: [...this.state.lowrisk, lowrisk]
      })
      const mediumrisk = await dstorage.methods.mediumrisk(this.state.account).call()
      this.setState({
        mediumrisk: [...this.state.mediumrisk, mediumrisk]
      })
      const highrisk = await dstorage.methods.highrisk(this.state.account).call()
      this.setState({
        highrisk: [...this.state.highrisk, highrisk]
      })
        const all = await dstorage.methods.all(this.state.account).call()
        this.setState({
          all: [...this.state.all, all]
        })
        const occi = await dstorage.methods.occi(this.state.account).call()
        this.setState({
          occi: [...this.state.alli, occ]
        })
          const alli = await dstorage.methods.alli(this.state.account).call()
          this.setState({
            alli: [...this.state.alli, alli]
          })
          const balances = await dstorage.methods.balances(this.state.account).call()
          this.setState({
            balances: [...this.state.balances, balances]
          })
      
      // Load files&sort by the newest
      for (var i = filesCount; i >= 1; i--) {
        const file = await dstorage.methods.files(i).call()
        this.setState({
          files: [...this.state.files, file]
        })
       
      }
    } else {
      window.alert('DStorage contract not deployed to detected network.')
    }
    this.setState({loading: false})

  }

  // Get file from user
  captureFile = event => {
    event.preventDefault()
    
    const file = event.target.files[0]
    const reader = new window.FileReader()

    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({
        buffer: Buffer(reader.result),
        type: file.type,
        name: file.name
      })
      console.log('buffer', this.state.buffer)
    }
  }


  //Upload File
  uploadFile = description => {

    console.log("Submitting file to IPFS...")

    // Add file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('IPFS result', result.size)
      if(error) {
        console.error(error)
        return
      }

      this.setState({ loading: true })
      // Assign value for the file without extension
      if(this.state.type === ''){
        this.setState({type: 'none'})
      }
      this.state.dstorage.methods.uploadFile(result[0].hash, result[0].size, this.state.type, this.state.name, description).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({
         loading: false,
         type: null,
         name: null
       })
       
       window.location.reload()
      }).on('error', (e) =>{
        window.alert("The file you are trying to upload already exists in the system");
        this.setState({loading: false})
      })
    })
    
  }

  login = password  => {

    //  console.log("Submitting file to IPFS...")
  
      // Add file to the IPFS
     
  
        this.setState({ loading: true })
        // Assign value for the file without extension
        
        this.state.dstorage.methods.login(password,'owner').send({ from: this.state.account }).on('transactionHash', () => {
         
         
         window.location.reload()
        }).on('error', (events) =>{
          window.alert('Error')
          this.setState({loading: false})
        })
     
      
    }
   
      
    
    
    logout = ()  => {
  
      //  console.log("Submitting file to IPFS...")
    
        // Add file to the IPFS
       
    
          this.setState({ loading: true })
          // Assign value for the file without extension
          
          this.state.dstorage.methods.logout('owner').send({ from: this.state.account }).on('transactionHash', (hash) => {
           
           
           window.location.reload()
          }).on('error', (even) =>{
            window.alert('Error')
            this.setState({loading: false})
          })
       
        
      }
    
      login_invest = password  => {

        //  console.log("Submitting file to IPFS...")
      
          // Add file to the IPFS
         
      
            this.setState({ loading: true })
            // Assign value for the file without extension
            
            this.state.dstorage.methods.login_invest(password,'owner').send({ from: this.state.account }).on('transactionHash', () => {
             
             
             window.location.reload()
            }).on('error', (events) =>{
              window.alert('Error')
              this.setState({loading: false})
            })
         
          
        }
        logoutin = ()  => {
  
          //  console.log("Submitting file to IPFS...")
        
            // Add file to the IPFS
           
        
              this.setState({ loading: true })
              // Assign value for the file without extension
              
              this.state.dstorage.methods.logoutin('owner').send({ from: this.state.account }).on('transactionHash', (hash) => {
               
               
               window.location.reload()
              }).on('error', (even) =>{
                window.alert('Error')
                this.setState({loading: false})
              })
           
            
          }
          transfer = (reciever,amount,opt)  => {

            //  console.log("Submitting file to IPFS...")
          
              // Add file to the IPFS
             
          
                this.setState({ loading: true })
                // Assign value for the file without extension
                
                this.state.dstorage.methods.transfer(reciever,amount,opt).send({ from: this.state.account }).on('transactionHash', () => {
                 
                 
                 window.location.reload()
                }).on('error', (events) =>{
                  window.alert('Error')
                  this.setState({loading: false})
                })
             
              
            }
           
        

  //Set states
  constructor(props) {
    super(props)
    this.state = {
      account: '',
    all:[],
    occ:[],
    alli:[],
    occi:[],
    lowrisk:[],
    highrisk:[],
    mediumrisk:[],
      dstorage: null,
      files: [],
      hashArray: [],
      loading: false,
      type: null,
      name: null,
      name1: null,
      balances:[],
     
    }

  
      //Bind functions
    }
  render() {

    
  return (
    
    <>
      <Router>

        <Navbar account={this.state.account}/>
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/services' component={Services} /> */}
          {/* <Route path='/products' component={Products} /> */}
          {/* <Route path='/sign-up' component={SignUp} /> */}
          <Route path="/sign-up" exact component={() => <SignUp  occ = {this.state.occ}
            all = {this.state.all}
            microbal={this.state.microbal} 
            name1 ={this.state.name1}
            balances ={this.state.balances}
            files={this.state.files}
            captureFile={this.captureFile}
            uploadFile={this.uploadFile}
             login={this.login}
            logout={this.logout}
            acc={this.state.account}
            hashArray={this.state.hashArray}
            transfer={this.transfer}
           
            />} />

          <Route path="/services" exact component={() => <Services  occ = {this.state.occ}
            all = {this.state.all}
            name1 ={this.state.name1}
            balances ={this.state.balances}
            files={this.state.files}
            captureFile={this.captureFile}
            uploadFile={this.uploadFile}
             login={this.login}
            logout={this.logout}
            acc={this.state.account}
            hashArray={this.state.hashArray}
            transfer={this.transfer} />} />

              <Route path="/products" exact component={() => <Products  occi = {this.state.occi}
            alli = {this.state.alli}
            name1 ={this.state.name1}
            balances ={this.state.balances}
            files={this.state.files}
             login_invest={this.login_invest}
             getmicrobal={this.microbal}
            logoutin={this.logoutin}
            acc={this.state.account}
            hashArray={this.state.hashArray}
            transfer={this.transfer}
            mediumrisk = {this.state.mediumrisk}
            highrisk = {this.state.highrisk}
            lowrisk = {this.state.lowrisk}
            />} />
          
        </Switch>
       
        
      </Router>
    </>
  );
  }
}

export default App;
