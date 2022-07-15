const Employee =  require('../lib/Employee')

test('checks if the new hire is an employee or other', ()=>{
  const emp = new Employee('test', 2, 'test@email.com')

  expect(emp.name).toBe('test')
  expect(emp.getName()).toBe('test')
  expect(emp.id).toBe(2)
  expect(emp.getRole()).toBe('Employee')
})