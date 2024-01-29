import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

export const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const auth = useAuth();
  return role === "assistant" ? (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#00AAA9", my: 2, gap: 2 }}>
      <Avatar sx={{ ml: "0" }}>
        <img src="ailogo.png" alt="ailogo" width={"30px"} />
      </Avatar>
      <Box>
        <Typography color={"white"} fontSize={"20px"}>{content}</Typography>
      </Box>
    </Box>
  ) : (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#E7FEFD", gap: 2 }}>
      <Avatar sx={{ ml: "0", bgcolor: "black",color: "white" }}>
        {auth?.user?.name[0]}
        {auth?.user?.name.split(" ")[1][0]}
      </Avatar>
      <Box>
        <Typography color={"black"} fontSize={"20px"}>{content}</Typography>
      </Box>
    </Box>
  );
};
