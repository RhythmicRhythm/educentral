import { useState } from "react";
import logo from "../Assets/eduCentralLogo.png";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import Icon from "react-icons-kit";
import { arrowLeft2 } from "react-icons-kit/icomoon/arrowLeft2";
import { menu } from "react-icons-kit/icomoon/menu";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";

const Creatinggroup = () => {
  useRedirectLoggedOutUser("/login");
  const [page, setPage] = useState(0);
  const [isActive, setActive] = useState("false");

  

  const PageDisplay = () => {
    if (page === 0) {
      return <StepA />;
    } else if (page === 1) {
      return <StepB />;
    } else {
      return <StepC />;
    }
  };

  return (
    <div className="flex items-center justify-center mx-auto overflow-hidden">
      

      {/* MainBody */}
      <div className="">
        <div
          className="sm:w-96 w-72
        mx-auto rounded-lg bg-white p-5 text-gray-900 flex flex-col items-center justify-center"
        >
          <div className="progressbar px-6" >
            <div
              style={{
                width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
              }}
            ></div>
          </div>

          <div className="">{PageDisplay()}</div>

          {/* Movement Button */}

          <div className="w-full relative">
            <button
              className="ent-btn block w-full p-2 text-lg text-white rounded-lg mb-2"
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              {" "}
              Next
            </button>

            <button
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className={`absolute left-4 text-xs text-blue-900 ${
                page === 0 ? "opacity-0" : ""
              } `}
            >
              <Icon icon={arrowLeft2} size={14} /> prev step{" "}
            </button>

            <p className="mt-8 text-xs">
              By continuing, you’re agreeing to our Customer Terms of Service,
              User Terms of Service, Privacy policy and Cookie Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Creatinggroup;
