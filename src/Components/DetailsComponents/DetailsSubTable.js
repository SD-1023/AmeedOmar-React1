import React from "react";

function DetailsSubTable(prop) {
  console.log({ prop });
  return (
    <div class="sub-topics-container">
      <div class="sub-topics-table">
        <table id="dynamic-table">
          <thead>
            <tr>
              <th id="topic_table">HTML Sub Topics {prop.topic}</th>
            </tr>
          </thead>
          {prop.prop.subtopics.map((item) => {
            return (
              <tbody>
                <td>
                  <ion-icon
                    name="checkmark-circle-outline"
                    class="checkmark-circle-outline"
                  ></ion-icon>
                  {item}
                </td>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default DetailsSubTable;
