import React from "react";

function Prueba() {
  return (
    <div>
      <tbody>
        <tr data-type="Name">
          <td>Name</td>
          <td>
            <input name="name" type="text" placeholder="Anonymous" />
          </td>
        </tr>
        <tr data-type="Options">
          <td>Options</td>
          <td>
            <input name="email" type="text" tabindex="2" />
          </td>
        </tr>
        <tr data-type="Subject">
          {" "}
          <td>Subject</td>{" "}
          <td>
            <input name="sub" type="text" tabindex="3" />
            <input type="submit" value="Post" tabindex="6" />
          </td>{" "}
          <tr data-type="Comment">
            <td>Comment</td>
            <td>
              <textarea
                name="com"
                cols="48"
                rows="4"
                wrap="soft"
                tabindex="4"
              ></textarea>
            </td>
          </tr>
          <tr data-type="File">
            <td>File</td>
            <td>
              <input id="postFile" name="upfile" type="file" tabindex="7" />
              <span class="desktop">
                [
                <label>
                  <input
                    type="checkbox"
                    name="spoiler"
                    value="on"
                    tabindex="8"
                  />
                  Spoiler?
                </label>
                ]
              </span>
            </td>
          </tr>
        </tr>
      </tbody>
    </div>
  );
}

export default Prueba;
