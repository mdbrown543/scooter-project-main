const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')
const { wallet } = require('../src/ScooterApp')

class Scooter extends ScooterApp{
  // scooter code here
  constructor(id,station){
    super()
    this.id = id
    this.station = station
    this.isBroken = false
    this.isDocked = false
    this.charge = 100
    this.range = 20 //range is in miles(max is 20 miles)
  }

  repairScooter(){
    if(this.isBroken){
      this.isBroken = false
    }
  }
  dock(scooter,newStation){
    this.isDocked = true
    let newScooter = {
      id: scooter.id,
      station: scooter.station,
    }
    if(newScooter.station === "station1"){
      for(let i in this.station1){
        if(this.station1[i].id === this.id){
          this.station1.splice(i,i+1)
          this.station = newStation
        
        }
      }
    } else if(newScooter.station === "station2"){
      for(let i in this.station2){
        if(this.station2[i].id === this.id){
          this.station2.splice(i,i+1)
          this.station = newStation
          
        }
      }
    }else if(newScooter.station === "station3"){
      for(let i in this.station3){
        if(this.station3[i].id === this.id){
          this.station3.splice(i,i+1)
          this.station = newStation
        }
      }
    }
    console.log(newScooter.station)
    if(newStation === "station1"){
      this.station1.push(newScooter)
    } else if(newStation === "station2"){
      this.station2.push(newScooter)
    }else if(newStation === "station3"){
      this.station3.push(newScooter)
    }

  }

  rent(id,distance,destination){
   let price = .50 + (.50 * distance)
    if(price > this.wallet){
      let diff = price - this.wallet
     return `Please add ${diff} more dollars to your wallet.`
    }else if(distance > 20 || this.isBroken === true){
      return 'Max distance for charged scooter is 20 miles. Call technician for repairs.'
    }else if(distance > this.range){
      console.log("Destination exceeds current range. Please recharge scooter.")
    }else{
      this.isDocked = false
      this.wallet -= price
      this.charge = this.charge - (distance*5)
      this.range = Math.round(this.charge/5)
    
      return `You are now at ${destination} after traveling ${distance} miles using Scooter #${id}`
    }
  }

  async recharge(){
    if(this.charge < 100){
      let timeToCharge = (100-this.charge) * 100
      let recharge = new Promise((resolve, reject) => {
        setTimeout(() => {
          this.charge = 100
          this.range = Math.round(this.charge/5)
          resolve("Fully charged!")}, timeToCharge)
      });
    
      let result = await recharge; // wait until the promise resolves
    
      console.log(result)
    }else
      console.log("Fully charged!")
  }



}


module.exports = Scooter
