import React from "react";

interface Props {
  images: { imgSrc: string; id: string }[];
}

export const ImageComponent = ({ images }: Props) => {
  return <div>ImageComponent</div>;
};
