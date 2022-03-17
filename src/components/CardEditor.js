import React from "react";
import { NavLink } from "react-router-dom";

import "../App.css";
function CardEditor(props) {
  let tempArr = [];

  //Add new card item
  const addCard = () => {
    props.setFrontValue("");
    props.setBackValue("");

    tempArr = [props.frontValue, props.backValue];
    props.setResult([...props.result, tempArr]);
  };

  const removeCard = (event) => {
    let temp = props.result;
    let index = event.target.dataset.index;

    temp.splice(index, 1);
    props.setResult([...temp]);
  };

  const editCard = (event) => {
    let index = event.target.dataset.index;

    let temp = [...props.result];
    tempArr = [props.frontValue, props.backValue];
    temp.splice(index, 1, tempArr);
    props.setResult([...temp]);
    props.setFrontValue("");
    props.setBackValue("");
    /* if(props.frontValue===""&&props.backValue===""){
alert("Please fill in question and answer in the below input boxes and then click on edit")
  }; */
  };

  return (
    <div className="Editor">
      <h1>Card Editor</h1>
      <div id="Table">
        <table>
          <thead>
            <tr>
              <th>Front</th>
              <th>Back</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {props.result.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>
                    <button
                      style={{
                        background: "#F4F5F7",
                        color: "black",
                        border: "black 0.5px solid",
                      }}
                      data-index={index}
                      onClick={removeCard}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      style={{
                        background: "#F4F5F7",
                        color: "black",
                        border: "black 0.5px solid",
                      }}
                      data-index={index}
                      disabled={!props.frontValue || !props.backValue}
                      onClick={editCard}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="InputFields">
        <input
          onChange={(e) => props.setFrontValue(e.target.value)}
          value={props.frontValue}
          placeholder="Question"
        />
        <input
          onChange={(e) => props.setBackValue(e.target.value)}
          value={props.backValue}
          placeholder="Answer"
        />
        <button
          disabled={!props.frontValue || !props.backValue}
          style={{
            background: "#F4F5F7",
            color: "black",
            border: "1px solid gray",
          }}
          onClick={addCard}
        >
          Add Card
        </button>{" "}
      </div>
      <div>
        <NavLink to="/Cardviewer">
          <button>Card Viewer</button>
        </NavLink>
      </div>
    </div>
  );
}
export default CardEditor;
