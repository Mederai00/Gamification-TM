import React from "react";

const Course = ({ handleNextQuestion, data: { question } }) => {
  return (
    <div className="flex flex-col mx-4 lg:pt-3 sm:pt-2">
      {/* prints the questions*/}
      <div
        className=" text-black p-10 rounded shadow-md "
        style={{
          backgroundColor: "#7dced0",
        }}
      >
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>

      <button
        onClick={handleNextQuestion}
        className={`ml-auto mt-6 bg-white text-purple-800 p-4 font-semibold rounded shadow`}
      >
        Next Page
      </button>
    </div>
  );
};

export default Course;
