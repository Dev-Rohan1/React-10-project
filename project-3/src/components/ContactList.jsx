import { deleteDoc, doc } from "firebase/firestore";
import { FaRegEdit } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiDeleteBinFill } from "react-icons/ri";
import { db } from "../config/firebase";

const ContactList = ({ contacts, openModal }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(openModal);

  return (
    <div>
      {contacts.map((contact) => {
        return (
          <>
            <div
              className="flex items-center justify-between px-4 bg-[#FFEAAE] rounded-md py-1 mb-3 last:mb-0"
              key={contact.id}
            >
              <div>
                <FaRegCircleUser className="text-4xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-[-5px]">
                  {contact.name}
                </h3>
                <span className="text-lg">{contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegEdit
                  className="text-3xl cursor-pointer"
                  onClick={openModal}
                />
                <RiDeleteBinFill
                  className="text-3xl cursor-pointer"
                  onClick={() => deleteContact(contact.id)}
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ContactList;
