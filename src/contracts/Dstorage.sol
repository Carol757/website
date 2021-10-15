pragma solidity >=0.4.21 <0.6.0;

contract DStorage {
  string public name = 'DStorage';
  uint public fileCoun = 0;
  uint public psw = 123;
  uint public fileCount = 0;
  mapping(uint => File) public files;
  mapping(address => File) public filess;
  string[] public hashArray = new string[](100);
  address owner;
   mapping (address => uint) public balances;
    mapping (address => uint) public lowrisk;
     mapping (address => uint) public highrisk;
      mapping (address => uint) public mediumrisk;
   mapping (address => uint) public occ;
    mapping (address => uint) public fun;
    mapping (address => uint) public all;
     mapping (address => uint) public occi;
    mapping (address => uint) public funi;
    mapping (address => uint) public alli;
     mapping (address => uint) public password;
      mapping (address => uint) public passwordi;
     //remove public if you donot want password.
     mapping (address => string) public name1;
      mapping (address => string) public name1i;
    string wel ="wel";
    bool[] public votingsss = new bool[](100);
    event Sent(address from);

  struct File {
    uint fileId;
    string fileHash;
    uint fileSize;
    string fileType;
    string fileName;
    uint fileDescription;
    uint uploadTime;
    bool t;
    uint voted;
    bool vote;
    

    
   address payable uploader;
  }

  event FileUploaded(
    uint fileId,
    string fileHash,
    uint fileSize,
    string fileType,
    string fileName, 
    uint fileDescription,
    uint uploadTime,
    uint voted,
    address payable uploader
  );

  constructor() public {
      owner =msg.sender;
      //occ[msg.sender] = 1;
       // password[msg.sender]= 123;
         //name1[msg.sender]= 'owner';
         //all[msg.sender] = 1;
  }
  
    function login(uint pass, string memory _nam )  public{
       string memory _z = 'owner' ;
string memory _y = name1[msg.sender];
        if (occ[msg.sender] == 1)
        {
            
            if (password[msg.sender] == pass)
            { 
              all[msg.sender] = 1;
              
               if (keccak256(abi. encodePacked(_z)) == keccak256(abi. encodePacked(_y))) 
                 {
                   fun[msg.sender] = 1;
                }


            }
            else{
                emit Sent(msg.sender);
                revert();
            }
        
        }
        
        password[msg.sender]=pass;
        name1[msg.sender]= _nam;
         if (keccak256(abi. encodePacked(_z)) == keccak256(abi. encodePacked(_nam))) 
                 {
                   fun[msg.sender] = 1;
                }
        occ[msg.sender] = 1;
        all[msg.sender] = 1;
        // microbal[msg.sender]=10000;
      
        
         }

 function login_invest(uint pass, string memory _nam )  public{
       string memory _z = 'owner' ;
string memory _y = name1i[msg.sender];
        if (occi[msg.sender] == 1)
        {
            
            if (passwordi[msg.sender] == pass)
            { 
              alli[msg.sender] = 1;
             lowrisk[msg.sender]=0;
             highrisk[msg.sender]=0;
             mediumrisk[msg.sender]=0;

               if (keccak256(abi. encodePacked(_z)) == keccak256(abi. encodePacked(_y))) 
                 {
                   funi[msg.sender] = 1;
                }


            }
            else{
                emit Sent(msg.sender);
                revert();
            }
        
        }
        
        passwordi[msg.sender]=pass;
        name1i[msg.sender]= _nam;
         if (keccak256(abi. encodePacked(_z)) == keccak256(abi. encodePacked(_nam))) 
                 {
                   funi[msg.sender] = 1;
                }
        occi[msg.sender] = 1;
        alli[msg.sender] = 1;
        
        
         }
         
  function transfer(address receiver, uint amount,uint opt) public {
        if(opt==1)
      { 
           lowrisk[msg.sender]=lowrisk[msg.sender]+1;
      }
      else if(opt==2)
      {
            mediumrisk[msg.sender]=mediumrisk[msg.sender]+1;
      } 
      else
      {
            highrisk[msg.sender]=highrisk[msg.sender]+1;
      }
        balances[receiver] -= amount;
        balances[msg.sender] += amount;
       
    }
   



  function logout(string memory _nam)  public{
        
        
        
        all[msg.sender] = 0;
        
         }

   
         function logoutin(string memory _nam)  public{
        
        
        
          alli[msg.sender] = 0;
        
         }

        


       function checkWinninProposalWithReturnValue (uint i) public view returns (bool) {
           bool winner;
           bool f=files[i].vote;
           bool s=files[i].t;
           bool e=votingsss[i];
           uint v =files[i].voted;
        if( v== 3)
        {
            if(f== true)
             {
                if(s==true)
                 {
                   if(e==true)
                   { 
                     winner = true;
                   }
                   
                  }
                  else
                  {
                    winner = false;  
                  }
                
                }
            else 
            {
               winner = false;   
            }
        }
        else {
            
            revert();
        }
        return winner;
    }          
 
function voting( bool _vote,uint i) public payable {
     
string memory _z = 'owner' ;
string memory _y = name1[msg.sender];

     
       
           require (keccak256(abi. encodePacked(_z)) == keccak256(abi. encodePacked(_y)) , "not eligible to vote") ;      
      if(files[i].voted==0)
      {
          files[i].vote=_vote;
          files[i].voted=1;
      }
      else if(files[i].voted==1)
      {
          files[i].t=_vote;
          files[i].voted=2;
      }
       else if(files[i].voted==2)
      {
          votingsss[i]=_vote;
          files[i].voted=3;
      }
      else
      {
          revert();
      }
      
    

    
    
}
  function uploadFile(string memory _fileHash, uint _fileSize, string memory _fileType, string memory _fileName, uint _fileDescription) public {
    // string memory _ab = "Qmep96bgCmHYLbg3mDjkmXy2ioovZhf4AsQsS9XhrZ4TVM";

    // require (keccak256(abi. encodePacked(_fileHash)) != keccak256(abi. encodePacked(_ab)) ) ;
    // // Make sure the file hash exists

    for(uint i=1; i<=fileCount; i++){
      string memory _ab = hashArray[i];
      require (keccak256(abi. encodePacked(_fileHash)) != keccak256(abi. encodePacked(_ab)) , "Copyright issue") ;
      
    }
require(all[msg.sender] == 1);
    require(bytes(_fileHash).length > 0);
    // Make sure file type exists
    require(bytes(_fileType).length > 0);
    // Make sure file description exists
   // require(bytes(_fileDescription).length > 0);
    // Make sure file fileName exists
    require(bytes(_fileName).length > 0);
    // Make sure uploader address exists
    require(msg.sender!=address(0));
    // Make sure file size is more than 0
    require(_fileSize>0);
  // bool te = false;
  balances[msg.sender]=_fileDescription;
    uint voteds = 0;
    bool t = false;
    bool vote = false;
    bool votes = false;
    // Increment file id
    fileCount ++;

    // Add File to the contract
    files[fileCount] = File(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, block.timestamp,t,voteds,vote, msg.sender);
    hashArray[fileCount]=_fileHash;
    filess[msg.sender] = File(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, block.timestamp,t,voteds,vote, msg.sender);
    // Trigger an event
    emit FileUploaded(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, block.timestamp,voteds, msg.sender);
  }
}