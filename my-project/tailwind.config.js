/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
      colors: {
        "primary": {
          100:  "rgb(192,189,131)" ,
          200:  "rgb(192,178,131)" ,
          300:  "" ,
          },
        "secondary": {
          100: " rgb(25,34,49)",
          200: " rgb(32, 43, 61)",
          300: "rgb(64,74,66) ",
        } ,
        "tertiary": {
          100: " rgb(244,244,244)",
          200: " rgb(230, 227, 227)",
          300: "rgb(64,74,66) ",
        } ,
        
      },
      backgroundImage: {
        'linear':
          "linear-gradient(to right bottom, rgb(25,34,49,.6), rgb(25,34,49,.7)) ,url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SUVfRn0LZ9W6qUaWx6wkutmI6b3sZXC0rg&usqp=CAU') ",
      },
      fontFamily: {
        "Garamond":["EB Garamond","serif"] 
      },
      

      
    },
  },
  plugins: [
  ],
}

