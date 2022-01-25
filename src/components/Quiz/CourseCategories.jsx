import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import DisplayCourse from "./DisplayCourse";
import { GlobalContext } from "../contexts/GlobalContext";
import Logo from "../Assets/logo1.svg";

//Displays the categories for the user to choose from

function CourseCategories() {
  const [state, setState] = useState(undefined);
  const history = useHistory();

  window.onload = window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const { currentUser } = useContext(GlobalContext);
  // const UserName = currentUser.email

  try {
    const UserName = currentUser.email.slice(0, currentUser.email.indexOf("@"));
    window.$uName = UserName;
  } catch {
    history.push("/login");
  }

  // if (window.$uName == null) {
  //     history.push('/login')
  // }

  //buttons for categories
  const Button = ({ id, text, bg }) => {
    return (
      <button
        className="text-black px-8"
        style={{
          paddingTop: 25,
          paddingBottom: 25,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 20,
          borderRadius: 5,
          backgroundColor: `${bg}`,
          border: 0,
          textAlign: "center",
          fontWeight: "600",
        }}
        onClick={() => clickEvent(id, text)}
      >
        {text}
      </button>
    );
  };

  function clickEvent(id) {
    setState(id);
  }

  return state === "1" ? (
    <DisplayCourse name="Course part 1" api={"http://localhost:8000/cpart1"} />
  ) : state === "2" ? (
    <DisplayCourse
      name="Ecology"
      api={"https://opentdb.com/api.php?amount=10&category=17&type=multiple"}
    />
  ) : state === "3" ? (
    <DisplayCourse
      name="Computer Science"
      api={"https://opentdb.com/api.php?amount=10&category=18&type=multiple"}
    />
  ) : state === "4" ? (
    <DisplayCourse
      name="Maths"
      api={"https://opentdb.com/api.php?amount=10&category=19&type=multiple"}
    />
  ) : state === "5" ? (
    <DisplayCourse
      name="Geographical Science"
      api={"https://opentdb.com/api.php?amount=10&category=22&type=multiple"}
    />
  ) : state === "6" ? (
    <DisplayCourse
      name="History"
      api={"https://opentdb.com/api.php?amount=10&category=23&type=multiple"}
    />
  ) : state === "7" ? (
    <DisplayCourse
      name="Sports"
      api={"https://opentdb.com/api.php?amount=10&category=21&type=multiple"}
    />
  ) : state === "8" ? (
    <DisplayCourse
      name="Ancient Mythology"
      api={"https://opentdb.com/api.php?amount=10&category=20&type=multiple"}
    />
  ) : state === "9" ? (
    <DisplayCourse
      name="Films and Series"
      api={"https://opentdb.com/api.php?amount=10&category=11&type=multiple"}
    />
  ) : state === "10" ? (
    <DisplayCourse
      name="Musicals"
      api={"https://opentdb.com/api.php?amount=10&category=12&type=multiple"}
    />
  ) : state === "11" ? (
    <DisplayCourse
      name="Video Games"
      api={"https://opentdb.com/api.php?amount=10&category=15&type=multiple"}
    />
  ) : state === "12" ? (
    <DisplayCourse
      name="Books and Novels"
      api={"https://opentdb.com/api.php?amount=10&category=10&type=multiple"}
    />
  ) : state === "13" ? (
    <DisplayCourse
      name="Board Games"
      api={"https://opentdb.com/api.php?amount=10&category=16&type=multiple"}
    />
  ) : state === "14" ? (
    <DisplayCourse
      name="Biological Science"
      api={"https://opentdb.com/api.php?amount=10&category=27&type=multiple"}
    />
  ) : state === "15" ? (
    <DisplayCourse
      name="Comics"
      api={"https://opentdb.com/api.php?amount=10&category=29&type=multiple"}
    />
  ) : state === "16" ? (
    <DisplayCourse
      name="Cartoons and Anime"
      api={"https://opentdb.com/api.php?amount=10&category=32&type=multiple"}
    />
  ) : (
    <div className="pb-5 lg:pb-3">
      <Link to="/">
        <img className="logo" alt="logo" src={Logo} />
      </Link>
      <header
        className="font-bold text-4xl mx-1 "
        style={{
          textAlign: "center",
          color: "#7dced0",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        {/* {//consoke.log(login)} */}
        Choose your category
      </header>
      {/* <img src='../../Assets/logo.svg' /> */}

      <div
        className="grid grid-cols-2 gap-6 mr-5 ml-5 lg:grid-cols-4 lg:mr-40 lg:ml-40"
        // style={{
        //     marginTop: '3rem',
        // }}
      >
        {/* category tiles */}

        <Button
          id="1"
          text="Course part 1"
          bg={"#9483bd"}
          onClick={clickEvent}
        />

        <Button
          id="2"
          text="Course part 2"
          bg={"#e79995"}
          onClick={clickEvent}
        />

        <Button
          id="3"
          text="Course part 3"
          bg={"#98d5ca"}
          onClick={clickEvent}
        />

        <Button
          id="4"
          text="Course part 4"
          bg={"#9acaed"}
          onClick={clickEvent}
        />

        <Button
          id="5"
          bg={"#98d099"}
          text="Course part 5"
          onClick={clickEvent}
        />

<Button
          id="5"
          bg={"#e769bb"}
          text="Course part 6"
          onClick={clickEvent}
        />

<Button
          id="5"
          bg={"#e8ce4f"}
          text="Course part 7"
          onClick={clickEvent}
        />

<Button
          id="5"
          bg={"#98d099"}
          text="Course part 8"
          onClick={clickEvent}
        />

        {/* <Button id="6" text="History" bg={"#e8ce4f"} onClick={clickEvent} />

        <Button id="7" text="Sports" bg={"#e7e5e3"} onClick={clickEvent} />

        <Button
          id="8"
          text="Ancient Mythology"
          bg={"#e769bb"}
          onClick={clickEvent}
        />

        <Button
          // id='10'
          id="9"
          text="Films and Series"
          bg={"#e79995"}
          onClick={clickEvent}
        />

        <Button id="10" text="Musicals" bg={"#98d5ca"} onClick={clickEvent} />

        <Button
          id="11"
          text="Video Games"
          bg={"#9acaed"}
          onClick={clickEvent}
        />

        <Button
          id="12"
          text="Books and Novels"
          bg={"#9483bd"}
          onClick={clickEvent}
        />

        <Button
          id="13"
          bg={"#98d099"}
          text="Board Games"
          onClick={clickEvent}
        />

        <Button
          id="14"
          text="Biological Science"
          bg={"#e8ce4f"}
          onClick={clickEvent}
        />

        <Button id="15" text="Comics" bg={"#e7e5e3"} onClick={clickEvent} />

        <Button
          id="16"
          text="Cartoons and Anime"
          bg={"#e769bb"}
          onClick={clickEvent}
        /> */}
      </div>
      {/* <div className="flex justify-center pt-8 text-2xl">
                                                                                <button className="flex lg:hidden text-center border-color-bla" onClick={() => window.scrollTo(0, 0)}>
                                                                                  Top
                                                                                </button>
                                                                            </div> */}
    </div>
  );
}
export default CourseCategories;
