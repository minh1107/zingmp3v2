/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
    },
    extend: {
      borderOpacity: {
        button: "#ffffff2f",
      },
      backgroundColor: {
        "left-bar": "#231A28",
        "right-bar": "#170E1F",
        "music-playing": "#130B19",
        "text-white": "#170E1F",
        "player-bar": "#130B19",
        "main-home": "#170E1F",
        "search-bar": "#2F2532",
        "overlay-30": "rgba(0,0,0,0.3)",
        "hover-color": "#2F2532",
      },
      colors: {
        "left-bar": "#231A28",
        "right-bar": "#170E1F",
        "music-playing": "#130B19",
        "text-white": "#170E1F",
        "player-bar": "#130B19",
        "main-home": "#170E1F",
        "search-bar": "#2F2532",
        "select-color": "#9A49C5",
        "text-color": "#ffffff80",
      },
      borderColor: {
        "select-color": "#9A49C5",
      },
      keyframes: {
        "scale-up-hor-left": {
          "0%": {
            "-webkit-transform": "translateX(300px);",
            transform: "translateX(300px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },
        "slide-right": {
          "0%": {
            "-webkit-transform": "translateX(-500px);",
            transform: "translateX(-500px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },
        "slide-left-1": {
          "0%": {
            "-webkit-transform": "translateX(500px);",
            transform: "translateX(500px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },
        "slide-left-2": {
          "0%": {
            "-webkit-transform": "translateX(500px);",
            transform: "translateX(500px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },

        "rotate-center": {
          "0%": {
            "-webkit-transform": "rotate(0);",
            transform: "rotate(0);",
            "border-radius": "50px;",
          },
          "100%": {
            "-webkit-transform": "rotate(360deg);",
            transform: "rotate(360deg);",
          },
        },
        "rotate-center-pause": {
          "0%": {
            "-webkit-transform": "rotate(-360deg);",
            transform: "rotate(-360deg);",
            "border-radius": "50%;",
          },
          "59%": {
            "-webkit-transform": "rotate(0deg);",
            transform: "rotate(0deg);",
            "border-radius": "50%;",
          },
          "80%": {
            "-webkit-transform": "rotate(0deg);",
            transform: "rotate(0deg);",
            "border-radius": "50%;",
          },
          "100%": {
            "-webkit-transform": "rotate(0);",
            transform: "rotate(0);",
            "border-radius": "4px;",
          },
        },
        "image-zoom": {
          "0%": {
            "-webkit-transform": "scale(1)",
            transform: "scale(1)",
          },
          "100%": {
            "-webkit-transform": "scale(1.2)",
            transform: "scale(1.2)",
          },
        },
        "image-zoom-out": {
          "0%": {
            "-webkit-transform": "scale(1.2)",
            transform: "scale(1.2)",
          },
          "100%": {
            "-webkit-transform": "scale(1)",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "rotate-center": "rotate-center 8s linear infinite;",
        "rotate-center-pause": "rotate-center-pause .6s linear both;",
        "slide-right":
          "slide-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "slide-left-1":
          "slide-left-1 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "slide-left-2":
          "slide-left-2 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "scale-up-hor-left":
          "scale-up-hor-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;",
          'image-zoom': 'image-zoom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;',
          'image-zoom-out': 'image-zoom-out 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;'

      },
      flex: {
        '4': "4 4 0%",
        '3': "3 3 0%",
        '7': "7 7 0%",
        '6': "6 6 0%",
        '1': '1 1 0%',
      },
    },
  },
  plugins: [],
};
