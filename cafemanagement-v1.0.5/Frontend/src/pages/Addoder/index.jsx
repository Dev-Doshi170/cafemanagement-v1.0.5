import React from "react";
import { useEffect,useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, RatingBar } from "../../components";
import { useMenuContext } from "../../context/menu"
import { useSelector } from 'react-redux';

export default function OrderonlinePage() {
  const { getMenu,getCatgory,updateMenuDetails,deleteMenuItem,searchMenu } = useMenuContext();
  const {menu} = useSelector((state) => state.menu);

  const [quantities, setQuantities] = useState("")
  

  useEffect(() => {
    getMenu(1, 9); // Calling getMenu here
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
        newQuantities[index] = Math.min(newQuantities[index] + 1, menu[index].quantity);
        return newQuantities;
      });
    }
  };

  const decrementQuantity = (index) => {
    if (menu && menu[index] && menu[index].quantity !== undefined) {
      setQuantities((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] = Math.max(newQuantities[index] - 1, 0);
        return newQuantities;
      });
    }
  };
  
  //console.log(menu.image)

  return (
    <>
      <Helmet>
        <title>Dev's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[139px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[103px] md:px-5 max-w-[1112px]">
          
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[69px]">
              <Heading size="xl" as="h1" className="!font-opensans">
                Menu
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[59px]">
                <div className="flex flex-row md:flex-col justify-start w-full gap-7 md:gap-5">
                  <div className="flex flex-row justify-start w-[18%] md:w-full">
                    <Button color="gray_400_01" size="5xl" shape="round" className="w-full sm:px-5">
                      All Categories
                    </Button>
                  </div>
                  <div className="flex flex-row justify-start w-[21%] md:w-full">
                    <Button size="5xl" shape="round" className="w-full sm:px-5 font-semibold">
                      Pasta
                    </Button>
                  </div>
                  <div className="flex flex-row md:flex-col w-[57%] md:w-full gap-7">
                    <div className="flex flex-row justify-center w-[31%] md:w-full">
                      <Button color="gray_400_01" size="5xl" shape="round" className="w-full sm:px-5">
                        Pizza
                      </Button>
                    </div>
                    <div className="flex flex-row justify-center w-[31%] md:w-full">
                      <Button color="gray_400_01" size="5xl" shape="round" className="w-full sm:px-5">
                        Dessert
                      </Button>
                    </div>
                    <div className="flex flex-row justify-center w-[31%] md:w-full">
                      <Button color="gray_400_01" size="5xl" shape="round" className="w-full sm:px-5">
                        Drink
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[46px] md:gap-5">
                  <div className="flex flex-col items-start justify-start w-[66%] md:w-full gap-12">
                    <div className="flex flex-col items-start justify-start gap-2.5">
                      <Heading size="lg" as="h2">
                        PASTA
                      </Heading>
                      <div className="h-[2px] w-full bg-red-400" />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="justify-center w-full gap-[30px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                          
                          {menu.map((item,index) => (
  <div key={item.id} className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[45px]">
    <Img
      src={item.image} // Assuming each item in the menu array has an image property
      alt={item.productname} // Assuming each item has a productname property
      className="w-[174px] md:h-auto object-cover"
    />
    <Heading size="s" as="h5" className="mt-[21px] text-center">
      {item.productname} {/* Render the product name */}
    </Heading>
    {/* Assuming there is a rating property in each menu item */}
    
    
    <Heading size="xs" as="h6" className="mt-[22px]">
      ${item.price} {/* Render the item price */}
    </Heading>
    <div className="flex flex-row justify-center w-[66%] md:w-full mt-2.5">
      <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
      <div className="flex flex-col items-center justify-start h-[33px] w-[33px]"  onClick={() => decrementQuantity(index)}>
  <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
    <img src="images/img_vector_25.svg" alt="vectortwentyfiv" className="h-px mt-[5px] mb-1" />
  </div>
</div>
        <p className="text-gray-900 text-[16.62px] ">{quantities[index]}</p>
        <div className="flex flex-col items-center justify-start h-[33px] w-[33px]"   onClick={() => incrementQuantity(index)}>
        <div className="flex flex-col items-end justify-start h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-sm rounded-[16px]">
          <img src="images/img_group_7721.svg" alt="image" className="h-[10px] w-[10px]" />
        </div>
      </div>
      </div>
    </div>
  </div>
))}
                          
                          
                          
                          
                        </div>
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
                      <div className="flex flex-col w-[83%] gap-16 md:gap-10">
                        <div className="flex flex-col items-center justify-start w-full gap-[31px]">
                          <div className="flex flex-row justify-between items-start w-full">
                            <Heading as="h4" className="!text-black-900">
                              Spaghetti
                            </Heading>
                            <div className="flex flex-col items-center justify-start h-[24px] w-[24px] mt-1">
                              <Img src="images/img_group_7758.svg" alt="spaghetti_two" className="h-[24px] w-[24px]" />
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-center w-[42%]">
                              <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                                <Button color="white_A700" size="xs" shape="round" className="w-[33px] shadow-md">
                                  <Img src="images/img_vector_25.svg" />
                                </Button>
                                <Text as="p" className="!text-gray-900 !text-[16.62px]">
                                  2
                                </Text>
                                <div className="flex flex-col items-end justify-start h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-sm rounded-[16px]">
                                  <Img src="images/img_group_7721.svg" alt="image" className="h-[10px] w-[10px]" />
                                </div>
                              </div>
                            </div>
                            <Text size="lg" as="p" className="!text-gray-900">
                              $24.1
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full gap-[31px]">
                          <div className="flex flex-row justify-between items-start w-full">
                            <Heading as="h4" className="!text-black-900">
                              Linguine
                            </Heading>
                            <div className="flex flex-col items-center justify-start h-[24px] w-[24px] mt-1">
                              <Img src="images/img_group_7758.svg" alt="image" className="h-[24px] w-[24px]" />
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-center w-[42%]">
                              <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                                <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                                  <Img
                                    src="images/img_vector_25.svg"
                                    alt="vectortwentyfiv"
                                    className="h-px mt-[5px] mb-1"
                                  />
                                </div>
                                <Text as="p" className="!text-gray-900 !text-[16.62px]">
                                  2
                                </Text>
                                <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                                  <div className="flex flex-col items-end justify-start h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-sm rounded-[16px]">
                                    <Img
                                      src="images/img_group_7721.svg"
                                      alt="image_one"
                                      className="h-[10px] w-[10px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Text size="lg" as="p" className="!text-gray-900">
                              $35.7
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full gap-[31px]">
                          <div className="flex flex-row justify-between items-start w-full">
                            <Heading as="h4" className="!text-black-900">
                              Capellini
                            </Heading>
                            <div className="flex flex-col items-center justify-start h-[24px] w-[24px] mt-1">
                              <Img src="images/img_group_7758.svg" alt="image" className="h-[24px] w-[24px]" />
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-center w-[42%]">
                              <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                                <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                                  <Img
                                    src="images/img_vector_25.svg"
                                    alt="vectortwentyfiv"
                                    className="h-px mt-[5px] mb-1"
                                  />
                                </div>
                                <Text as="p" className="!text-gray-900 !text-[16.62px]">
                                  2
                                </Text>
                                <div className="flex flex-col items-end justify-start h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-sm rounded-[16px]">
                                  <Img src="images/img_group_7721.svg" alt="image_one" className="h-[10px] w-[10px]" />
                                </div>
                              </div>
                            </div>
                            <Text size="lg" as="p" className="!text-gray-900">
                              $18.5
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="h-[168px] w-full sm:w-full relative">
                          <Img
                            src="images/img_line.svg"
                            alt="line_one"
                            className="justify-center h-[168px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <div className="flex flex-row justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <div className="flex flex-col items-start justify-start w-full gap-5">
                              <Heading as="h4" className="!text-black-900">
                                Voucher Code
                              </Heading>
                              <div className="flex flex-row justify-start gap-[22px]">
                                <Button
                                  color="gray_50_01"
                                  size="4xl"
                                  shape="round"
                                  className="sm:px-5 min-w-[201px] !rounded-[15px]"
                                >
                                  FREETOEAT
                                </Button>
                                <Button color="blue_400" shape="round" className="w-[60px] !rounded-[15px]">
                                  <Img src="images/img_group_170.svg" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[26px]">
                        <div className="flex flex-row justify-between w-full">
                          <Heading as="h4" className="mb-px !text-black-900">
                            Subtotal
                          </Heading>
                          <Text size="lg" as="p" className="!text-gray-900">
                            $78.3
                          </Text>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                          <Heading as="h4" className="mb-px !text-black-900">
                            Tax fee
                          </Heading>
                          <Text size="lg" as="p" className="!text-gray-900">
                            $3.5
                          </Text>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                          <Heading as="h4" className="mb-px !text-black-900">
                            Voucher
                          </Heading>
                          <Text size="lg" as="p" className="!text-gray-900">
                            $5.0
                          </Text>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                          <Heading as="h4" className="mb-px !text-black-900">
                            Total
                          </Heading>
                          <Text size="lg" as="p" className="!text-gray-900">
                            $76.8
                          </Text>
                        </div>
                      </div>
                      <Button
                        size="2xl"
                        shape="round"
                        className="mb-1 sm:px-5 font-semibold min-w-[283px] !rounded-[15px] sm:min-w-full"
                      >
                        Checkout
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col justify-start items-center w-[22%] md:w-full ml-[242px] gap-2.5 md:ml-5 sm:gap-5">
                  <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[15px] w-[15px]" />
                  <div className="flex flex-row justify-between w-[71%] sm:w-full">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Button
                        color="gray_900"
                        size="sm"
                        className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded sm:min-w-full"
                      >
                        1
                      </Button>
                    </div>
                    <div className="flex flex-row w-[48%] gap-2.5">
                      <div className="flex flex-col items-center justify-start h-[35px] w-[44%]">
                        <Button
                          color="gray_200"
                          size="sm"
                          className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded sm:min-w-full"
                        >
                          2
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[35px] w-[44%]">
                        <Button
                          color="gray_200"
                          size="sm"
                          className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded sm:min-w-full"
                        >
                          3
                        </Button>
                      </div>
                    </div>
                    <Button color="gray_200" size="xs" className="w-[35px] rounded">
                      <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
                    </Button>
                  </div>
                  <Img src="images/img_akar_icons_chevron_left.svg" alt="akaricons_one" className="h-[15px] w-[15px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
