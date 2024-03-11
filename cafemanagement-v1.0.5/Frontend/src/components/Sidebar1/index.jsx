import React from "react";
import { Text, Img } from "./..";
import { SubMenu, MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";

export default function Sidebar1({ ...props }) {
  return (
    <Sidebar width="252px !important" className="h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto">
    <img src='\images\svgr.png' className="h-44 -mt-4" ></img>
          <Menu
            menuItemStyles={{
              button: {
                padding: "10px 10px 10px 28px",
                width: "100%",
                color: "#8c8787",
                fontWeight: 400,
                fontSize: "16px",
                gap: "12px",
                [`&:hover, &.ps-active`]: {
                  color: "#438ffe",
                  fontWeight: "500 !important",
                  backgroundColor: "#edf5ff !important",
                },
              },
            }}
            renderExpandIcon={() => (
              <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px] cursor-pointer" />
            )}
            className="flex flex-col items-center justify-start w-full mt-[65px]"
          >
          <NavLink to='/'>
            <MenuItem icon={<Img src="images/img_circlesfour.svg" alt="image_one" className="h-[20px] w-[20px]" />}>
              Dashboard
            </MenuItem>
            </NavLink>
            <NavLink to='/addoder'>
            <MenuItem icon={<Img src="images/img_circlesfour.svg" alt="image_one" className="h-[20px] w-[20px]" />}>
              Add Oder
            </MenuItem>
            </NavLink>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_17.svg" alt="image_two" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Orders
                  </Text>
                </div>
              }
            >
            <NavLink to='orderlist'>
              <MenuItem >Order List</MenuItem>
              </NavLink>
            </SubMenu>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_18.svg" alt="image_three" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Menus
                  </Text>
                </div>
              }
            >
            <NavLink to='addmenu'>
            <MenuItem >Add menu</MenuItem>
            </NavLink>
            <NavLink to='menulist'>
            <MenuItem >Menu List</MenuItem>
            </NavLink>
            <NavLink to='categories'>
            <MenuItem >categories</MenuItem>
            </NavLink>
            

            </SubMenu>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_19.svg" alt="image_four" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Customer
                  </Text>
                </div>
              }
            >
            <NavLink to='customer'>
            <MenuItem >Customer List</MenuItem>
            </NavLink>

            </SubMenu>
            
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_21.svg" alt="image_six" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Table{" "}
                  </Text>
                </div>
              }
            >
            <NavLink to='tablelist'>
            <MenuItem >Table List</MenuItem>
            </NavLink>

            <NavLink to='addtable'>
            <MenuItem >Add Table</MenuItem>
            </NavLink>

            </SubMenu>
          </Menu>
          <div className="flex flex-col items-start justify-start w-[76%] mt-[276px] mb-[84px] mx-auto">
            <Img src="images/img_group_18692.png" alt="image_seven" className="w-full object-cover" />
            <Text size="s" as="p" className="mt-[23px] ml-px !font-medium">
              Bistro Restaurant Admin{" "}
            </Text>
            <Text size="xs" as="p" className="mt-1.5 ml-px">
              2021 All Rights
            </Text>
            <div className="flex flex-row justify-start mt-[5px] gap-0.5">
              <Text size="xs" as="p">
                Made with
              </Text>
              <Img src="images/img_heart.svg" alt="heart_one" className="h-[12px]" />
              <Text size="xs" as="p">
                by Bistro
              </Text>
            </div>
          </div>
        </Sidebar>
  );
}
