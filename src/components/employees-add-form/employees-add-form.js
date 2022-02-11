import { useState } from 'react';

import './employees-add-form.css';

const EmployeesAddForm = ({onCreate}) => {

    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");

    function onValueChange(e) {
        const target = e.target;

        if (target.name === "name") {
            setName(target.value);
        } else {
            setSalary(target.value);
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        if ((name.length > 3) && (salary.length !== 0)) {
            onCreate(name, salary);
            setName("");
            setSalary("");
        }
    }

    return (
        <div className="app-add-form">
            <h2>Добавьте нового сотрудника</h2>
            <form className="add-form" onSubmit={onSubmit}>
                <input 
                    type="text" 
                    className="add-form-input"
                    name="name"
                    value={name}
                    placeholder="Как его зовут?"
                    onChange={onValueChange} />
                <input 
                    type="number" 
                    className="add-form-input"
                    name="salary"
                    value={salary}
                    placeholder="З/П в ;?"
                    onChange={onValueChange} />

                <button 
                    type="submit"
                    className="btn btn--outline">
                    Добавить
                </button>
            </form>
        </div>
    );
}

export default EmployeesAddForm;