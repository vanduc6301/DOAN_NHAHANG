import React from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import Header from "./layout/Header";

//// Các trang
import TrangChu from "./pages/trangchu/TrangChu";
import GioiThieu from "./pages/gioithieu/GioiThieu";
import ThucDon from "./pages/thucdon/ThucDon";
import TinTuc from "./pages/tintuc/TinTuc";
import LienHe from "./pages/lienhe/LienHe";
// Trang con của Thực Đơn

import Pizza from "./pages/thucdon/menu/Pizza";
import Buzger from "./pages/thucdon/menu/Buzger";
import Douong from "./pages/thucdon/menu/Douong";
import TraSua from "./pages/thucdon/menu/TraSua";
import KhoaiChien from "./pages/thucdon/menu/KhoaiChien";
import Hoaqua from "./pages/thucdon/menu/Hoaqua";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/gioi-thieu" element={<GioiThieu />} />
        <Route path="/thuc-don" element={<ThucDon />} />
        <Route path="/tin-tuc" element={<TinTuc />} />
        <Route path="/lien-he" element={<LienHe />} />

        {/* Các trang con của thực đơn */}
        <Route path="/thuc-don/pizza" element={<Pizza />} />
        <Route path="/thuc-don/burger" element={<Buzger />} />
        <Route path="/thuc-don/do-uong" element={<Douong />} />
        <Route path="/thuc-don/tra-sua" element={<TraSua />} />
        <Route path="/thuc-don/khoai-chien" element={<KhoaiChien />} />
        <Route path="/thuc-don/hoa-qua" element={<Hoaqua />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
