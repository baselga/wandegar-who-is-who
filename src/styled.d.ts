import "styled-components";

// and extend them!
declare module "styled-components" {  
  export interface DefaultTheme {
    colors: {
      text: string;      
      primary: string;
      primaryDark: string;
      light: string;
    },
    shadows: {
      default: string;
      primary: string;
    }
  }
}
