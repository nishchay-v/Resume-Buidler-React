import React, { useState } from "react";

function EducationForm(props) {
    const [fieldState, setFieldState] = useState(props.data);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFieldState({ ...fieldState, [name]: value });
    };

    return (
        <li>
            <form>
                <label>Institute</label>
                <input
                    type="text"
                    name="institute"
                    value={fieldState.institute}
                    onChange={handleInputChange}
                />
                <label>Affiliation</label>
                <input
                    type="text"
                    name="affiliation"
                    value={fieldState.affiliation}
                    onChange={handleInputChange}
                />
                <label>Score</label>
                <input
                    type="text"
                    name="score"
                    value={fieldState.score}
                    onChange={handleInputChange}
                />
            </form>
        </li>
    );
}

export default EducationForm;
