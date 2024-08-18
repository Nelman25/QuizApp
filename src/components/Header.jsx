import quizLogo from "../assets/Quiz-logo.png";

const Header = () => {
    return (
        <header className="flex flex-col items-center justify-center my-12 mx-0">
            <img src={quizLogo} alt="Quiz Logo" width={84} height={84} />
            <h1 className="text-[3rem] font-bold font-serif bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
            Quizzo
            </h1>
        </header>
    );
};

export default Header;
