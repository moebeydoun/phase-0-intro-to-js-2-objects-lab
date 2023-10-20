const employee = {
    streetAdresss: "123 Maple St",
    name: "Carl"
}

function  updateEmployeeWithKeyAndValue(employee, key, value){
const newObj = {...employee};

newObj[key] = value;

return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    if (employee.hasOwnProperty(key)) {
        employee[key] = value;
    } else {
        employee[key] = value;
    }

    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    // Create a clone of the employee object
    const employeeClone = { ...employee };

    // Check if the key exists in the clone
    if (employeeClone.hasOwnProperty(key)) {
        // Delete the key from the clone
        delete employeeClone[key];
    }

    return employeeClone; // Return the new employee object without the specified key
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Check if the key exists in the employee object
    if (employee.hasOwnProperty(key)) {
        // Delete the key from the employee object
        delete employee[key];
    }

    return employee; // Return the modified employee object
}



