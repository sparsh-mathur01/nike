import { Box, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { Fragment, useState } from "react";
import { ProductCard } from "../components";
import { allImages } from "../data/imagedata";

const initialProductsList = [
  {
    id: "1",
    name: "Zion 2pf",
    img: allImages[0],
    desc: "Men's basketball shoes",
    colorqty: 1,
    price: 199,
  },
  {
    id: "2",
    name: "john 2pf",
    img: allImages[1],
    desc: "Men's basketball shoes",
    colorqty: 2,
    price: 199,
  },
  {
    id: "3",
    name: "ryan 2pf",
    img: allImages[2],
    desc: "Men's basketball shoes",
    colorqty: 1,
    price: 199,
  },
  {
    id: "4",
    name: "Zion 2pf",
    img: allImages[3],
    desc: "Men's basketball shoes",
    colorqty: 1,
    price: 199,
  },
  {
    id: "5",
    name: "john 2pf",
    img: allImages[4],
    desc: "Men's basketball shoes",
    colorqty: 2,
    price: 199,
  },
  {
    id: "6",
    name: "ryan 2pf",
    img: allImages[5],
    desc: "Men's basketball shoes",
    colorqty: 1,
    price: 199,
  },
  {
    id: "7",
    name: "Zion 2pf",
    img: allImages[6],
    desc: "Men's basketball shoes",
    colorqty: 1,
    price: 199,
  },
  {
    id: "8",
    name: "john 2pf",
    img: allImages[7],
    desc: "Men's basketball shoes",
    colorqty: 2,
    price: 199,
  },
  {
    id: "9",
    name: "ryan 2pf",
    img: allImages[8],
    desc: "Men's basketball shoes",
    colorqty: 1,
    price: 199,
  },
  {
    id: "10",
    name: "ryan 2pf",
    img: allImages[9],
    desc: "Men's basketball shoes",
    colorqty: 1,
    price: 199,
  },
];
const Products = () => {
  const [productslist, setProductsList] = useState(initialProductsList);

  return (
    <Box p={3}>
      <Typography fontSize='24px'>New Men's Shoes (117)</Typography>
      <Grid container display={"flex"} flexWrap="wrap" spacing={2}>
        {productslist.map((product, index) => (
          <Grid item xs={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
