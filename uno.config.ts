import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss';
import presetTagify from '@unocss/preset-tagify';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetTagify({
      /* options */
    }),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
      },
    }),
    presetUno(),
  ],
  transformers: [transformerAttributifyJsx()],
  theme: {
    // ...
    colors: {
      veryCool: '#0000ff', // class="text-very-cool"
      primary: 'var(--bg-primary)',
    },
  },
  shortcuts: [
    [
      'btn-01',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
  ],
});
