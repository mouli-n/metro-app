import {  Typography } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import React, { useState } from "react";
import SubHeader from "./SubHeader";
import { Link } from 'react-router';

function Header() {
  const data = [
    {
      name: "Agency",
    },
    {
      name: "Agency",
    },
    {
      name: "Agency",
    },
    {
      name: "Agency",
    },
    {
      name: "Agency",
    },
    {
      name: "Agency",
    },
    {
      name: "Agency",
    },
    {
      name: "Agency",
    },
    {
      name: "Agency",
    },
    {
      name: "Agency",
    },
  ];

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [runEffect, setEffect] = useState("");

  React.useEffect(() => {
    if (runEffect === "true") {
      setShow(true);
    } else if (runEffect === "true2") {
      setShow2(true);
    } else if (runEffect === "true3") {
      setShow3(true);
    } else if (runEffect === "true4") {
      setShow4(true);
    } else if (runEffect === "true5") {
      setShow5(true);
    } else if (runEffect === "true6") {
      setShow6(true);
    } else {
      setShow(false);
      setShow2(false);
      setShow3(false);
      setShow4(false);
      setShow5(false);
      setShow6(false);
    }
  }, [runEffect]);
  return (
    <div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        position: "relative",
      }}
    >
      <div>
        {" "}
        <img
          src={
            "https://unice.pixelstrapthemes.vercel.app/assets/images/logo/5.png"
          }
          alt="unice"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <Link style={{ fontSize: '2rem' }} to="/">🏠</Link>
        
        <Typography
          onMouseOver={() => setEffect("true")}
          onMouseLeave={() => setEffect("false")}
          style={{
            padding: "0 1em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "sans-serif",
            position: "relative",
          }}
        >
          Home
          <ArrowDropDown />
        </Typography>
        <Typography
          onMouseOver={() => setEffect("true2")}
          onMouseLeave={() => setEffect("false")}
          style={{
            padding: "0 1em",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          Blogs <ArrowDropDown />
        </Typography>
        <Typography
          onMouseOver={() => setEffect("true3")}
          onMouseLeave={() => setEffect("false")}
          style={{ padding: "0 1em", display: "flex", alignItems: "center" }}
        >
          Pages <ArrowDropDown />
        </Typography>

        <Typography
          onMouseOver={() => setEffect("true4")}
          onMouseLeave={() => setEffect("false")}
          style={{ padding: "0 1em", display: "flex", alignItems: "center" }}
        >
          Elements
          <ArrowDropDown />
        </Typography>
        <Typography
          onMouseOver={() => setEffect("true5")}
          onMouseLeave={() => setEffect("false")}
          style={{ padding: "0 1em", display: "flex", alignItems: "center" }}
        >
          Portfolio
          <ArrowDropDown />
        </Typography>
        <Typography
          onMouseOver={() => setEffect("true6")}
          onMouseLeave={() => setEffect("false")}
          style={{ padding: "0 1em", display: "flex", alignItems: "center" }}
        >
          Features
          <ArrowDropDown />
        </Typography>
      </div>
      
      {show ? (
        <div
          onMouseOver={() => setEffect("true")}
          onMouseLeave={() => setEffect("false")}
          style={{
            width: "200px",
            height: "auto",
            backgroundColor: "#fff",
            position: "absolute",
            top: "2em",
            left: "680px",
            boxShadow:"0.1em 0.2em  0.8em  #88888888"

          }}
        >
          {data.map((e) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1em 0 0 0",
              }}
            > 
              <Typography>{e.name}</Typography>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {show2 ? (
        <div
          onMouseOver={() => setEffect("true2")}
          onMouseLeave={() => setEffect("false")}
          style={{
            width: "200px",
            height: "auto",
            backgroundColor: "#fff",
            position: "absolute",
            top: "2em",
            left: "780px",
            boxShadow:"0.1em 0.2em  0.8em  #88888888"

          }}
        >
          {data.map((e) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1em 0 0 0",
              }}
            >
              <Typography>{e.name}</Typography>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {show3 ? (
        <div
          onMouseOver={() => setEffect("true3")}
          onMouseLeave={() => setEffect("false3")}
          style={{
            width: "200px",
            height: "auto",
            backgroundColor: "#fff",
            position: "absolute",
            top: "2em",
            left: "880px",
            boxShadow:"0.1em 0.2em  0.8em  #88888888"
          

          }}
        >
          {data.map((e) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1em 0 0 0",
              }}
            >
              <Typography>{e.name}</Typography>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {show4 ? (
        <div
          onMouseOver={() => setEffect("true4")}
          onMouseLeave={() => setEffect("false4")}
          style={{
            width: "41%",
            height: "auto",
            backgroundColor: "#fff",
            position: "absolute",
            top: "2em",
            left: "680px",
            boxShadow:"0.1em 0.2em  0.8em  #88888888"

          }}
        >
          {data.map((e) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1em 0 0 0",
              }}
            >
              <Typography>{e.name}</Typography>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {show5 ? (
        <div
          onMouseOver={() => setEffect("true5")}
          onMouseLeave={() => setEffect("false5")}
          style={{
            width: "66%",
            height: "auto",
            backgroundColor: "#fff",
            position: "absolute",
            top: "2em",
            left: "300px",
            boxShadow:"0.1em 0.2em  0.8em  #88888888"

          }}
        >
          {data.map((e) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1em 0 0 0",
              }}
            >
              <Typography>{e.name}</Typography>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {show6 ? (
        <div
          onMouseOver={() => setEffect("true6")}
          onMouseLeave={() => setEffect("false6")}
          style={{
            width: "63%",
            height: "auto",
            backgroundColor: "#fff",
            position: "absolute",
            top: "2em",
            left: "350px",
            boxShadow:"0.1em 0.2em  0.8em  #88888888"
          }}
        >
          {data.map((e) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1em 0 0 0",
              }}
            >
              <Typography>{e.name}</Typography>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
          <SubHeader/>

          </div>
  );
}

export default Header;
