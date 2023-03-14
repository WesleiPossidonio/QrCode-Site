import 'styled-components'

// import { light } from '../styles/theme/light'
// import { dark } from '../styles/theme/dark'

// const colors = light && dark

// type ThemeType = typeof colors

declare module 'styled-components' {
   export interface DefaultTheme {
      title: string

      colors: {
         "background-page": string,
         "base-backgound": string,
         "text-color": string, 
         "title-color": string,
         "subTitle-color": string,
     },
 
     textSizes: {
          "text": string,
          "title": string,
          "subTitle": string,
          "textInput": string,
          "textButton": string
     }
   }
}