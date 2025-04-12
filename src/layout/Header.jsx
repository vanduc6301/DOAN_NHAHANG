import React from "react";
import { Link } from "react-router";

const Header = () => {
  // Dữ liệu menu chính
  const mainNav = [
    { name: "Trang chủ", path: "/" },
    { name: "Giới thiệu", path: "/gioi-thieu" },
    {
      name: "Thực đơn",
      path: "/thuc-don",
      children: [
        { name: "Pizza", path: "/thuc-don/pizza" },
        { name: "Burger", path: "/thuc-don/burger" },
        { name: "Đồ uống", path: "/thuc-don/do-uong" },
        { name: "Trà Sữa", path: "/thuc-don/tra-sua" },
        { name: "Khoai Chiên", path: "/thuc-don/khoai-chien" },
        { name: "Hoa Quả", path: "/thuc-don/hoa-qua" },
      ],
    },
    { name: "Tin tức", path: "/tin-tuc" },
    { name: "Liên hệ", path: "/lien-he" },
    { name: "Nhượng quyền", path: "/nhuong-quyen" },
  ];

  // Dữ liệu menu con (danh mục món ăn có icon)
  const subMenu = [
    { icon: "🍕", name: "Pizza", path: "/thuc-don/pizza" },
    { icon: "🍔", name: "Burger", path: "/thuc-don/burger" },
    { icon: "🥤", name: "Đồ uống", path: "/thuc-don/do-uong" },
    { icon: "🧋", name: "Trà Sữa", path: "/thuc-don/tra-sua" },
    { icon: "🍟", name: "Khoai chiên", path: "/thuc-don/khoai-chien" },
    { icon: "🌮", name: "Hoa quả", path: "/thuc-don/hoa-qua" },
  ];

  return (
    <header>
      {/* Thanh điều hướng chính */}
      <nav className="flex justify-center bg-white shadow-md py-4 space-x-6 font-semibold text-lg uppercase">
        {mainNav.map((item, i) => (
          <div key={i} className="relative group">
            <Link to={item.path} className="hover:text-red-500">
              {item.name}
            </Link>
            {/* Dropdown nếu có children */}
            {item.children && (
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded z-10">
                {item.children.map((child, idx) => (
                  <Link
                    to={child.path}
                    key={idx}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Menu danh mục món ăn (có icon) */}
      <div className="flex justify-center bg-gray-100 py-2 space-x-6 text-sm">
        {subMenu.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center space-x-1 hover:text-red-500"
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
