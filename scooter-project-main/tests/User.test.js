const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')
// User tests here

describe('User class', () => {
    const newUser = new User('bobcobb000','12345',25)
    // test username
    test('User has username', () => {
        expect(newUser.username).toBe('bobcobb000')
    })
    // test password
    test('User has password', () =>{
        expect(newUser.password).toBe('12345')
    })
    // test age
    test('User has age and is at least 18', () =>{
        expect(newUser.age).toBeGreaterThanOrEqual(18);  
    })
    //test adding money
    test('User has 10 dollars in wallet', () =>{
        newUser.addFunds(10)
        expect(newUser.wallet).toBe(10)
    })
    //test add money while underage
    test('User is underage', () =>{
        const User1 = new User('bobcobb000','12345',15)
        User1.addFunds(10)
        expect(User1.wallet).toBe(0)
    })
})