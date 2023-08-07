import './Header.css';
import pdf from './../../images/file1.pdf';
const Header = () => {
  const pathname = window.location.pathname;
  console.log(pathname);
  return (
    <div className="header">
      <header className="h-28 bg-[#1e1e1e]">
        <nav className="flex items-center h-28">
          <a href="/home" className="w-1/12">
            <h1 className="text-white text-5xl ml-10">NOAH</h1>
          </a>
          <div className="text-white text-xl font-semibold flex justify-between w-5/6 mx-20">
            <a className="sc-fzonZV iDiBaT" href="/marketplace">
              Information Post
            </a>
            <a href="/" className="sc-fzqKxP hLgAzU">
              Request More
            </a>
            <a className="sc-fzonZV iDiBaT" href={pdf} download>
              Become a Member
            </a>
            <a className="sc-fzonZV iDiBaT" href="/howto">
              How to NOAH
            </a>
            <a className="sc-fzonZV iDiBaT" href="/company">
              About Us
            </a>
            <a href="/" className="sc-pANHa gJJDtU">
              News
            </a>
          </div>
          {pathname !== '/admin' ? (
            <a
              href="/login"
              className="text-white text-xl font-semibold w-1/12 mr-4"
            >
              <button className="bg-orange-500 px-4 py-2 rounded-3xl shadow-xl">
                Sign In
              </button>
            </a>
          ) : (
            <a
              href="/login"
              className="text-white text-xl font-semibold w-[150px] mr-4"
            >
              <button className="bg-orange-500 px-4 py-2 rounded-3xl shadow-xl">
                Sign Out
              </button>
            </a>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
