const Employee =  require('../lib/Employee')

// these tests will confirm that Name, ID and Email are all working properly

test('checks if the employee name is working',()=>{
    const emp = new Employee('Mike', 1, 'email.com')
    expect(emp.name).toBe('Mike')
    expect(emp.getName()).toBe('Mike')
})
test('checks if the employee ID is working',()=>{
    const emp = new Employee('bill',3,'email.com')
    expect(emp.id).toBe(3)
    expect(emp.getId()).toBe(3)
})
test('checks if the employee email is captured',()=>{
    const emp = new Employee('Erica', 5, 'erica@email.com')
    expect(emp.email).toBe('erica@email.com')
    expect(emp.getEmail()).toBe('erica@email.com')
})


