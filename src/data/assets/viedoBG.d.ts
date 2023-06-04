// TypeScript is having truble to find the .mp4 file so This code helps it find it.

declare module "*.mp4" {
  const src: string;
  export default src;
}
