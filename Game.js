//Global Variables
         var currentLocale = 0;
         var direction = false;
         var check = false;
         var score = 0;
         function updateDisplay() {
             
                     instruc();
                     
    if ( inventory[0]== item2.name && inventory[1]== item5.name && inventory[2]== item6.name && inventory[3]== item7.name && score=== 40){
                            updateMessage("You Win!");
                            direction = true;
                            check = true;
                                  document.getElementById("Sbttn").disabled= true;
                                  document.getElementById("Ebttn").disabled= true;
                                  document.getElementById("Wbttn").disabled= true;
                                  document.getElementById("Nbttn").disabled= true;
                                  document.getElementById("go").disabled= true;
                
                        }else if (direction!=true){ 
                
                                        if (check!=true){
                                                
                                            switch (currentLocale) {
                                               
                                               case 0:  updateMessage(loc0); 
                                                                updateScore(loc0);
                                                               break;
                                               case 1:  updateMessage(loc1);
                                                                updateScore(loc1);
                                                               break;
                                               case 2:  updateMessage(loc2 + item2);
                                                                updateScore(loc2);
                                                               break;
                                               case 3:  updateMessage(loc3);
                                                                updateScore(loc3);
                                                               break;
                                               case 4:  updateMessage(loc4); 
                                                                updateScore(loc4);
                                                               break;
                                               case 5:  updateMessage(loc5 + item5);
                                                                updateScore(loc5);
                                                               break;
                                               case 6:  updateMessage(loc6 + item6);
                                                                updateScore(loc6);
                                                               break;
                                               case 7:  updateMessage(loc7 + item7); 
                                                                updateScore(loc7);
                                                               break;      
                                               default      : updateMessage("You broke me.");
                                                                break;
                                          
                                                                    }
                                disableBttn();
                 
                 
                    }else{
                          updateMessage("Please enter a valid command" +
                          " ( n=north, s=south, e=east, w=west, i=inventory, h=help, d=dance, t=take).");
                          
                          check=false;
                        } 
                }else{
                
                      updateMessage("You can not go this way.");
                     
                      direction=false;
                 }
                      
                
         }
        
        
        
                                                                //Updates Display message
                            function updateMessage(msg){
                                taPtr = document.getElementById("taDisplay");
                                history = taPtr.value;
                                taPtr.value =  msg +"\n" +"\n"+ history; 
                            }
                            
                            
                            
        
         //             N   S   E   W                                                   //2D Array for Navigation
        var nav = [
                       [ 1, -1, -1, -1 ], // Earth    
                       [ 2, 0,-1, -1 ],    //Mercury
                       [ -1, 1, 3, 4],    //Mars                     
                       [ -1, -1, -1, 2], // Saturn   
                       [ 5, 6, 2, -1],    //Venus
                       [ -1, 4, -1, -1],  //Neptune
                       [ 4, 7, -1, -1],   //Jupiter
                       [ 6, -1, -1, -1],  //Uranus   
                   ];
          

          
       function  go(dir){               
            var  dirNum=-1;        
                if (dir == 'N'){
                    dirNum=0;
                }else if (dir =='S'){
                    dirNum=1;
                }else if (dir == 'E'){
                    dirNum=2;
                }else if (dir == 'W'){
                    dirNum=3;
                }               
          
              changeLocale(dirNum);
          }
                                                          //Changes Location
              
            function changeLocale(dirNum){
                if (dirNum > -1){
                    var temp= nav[currentLocale][dirNum];
                    
            
                    if(temp >= 0 ) {    
                        currentLocale= temp;  
                
                    }else {
                        direction=true;
                    }   
                 
                }else {
                  
                  check= true;  
            
            }                                            
           updateDisplay();  
           
       } 
       
                                                        //Button hidder
      
      function disableBttn(){
      
              switch(currentLocale){
              
              case 0: document.getElementById("Sbttn").disabled= true;
                      document.getElementById("Ebttn").disabled= true;
                      document.getElementById("Wbttn").disabled= true;
                      document.getElementById("Nbttn").disabled= false;
                      break;
                      
              case 1: document.getElementById("Sbttn").disabled= false;
                      document.getElementById("Ebttn").disabled= true;
                      document.getElementById("Wbttn").disabled= true;
                      document.getElementById("Nbttn").disabled= false;
                      break;
                      
              case 2: document.getElementById("Sbttn").disabled= false;
                      document.getElementById("Ebttn").disabled= false;
                      document.getElementById("Wbttn").disabled= false;
                      document.getElementById("Nbttn").disabled= true;
                      break;
                      
              case 3: document.getElementById("Sbttn").disabled= true;
                      document.getElementById("Ebttn").disabled= true;
                      document.getElementById("Wbttn").disabled= false;
                      document.getElementById("Nbttn").disabled= true;
                      break;
                      
              case 4: document.getElementById("Sbttn").disabled= false;
                      document.getElementById("Ebttn").disabled= false;
                      document.getElementById("Wbttn").disabled= true;
                      document.getElementById("Nbttn").disabled= false;
                      break;
                      
              case 5: document.getElementById("Sbttn").disabled= false;
                      document.getElementById("Ebttn").disabled= true;
                      document.getElementById("Wbttn").disabled= true;
                      document.getElementById("Nbttn").disabled= true;
                      break;
                      
              case 6: document.getElementById("Sbttn").disabled= false;
                      document.getElementById("Ebttn").disabled= true;
                      document.getElementById("Wbttn").disabled= true;
                      document.getElementById("Nbttn").disabled= false;
                      break;
                      
              case 7: document.getElementById("Sbttn").disabled= true;
                      document.getElementById("Ebttn").disabled= true;
                      document.getElementById("Wbttn").disabled= true;
                      document.getElementById("Nbttn").disabled= false;
                      break;
                      
                  }
                  
    }
    
            
                                                                        //Command abilities 
       function commandInput(){
         dirNum=-1;
         var move;
                move= document.getElementById('commandBox').value;
                movement= move.toLowerCase();
         var checkTake = currentLocale; 
             
             if(movement== 'h'){
                    updateMessage("Help: Your goal is to collect all pieces of a device" + 
                                        " (in your awesome spaceship) to keep the sun from exploding."
                                                +" Use the commands listed below to accomplish this. ");
                    return;
                    
                    }else if(movement== 'd'){
                    
                        updateMessage("You danced...Poorly.");
                        return;
                    
                    }else if(movement== 'i'){
                    
                        updateMessage("Your inventory: " + inventory);
                        return;
                    
                    }else if(movement== 't' && checkTake=== 2){
                    
                        updateMessage("You took the piece.");
                        inventory[0]= item2.name;
                        loc2.hasItem = false;
                        return;
                    
                    }else if(movement== 't' && checkTake=== 5){
                    
                        updateMessage("You took the piece.");
                        inventory[1]= item5.name;
                        loc5.hasItem = false;
                        return;
                    
                    }else if(movement== 't' && checkTake=== 6){
                    
                        updateMessage("You took the piece.");
                        inventory[2]= item6.name;
                        loc6.hasItem = false;
                        return; 
                        
                    }else if(movement== 't' && checkTake=== 7){
                    
                        updateMessage("You took the piece.");
                        inventory[3]= item7.name;
                        loc7.hasItem = false;
                        return;
                    
                    }else if(movement== 't'){
                    
                        updateMessage("You took nothing.");
                        return;
                    
                    }else if (movement== 'n'){
                              dirNum=0;
                    }else if (movement== 's'){
                              dirNum=1;
                    }else if (movement== 'e'){
                              dirNum=2;
                    }else if (movement== 'w'){
                              dirNum=3;
                              }
                              
                        
            changeLocale(dirNum);
                
                
    }
                
                       
                                              //Instruction function
                
              function  instruc(){
              
              document.getElementById('taDisplay').innerHTML="Enter a valid command (listed below)";
              
              }
            

            
        //Prototype for locations       
              
              function Locales (id) {
              
                this.id;
                this.name;
                this.desc;
                this.item;
                this.hasItem = false;
                this.hasVisited = false;    
                this.toString = function(){
                return this.name + this.desc;
                }
                    
            }     
              
              
              
             
              
    //Location instances and array
    
     var LocalesArr = new Array();          //this is global, so the instances are as well.
                             
                             //Earth
                             var loc0= new Locales(0);
                              loc0.name= "Earth. ";
                              loc0.desc= "This is your home planet, so you should know what it looks like (I hope)." + 
                                            " Collect pieces of a device that will be used to save the solar system." +
                                                   " Go to each planet to add to your score (max = 40)";
                              loc0.item = "";
                              LocalesArr[0]=loc0;
                              
                              //Mercury
                             var loc1= new Locales(1);
                              loc1.name= "Mercury. ";
                              loc1.desc= "This planet is closest to the sun, so it goes the fastest around it. Hang on!";
                              loc1.item = "";
                              LocalesArr[1]=loc1;
                              
                              //Mars
                             var loc2= new Locales(2);
                              loc2.name= "Mars. ";
                              loc2.desc= "We may go to this planet someday. That would be sweet.";
                              loc2.item = item2;
                              loc2.hasItem = true;
                              LocalesArr[2]=loc2;
                              
                              //Saturn
                             var loc3= new Locales(3);
                              loc3.name= "Saturn. ";
                              loc3.desc= " A gas giant, rings, what's not to love about this planet?";
                              loc3.item = "";
                              LocalesArr[3]=loc3;
                              
                              //Venus
                             var loc4= new Locales(4);
                              loc4.name= "Venus. ";
                              loc4.desc= " Named after the Roman god of beauty and love, this planet is hot." +
                                                    " The surface of the planet, I mean.";
                              loc4.item = "";
                              LocalesArr[4]=loc4;
                              
                              //Neptune
                             var loc5= new Locales(5);
                              loc5.name= "Neptune. ";
                              loc5.desc= " This planet has so many moons, its nickname is moony (not really).";
                              loc5.item = item5;
                              loc5.string= loc5.name + loc5.desc;
                              loc5.hasItem = true;
                              LocalesArr[5]=loc5;
                              
                               //Jupiter
                             var loc6= new Locales(6);
                              loc6.name= "Jupiter. ";
                              loc6.desc= " Probably the most intimidating planet in our solar system." + 
                                            " I mean, its got an eye that's also a giant tornado.";
                              loc6.item = item6;
                              loc6.hasItem = true;
                              LocalesArr[6]=loc6;
                              
                              //Jupiter
                             var loc7= new Locales(7);
                              loc7.name= "Uranus. ";
                              loc7.desc= " If you think that name of this planet is funny," + 
                                                "you're pronouncing it incorrectly, and you're immature.";
                              loc7.item = item7;
                              loc7.hasItem = true;
                              LocalesArr[7]=loc7;
                              
        
            
            
        //Prototype for items

                function Items (id) {
                
                this.id;
                this.name;
                this.desc;
                this.toString = function(){
                return this.name + this.desc;
                }
                
            }
                                              //Instances for Items prototype
                var ItemsArr = new Array();
                
                
                
                                var item2 = new Items(2);               //item1
                                        item2.name= " Piece one.";
                                        item2.desc= "  The first piece of the device is here. Take?";
                                        ItemsArr[0]=item2;
                                var item5 = new Items(5);                 //item 2
                                        item5.name= " Piece two.";
                                        item5.desc= " The second piece of the device is here. Take?";
                                        ItemsArr[1]=item5;
                                var item6 = new Items(6);                         //item 3
                                        item6.name= " Piece three.";
                                        item6.desc= " The third piece of the device is here. Take?";
                                        ItemsArr[2]=item6;
                                var item7 = new Items(7);                              //item 4
                                        item7.name= " Piece four.";
                                        item7.desc= " The final piece of the device is here. Take?";
                                        ItemsArr[3]=item7;
        
    




    var inventory = new Array();             //Global array for inventory
                                                               
                         //Note: If you take the same item from a planet the inventory just doesn't change. 
    

        
        //Score Display
        
            
         
         function updateScore(locale){
            
            
                if (locale.hasVisited != true){
                        score = score + 5;
                        locale.hasVisited = true;
                        
                }else if (locale.hasVisited != false){
                        score = score;
            }
            document.getElementById('scoreDisplay').innerHTML= score;   
        }
                
                
                
         