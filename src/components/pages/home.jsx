import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import PostUI from "../post/PostUI";

const home = () => {
  const student = {
    abdul: { english: "40", arbic: "30" },
    fahad: { english: "20", arbic: "40" },
  };

  const studentArray = [
    { name: "a", english: "40", arbic: "30" },
    { name: "b", english: "20", arbic: "40" },
    { name: "c", english: "22", arbic: "30" },
    { name: "d", english: "16", arbic: "40" },
    { name: "e", english: "11", arbic: "30" },
    { name: "f", english: "19", arbic: "40" },
  ];
  const [stdList, setStdList] = useState(studentArray);
  const [isFilterActive, setFilterActive] = useState(false);
  const [stdName, setStdName] = useState("");
  const [engMark, setEngMark] = useState("");
  const [arbMark, setArbMark] = useState("");
  const [newStd, setStd] = useState({ name: null, english: null, arbic: null });
  // const [entries, setEntries] = useState([]);
  console.log("newStd", newStd);
  const handleNameChange = (e) => {
    setStdName(e.target.value);
    setStd({ ...newStd, name: e.target.value });
  };
  const handleEngMarkChange = (e) => {
    setEngMark(e.target.value);
    setStd({ ...newStd, english: e.target.value });
  };
  const handleArbMarkChange = (e) => {
    setArbMark(e.target.value);
    setStd({ ...newStd, arabic: e.target.value });
  };

  const handleAddNewStudent = () => {
    const newStudentList = [...stdList, newStd];
    setStdList(newStudentList);
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (stdName.trim() !== "") {
  //     setEntries([...entries, inputText]);
  //     setStdName("");
  //   }
  // };

  const onClickResult = () => {
    if (isFilterActive) {
      setFilterActive(false);
      setStdList(studentArray);
    } else {
      setFilterActive(true);
      const passedData = studentArray.filter(
        (item) => item.english >= 20 && item.arbic >= 30
      );
      setStdList(passedData);
    }
  };

  const onClickAll = () => {
    setStdList(studentArray);
  };
  // const alertBtn=()=>{
  //   alert(studentArray)
  // }
  return (
    <div className="pagecontainer">
      <Navbar page="HOME" />
      <div className="homepage">
        <div>
          <table>
            <tr>
              <td>
                <input
                  type="text"
                  value={stdName}
                  onChange={handleNameChange}
                  placeholder="enter name"
                />
              </td>

              <td>
                <input
                  type="number"
                  value={engMark}
                  onChange={handleEngMarkChange}
                  placeholder="enter english mark"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={arbMark}
                  onChange={handleArbMarkChange}
                  placeholder="enter arabic mark"
                />
              </td>
              <td>
                <button onClick={handleAddNewStudent}>ADD</button>
              </td>
            </tr>
          </table>
          <table style={{ width: "100%" }}>
            <tr>
              <th>NAME</th>
              <th>ENGLISH</th>
              <th>ARABIC</th>
              <th>ALERT BUTTON</th>
            </tr>

            {stdList.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.english} </td>
                  <td>{item.arbic}</td>
                  <td>
                    <button
                      onClick={() =>
                        alert(
                          `student ${item.name} is ${
                            item.english >= 20 ? "passed" : "failed"
                          }`
                        )
                      }
                    >
                      {item.name}
                    </button>
                  </td>
                </tr>
              );
            })}

            {/* <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr> */}
          </table>
          <button onClick={onClickResult}>
            {isFilterActive ? "Show All" : "Show Passed"}
          </button>

          <div className="post-wrapper">
            {stdList.map((student) => {
              return (
                <PostUI
                  post={student}
                  title={student.name}
                  body={`English: ${student.english} Arbic: ${student.arbic}`}
                  heading={"MARK CARD"}
                ></PostUI>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default home;
