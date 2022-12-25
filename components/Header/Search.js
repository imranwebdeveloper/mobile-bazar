import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="flex-1 md:flex items-center bg-slate-100 px-4 py-2 rounded-3xl  gap-4 hidden ">
      <input
        type="text"
        className="focus:outline-none bg-transparent flex-1   "
        placeholder="Find your phone here..."
      />
      <span className="md:text-lg  font-bold ">
        <BsSearch />
      </span>
    </div>
  );
};

export default Search;
