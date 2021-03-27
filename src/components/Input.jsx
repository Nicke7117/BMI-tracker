export const Input = ({ id, className, onChange, value }) => {
  return (
    <>
      <input
        type="number"
        id={id}
        className={className + " w-10 h-10 rounded-xl mx-3"}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

