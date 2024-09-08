import FilterSection from "../layouts/FilterSection";
import Navbar01 from "/src/components/navbar/Navbar01";
import React, { useEffect } from "react";
import Footer01 from "/src/components/footer/Footer01";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slice/productSlice";

function FilterProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    // if (!products) {
    let searchData = {
      searchTerm: "",
      categoryId: "",
    };
    dispatch(fetchProducts(searchData));
    // }
  }, [dispatch]);

  console.log(products, "======>product data");
  return (
    <>
      <Navbar01 />
      <FilterSection />
      <Footer01 />
    </>
  );
}

export default FilterProduct;
