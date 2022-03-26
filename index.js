const  employee = {
    name: `Sam`,
    streetAddress: `12 Broadway`
}

function updateEmployeeWithKeyAndValue(employee) {
    return{name: `Sam` , streetAddress: `11 Broadway`};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,) {
    employee.streetAddress = "12 Broadway"
    return employee
};

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee ={employee};
    delete newEmployee.name;
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee
}


