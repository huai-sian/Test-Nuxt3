/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      'sans': ['Microsoft JhengHei', 'Noto Sans TC', 'sans-serif']
    },
    extend: {
      screens: {
        'xs': '450px',
      },
      colors: {
        primary: {
          normal: '#FF6B00',
          fade: '#ffad00',
          light: '#FF8933',
          dark: '#E46103',
          sp: '#ff8802',
          'bg-light': '#FFF5EA',
          'border-light': '#FFE8D2'
        },
        message: {
          remind: '#FEF0E5'
        },
        skeleton: {
          fromColor: '#EDEDED',
          toColor: '#E3E3E3'
        },
        'text-primary': '#2F2F2F',
        grayIcon: '#828282',
        bg: {
          gray: '#F4F4F4',
          'dark-gray': '#D5D5D5',
          spCard: '#ECE9E5',
          'light-gray': '#F9FAFB'
        },
        text: {
          gray: '#4e4e4e',
          elGray: '#606266'
        },
        status: {
          success: '#67c23a',
          error: '#f56c6c'
        },
        amex: {
          normal: '#006fcf',
          light: '#0098E5'
        },
        custom: {
          fb: '#2e71b0',
          'fb-light': '#588DC0',
        },
        rose: {
          400: '#FB7185',
        },
        orange: {
          400: '#FB923C'
        }
      },
      aspectRatio: {
        25: '25',
      },
      flex: {
        '3': '0 1 30%',
        '4.5': '0 1 45%',
        '7': '0 1 70%'
      }
    },
  },
  plugins: [],
}

