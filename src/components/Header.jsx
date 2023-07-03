import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="text-center">
      <div className="mt-24">
        <img src={logo} alt="logo" className="block mx-auto w-16" />
      </div>

      <div>
        <h1 className="text-2xl font-thin text-gray mt-12 md:text-4xl">
          We are launching{" "}
          <span className="font-bold text-darkBlue">soon!</span>
        </h1>

        <p className="font-medium text-darkBlue text-sm mt-4 md:text-lg">
          Subscribe and get notified
        </p>
      </div>
    </header>
  );
};

export default Header;
