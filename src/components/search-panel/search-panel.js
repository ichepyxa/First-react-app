import { useState } from 'react';

import './search-panel.css';

const SearchPanel = ({onUpdateSearch}) => {
    const [term, setTerm] = useState("");

    function onChangeTerm(e) {
        const term = e.target.value; 
        
        setTerm(term);
        onUpdateSearch(term);
    }

    return (
        <input 
            onChange={onChangeTerm}
            type="text"
            className="search-input"
            placeholder="Найти сотрудника..."
            value={term}/>
    );
}

export default SearchPanel;