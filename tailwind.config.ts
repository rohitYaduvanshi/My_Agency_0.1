// tailwind.config.ts
const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        // 'sans' ko override karein aur 'var' ko pehle rakhein
        sans: ["var(--font-satoshi)", "ui-sans-serif", "system-ui"],
      },
    },
  },
};