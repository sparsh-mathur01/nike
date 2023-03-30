import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
// import { useHistory } from "react-router-dom";

interface Props {
  product: {
    id: string;
    name: string;
    img: string[];
    desc: string;
    colorqty: number;
    price: number;
  };
}

export const ProductCard = ({ product }: Props) => {
  //   const history = useHistory();
  return (
    <Card sx={{ p: 2 }} onClick={() => {}}>
      <Stack>
        <Box minWidth={"413px"} minHeight="413px" border="1px solid grey">
          <img src={product.img[0]} alt="product" />
        </Box>
        <Typography color="#b96d47">Just In</Typography>
        <Typography>{product.name}</Typography>
        <Typography color="#8e8e8e">{product.desc}</Typography>
        <Typography color="#8e8e8e">
          {`${product.colorqty} `}
          {product.colorqty > 1 ? "Colors" : "Color"}
        </Typography>
        <br />
        <Typography>
          {"MRP : "} &#8377;
          {product.price.toFixed(2)}
        </Typography>
      </Stack>
    </Card>
  );
};
