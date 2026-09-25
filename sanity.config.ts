import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/design-system/sanity/schemaTypes';

export default defineConfig({
  name: 'awt-studio',
  title: 'a [working title] studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'pbnloqtf',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
