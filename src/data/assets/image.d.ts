// TS is having truble to find the right images

declare module "*.jpg" {
  const src: string;
  export default src;
}

// For other image files
/*
declare module "*.jpeg" {
  const src: string;
  export default src;
}


declare module "*.png" {
  const src: string;
  export default src;
}
*/