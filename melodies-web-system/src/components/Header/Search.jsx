import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd";
const Search = () => {
    return (
        <div className="">
            <Input
                placeholder="Search..."
                prefix={<SearchOutlined />}
                style={{
                    backgroundColor: 'lightgray',
                    padding: '10px',
                    borderRadius: '5px',
                    outline: 'none',
                    boxShadow: 'none',
                    borderRadius: '10px',
                    border: '1px solid transparent'
                }} 
            />
        </div>
    );
};

export default Search;