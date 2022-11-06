import presetTagify from "@unocss/preset-tagify";
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetTagify({
      /* options */
    }),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: "Kinto Sans",
        weights: ["300", "400", "600", "700"],
      },
      provider: "none",
    }),
    presetUno(),
  ],
  shortcuts: [
    [
      "btn-01",
      "px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50",
    ],
  ],
  theme: {
    // ...
    colors: {
      primary: "var(--bg-primary)",
      veryCool: "#0000ff", // class="text-very-cool"
    },
  },
  // @ts-ignore
  transformers: [transformerAttributifyJsx()],
});
