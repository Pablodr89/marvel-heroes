/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from '@iconify/tailwind';

export const content = ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'];
export const theme = {
	extend: {},
};
export const plugins = [require('flowbite/plugin'), addDynamicIconSelectors()];
