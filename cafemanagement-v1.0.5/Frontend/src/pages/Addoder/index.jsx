import React from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, RatingBar, Input } from "../../components";
import { useMenuContext } from "../../context/menu";
import { useSelector, useDispatch } from "react-redux";
import { setOrder, deleteItem } from "../../slice/oderSlice";
import { Trash2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function OrderonlinePage() {
  const {
    getMenu,
    getCatgory,
    updateMenuDetails,
    deleteMenuItem,
    searchMenu,
    searchmenubycategory,
  } = useMenuContext();


  const { menu, pagination, categorylist } = useSelector((state) => state.menu);
  const { totalPages, currentPage } = pagination;
  const rowsPerPage = 6;
  const orderList = useSelector((state) => state.order.orderList);
  const subtotal = useSelector((state) => state.order.subtotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState("");
  const [FilteredCategory, setFilteredCategory] = useState("All Category");
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    getMenu(1, 6); // Calling getMenu here
    getCatgory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (menu && menu.length > 0 && !quantities.length) {
      setQuantities(Array(menu.length).fill(0));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);

  const incrementQuantity = (index) => {
    if (menu && menu[index] && menu[index].quantity !== undefined) {
      setQuantities((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] = Math.min(
          newQuantities[index] + 1,
          menu[index].quantity
        );
        return newQuantities;
      });

      // Update orderList in Redux store
      const updatedOrderList = [...orderList];
      const selectedItem = {
        ...menu[index],
        orderedQuantity: quantities[index] + 1,
      }; // Include orderedQuantity
      updatedOrderList.push(selectedItem);
      dispatch(setOrder({ data: updatedOrderList, mode: "inc" }));
    }
  };

  const decrementQuantity = (index) => {
    if (menu && menu[index] && menu[index].quantity !== undefined) {
      setQuantities((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] = Math.max(newQuantities[index] - 1, 0);
        return newQuantities;
      });

      // Create a new array with updated orderList
      const updatedOrderList = orderList.map((item) => {
        if (item.id === menu[index].id) {
          return {
            ...item,
            orderedQuantity: Math.max(item.orderedQuantity - 1, 0),
          };
        }
        return item;
      });

      // Dispatch the updated orderList
      dispatch(setOrder({ data: updatedOrderList }));
    }
  };

  const handleNextPage = () => {
    getMenu(currentPage + 1, rowsPerPage);
    //setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    getMenu(currentPage - 1, rowsPerPage);
  };

  // const handleFirstPage = () => {
  //   setCurrentPage(1);
  // };

  // const handleLastPage = () => {
  //   const totalPages = Math.ceil(categories.length / itemsPerPage);
  //   setCurrentPage(totalPages);
  // };

  const handleRowsPerPageChange = (e) => {
    //setItemsPerPage(Number(e.target.value));
    getMenu(currentPage, Number(e.target.value)); // Reset to the first page when changing items per page
  };

  const onPageChange = (pageNumber) => {
    //setItemsPerPage(Number(e.target.value));
    getMenu(Number(pageNumber), rowsPerPage); // Reset to the first page when changing items per page
  };

  // const subtotal = orderList.reduce(
  //   (total, item) => total + item.price * item.orderedQuantity,
  //   0
  // );
  const taxFee = subtotal * 0.18;
  const total = subtotal + taxFee;

  const categoryFilter = (id, name) => {
    setFilteredCategory(name);
    if (id === null) {
      getMenu(1, 6);
    } else {
      searchmenubycategory(id);
    }
  };

  const deltefromoderlist = (id) => {
    dispatch(deleteItem(id));
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm === "") {
      setsearchValue("");
      getMenu(1, 6);
    } else {
      setsearchValue(searchTerm);
      searchMenu(searchTerm);
    }
  };

  

  return (
    <>
      <Helmet>
        <title>Dev's Application1</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[139px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[103px] md:px-5 max-w-[1112px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[69px]">
              <Heading size="xl" as="h1" className="!font-opensans">
                Menu
              </Heading>
              <div className="flex flex-col justify-start  items-start w-[94%] ">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-[20%] bg-slate-300"
                  onChange={handleSearchChange}
                />
              </div>

              <div className="flex flex-col items-start justify-start w-full gap-[59px]">
                <div className="flex flex-row md:flex-col justify-start w-full gap-7 md:gap-5">
                  <div className="flex flex-row justify-start w-[18%] md:w-full">
                    <Button
                      color="gray_400_01"
                      size="5xl"
                      shape="round"
                      className="w-full sm:px-5"
                      onClick={() => categoryFilter(null, "All Categories")}
                    >
                      All Categories
                    </Button>
                  </div>

                  <div className="flex flex-col items-start justify-start w-full gap-[59px]">
                    <div className="flex flex-row md:flex-col justify-start w-full gap-7 md:gap-5">
                      {/* Assuming categorylist is an array of category objects */}
                      {categorylist.map((category, index) => (
                        <div
                          key={index}
                          className={`flex flex-row justify-start md:w-full`}
                        >
                          <Button
                            color="gray_400_01"
                            size="5xl"
                            shape="round"
                            className="w-full p-3 sm:px-5 rounded-lg"
                            onClick={() =>
                              categoryFilter(category.id, category.name)
                            }
                          >
                            {category.name}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[46px] md:gap-5">
                  <div className="flex flex-col items-start justify-start w-[66%] md:w-full gap-12">
                    <div className="flex flex-col items-start justify-start gap-2.5">
                      <Heading size="lg" as="h2">
                        {FilteredCategory}
                      </Heading>

                      <div className="h-[2px] w-full bg-red-400" />
                    </div>

                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="justify-center w-full gap-[30px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                          {menu.map((item, index) => (
                            <div
                              key={item.id}
                              className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[45px]"
                            >
                              <div>{item.id}</div>
                              <Img
                                src={item.image} // Assuming each item in the menu array has an image property
                                alt={item.productname} // Assuming each item has a productname property
                                className="w-[174px] md:h-auto object-cover"
                              />
                              <Heading
                                size="s"
                                as="h5"
                                className="mt-[21px] text-center"
                              >
                                {item.productname}{" "}
                                {/* Render the product name */}
                              </Heading>
                              {/* Assuming there is a rating property in each menu item */}

                              <Heading size="xs" as="h6" className="mt-[22px]">
                                ${item.price} {/* Render the item price */}
                              </Heading>
                              <div className="flex flex-row justify-center w-[66%] md:w-full mt-2.5">
                                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                                  <div
                                    className="flex flex-col items-center justify-start h-[33px] w-[33px]"
                                    onClick={() => decrementQuantity(index)}
                                  >
                                    <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                                      <img
                                        src="images/img_vector_25.svg"
                                        alt="vectortwentyfiv"
                                        className="h-px mt-[5px] mb-1"
                                      />
                                    </div>
                                  </div>
                                  <p className="text-gray-900 text-[16.62px] ">
                                    {orderList.some(
                                      (orderItem) => orderItem.id === item.id
                                    )
                                      ? orderList.find(
                                          (orderItem) =>
                                            orderItem.id === item.id
                                        ).orderedQuantity
                                      : 0}
                                  </p>
                                  <div
                                    className="flex flex-col items-center justify-start h-[33px] w-[33px]"
                                    onClick={() => incrementQuantity(index)}
                                  >
                                    <div className="flex flex-col items-end justify-start h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-sm rounded-[16px]">
                                      <img
                                        src="images/img_group_7721.svg"
                                        alt="image"
                                        className="h-[10px] w-[10px]"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div class="flex items-center gap-4 justify-center mt-12">
                        <button
                          class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          disabled={currentPage === 1}
                          onClick={handlePreviousPage}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            ></path>
                          </svg>
                          Previous
                        </button>

                        <div className="flex items-center gap-2">
                          {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                          ).map((pageNumber) => (
                            <button
                              key={pageNumber}
                              className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase ${
                                currentPage === pageNumber
                                  ? "bg-blue-A200 text-white shadow-md shadow-gray-900/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                  : "text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20"
                              } disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                              type="button"
                              onClick={() => onPageChange(pageNumber)}
                              disabled={currentPage === pageNumber}
                            >
                              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                {pageNumber}
                              </span>
                            </button>
                          ))}
                        </div>

                        <button
                          class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          disabled={currentPage === totalPages}
                          onClick={handleNextPage}
                        >
                          Next
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[31%] md:w-full">
                    <div className="flex flex-col items-center justify-center w-full gap-[53px] py-[45px] md:py-5 bg-white-A700 shadow-xs rounded-[20px]">
                      <div className="flex flex-col items-center justify-start w-full gap-[46px]">
                        <Heading size="lg" as="h3">
                          Order list
                        </Heading>
                        <div className="h-px w-full bg-blue_gray-100" />
                      </div>
                      <div className="flex flex-col w-[83%] gap-16 md:gap-10 ">
                        {orderList.map((item) => (
                          <div className="flex flex-col items-center justify-start w-full gap-[31px]">
                            <div className="flex flex-row justify-between items-start w-full">
                              <Heading as="h4" className="!text-black-900">
                                {item.productname}
                              </Heading>
                              <Trash2
                                color="rgb(250, 0, 0)"
                                onClick={() => deltefromoderlist(item.id)}
                                className="cursor-pointer"
                              />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-center w-[42%]">
                                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                                  <Text
                                    as="p"
                                    className="!text-gray-900 !text-[16.62px]"
                                  >
                                    Quantity: {item.orderedQuantity}
                                  </Text>
                                </div>
                              </div>
                              <Text size="lg" as="p" className="!text-gray-900">
                                ${item.price}
                              </Text>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-row justify-center w-full"></div>
                      <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[26px]">
                        <div className="flex flex-row justify-between w-full">
                          <Heading as="h4" className="mb-px !text-black-900">
                            Subtotal
                          </Heading>
                          <Text size="lg" as="p" className="!text-gray-900">
                            {subtotal.toFixed(2)}
                          </Text>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                          <Heading as="h4" className="mb-px !text-black-900">
                            Tax fee
                          </Heading>
                          <Text size="lg" as="p" className="!text-gray-900">
                            {taxFee.toFixed(2)}
                          </Text>
                        </div>

                        <div className="flex flex-row justify-between w-full">
                          <Heading as="h4" className="mb-px !text-black-900">
                            Total
                          </Heading>
                          <Text size="lg" as="p" className="!text-gray-900">
                            {total.toFixed(0)}
                          </Text>
                        </div>
                      </div>
                      <Button
                        size="2xl"
                        shape="round"
                        className="mb-1 sm:px-5 font-semibold min-w-[283px] !rounded-[15px] sm:min-w-full"
                        onClick={() => {
                          if (orderList.length > 0) {
                            navigate("/checkout"); // Adjust the path as needed
                          } else {
                            alert("Your cart is empty!"); // Or handle this case as you see fit
                          }
                        }}
                      >
                        Checkout
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
