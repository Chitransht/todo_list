
const InputField = ({label, value, newFunction}) => {
  return (
    <div>
      <div className="mb-3 mt-3">
        <label  className="form-label">{label}:</label>
        <input type="text" 
        className="form-control"  
        placeholder={`Enter ${label}`}
        value= {value}
        onChange = {(e) => newFunction(e.target.value)}
        />
      </div>
    </div>
  )
}

export default InputField;
