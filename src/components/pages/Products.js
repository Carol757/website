import React, { Component } from 'react';
import '../../App.css';
import { convertBytes } from '/Users/carolmendonca/Desktop/website/src/helpers.js';
import moment from 'moment'
import '../../App.css';
import { Button } from '/Users/carolmendonca/Desktop/website/src/components/Button.js';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Main from '/Users/carolmendonca/Desktop/website/src/Main.js'
import Lock from '/Users/carolmendonca/Desktop/website/src/components/Lock.js';

class Products extends Component {

  constructor(props) {
    super(props);
    
    this.state = {mode:this.props.alli};
    
   // this.handleChange = this.handleChange.bind(this);
    //this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  
 

  handleEdit() {
    this.setState({mode: 'edit'});
  }
  
  render() {
    
    if(this.props.alli == 0) {
   
    return (
      
      
      <div className="container-fluid mt-5 text-center">
        <HeroSection/>
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '10024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              
             <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '10024px' }}>
                {/* <h2 className="text-white text-monospace bg-dark"><b><ins>LOGout</ins></b></h2> */}
                  {/* <form onSubmit={(even) => {
                    even.preventDefault()
                    const name1 = this.name1.value
                    this.props.logout(name1) */}
                    
                    
                  {/* }} > */}
                      
                      
                      {/* <p className="text-white text-monospace bg-dark">{ this.props.acc }</p> */}
                    {/* <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/> */}
                    {/* <button type="submit" className="btn-primary btn-block"> <b>LOGout!</b></button>
                     */}
                  {/* </form> */}
            



                  {/* <br>
                  </br>
                  <br></br> */}
                  {/* <a target="_blank"
                 alt=""
                
                 rel="noopener noreferrer"
                 >
                {this.props.all} hiiiiiiii
              </a> */}
 {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        > */}
                

              <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '512px' }}>

              {(() => {
        if (this.props.occi == 1) {
         return <h2 ><b><ins>LOGIN</ins></b></h2> 
        }
        else {
        return  <h2 className="text-white text-monospace bg-dark"><b><ins>SIGNUP</ins></b></h2> 
        }
      })()}
                {/* <h2 className="text-white text-monospace bg-dark"><b><ins>LOGIN</ins></b></h2> */}
               
                  {/* <h2 className="text-white text-monospace bg-dark"><b><ins>SIGNUP</ins></b></h2> */}
                
                  <form onSubmit={(events) => {
                    events.preventDefault()
                    const name1i = this.name1i.value
                    
                    //this.props.uploadFiles(name1)
                    const passwordi = this.passwordi.value
                    this.props.login_invest(passwordi)
                    //const log =1;
                  }} >
                    
                   
                      <div className="form-group">
                        <br></br>
                          <input
                            id="name1"
                            type="text"
                            ref={(input) => { this.name1i = input }}
                            className="form-control text-monospace"
                            placeholder="USER NAME..."
                            required />
                      </div>
                      <div className="form-group">
                        <br></br>
                          <input
                            id="passwordi"
                            type="text"
                            ref={(input) => { this.passwordi = input }}
                            className="form-control text-monospace"
                            placeholder="PASSWORD..."
                            required />
                      </div>
                      <br></br>
                      
                      <p className="text-white text-monospace bg-dark">Acc No : { this.props.acc }</p>
                    {/* <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/> */}
                    <br></br>
                    <button type="submit"  style={{}}><b>Login</b></button>
                  </form>
              </div>
             
              </div>
              <Footer />
              {/* <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '512px' }}>
                <h2 className="text-white text-monospace bg-dark"><b><ins>Share File</ins></b></h2>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control text-monospace"
                            placeholder="description..."
                            required />
                      </div>
                      <p className="text-white text-monospace bg-dark">{ this.props.acc }</p>
                    <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/>
                    <button type="submit" className="btn-primary btn-block"><b>Upload!</b></button>
                  </form>
              </div>

              <p>&nbsp;</p>
              
              <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-dark text-white">
                    <th scope="col" style={{ width: '10px'}}>id</th>
                    <th scope="col" style={{ width: '200px'}}>name</th>
                    <th scope="col" style={{ width: '230px'}}>description</th>
                    <th scope="col" style={{ width: '120px'}}>type</th>
                    <th scope="col" style={{ width: '90px'}}>size</th>
                    <th scope="col" style={{ width: '90px'}}>date</th>
                    <th scope="col" style={{ width: '120px'}}>uploader/view</th>
                    <th scope="col" style={{ width: '120px'}}>hash/view/get</th>
                  </tr>
                </thead>
                { this.props.files.map((file, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                         </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>
            </div> */}
            </div>
          </main>
        </div>
      </div>
      
    );
              }
              



                return (
          
          
                  <div>
          <HeroSection/>
                    {(() => {
                     
                        return (
                          <div className="content">
                            <p>&nbsp;</p>
          
                            <form onSubmit={(even) => {
                              even.preventDefault()
                              //const name1i = this.name1i.value
                              this.props.logoutin()
          
                              //const log =0;
                              //const password = this.password.value
                              //this.props.logout(password)
                            }} >
                              {/* <input
                                id="name1"
                                type="text"
                                ref={(input) => { this.name1i = input }}
                                className="form-control text-monospace"
                                placeholder=""
                              /> */}
          
                              {/* <p className="text-white text-monospace bg-dark">{ this.props.acc }</p> */}

                              {/* <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/> */}
                              <button type="submit" className="btn-primary btn-block"> <b>LOGout!</b></button>
          
                            </form>
                            <br></br>
          
                          
                            <br></br>
                            <br></br>
                           <div>
                              
                            </div>
                            <p>&nbsp;</p>
          
                            
                            <form onSubmit={(events) => {
                    events.preventDefault()
                    
                    //this.props.uploadFiles(name1)
                    const reciever = this.reciever.value
                    const amount = this.amount.value
                    const opt = this.opt.value
                    this.props.transfer(reciever,amount,opt)
                    //const log =1;
                  }} >

                    
                    <div className="form-group">
                      <br></br>
                      <input
                        id="password"
                        type="text"
                        ref={(input) => { this.reciever = input }}
                        className="form-control text-monospace"
                        placeholder="PASSWORD..."
                        required />

                    </div>
                    <div className="form-group">
                      <br></br>
                      <input
                        id="amount"
                        type="text"
                        ref={(input) => { this.amount = input }}
                        className="form-control text-monospace"
                        placeholder="PASSWORD..."
                        required />
                        </div>


                   
                    <div className="form-group">
                      <br></br>
                      <select  id="opt"
                        type="text"
                        ref={(input) => { this.opt = input }}
                        className="form-control text-monospace"
                        placeholder="PASSWORD..."
                        required> 
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    
</select>
                    </div>
                    
                   
                    {/* <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/> */}
                    <br></br>
                    <p className="text-white text-monospace bg-dark">{ this.props.lowrisk }</p>
                    <p className="text-white text-monospace bg-dark">{ this.props.mediumrisk }</p>
                    <p className="text-white text-monospace bg-dark">{ this.props.highrisk }</p>
                    <button type="submit" className="btn-primary btn-block"><b>transfer</b></button>
                  </form>
                  
                 

                  <Footer></Footer>
              </div>
                            
          
                               
          
          
          
          
                       
          
          
                        );
          
                      
          
          
                       
                    }
                    
                    
                    
                    
                    
                    
                    )()}
                    <div>
          
          
          
          
          
                    </div>
          
          
          
                  </div>
          
                 
          
          
          
                );
          
          
          
          
              
          
          
            }
}

export default Products;



