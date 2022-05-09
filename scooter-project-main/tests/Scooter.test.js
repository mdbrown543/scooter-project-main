const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

//typeof scooter === object
describe('scooter object', () => {
  const newScooter = new Scooter(7,"station2")
  test('tests if the scooter is created', () => {
    // edit this to be a real test!
    expect(newScooter.id).toEqual(7);
    expect(typeof newScooter).toBe("object");
  })
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  const myScooter = new Scooter(7,"station1")

  //rent method
  test('Scooter is used to travel to a destination', () => {
    myScooter.rent(7,5,'2nd St')
    
    //charge decreases 100 -> 75 after 5 miles of travel
    expect(myScooter.charge).toBe(75)
  })
  test('Distance exceeds range', () => {
    myScooter.rent(7,25,'2nd St')
    //charge remains the same as last test(no travel)
    expect(myScooter.charge).toBe(75)
  })

  //dock method
  test('Scooter is docked at a station3 and charges', () => {
    myScooter.addScooter(myScooter)
    myScooter.dock(myScooter,"station3")
    expect(myScooter.station).toBe("station3")
  })
  test('Scooter is docked at a new station2 and charges', () => {
    myScooter.addScooter(myScooter)
    myScooter.dock(myScooter,"station2")
    expect(myScooter.station).toBe("station2")
  })
  test('Scooter is docked at a new station1 and charges', () => {
    myScooter.addScooter(myScooter)
    myScooter.dock(myScooter,"station1")
    expect(myScooter.station).toBe("station1")
  })

  //requestRepair method
  test('Scooter is repaired', () => {
    myScooter.isBroken = true
    myScooter.repairScooter()
    expect(myScooter.isBroken).toBe(false)
})

  //charge method
  test('Scooter battery is charged', async () => {
    await myScooter.recharge()
    expect(myScooter.charge).toBe(100)
})
test('Scooter battery is fully charged', async () => {
  myScooter.charge = 100
  await myScooter.recharge()
  expect(myScooter.charge).toBe(100)
})

})
