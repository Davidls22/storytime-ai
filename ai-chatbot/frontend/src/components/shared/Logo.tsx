import React from 'react'
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";

const Logo = () => {
  return (
    <div
        style={{
            display: "flex",
            marginRight: "auto",
            alignItems: "center",
            gap: "8px",
        }}>
        <Link to={"/"}>
            <img 
            src="ailogo.png" 
            alt="aiphoto"
            width={"30px"}
            height={"30px"}
            className="image" />
            </Link>{" "}
           <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          textShadow: "2px 2px 20px #000",
        }}
      >
        <span style={{ fontSize: "30px" }}>StoryTime</span>-AI
      </Typography>
    </div>
  )
}

export default Logo