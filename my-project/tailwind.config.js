/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
        screens: {
      'sm': '550px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1250px',
      // => @media (min-width: 1280px) { ... }

  
    },
    extend: {
     
    
     
      colors: {
        "primary": {
          100:  "rgb(215,186,137)" ,
          200:  "rgb(215,186,137)" ,
          300:  "rgb(250, 245, 145)" ,
          },
        "secondary": {
          100: " rgb(25,34,49)",
          200: " rgba(32, 43, 61,.9)",
          300: "rgba(42, 57, 80,.7) ",
        } ,
        "tertiary": {
          100: " rgb(250,250,244)",
          200: " rgb(230, 227, 227)",
          300: "rgb(64,74,66) ",
        } ,
        
      },
      backgroundImage: {
        'linear':
          "linear-gradient(to right bottom, rgb(25,34,49,.6), rgb(25,34,49,.7)) ,url('https://i.pinimg.com/236x/cb/4c/79/cb4c79cf75c405c04769aaed0e9a6208.jpg') ",
      },
      fontFamily: {
        "cinzel": [ "Cinzel", "serif" ] ,
        "lato": [ "Lato", "serif" ] 
        
      },
      

      
    },
  },
  plugins: [
  ],
}

