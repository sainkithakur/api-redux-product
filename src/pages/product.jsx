import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getproductList } from "../redux/action/productAction";

const Product = () => {
  const [cat, setCat] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productReducer.products);
  const category = useSelector((state) => state.productReducer.categories);

  const handleFilter = (event) => {
    setCat(event.target.value);
  };

  const l = cat ? data.filter((item) => item.category === cat) : data;

  useEffect(() => {
    dispatch(getproductList());
    dispatch(getCategory());
  }, []);
  return (
    <div>
      <section class="text-gray-600 body-font">
        <select onChange={handleFilter} value={cat}>
          <option>Select Category</option>
          {category.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {l.map((item) => {
              return (
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={item.image}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {item.category}
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        {item.title}
                      </h1>
                      <p class="leading-relaxed mb-3">{item.description}</p>
                      <div class="flex items-center flex-wrap ">
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          ${item.price}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default Product;
