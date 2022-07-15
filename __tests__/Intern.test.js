const Intern = require('../lib/Intern')

// Since we know that Name, ID and Email are working based on the employee tests, I am simply testing only the github portion of the pull

test('this is testing the intern for their school info', ()=>{
    const eng = new Intern ('Mike', 21, 'mike@email.com','UofO')
    expect(eng.school).toBe('UofO')
    expect(eng.getSchool()).toBe('UofO')
})
test('this is just to confirm ID from employee funnels through intern to get ID',()=>{
    const eng = new Intern('bob', 12, 'bob@email.com', 'UofO')
    expect(eng.id).toBe(12)
    expect(eng.getId()).toBe(12)
})