import LogIn from "./LogIn";
import NavBar from "./NavBar";
import Search from "./Search";

const Header = () => {
    return (
        <div className="bg-[#412C3A] text-white p-10 flex justify-between items-center w-full h-full">
            <Search />
            <NavBar />
            <LogIn /> 
        </div>
    );
}

export default Header
