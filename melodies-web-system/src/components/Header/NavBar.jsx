const NavBar = () => {
    return (
        <div className="flex justify-between w-1/3 items-center">
                <div>
                    <a href="#" className="text-[#868686] text-xl cursor-pointer">About</a>
                </div>
                <div>
                    <a href="#" className="text-[#868686] text-xl cursor-pointer">Contact</a>
                </div>
                <div>
                    <a href="#" className="text-[#868686] text-xl cursor-pointer">Premium</a>
                </div>
            </div>
    );
};

export default NavBar;