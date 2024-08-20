import Logo from "../assets/images/firebase_logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-1 bg-white rounded-md py-2">
      <img className="w-[40px]" src={Logo} alt="image" />
      <h2 className="text-2xl font-bold text-black">Firebase Contact App</h2>
    </div>
  );
};

export default Navbar;
