export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    department: departmentName,
    employeeList: employees
  };

  return employeesObject;
}
