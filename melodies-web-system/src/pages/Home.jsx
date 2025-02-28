import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";

const Home = () => {
    return (
        <div className="flex">
            <Menu />
            <div className="flex flex-col w-full">
                <Header />
                <Footer />
            </div>
        </div>
    );
};

export default Home;