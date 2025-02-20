import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [sveltekit(), tailwindcss(),

  VitePWA({
    registerType: "autoUpdate",
    devOptions: {
      enabled: true,
    },
    manifest: {
      name: "Kipasmatika",
      short_name: "Kipasmatika",
      description: "Mathematic fans",
      theme_color: "#ffffff",
      icons: [
        {
          src: "android-chrome-512x512.png",
          type: "image/png",
          sizes: "512x512",
        },
        {
          src: "android-chrome-192x192.png",
          type: "image/png",
          sizes: "192x192",
        },
      ],
    },
  }),
  ]
});
