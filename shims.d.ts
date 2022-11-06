// this file is only needed if you use `@unocss/preset-attributify`
import type { AttributifyAttributes } from "@unocss/preset-attributify";

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName: string]: HTMLAttributes | AttributifyAttributes;
    }
  }
}

// declare namespace JSX {
//   interface IntrinsicElements {
//     relative: any;
//     'btn-01': any;
//   }
// }
