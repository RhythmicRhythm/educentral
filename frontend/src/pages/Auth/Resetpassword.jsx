import React from "react";
import "./Auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Assets/eduCentralLogo.png";
import key from "./Assets/KeyIcon.png";
import Icon from "react-icons-kit";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import { arrows_exclamation } from "react-icons-kit/linea/arrows_exclamation";
import { arrows_circle_check } from "react-icons-kit/linea/arrows_circle_check";
import { radioChecked } from "react-icons-kit/icomoon/radioChecked";
import { radioUnchecked } from "react-icons-kit/icomoon/radioUnchecked";

const Resetpassword = () => {
  const [type, setType] = useState("password");

  // validated states
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);

  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleChange = (value) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{4,})");
    if (lower.test(value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
  };

  return (
    <div>
      <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div className="top-0 absolute p-4 text-center right-0 left-0">
          <img src={logo} alt="logo" />
        </div>
        <div
          className="w-96
        mx-auto rounded-lg bg-white shadow p-5 text-gray-800 flex flex-col items-center justify-center"
        >
          <div className="">
            <img src={key} alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Set New Password ?</h1>
          <p className="text-sm">
            Your new password must be different to previously used passwords.
          </p>

          <form action="" className=" w-full">
            <div className="pb-2 pt-4 relative">
              <input
                type={type}
                name="password"
                id="password"
                placeholder="Password"
                className="form-input"
                onChange={(e) => handleChange(e.target.value)}
              />
              {type === "password" ? (
                <span className="icon-span" onClick={() => setType("text")}>
                  <Icon icon={basic_eye_closed} size={18} />
                </span>
              ) : (
                <span className="icon-span" onClick={() => setType("password")}>
                  <Icon icon={basic_eye} size={18} />
                </span>
              )}
            </div>

            {/* Lower Case Validation */}
            <div className="tracker-box pb-2 pt-4 text-left text-xs">
              <div className={lowerValidated ? "validated" : "not-validated"}>
                {lowerValidated ? (
                  <span className="list-icon text-blue-500 text-xs mr-1">
                    <Icon size={12} icon={radioChecked} />
                  </span>
                ) : (
                  <span className="list-icon  text-xs mr-1">
                    <Icon size={12} icon={radioUnchecked} />
                  </span>
                )}
                At least one lowercase letter
              </div>
            </div>

            {/* Upper Case Validation */}
            <div className="tracker-box pb-2 pt-4 text-left text-xs">
              <div className={upperValidated ? "validated" : "not-validated"}>
                {upperValidated ? (
                  <span className="list-icon text-blue-500 text-xs mr-1">
                    <Icon size={12} icon={radioChecked} />
                  </span>
                ) : (
                  <span className="list-icon  text-xs mr-1">
                    <Icon size={12} icon={radioUnchecked} />
                  </span>
                )}
                At least one uppercase letter
              </div>
            </div>

            {/* Number Validation */}
            <div className="tracker-box pb-2 pt-4 text-left text-xs">
              <div className={numberValidated ? "validated" : "not-validated"}>
                {numberValidated ? (
                  <span className="list-icon text-blue-500 text-xs mr-1">
                    <Icon size={12} icon={radioChecked} />
                  </span>
                ) : (
                  <span className="list-icon  text-xs mr-1">
                    <Icon size={12} icon={radioUnchecked} />
                  </span>
                )}
                At least one number
              </div>
            </div>

            {/* Special Validation */}
            <div className="tracker-box pb-2 pt-4 text-left text-xs">
              <div className={specialValidated ? "validated" : "not-validated"}>
                {specialValidated ? (
                  <span className="list-icon text-blue-500 text-xs mr-1">
                    <Icon size={12} icon={radioChecked} />
                  </span>
                ) : (
                  <span className="list-icon  text-xs mr-1">
                    <Icon size={12} icon={radioUnchecked} />
                  </span>
                )}
                At least one special character
              </div>
            </div>

            {/* length Validation */}
            <div className="tracker-box pb-2 pt-4 text-left text-xs">
              <div className={lengthValidated ? "validated" : "not-validated"}>
                {lengthValidated ? (
                  <span className="list-icon text-blue-500 text-xs mr-1">
                    <Icon size={12} icon={radioChecked} />
                  </span>
                ) : (
                  <span className="list-icon  text-xs mr-1">
                    <Icon size={12} icon={radioUnchecked} />
                  </span>
                )}
                At least one special character
              </div>
            </div>

            <div className="pb-2 pt-4 relative">
              <input
                type="password"
                name="password"
                id="confirm_password"
                placeholder="Confirm Password"
                className="form-input"
              />
            </div>

            <div className="w-full mt-20">
              <button
                disabled={
                  !(
                    lowerValidated &&
                    upperValidated &&
                    numberValidated &&
                    specialValidated &&
                    lengthValidated
                  )
                }
                className="ent-btn block w-full p-2 text-lg text-white rounded-lg mb-2"
              >
                {" "}
                Reset Password
              </button>
              <Link className="text-sm text-blue-500" to="/login">
                Back to Login{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
