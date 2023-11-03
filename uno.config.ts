import { defineConfig, presetWebFonts, presetUno  } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        header: 'Rubik Dirt',
        default: 'Ubuntu'
      }
    }),
  ],
})