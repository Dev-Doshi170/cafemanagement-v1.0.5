import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Input } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1128px]">
        <Input
          name="search"
          placeholder="Search here"
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e)}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} fillColor="#8c8787ff" />
            ) : (
              <Img src="images/img_frame_7.svg" alt="Frame 7" className="cursor-pointer" />
            )
          }
          className="w-[29%] gap-[35px] border-gray-50"
        />
        <div className="flex flex-row justify-between items-center w-auto">
          <Button color="gray_50" size="lg" className="w-[35px] rounded-[17px]">
            <Img src="images/img_group_257.svg" />
          </Button>
          <Button color="gray_50" size="lg" className="w-[35px] rounded-[17px]">
            <Img src="images/img_group_259.svg" />
          </Button>
          <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
        </div>
      </div>
    </header>
  );
}
