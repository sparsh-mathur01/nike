import { Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
interface Props {
  sizes?: number[];
}
export const SizeChart = ({
  sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
}: Props) => {
  return (
    <Stack rowGap={1}>
      <Stack direction={"row"} justifyContent="space-between">
        <Typography>Select Size</Typography>
        <Typography
          color="#8e8e8e"
          sx={{ cursor: "pointer" }}
          onClick={() => alert("guide redirection")}
        >
          Size Guide
        </Typography>
      </Stack>
      <Grid container spacing={1}>
        {sizes.map((size, index) => {
          return (
            <Grid item key={index} xs={4}>
              <Button
                fullWidth
                variant="outlined"
                sx={{ border: "1px solid black", color: "black", py: 1 }}
              >
                {"UK " + size}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};
