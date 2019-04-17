import React from 'react'
import '../stylesheets/Form.css'

const Form = ({value, onChange, onCreate, onkeypress, color}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onkeypress} style={{color}}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    )
}

export default Form