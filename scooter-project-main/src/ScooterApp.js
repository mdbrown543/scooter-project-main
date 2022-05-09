const User = require('./User')
const Scooter = require('./Scooter')


class ScooterApp {
  // ScooterApp code here
  static scooterSession = [];
  
  constructor(){
    const locationList = ['1st St','2nd St','3rd St'];
    this.station1 = []
    this.station2 = []
    this.station3 = []
    this.registeredUsers  = [];
    this.loggedIn = false
  }
  register(username1,password1,age1){
    let newUser = {
      'username': username1,
      'password': password1,
      'age': age1
    }
    for(let i in this.registeredUsers){
      if(this.registeredUsers[i].username === username1){
        return `${username1} is registered`
      }
    }
    this.registeredUsers.push(newUser)
    this.constructor.scooterSession.push(this)
    
    return `${username1} is registered`
  }
  login(username1, password1){
    for(let i=0;i<this.registeredUsers.length;i++){
      if(username1 === this.registeredUsers[i].username && password1 === this.registeredUsers[i].password){
        this.loggedIn = true
        return `${username1} is logged in`
      }
    } 
    return 'Please try another username and password.'
  }
  addScooter(scooter){
    let newScooter = {
      id: scooter.id,
      station: scooter.station,
    }
    if(newScooter.station === "station1"){
      this.station1.push(newScooter)
    } else if(newScooter.station === "station2"){
      this.station2.push(newScooter)
    }else{
      this.station3.push(newScooter)
    }
   
  console.log(`A new scooter has been added at ${newScooter.station}.`)
  }
  removeScooter(scooter){
    let scooter1 = {
      id: scooter.id,
      station: scooter.station,
    }
      if(scooter1.station === "station1"){
        for(let i in this.station1){
          if(this.station1[i].id === scooter1.id){
            this.station1.splice(i,i+1)
          }
        }
      } else if(scooter1.station === "station2"){
        for(let i in this.station2){
          if(this.station2[i].id === scooter1.id){
            this.station2.splice(i,i+1)
          }
        }
      }else if(scooter1.station === "station3"){
        for(let i in this.station3){
          if(this.station3[i].id === scooter1.id){
            this.station3.splice(i,i+1)
          }
        }
      }
    console.log(`Scooter #${scooter1.id} has been removed.`)
    }



}

module.exports = ScooterApp
