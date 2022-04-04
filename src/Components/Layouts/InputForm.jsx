import React, { useState } from "react";

var _ = require("lodash");

function InputForm(props) {
    const initialFormState = props.fields;

    const [state, setState] = useState(initialFormState);

    const handleInputChange = (event, id) => {
        const { name, value } = event.target;
        setState((prevState) =>
            _.map(prevState, (field) =>
                field.id === id
                    ? { id: field.id, data: { ...field.data, [name]: value } }
                    : { id: field.id, data: field.data }
            )
        );
    };

    const createEmptyField = () => {
        const ref = { ...state[0].data };
        Object.keys(ref).forEach((key) => (ref[key] = ""));
        return ref;
    };

    const addField = () => {
        const newField = {
            id: state.length + 1,
            data: createEmptyField(),
        };
        setState((prevState) => [...prevState, newField]);
    };

    const renderAddButton = () => {
        if (state[0].hasOwnProperty("id"))
            return <button onClick={addField}>Add</button>;
    };

    return (
        <div>
            <div className="section-heading">{props.sectionName}</div>
            <ul>
                {state.map((field) => (
                    <li key={field.id ? field.id : 1}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            {Object.keys(field.data).map((key) => (
                                <span key={key}>
                                    <label>{key}</label>
                                    <input
                                        type="text"
                                        name={key}
                                        value={field.data[key]}
                                        onChange={(e) =>
                                            handleInputChange(e, field.id)
                                        }
                                    />
                                </span>
                            ))}
                        </form>
                    </li>
                ))}
            </ul>
            {renderAddButton()}
            <button onClick={() => props.changeState(state)}>Submit</button>
        </div>
    );
}

export default InputForm;
