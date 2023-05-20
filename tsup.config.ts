// tsup.config.ts
import { defineConfig } from 'tsup-preset-solid'

export default defineConfig(
  [
    {
      entry: 'src/index.js',
      serverEntry: true,
    },
  ],
  {
    writePackageJson: true,
    cjs: true,
  },
)
