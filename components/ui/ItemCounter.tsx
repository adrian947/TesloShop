import React, { FC, useState } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  quantity: (q: number) => void;
  currentValue: number;
  maxValue: number;
}

export const ItemCounter: FC<Props> = ({
  maxValue,
  currentValue,
  quantity,
}) => {
  const handleCounter = (op: string) => {
    if (op === "rest" && currentValue < 1) return;

    if (op === "rest") {
      return quantity(currentValue - 1);
    }
    if (currentValue < maxValue) {
      return quantity(currentValue + 1);
    }
  };

  return (
    <Box display='flex' alignItems='center'>
      <IconButton onClick={() => handleCounter("sum")}>
        <FontAwesomeIcon icon={faPlus} />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>
        {currentValue}
      </Typography>
      <IconButton onClick={() => handleCounter("rest")}>
        <FontAwesomeIcon icon={faMinus} />
      </IconButton>
    </Box>
  );
};
