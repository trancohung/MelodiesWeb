import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-[#412C3A] text-white p-10 flex justify-between items-center h-full">
      <div className="">
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          style={{
            backgroundColor: "lightgray",
            padding: "10px",
            width: "400px",
            outline: "none",
            boxShadow: "none",
            borderRadius: "10px",
            border: "1px solid transparent",
          }}
        />
      </div>
      <div className="flex justify-between w-1/3 items-center">
        <div>
          <a href="#" className="text-[#FFFFFF] text-xl cursor-pointer">
            About
          </a>
        </div>
        <div>
          <a href="#" className="text-[#FFFFFF] text-xl cursor-pointer">
            Contact
          </a>
        </div>
        <div>
          <a href="#" className="text-[#FFFFFF] text-xl cursor-pointer">
            Premium
          </a>
        </div>
      </div>
      {user ? (
        <div className="flex gap-4 items-center">
          <span>{user.name}!</span>
          <button
            onClick={logout}
            className="bg-[#1E1E1E] text-[#EE10B0] p-4 rounded-2xl cursor-pointer"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <div className="flex gap-4">
            <Link
              to={"/login"}
              className="bg-[#1E1E1E] text-[#EE10B0] p-4 rounded-2xl cursor-pointer"
            >
              <button className="cursor-pointer">Log In</button>
            </Link>
            <Link
              to={"/signup"}
              className="bg-[#1E1E1E] text-[#EE10B0] p-4 rounded-2xl cursor-pointer"
            >
              <button className="cursor-pointer">Sign Up</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
