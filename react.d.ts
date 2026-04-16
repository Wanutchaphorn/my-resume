/// <reference types="react" />
/// <reference types="react-dom" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
      div: any;
      a: any;
      h1: any;
      h2: any;
      h3: any;
      p: any;
      span: any;
      img: any;
      section: any;
      main: any;
      aside: any;
      br: any;
    }
    interface Element {}
    interface ElementClass {}
    interface ElementAttributesProperty {}
    interface ElementChildrenAttribute {}
    interface IntrinsicClassAttributes<T> {}
  }
}

export {};

