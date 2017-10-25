import { VALUE, COLOR } from "./constants";

export const addAction = text => ({
  type: VALUE,
  text
});
export const colorAction = warna => ({
  type: COLOR,
  warna
});
