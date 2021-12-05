import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import Bags_class from "../Images/Bags_class.jpg";
import Fashion_1 from "../Images/Fashion_1.jpg";
import Fashion_2 from "../Images/Fashion_2.jpg";
import Fashion1 from "../Images/Fashion1.jpg";
import Watch_1 from "../Images/Watch_1.webp";
import watch_2 from "../Images/watch_2.jpg";
import school_bag from "../Images/school_bag.jpg";
import watch_3 from "../Images/watch_3.jpg";
import women_bag from "../Images/women_bag.jpg";
import watch_4 from "../Images/watch_4.jpeg";

function Allshop() {
  const data = [
    {
      id: 1,
      product: "Fashion",
      images: [
        {
          img: Fashion_1,
        },
        { img: Fashion_2 },
        { img: Fashion1 },
      ],
    },
    {
      id: 2,
      product: "Watch",
      images: [
        {
          img: Watch_1,
        },
        {
          img: watch_2,
        },
        {
          img: watch_3,
        },
      ],
    },
    {
      id: 3,
      product: "Bags",
      images: [
        {
          img: Bags_class,
        },
        { img: school_bag },
        { img: women_bag },
      ],
    },
    {
      id: 4,
      product: "Silver",
      images: [],
    },
  ];
  const [allData, setALlData] = useState(data);
  const [allImg, setImg] = useState(data);
  const [effect, setEffect] = useState([]);
  const showItems = (e, ee) => {
    let datum = allData.filter((eee) => eee.id === ee.id);
    console.log(datum);
    let len = datum.map((e) => e.images.length.toString());
    let d=parseInt(len)

    if (!!d) {
      setImg(datum);
    } else {
      alert("No stocks Available");
      setImg(datum);

    }
  };

  return (
    <Box style={{}}>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly ",
          alignItems: "center",
          width: "100%",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <Styledtypo onClick={() => setImg(data)}>All</Styledtypo>

        {allData.map((ee) => (
          <div key={ee.id}>
            <Styledtypo onClick={(e) => showItems(e, ee)}>
              {ee.product}
            </Styledtypo>
          </div>
        ))}
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      > 
        {allImg.map((e) =>
          e.images.map((e) => (
            <div style={{ margin: "1em 0 0 0" }}>
              <Styleddiv
                src={e.img}
                alt="images"
                width="300px"
                height="300px"
              />
            </div>
          ))
        )}
      </Box>
    </Box>
  );
}

export default Allshop;
const Styledtypo = styled(Typography)`
  padding: 0.5em;
  cursor: pointer;
  &:hover {
    color: white;
    background: black;
  }
`;
const Styleddiv = styled.img`
  cursor: pointer;

  &: hover {
    opacity: 0.5;
    transform: scale(0.9);
    transition: all 0.2s linear;
    background: #000;
  }
`;
