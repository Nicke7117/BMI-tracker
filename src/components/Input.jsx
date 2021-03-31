export const Input = ({ id, className, onChange, value }) => {
  return (
    <>
      <input
        type="number"
        id={id}
        className={"w-20 h-10 rounded-xl shadow my-1 ml-4 text-center"}
        onChange={onChange}
        value={value}
      />
    </>
  );
};
