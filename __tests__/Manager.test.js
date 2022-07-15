const Manager = require('../lib/Manager')

// we now have confirmed that all info is passing through employee and as employee is the parent, we know all children will gather that information. The only new information to gather is the office phone number

test('we are confirming that the manager has an office phone number',()=>{
    const man = new Manager('sammy', 1, 'sammy@email.com', 1234567890)
    expect(man.officeNumber).toBe(1234567890)
    expect(man.getOfficeNumber()).toBe(1234567890)
})