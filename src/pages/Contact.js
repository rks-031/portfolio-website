import React from "react";
import { FaQuestion } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <div>
      <p className="text-white-50 text-center" style={{ fontSize: "25px" }}>
        How To Reach Me
        <FaQuestion />
      </p>
      <br />
      <table class="table text-white justify-content-center text-center">
        <thead style={{ fontSize: "25px" }}>
          <tr>
            <th scope="col">Via</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr
            style={{
              background:
                "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
            }}
          >
            <th scope="row">
              <FaLocationDot
                style={{
                  width: "20px",
                }}
              />
            </th>
            <td style={{ fontSize: "20px" }}>Jamshedpur, Jharkhand, India</td>
          </tr>
          <tr>
            <th scope="row">
              <FaMobileAlt style={{ width: "20px" }} />
            </th>
            <td>
              <a
                href="tel:8210788702"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                +91-821-078-8702
              </a>
            </td>
          </tr>
          <tr
            style={{
              background:
                "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
            }}
          >
            <th scope="row">
              <FaMailBulk style={{ width: "20px" }} />
            </th>
            <td>
              <a
                href="mailto:rajnish31july@gmail.com"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }}
                target="_blank"
                rel="noreferrer"
              >
                rajnish31july@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <FaInstagram style={{ width: "20px" }} />
            </th>
            <td>
              <a
                href="https://www.instagram.com/rks_031/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                rks_031
              </a>
            </td>
          </tr>
          <tr
            style={{
              background:
                "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
            }}
          >
            <th scope="row">
              <FaLinkedin style={{ width: "20px" }} />
            </th>
            <td>
              <a
                href="https://www.linkedin.com/in/rajnish-kumar-singh-2241b321b/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                rajnish-kumar-singh
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
}
