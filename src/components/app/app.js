import { useState } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';

function App() {

    const [data, setData] = useState({
        employees: [
            {id: 1, name: "Alex M.", salary: 999, increase: true, like: false},
            {id: 2, name: "John S.", salary: 3500, increase: false, like: true},
            {id: 3, name: "Maxim S.", salary: 7800, increase: false, like: false},
            {id: 4, name: "Alexandra J.", salary: 245, increase: true, like: false},
            {id: 5, name: "Evgenii S.", salary: 6432, increase: false, like: true},
        ]
    });
    const [term, setTerm] = useState("");
    const [filter, setFilter] = useState("increase");
    // const [salary, setSalary] = useState(0);

    function deleteItem(id) {
        setData(({employees}) => ({employees: employees.filter(item => item.id !== id)}));
    }

    function createItem(name, salary) {

        const newItem = {
            id: lastItemsId() + 1, 
            name: name, 
            salary: salary, 
            increase: false,
            like: false
        };

        setData(({employees}) => ({employees: [...employees, newItem]}));
    }

    // function updateItemSalary(name, salary) {
    //     const index = data.employees.findIndex((item) => item.name === name);
    //     setData(({employees}) => ({employees: [employees.slice(0, index), {salary: salary, ...employees[index]}, employees.slice(index + 1)]}));
    // }

    function lastItemsId() {
        if (data.employees.length !== 0) return data.employees[data.employees.length - 1].id;
        else return 0;
    }

    function onToggleProp(id, prop) {
        setData(({employees}) => ({
            employees: employees.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    }

    function searchEmployee(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    function onUpdateSearch(term) {
        setTerm(term);
    }

    function filterEmployees(items, filter) {
        switch (filter) {
            case "increase":
                return items.filter(item => item.increase);
            case "salary":
                return items.filter(item => item.salary > 1000);
            case "like":
                return items.filter(item => item.like);
            default:
                return items;
        }
    }

    function onFilterSelect(filter) {
        setFilter(filter);
    }

    function onChangeInput(name, salary) {
        // setSalary(salary);
        // updateItemSalary(name, salary);
    }

    const visibleData = filterEmployees(searchEmployee(data.employees, term), filter);

    return (
        <div className="app">
            <AppInfo 
                allEmployeesCount={data.employees.length} 
                employeesCountWithPremium={data.employees.filter(item => item.increase === true).length}/>

            <div className="search-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch}/>  
                <AppFilter filter={filter} onFilterSelect={onFilterSelect}/>
            </div>

            <EmployeesList 
                data={visibleData}
                onDelete={deleteItem}
                onToggleProp={onToggleProp}
                onChangeInput={onChangeInput}/>
            <EmployeesAddForm onCreate={createItem}/>
        </div>
    );
}

export default App;