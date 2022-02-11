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
            {id: 1, name: "Alex M.", salary: 2000, increase: true, like: false},
            {id: 2, name: "John S.", salary: 3500, increase: false, like: true},
            {id: 3, name: "Maxim S.", salary: 5000, increase: false, like: false}
        ]
    });

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

    return (
        <div className="app">
            <AppInfo 
                allEmployeesCount={data.employees.length} 
                employeesCountWithPremium={data.employees.filter(item => item.increase === true).length}/>

            <div className="search-panel">
                <SearchPanel />  
                <AppFilter />
            </div>

            <EmployeesList 
                data={data.employees}
                onDelete={deleteItem}
                onToggleProp={onToggleProp}/>
            <EmployeesAddForm onCreate={createItem}/>
        </div>
    );
}

export default App;