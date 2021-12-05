import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@material-ui/core";
import {
  Copyright,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@material-ui/icons";
function Footer() {
  return (
    <BoxStyled>
      <FooterOne>
        <div style={{ padding: "1em 0" }}>
          <img
            src={
              "https://unice.pixelstrapthemes.vercel.app/assets/images/logo/5.png"
            }
            alt="unice"
          />{" "}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "500px",
            padding: "1em 0",
            fontFamily: "monospace",
          }}
        >
          <Typography>Home</Typography>
          <Typography>Couple</Typography>
          <Typography>Invitation</Typography>
          <Typography>Album</Typography>
          <Typography>Friends</Typography>
          <Typography>Say</Typography>
          <Typography>Gift</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "300px",
            padding: "1em 0",
          }}
        >
          <Facebook />
          <Instagram />
          <Twitter />
          <YouTube />
        </div>
      </FooterOne>
      <FooterTwo>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2em 4em",
            width: "20%",
          }}
        >
          <Typography>Privacy Policy</Typography>
          <Typography>Terms & Conditions</Typography>
        </div>
        <Typography
          style={{ display: "flex", alignItems: "center", width: "30%" }}
        >
          <span>Copyright </span>
          &nbsp;
          <Copyright />
          &nbsp;
          <span> 2021 Unice By Pixelstrap</span>
        </Typography>
      </FooterTwo>
    </BoxStyled>
  );
}

export default Footer;
const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterOne = styled(Box)`
  background: #f5f5f8;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0em;
`;
const FooterTwo = styled(Box)`
  background: #000;
  width: 100%;
  color: #fff;
  font-family: Poppins;
  display: flex;
  justify-content: space-between;
`;
