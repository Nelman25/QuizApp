import quizLogo from "../assets/quiz-logo.png";

const Header = () => {
    return (
        <header className="flex flex-col items-center justify-center my-8 mx-0">
            <img src={quizLogo} alt="Quiz Logo" width={48} height={48} />
            <h1 className="text-4xl font-bold font-serif bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                React Quiz
            </h1>
        </header>
    );
};

export default Header;
