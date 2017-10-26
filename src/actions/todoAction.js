import { VALUE, COLOR, ADDSIZE, ADDBOLD, ADDFONT } from "./constants";

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

export const boldAction = bold => ({
  type: ADDBOLD,
  bold
});

export const fontAction = font => ({
  type: ADDFONT,
  font
});
