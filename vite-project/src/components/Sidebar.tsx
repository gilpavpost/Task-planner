import { NavLink } from "react-router-dom";
import logo from "../assets/images/icon.svg";

const Sidebar = () => {
  return (
    <aside className="w-[20%] bg-sidebar min-h-screen flex flex-col">
      <div className="p-6">
        <img src={logo} alt="Logo" className="" />
      </div>

      <nav className="flex flex-col gap-2 text-sm px-6">
        <NavLink
          to="/clients"
          className={({ isActive }) =>
            `flex items-center gap-2 py-2 px-3 rounded-md ${
              isActive ? "bg-gray-200 font-semibold" : "text-gray-700"
            }`
          }
        >
          Clients
        </NavLink>
        <NavLink
          to="/task-manager"
          className={({ isActive }) =>
            `flex items-center gap-2 py-2 px-3 rounded-md ${
              isActive ? "bg-gray-200 font-semibold" : "text-gray-700"
            }`
          }
        >
          Task manager
        </NavLink>
        <NavLink
          to="/inbox"
          className={({ isActive }) =>
            `flex items-center gap-2 py-2 px-3 rounded-md ${
              isActive ? "bg-gray-200 font-semibold" : "text-gray-700"
            }`
          }
        >
          Inbox
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `flex items-center gap-2 py-2 px-3 rounded-md ${
              isActive ? "bg-gray-200 font-semibold" : "text-gray-700"
            }`
          }
        >
          Contacts
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
