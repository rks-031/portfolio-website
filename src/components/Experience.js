import React from "react";

function Experience() {
  return (
    <div>
      <p className="text-white-50">What have I done till date?</p>
      <div className="d-flex justify-content-left">
        <button class="btn tech-stacks my-3">
          Tech Experiences & Knowledge
        </button>
      </div>
      <br />
      <table class="table table-bordered text-white">
        <tbody>
          <tr>
            <th scope="row" className="text-white-50">
              I.
            </th>
            <td colspan="2">
              132nd rank worldwide in GirlScript Summer of Code 2023 with 14 PRs merged.
            </td>
          </tr>
          <tr>
            <th scope="row" className="text-white-50">
              II.
            </th>
            <td colspan="2">Beta Microsoft Learn Student Ambassador-2023</td>
          </tr>
          <tr>
            <th scope="row" className="text-white-50">
              III.
            </th>
            <td colspan="2">Podium finish in Advaita HackFest-2023</td>
          </tr>
          <tr>
            <th scope="row" className="text-white-50">
              IV.
            </th>
            <td colspan="2">
              Ex - IT & Web Development Intern @ BasketHunt Pvt. Ltd. (June'23 -
              Aug'23)
            </td>
          </tr>
          <tr>
            <th scope="row" className="text-white-50">
              V.
            </th>
            <td colspan="2">MERN STACK Development</td>
          </tr>
          <tr>
            <th scope="row" className="text-white-50">
              VI.
            </th>
            <td colspan="2">WordPress</td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
}

export default Experience;
