const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

describe('ScooterApp class', () => {
    const app = new ScooterApp('bobcobb000','12345',25)
    app.register('bobcobb000','12345',20)
    // register user
    test('User is registered', () => {
        console.log(app.registeredUsers)
        console.log(ScooterApp.scooterSession)
        expect(app.registeredUsers[0].username).toContain('bobcobb000')
    })
    // user already registered
    test('User is registered', () => {
        app.register('bobcobb000','12345',20)
        expect(app.registeredUsers[0].username).toContain('bobcobb000')
    })
    // log in
    test('User is logged in', () => {
        app.login('bobcobb000','12345')
        console.log(app.registeredUsers)
        expect(app.loggedIn).toBe(true)
    })
  
    // add scooter
    test('Scooter has been added', () => {
        const scooter1 = new Scooter(1,"station1")
        app.addScooter(scooter1)
        console.log(ScooterApp.scooterSession)
        expect(app.station1[0].id).toBe(1)
    })

    // remove scooter
    test('Scooter has been removed from station1', () => {
        const scooter1 = new Scooter(6,"station1")
        const scooter2 = new Scooter(7,"station1")
        app.addScooter(scooter1)
        app.addScooter(scooter2)
        console.log(app.station1)
        app.removeScooter(scooter1)
        console.log(app.station1)
        expect(app.station1[0].id).not.toBe(6)
    })
    test('Scooter has been removed from station2', () => {
        const scooter1 = new Scooter(1,"station2")
        const scooter2 = new Scooter(2,"station2")
        app.addScooter(scooter1)
        app.addScooter(scooter2)
        app.removeScooter(scooter1)
        expect(app.station2[0].id).not.toBe(1)
    })
    test('Scooter has been removed from station3', () => {
        const scooter1 = new Scooter(5,"station3")
        const scooter2 = new Scooter(4,"station3")
        app.addScooter(scooter1)
        app.addScooter(scooter2)
        app.removeScooter(scooter1)
        expect(app.station3[0].id).not.toBe(5)
    })

})