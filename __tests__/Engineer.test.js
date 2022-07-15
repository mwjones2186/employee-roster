const Engineer = require('../lib/Engineer')

// Since we know that Name, ID and Email are working based on the employee tests, I am simply testing only the github portion of the pull

test('this is testing the engineer for the github info', ()=>{
    const eng = new Engineer ('Mike', 21, 'mike@email.com','mike@github.com')
    expect(eng.github).toBe('mike@github.com')
    expect(eng.getGithub()).toBe('mike@github.com')
})
test('this is just to confirm name from employee funnels through engineer to get name',()=>{
    const eng = new Engineer('bob', 12, 'bob@email.com', 'bob@github.com')
    expect(eng.name).toBe('bob')
    expect(eng.getName()).toBe('bob')
})