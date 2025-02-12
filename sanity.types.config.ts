// sanity.types.config.ts
import {defineConfig} from 'sanity'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'

export default defineConfig({
  projectId,
  dataset,
  schema,
  plugins: [],
})