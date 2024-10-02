using System.Collections.Generic;

namespace MVCBusinessModels
{
    public class ListofEmployee
    {
        public List<Employee> Employees
        {
            get
            {
                Employee emp1 = new Employee() { Id = 1, Name = "John Doe", Department = "HR", Address = "123 Main St", Salary = 50000 };
                Employee emp2 = new Employee() { Id = 2, Name = "Jane Smith", Department = "IT", Address = "456 Park Ave", Salary = 65000 };
                Employee emp3 = new Employee() { Id = 3, Name = "Michael Johnson", Department = "Finance", Address = "789 Oak St", Salary = 70000 };
                Employee emp4 = new Employee() { Id = 4, Name = "Emily Davis", Department = "Marketing", Address = "101 Pine St", Salary = 60000 };
                Employee emp5 = new Employee() { Id = 5, Name = "David Wilson", Department = "Sales", Address = "202 Maple St", Salary = 55000 };

                List<Employee> emps = new List<Employee>() { emp1, emp2, emp3, emp4, emp5 };
                return emps;
            }
        }


    }
}
