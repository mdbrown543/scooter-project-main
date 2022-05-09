const ScooterApp = require('./ScooterApp')
const Scooter = require('./Scooter')

class User {
  // User code here
  constructor(username,password,age){
    this.username = username
    this.password = password
    this.age = age
    this.wallet = 0
    this.distance = 0
}

addFunds(dollars){
  if(this.age < 18){
    return '18+ for rentals.'
  }else
    this.wallet += dollars
}
 

}

module.exports = User
