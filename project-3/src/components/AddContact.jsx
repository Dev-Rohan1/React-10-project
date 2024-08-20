import { IoSearch } from "react-icons/io5";

const AddContact = ({ openModal }) => {
  return (
    <div className="mt-4 mb-4">
      <div className="flex items-center justify-between gap-3 ">
        <div className="flex items-center gap-2 w-full border-[1.5px] rounded-md h-[45px] px-2">
          <IoSearch className="text-2xl text-white" />
          <input
            className="w-full text-lg placeholder:text-white bg-transparent border-0 outline-none text-white"
            type="text"
            placeholder="Search Contact..."
          />
        </div>
        <button
          className="h-[43px] w-[120px] bg-white rounded-md text-lg border-white border-[1.5px] transition-colors hover:border-[1.5px] hover:bg-transparent hover:text-white"
          onClick={openModal}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddContact;
