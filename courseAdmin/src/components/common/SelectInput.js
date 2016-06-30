import React, {PropTypes} from 'react';

const SelectInput = ({name,label,defaultOption,options,onChange,value,error}) =>{
    return (
        <div className="form-group">
         <label htmlFor={name}>{label}</label>
         <div className="field">
            <select name={name} value={value}
              onChange={onChange} className="form-control">
            <option value="">{defaultOption}</option>
            {options.map((option)=>{
                return <option key={option.value}> value={option.value}>{option.kext}</option>;
            })}  
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
         </div>
        </div>
    );

};
SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    defaultOption:PropTypes.string.isRequired,
    options:PropTypes.arrayOf(PropTypes.object),
    value:PropTypes.string,
    error:PropTypes.string
};
export default SelectInput;