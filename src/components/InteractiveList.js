import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
function InteractiveList() {
  return (
    <>
      <div
        className="row justify-content-center"
        style={{ alignItems: "center" }}
      >
        <table
          className="table table-hover justify-content-center"
          style={{ marginTop: "10rem", maxWidth: "250px", background: "white" }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <HighlightOffIcon
                  className="card-n"
                  style={{ color: "black" }}
                />
              </td>
              <td>
                <DeleteIcon />
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Fab>
        <DeleteIcon />
      </Fab>
    </>
  );
}

export default InteractiveList;
