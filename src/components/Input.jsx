export const Input = ({ id, className, onChange }) => {
  return (
    <>
      <input
        type="text"
        id={id}
        className={className + " w-10 h-10 rounded-xl mx-3"}
        onChange={onChange}
      />
    </>
  );
};

