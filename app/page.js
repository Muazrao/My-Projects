"use client";

import React from "react";
import { Input } from "antd";
import data from "./cart.json";
import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import Head from "next/head";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

function Cart() {
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState(Array(data.length).fill(1));
  const [cartItems, setCartItems] = useState(data);

  const totalPrice = cartItems.reduce((sum, item, index) => sum + item.price * count[index], 0);
const totalItems = count.reduce((sum, counter) => sum + counter, 0);
  const removeItems = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setCount((prevItems) => prevItems.filter((_, i) => i !== index));
  }
  const shipping = 25;
  const totalPriceWithShipping = totalPrice + shipping;
  const remaining = 199 -totalPrice;
  const handleCheckOut = () => {
     (totalPrice > 0) ? alert("Your order has been placed successfully!") : alert("Please add items to your cart before checking out.");
    }

  let logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AEYFb8cD1UTFaEvddz9glphhfoibNSOerA&s";
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </Head>
     
      <div>
        <nav className="fixed bg-white top-0 left-0 flex items-center justify-between w-full h-auto border-b border-gray-300 pb-1">
          <img className="w-42 " src={logo} alt="shopping-cart-logo" />
          <div className=" mr-1.5">
            <span className="text-[14px] tracking-wider antialiased ml-1  mr-1 cursor-pointer hover:text-orange-700 lg:bg-transparent">
              {" "}
              Rewards 
            </span>
            <span className=" text-[14px] tracking-wider  text-gray-400  cursor-pointer">
              |
            </span>
            <span className=" text-[14px] tracking-wider antialiased ml-1  mr-1 cursor-pointer hover:text-orange-700 max-sm:bg-amber-900 lg:bg-transparent">
              {" "}
              Gift Cards{" "}
            </span>
            <span className=" text-[14px] tracking-wider  text-gray-400  cursor-pointer">
              |
            </span>
            <span className=" text-[14px] tracking-wider antialiased ml-1  mr-1 cursor-pointer hover:text-orange-700">
              {" "}
              Product Finder{" "}
            </span>
            <span className=" text-[14px] tracking-wider  text-gray-400  cursor-pointer">
              |
            </span>
            <span className=" text-[14px] tracking-wider antialiased ml-1  mr-1 cursor-pointer hover:text-orange-700">
              {" "}
              Community{" "}
            </span>
            <span className=" text-[14px] tracking-wider  text-gray-400  cursor-pointer">
              |
            </span>
            <span className=" text-[14px] tracking-wider antialiased ml-1  mr-1 cursor-pointer hover:text-orange-700">
              {" "}
              Corporate Sales{" "}
            </span>
            <span className=" text-[14px] tracking-wider  text-gray-400  cursor-pointer">
              |
            </span>
            <span className=" text-[14px] tracking-wider antialiased ml-1  mr-1 cursor-pointer hover:text-orange-700">
              {" "}
              Help{" "}
            </span>
            <span className=" text-[14px] tracking-wider  text-gray-400  cursor-pointer">
              |
            </span>
            <span className=" text-[14px] tracking-wider antialiased ml-1  mr-1 cursor-pointer">
              {" "}
              US / EN{" "}
            </span>
          </div>
        </nav>
        <div
          id="menu-bar"
          className="fixed bg-white top-14 left-0 w-full flex items-center justify-between  pt-3 pb-3 border-b border-gray-300"
        >
          <div id="menubar-elements" className="flex tracking-wide">
            <p className="text-[16px] pl-2 pr-2 mr-2 font-semibold relative text-center cursor-pointer  text-black hover:text-[#e4531b] after:content-[''] after:absolute after:left-0 after:bottom-[-16px] after:w-0 after:h-[2px] after:bg-[#e4531b] after:transition-all after:duration-300 hover:after:w-full">
              Fire Pits
            </p>
            <p className="text-[16px] pl-2 pr-2 mr-2 font-semibold relative text-center cursor-pointer  text-black hover:text-[#e4531b] after:content-[''] after:absolute after:left-[-5] after:bottom-[-16px] after:w-0 after:h-[2px] after:bg-[#e4531b] after:transition-all after:duration-300 hover:after:w-full">
              Pizza Ovens
            </p>
            <p className="text-[16px] pl-2 pr-2 mr-2 font-semibold relative text-center cursor-pointer  text-black hover:text-[#e4531b] after:content-[''] after:absolute after:left-0 after:bottom-[-16px] after:w-0 after:h-[2px] after:bg-[#e4531b] after:transition-all after:duration-300 hover:after:w-full">
              Accessories
            </p>
            <p className="text-[16px] pl-2 pr-2 mr-2 font-semibold relative text-center cursor-pointer  text-black hover:text-[#e4531b] after:content-[''] after:absolute after:left-0 after:bottom-[-16px] after:w-0 after:h-[2px] after:bg-[#e4531b] after:transition-all after:duration-300 hover:after:w-full">
              Patio & Garden
            </p>
            <p className="text-[16px] pl-2 pr-2 mr-2 font-semibold relative text-center cursor-pointer  text-black hover:text-[#e4531b] after:content-[''] after:absolute after:left-0 after:bottom-[-16px] after:w-0 after:h-[2px] after:bg-[#e4531b] after:transition-all after:duration-300 hover:after:w-full">
              Fuel
            </p>
            <p className="text-[16px] pl-2 pr-2 mr-2 font-semibold relative text-center cursor-pointer  text-black hover:text-[#e4531b] after:content-[''] after:absolute after:left-0 after:bottom-[-16px] after:w-0 after:h-[2px] after:bg-[#e4531b] after:transition-all after:duration-300 hover:after:w-full">
              Customize
            </p>
            <p className="text-[16px] pl-2 pr-2 mr-2 font-semibold relative text-center cursor-pointer  text-black hover:text-[#e4531b] after:content-[''] after:absolute after:left-0 after:bottom-[-16px] after:w-0 after:h-[2px] after:bg-[#e4531b] after:transition-all after:duration-300 hover:after:w-full">
              Deals
            </p>
          </div>
          <div className="flex items-center">
            <Input
              id="Searchbar"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className=" border-none p-3 py-3"
              prefix={<SearchOutlined className="text-gray-500" />}
              suffix={
                searchValue && (
                  <CloseCircleOutlined
                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                    onClick={() => setSearchValue("")} // Clears input on click
                  />
                )
              }
            />
            <div
              id="User-icon"
              className=" hover:text-orange-600 cursor-pointer  text-[20px] mr-4 ml-4 "
            >
              <UserOutlined />
            </div>
            <div
              id="Cart-icon"
              className=" hover:text-orange-600 cursor-pointer text-[20px] mr-7 "
            >
              <ShoppingCartOutlined />
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <div id="cart-items-and-subtotal-div" className="mt-35 ml-13 w-[60%]">
            <h1 className="font-bold  text-[32px]">Cart</h1>
            <h1 className="text-[16px]">
              <b>Subtotal (</b>
              <span>{totalItems} items</span>
              <b>): ${totalPrice}</b>
            </h1>
            <br />
            <b className="text-[20px]">Items in Cart</b>
            <div className="w-full">
              {cartItems.map((item, i) => (
                <div key={i} className="flex w-full">
                  <div className="flex w-full border-b border-gray-300 pb-10 mt-4">
                    <div className="w-[170px]">
                      <img
                        src={item.image}
                        alt="Product-image"
                        className="w-full cursor-pointer"
                      />
                    </div>
                    <div
                      id="card-content-shopping-cart-in-checkout"
                      className="mt-2 ml-2 w-full flex justify-between "
                    >
                      <div>
                        <h1 className="font-bold text-[18px] mb-1">
                          {item.title}
                        </h1>
                        {item.size && (
                          <p className="mb-1 text-[14px]">Size: {item.size}</p>
                        )}
                        {item.color && (
                          <p className="mb-1 text-[14px]">
                            Color: {item.color}
                          </p>
                        )}
                        <div className="flex items-center">
                          <button
                            className="border-1 rounded-full w-8 h-8 text-2xl flex justify-center items-center hover:bg-gray-500 hover:border-none hover:text-amber-50 cursor-pointer"
                            onClick={() => setCount((prod) => prod.map((counter, index) => i === index && counter > 0 ? counter - 1 : counter))}
                          >
                            -
                          </button>
                          <p className="ml-3.5 mr-3.5 font-bold">{count[i]}</p>
                          <button
                            className="border-1 rounded-full w-8 h-8  text-2xl flex justify-center items-center hover:bg-gray-500 hover:border-none hover:text-amber-50 cursor-pointer"
                            onClick={() => setCount((prod) => prod.map((counter, index) => i === index ? counter + 1 : counter))}
                          >
                            +
                          </button>
                          <button
                            className="ml-5 font-semibold underline text-[14px] cursor-pointer"
                            onClick={() => removeItems(i)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="font-bold flex items-center">
                        {" "}
                        ${item.price}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="fixed right-10 w-[30%] mt-35 ml-10 ">
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
                </span>{" "}
              </p>
            )}
            <h1 className="text-[20px] font-bold mt-3">Order Summary</h1>
            <div className="flex justify-between mt-2">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Shipping</p>
              {totalPrice > 199 ? <p>FREE</p> : <p>${shipping}</p>}
            </div>
            <div className="flex justify-between mt-2 border-b border-gray-300 pb-2">
              <p>Estimated Tax:</p>
              <p>Calculated at checkout</p>
            </div>
            <div className="flex justify-between mt-3 font-bold text-[18px]">
              <h1>Total</h1>
              {totalPrice > 199 ? 
              <h1>${totalPrice}</h1> : <h1>${totalPriceWithShipping}</h1>}
            </div>

            <div className="flex items-center border-b border-gray-300 pb-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswO9V-VpaALLSMtujtcz4kYTKb_pgw5iqJ9F91YZ3c6RIVwbEUWxMFGgGwyi8xWpu5O4&usqp=CAU"
                alt="Paypal-Image"
                className="w-[70px]"
              />
              <span>
                <p className="underline text-[14px] ml-2 ">
                  As low as $27.20/mo{" "}
                  <a href="http://www.google.com" className="text-blue-500 ">
                    Learn more
                  </a>
                </p>
              </span>
            </div>
            <button onClick={handleCheckOut} className="bg-black w-full flex justify-center items-center pt-4 pb-4 rounded-sm cursor-pointer mt-4 mb-6">
              <img
                className="w-7 mr-1"
                src="https://img.icons8.com/m_outlined/512/FFFFFF/lock.png"
                alt="lock-icon"
              />
              <span className="text-white font-bold">Checkout</span>
            </button>
            <p className="text-[14px] font-semibold">
              Accepted Payment Methods
            </p>
            <div className="mt-2">
              <img src="https://content.solostove.com/image/upload/c_fill,w_443/f_auto/dpr_auto/q_auto:eco/sbpcmgqeoxs0vbd4yjws" />
            </div>
          </div>)
        </div>
      </div>
    </>
  );
}

export default Cart;
