import Image from "next/image";

function Header() {
  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Logo</span>
            <h2 className="text-lg font-bold">Loan Payment Calculator</h2>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
            target="_blank"
          >
            Learn more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
