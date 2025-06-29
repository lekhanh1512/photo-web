// Đây là component Sidebar, dùng để hiển thị menu chính của trang web khi ở chế độ mobile.

import { forwardRef } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ isOpen, onClose }, ref) => {
    return (
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        <div
          ref={ref}
          className={`fixed inset-y-0 right-0 w-64 bg-[#ffffff] shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-[90]`}
        >
          <div className="w-fuil flex items-center justify-center p-4">
            <img src="/LOGO.jpg" className="w-[50%]  rounded-full " alt="" />
          </div>
          <div className="p-4 flex flex-col space-y-4">
            <Link
              className=" nav-link text-[#fff] hover:text-green-500 transition duration-300"
              to="/"
            >
              TRANG CHỦ
            </Link>
            <Link
              className="nav-link text-gray-700 hover:text-green-500 transition duration-300"
              to="/ve-chung-toi"
            >
             VỀ CHÚNG TÔI <i className="fas fa-chevron-down"></i>
            </Link>
            <Link
              className="nav-link text-gray-700 hover:text-green-500 transition duration-300"
              to="/dich-vu"
            >
              DỊCH VỤ <i className="fas fa-chevron-down"></i>
            </Link>

            <Link
              className="nav-link text-gray-700 hover:text-green-500 transition duration-300"
              to="/lien-he"
            >
              LIÊN HỆ <i className="fas fa-chevron-down"></i>
            </Link>
            
          </div>
        </div>
      </div>
    );
  }
);

export default Sidebar;
