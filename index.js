// Write your solution in this file!

const employee = {
    name: "Joan",
    streetAddress: "1234 JS street"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, { [key] : value});
}

// const newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "loyd")
// console.log(newEmployee)

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey({},employee, key){
    let newEmployee = Object.assign({},employee, key)
    delete newEmployee.key
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){employee.key
    delete employee[key]
    return employee
}

// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     return delete employee.key
