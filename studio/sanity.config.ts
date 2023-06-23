import {buildLegacyTheme, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// Styles
import './styles/globals.css'

const props = {
  '--my-white': '#fffaff',
  '--my-black': '#111111',
  '--color-purple': '#251842',
  '--my-red': '#ed4337',
  '--my-yellow': '#ffe87d',
  '--my-green': '#407d62',
  '--my-grey': '#a5a5a5',
  '--my-font': 'var(--font-family-vietnam)',
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  // '--black': props['--my-black'],
  // '--white': props['--my-white'],

  // '--gray': props['--my-grey'],
  // '--gray-base': props['--my-grey'],

  // '--component-bg': props['--my-white'],
  // '--component-text-color': props['--my-black'],

  // /* Brand */
  // '--brand-primary': props['--color-purple'],

  // // Default button
  // '--default-button-color': props['--my-grey'],
  // '--default-button-primary-color': props['--color-purple'],
  // '--default-button-success-color': props['--my-green'],
  // '--default-button-warning-color': props['--my-yellow'],
  // '--default-button-danger-color': props['--my-red'],

  // /* State */
  // '--state-info-color': props['--color-purple'],
  // '--state-success-color': props['--my-green'],
  // '--state-warning-color': props['--my-yellow'],
  // '--state-danger-color': props['--my-red'],

  // /* Navbar */
  // '--main-navigation-color': props['--my-black'],
  // '--main-navigation-color--inverted': props['--my-white'],

  // '--focus-color': props['--color-purple'],

  /* Typography */
  '--font-family-base': props['--my-font'],
})

export default defineConfig({
  name: 'default',
  title: 'Moonbelly Makes',

  projectId: 'r2zdcffr',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: myTheme,
})
