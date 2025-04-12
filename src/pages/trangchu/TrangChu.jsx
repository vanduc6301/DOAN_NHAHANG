import React from "react";

const foodItems = [
  {
    id: 1,
    name: "Cơm trộn thịt bò",
    description:
      "Bạn đang băn khoăn không biết phải làm gì với bát cơm còn thừa bữa trước...",
    price: 65000,
    oldPrice: 75000,
    discount: 13,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/310/257/products/com-tron-thit-bo.jpg",
  },
  {
    id: 2,
    name: "Cơm trộn hải sản",
    description:
      "Bạn đang băn khoăn không biết phải làm gì với bát cơm còn thừa bữa trước...",
    price: 120000,
    oldPrice: 150000,
    discount: 20,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/310/257/products/com-tron-hai-san.jpg",
  },
  {
    id: 3,
    name: "Cơm gà nướng phô mai cay",
    description:
      "Bạn đang băn khoăn không biết phải làm gì với bát cơm còn thừa bữa trước...",
    price: 65000,
    oldPrice: null,
    discount: 0,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/310/257/products/com-ga-nuong-pho-mai.jpg",
  },
  {
    id: 4,
    name: "Cơm trộn đồ chay",
    description:
      "Thực phẩm sạch sẽ, an toàn, được đánh giá cao trong các thương hiệu...",
    price: 120000,
    oldPrice: 150000,
    discount: 20,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/310/257/products/com-tron-do-chay.jpg",
  },
];
const TrangChu = () => {
  return (
    <div>
      <img
        src="https://bizweb.dktcdn.net/100/310/257/themes/801944/assets/slider_1.jpg?1676001091788"
        alt="slider_1"
      />
      <section>
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <img
                  src="https://bizweb.dktcdn.net/100/310/257/themes/801944/assets/banner_box_1.jpg?1676001091788"
                  alt="Banner 1"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <img
                      src="https://bizweb.dktcdn.net/100/310/257/themes/801944/assets/banner_box_2.jpg?1676001091788"
                      alt="Banner 2"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute top-4 left-4 text-red-600 font-bold text-xl"></div>
                  </div>

                  <div className="relative">
                    <img
                      src="https://bizweb.dktcdn.net/100/310/257/themes/801944/assets/banner_box_3.jpg?1676001091788"
                      alt="Banner 3"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="https://bizweb.dktcdn.net/100/310/257/themes/801944/assets/banner_box_4.jpg?1676001091788"
                    alt="Banner 4"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 border-b-2 inline-block border-red-500">
              GÀ RÁN
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {foodItems.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
                >
                  {/* Giảm giá */}
                  {item.discount > 0 && (
                    <div className="absolute top-0 left-0 bg-red-600 text-white text-sm font-bold px-2 py-1 z-10">
                      -{item.discount}%
                    </div>
                  )}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="mt-3">
                      <span className="text-red-600 font-bold text-lg">
                        {item.price.toLocaleString("vi-VN")}₫
                      </span>
                      {item.oldPrice && (
                        <span className="text-gray-400 line-through ml-2 text-sm">
                          {item.oldPrice.toLocaleString("vi-VN")}₫
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </section>
    </div>
  );
};

export default TrangChu;
