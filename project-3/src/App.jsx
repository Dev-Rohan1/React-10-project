import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import AddContact from "./components/AddContact";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import Modal from "./components/Modal";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getContact = async () => {
      try {
        const collectionRef = collection(db, "contact");
        const contactSnapshot = await getDocs(collectionRef);
        const contactLists = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContact();
  }, []);

  return (
    <main className="w-[430px] bg-[#323334] p-5 rounded-lg relative ">
      <Navbar />
      <AddContact openModal={openModal} />
      <ContactList contacts={contacts} openModal={openModal} />
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      />
    </main>
  );
};

export default App;
