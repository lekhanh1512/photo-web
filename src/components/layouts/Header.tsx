import React, { useState } from "react";
import "./styles.css"; // Đảm bảo bạn đã import file CSS
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar"; // Nhập component Sidebar
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed left-0 w-full flex flex-col md:flex-col items-center md:px-20 md:py-4 p-4 font-roboto font-medium shadow-custom bg-[#ffffffff] z-50 mb-[10px]">
        <div className="flex flex-col items-center max-w-full px-4 py-6 justify-center fade-in">
          <nav className="flex flex-col items-center w-full">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-[15px] text-[#a18161] font-sans tracking-widest">
                EST.
              </span>
              <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full overflow-hidden">
                <img
                  alt="Blue palm tree illustration inside a rounded arch frame"
                  className="object-contain w-full h-full"
                  src="LOGO.png"
                />
              </div>
              <span className="text-[15px] text-[#a18161] font-sans tracking-widest">
                2024
              </span>
            </div>
            <h1
              className="text-[#533822] font-playfair text-[25px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[0.2em] uppercase font-semibold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              KAN STUDIO
            </h1>
            <p className="text-[#a18161] font-sans text-[12px] md:text-[14px] tracking-widest">
              PHOTOGRAPHY
            </p>
          </nav>
          <div className="lg:hidden ml-auto">
            <button
              className="menu-button p-2 text-[#47AE31] transition duration-200"
              onClick={toggleMenu}
            >
              <Menu size={35} />
            </button>
          </div>
        </div>

        {/* Hiển thị sidebar khi ở chế độ mobile */}
        <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />

        {/* Menu chính chỉ hiển thị trên màn hình lớn */}
        <nav
          className={`hidden lg:flex flex-wrap items-center justify-center md:justify-center space-x-4 md:space-x-6 md:w-full text-[#533822] font-sans text-[16px] tracking-widest`}
        >
          <Link className="nav-link" to="/">
            TRANG CHỦ
          </Link>
          <Link className="nav-link" to="/vè-chung-toi">
            VỀ CHÚNG TÔI <i className="fas fa-chevron-down"></i>
          </Link>
          <Link className="nav-link" to="/dich-vu">
            DỊCH VỤ <i className="fas fa-chevron-down"></i>
          </Link>
          <Link className="nav-link" to="/lien-he">
            LIÊN HỆ <i className="fas fa-chevron-down"></i>
          </Link>
        </nav>
      </header>

      {/* Thêm khoảng cách cho nội dung bên dưới */}
      <div className="pt-24">
        {/* Thay đổi giá trị pt-24 tùy thuộc vào chiều cao của header */}
        {/* Nội dung chính của bạn ở đây */}
      </div>

      <style>
        {`
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 1s forwards;
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
      </style>
    </>
  );
};

export default Header;
