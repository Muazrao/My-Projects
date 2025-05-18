// Full updated code with responsive sidebar added

"use client";

import React, { useState } from "react";
import { Input } from "antd";
import {
  SearchOutlined,
  CloseCircleOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import data from "./cart.json";
import Head from "next/head";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

function Cart() {
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState(Array(data.length).fill(1));
  const [cartItems, setCartItems] = useState(data);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item, index) => sum + item.price * count[index],
    0
  );
  const totalItems = count.reduce((sum, counter) => sum + counter, 0);
  const shipping = 25;
  const totalPriceWithShipping = totalPrice + shipping;
  const remaining = 199 - totalPrice;

  const removeItems = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    setCount((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckOut = () => {
    alert(
      totalPrice > 0
        ? "Your order has been placed successfully!"
        : "Please add items to your cart before checking out."
    );
  };

  let logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AEYFb8cD1UTFaEvddz9glphhfoibNSOerA&s";

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden transition-opacity duration-300 ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-screen h-full bg-gradient-to-b from-white to-gray-100 z-50 shadow-2xl transform transition-transform duration-300 md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <img src={logo} alt="logo" className="w-28" />
          <CloseCircleOutlined
            onClick={() => setSidebarOpen(false)}
            className="text-2xl cursor-pointer text-gray-400 hover:text-red-500 transition-colors duration-200"
          />
        </div>

        {/* Main Menu */}
        <div className="flex flex-col px-4 py-5 space-y-4 border-b border-gray-100">
          {[
            "Fire Pits",
            "Pizza Ovens",
            "Coolers",
            "Accessories",
            "Patio & Garden",
            "Fuel",
            "Customize",
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-[17px] font-semibold text-gray-800 cursor-pointer hover:text-orange-600 hover:pl-2 transition-all duration-200"
            >
              {item}
              <span className="text-gray-400">{">"}</span>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="px-4 py-4">
          <div className="bg-white rounded-xl shadow p-4 grid grid-cols-2 gap-x-3 gap-y-4 text-sm">
            {[
              { icon: <ShoppingCartOutlined />, label: "Cart" },
              { icon: <UserOutlined />, label: "Account" },
              { icon: "🎁", label: "Gift Cards" },
              { icon: <SearchOutlined />, label: "Product Finder" },
              { icon: "🔥", label: "Community" },
              { icon: "💼", label: "Corporate Sales" },
              { icon: "❓", label: "Help" },
              {
                icon: (
                  <img
                    src="https://flagcdn.com/us.svg"
                    alt="US Flag"
                    className="w-5 h-5 object-cover inline-block rounded-sm mr-1"
                  />
                ),
                label: "US / EN",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 cursor-pointer transition-colors duration-200 hover:scale-[1.03]"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="truncate font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="fixed bg-white top-0 left-0 flex items-center justify-between w-full h-auto border-b border-gray-300 pb-1 z-30 px-4">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden flex items-center gap-2 px-3  hover:bg-gray-100 transition"
          >
            <MenuOutlined className="text-lg" />
            {/* <span className="text-sm font-medium">Menu</span> */}
          </button>

          <img className="w-32" src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex items-center space-x-2 text-sm">
          {[
            "Rewards",
            "Gift Cards",
            "Product Finder",
            "Community",
            "Corporate Sales",
            "Help",
            "US / EN",
          ].map((text, i) => (
            <React.Fragment key={i}>
              <span className="cursor-pointer hover:text-orange-700">
                {text}
              </span>
              {i < 6 && <span className="text-gray-400">|</span>}
            </React.Fragment>
          ))}
        </div>
      </nav>

      {/* Menu bar */}
      <div className="hidden md:flex fixed top-14 left-0 w-full bg-white border-b border-gray-300 py-3 px-4 z-20">
        <div className="flex space-x-4">
          {[
            "Fire Pits",
            "Pizza Ovens",
            "Accessories",
            "Patio & Garden",
            "Fuel",
            "Customize",
            "Deals",
          ].map((text, i) => (
            <p
              key={i}
              className="text-base font-semibold cursor-pointer relative hover:text-[#e4531b] after:absolute after:left-0 after:bottom-[-8px] after:w-0 after:h-[2px] after:bg-[#e4531b] hover:after:w-full after:transition-all after:duration-300"
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Top bar with search & icons */}
      <div className="fixed top-[40px] left-0 w-full bg-white border-b border-gray-300 flex justify-between items-center py-3 px-4 z-20">
        <Input
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          prefix={<SearchOutlined className="text-gray-500" />}
          suffix={
            searchValue && (
              <CloseCircleOutlined
                className="text-gray-400 hover:text-red-500 cursor-pointer"
                onClick={() => setSearchValue("")}
              />
            )
          }
        />
        <div className="flex items-center space-x-4 text-xl">
          <UserOutlined className="hover:text-orange-500 cursor-pointer" />
          <ShoppingCartOutlined className="hover:text-orange-500 cursor-pointer" />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row mt-36 px-4 md:px-16">
        {/* Cart items and subtotal */}
        <div id="cart-items-and-subtotal-div" className="w-full md:w-[60%]">
          <h1 className="font-bold text-3xl md:text-4xl mb-3">Cart</h1>
          <h1 className="text-base md:text-lg mb-6">
            <b>Subtotal (</b>
            <span>{totalItems} items</span>
            <b>): ${totalPrice}</b>
          </h1>
          <b className="text-lg md:text-xl">Items in Cart</b>

          <div className="w-full">
            {cartItems.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row w-full border-b border-gray-300 pb-6 mt-4"
              >
                <div className="w-full md:w-[170px] mb-4 md:mb-0">
                  <img
                    src={item.image}
                    alt="Product-image"
                    className="w-full cursor-pointer"
                  />
                </div>
                <div
                  id="card-content-shopping-cart-in-checkout"
                  className="mt-2 md:mt-0 ml-0 md:ml-4 flex justify-between w-full"
                >
                  <div>
                    <h1 className="font-bold text-lg md:text-xl mb-1">
                      {item.title}
                    </h1>
                    {item.size && (
                      <p className="mb-1 text-sm md:text-base">
                        Size: {item.size}
                      </p>
                    )}
                    {item.color && (
                      <p className="mb-1 text-sm md:text-base">
                        Color: {item.color}
                      </p>
                    )}
                    <div className="flex items-center mt-2">
                      <button
                        className="border rounded-full w-8 h-8 text-xl flex justify-center items-center hover:bg-gray-500 hover:border-none hover:text-amber-50 cursor-pointer"
                        onClick={() =>
                          setCount((prod) =>
                            prod.map((counter, index) =>
                              i === index && counter > 0 ? counter - 1 : counter
                            )
                          )
                        }
                      >
                        -
                      </button>
                      <p className="mx-3 font-bold">{count[i]}</p>
                      <button
                        className="border rounded-full w-8 h-8 text-xl flex justify-center items-center hover:bg-gray-500 hover:border-none hover:text-amber-50 cursor-pointer"
                        onClick={() =>
                          setCount((prod) =>
                            prod.map((counter, index) =>
                              i === index ? counter + 1 : counter
                            )
                          )
                        }
                      >
                        +
                      </button>
                      <button
                        className="ml-5 font-semibold underline text-sm cursor-pointer"
                        onClick={() => removeItems(i)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="font-bold flex items-center text-lg md:text-xl">
                    ${item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order summary */}
        <div className="w-full md:w-[30%] mt-10 md:mt-0 md:ml-10">
          {totalPrice > 199 ? (
            <p className="pb-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[5px] after:bg-orange-600 after:rounded-[10px]">
              Congrats, you're eligible for <b>Free Shipping</b>
              <span className="ml-2">
                <LocalShippingIcon />
              </span>
            </p>
          ) : (
            <p className="pb-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[5px] after:bg-orange-600 after:rounded-[10px]">
              Please add <b>${remaining}</b> more for <b>Free Shipping</b>
              <span className="ml-2">
                <LocalShippingIcon />
              </span>
            </p>
          )}
          <h1 className="text-xl font-bold mt-3">Order Summary</h1>
          <div className="flex justify-between mt-2 text-base md:text-lg">
            <p>Subtotal:</p>
            <p>${totalPrice}</p>
          </div>
          <div className="flex justify-between mt-2 text-base md:text-lg">
            <p>Shipping</p>
            {totalPrice > 199 ? <p>FREE</p> : <p>${shipping}</p>}
          </div>
          <div className="flex justify-between mt-2 border-b border-gray-300 pb-2 text-sm md:text-base">
            <p>Estimated Tax:</p>
            <p>Calculated at checkout</p>
          </div>
          <div className="flex justify-between mt-3 font-bold text-lg md:text-xl">
            <h1>Total</h1>
            {totalPrice > 199 ? (
              <h1>${totalPrice}</h1>
            ) : (
              <h1>${totalPriceWithShipping}</h1>
            )}
          </div>

          <div className="flex items-center border-b border-gray-300 pb-2 mt-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswO9V-VpaALLSMtujtcz4kYTKb_pgw5iqJ9F91YZ3c6RIVwbEUWxMFGgGwyi8xWpu5O4&usqp=CAU"
              alt="Paypal-Image"
              className="w-[70px]"
            />
            <span>
              <p className="underline text-sm md:text-base ml-2">
                As low as $27.20/mo{" "}
                <a href="http://www.google.com" className="text-blue-500 ">
                  Learn more
                </a>
              </p>
            </span>
          </div>
          <button
            onClick={handleCheckOut}
            className="bg-black w-full flex justify-center items-center pt-4 pb-4 rounded-sm cursor-pointer mt-4 mb-6"
          >
            <img
              className="w-7 mr-1"
              src="https://img.icons8.com/m_outlined/512/FFFFFF/lock.png"
              alt="lock-icon"
            />
            <span className="text-white font-bold">Checkout</span>
          </button>
          <p className="text-sm md:text-base font-semibold">
            Accepted Payment Methods
          </p>
          <div className="mt-2">
            <img
              src="https://content.solostove.com/image/upload/c_fill,w_443/f_auto/dpr_auto/q_auto:eco/sbpcmgqeoxs0vbd4yjws"
              alt="payment-methods"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
