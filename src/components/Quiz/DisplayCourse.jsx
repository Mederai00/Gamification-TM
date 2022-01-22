import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Course from "./Course";
import RotateLoader from "react-spinners/RotateLoader";
// import firebase from "../firebase";
import { Link } from "react-router-dom";

function DisplayCourse({ name, api }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const n = window.$uName
  //   const tableName = `/${name}`;
  //const [cate, setCate] = useState({ name });

  //const API_URL = `${api}`;
  // const name = window.$userName

  useEffect(() => {
    fetch(`${api}`)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.map((question) => ({
          ...question,
        }));

        setQuestions(questions);
      });
  }, [api]);

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const buttonStyle = {
    paddingTop: 20,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 20,
    borderRadius: 10,
    // color: 'black',
    // backgroundColor: '#7dced0',
    backgroundColor: "white",
    color: "#3e4962",
    fontWeight: "500",
    textDecoration: "none",
    textAlign: "center",
  };

  //console.log('tableName', tableName)

  const alignText = {
    textAlign: "center",
    Display: "flex",
    justifyContent: "center",
    paddingLeft: "0rem",
    paddingRight: "0rem",
    marginTop: "6rem",
    paddingBottom: "3rem",
  };

  return questions.length > 0 ? (
    <div className="container" style={alignText}>
      {currentIndex >= questions.length ? (
        <>
          <h2
            className="text-3xl font-bold mx-4"
            style={{
              color: "#7dced0",
              textAlign: "center",
              marginBottom: "2rem",
              marginTop: "5rem",
            }}
          >
            Course ended! Your Go to next course
          </h2>

          <div
            className="flex flex-col gap-4 mx-4"
            style={{
              fontSize: 20,
            }}
          >
            <div className="grid grid-cols-2 gap-3 mt-6">
              <Link to="/" style={buttonStyle}>
                Dashboard
              </Link>

              {/* <Link
                            to='/Categories'
                            style={buttonStyle} >
                            Back to Categories
                        </Link> */}

              <Link to="/ChooseLeaderBoard" style={buttonStyle}>
                LeaderBoard
              </Link>
            </div>
          </div>
          {/* {uploadScore()} */}
        </>
      ) : (
        <>
          {/*} <header
                        className="font-bold text-3xl "
                        style={{
                            paddingBottom: 60,
                            marginBottom: 10,
                            textAlign: 'center',
                        }}>
                        {title}
                    </header> */}
          <h1 className="text-3xl font-bold" style={{ color: "#7dced0" }}>
            {name}
          </h1>

          <Course
            style={alignText}
            data={questions[currentIndex]}
            handleNextQuestion={handleNextQuestion}
          />
        </>
      )}
    </div>
  ) : (
    //<h3 className='font-bold'>Loading Please Wait</h3>
    <div className="flex justify-center items-center h-screen">
      <RotateLoader />
    </div>
  );
}

export default DisplayCourse;
