const Input = ({ label, name, type }) => {
  return (
    <div className={`flex justify-between w-full items-center`}>
      <label className="min-w-[100px] text-sm ">{label}</label>
      <input
        name={name}
        type={type ? type : "text"}
        className=" input input-bordered input-md w-full "
      />
    </div>
  );
};

export default Input;
