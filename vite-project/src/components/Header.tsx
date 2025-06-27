import { Bell, Mail, ChevronDown, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="h-[10%] flex items-center justify-between px-6 py-4 bg-white shadow-md font-rubik">
      <div className="relative w-full max-w-lg">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 text-sm text-search border rounded-3xl border-border focus:outline-none"
        />{" "}
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-black cursor-pointer" />
        <Mail className="text-black cursor-pointer" />

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
            A
          </div>
          <span className="text-sm font-medium text-gray-700">Azhar I.</span>
          <ChevronDown size={18} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
