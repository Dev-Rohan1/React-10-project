import { FaRegCircleXmark } from "react-icons/fa6";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
const Modal = ({ isOpen, closeModal, name, setName, email, setEmail }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  const submitModal = (e) => {
    e.preventDefault();
    addContact({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <>
      {isOpen && (
        <form
          className="w-[390px] bg-red-50 m-auto p-4 rounded-md absolute top-10 right-5"
          onSubmit={submitModal}
        >
          <label className="block mb-1 mt-2">Name:</label>
          <input
            className="w-full h-[40px] bg-transparent border-[1.5px] border-black rounded-md outline-none px-2 placeholder:text-black mb-3"
            type="text"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="block mb-1">Email:</label>
          <input
            className="w-full h-[40px] bg-transparent border-[1.5px] border-black rounded-md outline-none px-2 placeholder:text-black mb-4"
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full text-white bg-indigo-700 py-2 rounded-md"
          >
            Add Contact
          </button>
          <FaRegCircleXmark
            className="text-2xl absolute top-3 right-3 cursor-pointer"
            onClick={closeModal}
          />
        </form>
      )}
    </>
  );
};

export default Modal;
