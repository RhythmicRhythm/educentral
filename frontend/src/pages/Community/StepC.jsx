import React from "react";

const StepC = () => {
  return (
    <div>
      <div className="mb-20">
        <h1 className="text-2xl font-bold mb-4">
          What’s your team working on right now?
        </h1>
        <p className="text-sm mb-4">
          This could be anything ranging from a project, campaign, event, or the
          deal you’re trying to close
        </p>

        <form action="" className=" w-full">
          <div className="pb-2 pt-4 text-left">
            <input
              type="text"
              name="GroupProject"
              id="group_project_name"
              placeholder="Ex. Napps- Meeting, Inauguration- Lecture"
              className="form-input"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepC;
