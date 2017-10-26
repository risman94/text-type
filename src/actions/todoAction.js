import { VALUE, COLOR, ADDSIZE } from "./constants";

export const addAction = text => ({
  type: VALUE,
  text
});
export const colorAction = warna => ({
  type: COLOR,
  warna
});

export const sizeAction = size => ({
  type: ADDSIZE,
  size
});
