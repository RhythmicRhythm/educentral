import React from "react";

const StepA = () => {
  return (
    <div>
      <div className="mb-20">
        <h1 className="text-2xl font-bold mb-4">
          What's the name of your Group
        </h1>
        <p className="text-sm max-w-30">
          This will be the name of your eduCENTRAL Group- Choose something that
          your team will recognize
        </p>

        <form action="" className=" w-full">
          <div className="pb-2 pt-4 text-left">
            <label className="font-bold">Name of Group</label>
            <input
              type="text"
              name="GroupName"
              id="group_name"
              placeholder="Napps"
              className="form-input"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepA;
