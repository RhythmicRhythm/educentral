import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "../../widgets/cards";
import { StatisticsChart } from "../../widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "./data";

export function Home() {
  return (
    <div className="mt-8 px-20">
      <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <div className="overflow-hidden xl:col-span-2">
          <div className="insight bg-white p-4 rounded-lg shadow mt-6">
            <div className="">
              <div className="">
                <h2 className="text-sm text-gray-600 font-bold">Create Post</h2>
                <form
                  // onSubmit={createpost}
                  className=" w-full mt-6 text-sm text-gray-500"
                >
                  <div className="pb-2 pt-4 text-left">
                    <textarea
                      type="text"
                      name="desc"
                      id="desc"
                      // value={desc}
                      placeholder="What's on your mind?"
                      className="form-input-d"
                      // onChange={handleInputChange}
                    />
                  </div>

                  <div className="pb-2 pt-2 text-left flex justify-between flex-row">
                    {/* <label className="font-bold text-gray-700 text-sm mb-2">
                    Add Image
                  </label> */}
                    <input
                      className="text-sm text-grey-500
                    file:mr-5 file:py-2 file:px-6
                    file:rounded-full file:border-0
                    file:text-sm file:font-medium
                    file:bg-blue-50 file:text-blue-700
                    hover:file:cursor-pointer hover:file:bg-amber-50
                    hover:file:text-amber-700"
                      type="file"
                      name="image"
                      id="image"
                      // onChange={handleImageChange}
                    />
                    <div className="">
                      <img
                        className="w-8"
                        src="https://img.icons8.com/stickers/256/paper-plane.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="">
                      {/* <button
                    //   disabled={isDescEmpty}
                      type="submit"
                      className="transition duration-500 ease bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 
                      hover:from-blue-900 hover:to-pink-600
                      text-lg font-semibold rounded-lg text-white px-3 py-1 cursor-pointer"
                    >
                      Add Post
                    </button> */}
                    </div>
                  </div>
                </form>
              </div>
              <div className=""></div>
            </div>
          </div>

          <div className="insight bg-white p-4 rounded-lg shadow mt-6">
          <div className="flex flex-col">
            <div className="flex flex-row gap-4">
              <div>
                <img
                  className="w-10 rounded-full"
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-sm text-gray-600"> John Doe</h1>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
              faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
              <span className="text-blue-400">See more</span>{" "}
            </p>
          </div>

          <div className="mt-4 flex flex-row justify-between">
            <div className="flex flex-row gap-4">
              <div className="flex flex-row">
                <img
                  className="w-6"
                  src="https://img.icons8.com/stickers/256/facebook-like-skin-type-3.png"
                  alt=""
                />
                <h1 className="text-xs mt-1">2.5k Likes</h1>
              </div>
              <div
                className="flex flex-row
                "
              >
                <img
                  className="w-6"
                  src="https://img.icons8.com/stickers/100/000000/comments--v1.png"
                  alt=""
                />
                <h1 className="text-xs mt-1">97 Comments</h1>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <img
                className="w-6"
                src="https://img.icons8.com/stickers/256/share.png"
                alt=""
              />
              <h1 className="text-xs mt-1">27 Shares</h1>
            </div>
          </div>
        </div>

        <div className="insight bg-white p-4 rounded-lg shadow mt-6">
          <div className="flex flex-col">
            <div className="flex flex-row gap-4">
              <div>
                <img
                  className="w-10 rounded-full"
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-sm text-gray-600"> John Doe</h1>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
              faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
              <span className="text-blue-400">See more</span>{" "}
            </p>
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
            />

            <div className="mt-4 flex flex-row justify-between">
              <div className="flex flex-row gap-4">
                <div className="flex flex-row">
                  <img
                    className="w-6"
                    src="https://img.icons8.com/stickers/256/facebook-like-skin-type-3.png"
                    alt=""
                  />
                  <h1 className="text-xs mt-1">2.5k Likes</h1>
                </div>
                <div
                  className="flex flex-row
                "
                >
                  <img
                    className="w-6"
                    src="https://img.icons8.com/stickers/100/000000/comments--v1.png"
                    alt=""
                  />
                  <h1 className="text-xs mt-1">97 Comments</h1>
                </div>
              </div>
              <div className="flex flex-row gap-1">
                <img
                  className="w-6"
                  src="https://img.icons8.com/stickers/256/share.png"
                  alt=""
                />
                <h1 className="text-xs mt-1">27 Shares</h1>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Orders Overview
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong>24%</strong> this month
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {ordersOverviewData.map(
              ({ icon, color, title, description }, key) => (
                <div key={title} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                      key === ordersOverviewData.length - 1
                        ? "after:h-0"
                        : "after:h-4/6"
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `!w-5 !h-5 ${color}`,
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"
                    >
                      {title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"
                    >
                      {description}
                    </Typography>
                  </div>
                </div>
              )
            )}
          </CardBody>
        </div>
      </div>
    </div>
  );
}

export default Home;
