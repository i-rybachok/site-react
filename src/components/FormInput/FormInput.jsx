const FormInput = ({ title, type, name, onChange, onBlur, value }) => {
  return (
    <label>
      <h2>{title}</h2>
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </label>
  );
};

export default FormInput;
