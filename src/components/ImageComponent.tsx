import { Card, Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";

interface Props {
  images: { imgSrc: string; id: string }[];
}

export const ImageComponent = ({ images }: Props) => {
  const [previewImg, setPreview] = useState(images[0]);
  return (
    <Grid container>
      <Grid item xs={2}>
        <Stack alignItems={"center"} rowGap={1}>
          {images?.map((item, index) => {
            return (
              <Card key={index} sx={{ boxShadow: "none" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setPreview(item)}
                  src={item.imgSrc}
                  alt={item.id}
                  width="70px"
                  height="70px"
                />
              </Card>
            );
          })}
        </Stack>
      </Grid>
      <Grid item xs={10}>
        <Box width={"100%"} height={"668px"}>
          <img
            src={previewImg.imgSrc}
            alt={previewImg.id}
            width="100%"
            height="100%"
          />
        </Box>
      </Grid>
    </Grid>
  );
};
