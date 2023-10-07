const employee = {
    name: 'sam',
    streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newobj = { ...obj };
    newobj[key] = value;
    return newobj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return employee
}

function deleteFromEmployeeByKey(obj, key){
    const newobj = { ...obj };
    delete newobj[key]
    return newobj;
}  

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj;
}