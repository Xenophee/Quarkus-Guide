// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightVersions from 'starlight-versions'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
            plugins: [
                /*starlightVersions({
                    versions: [{ slug: '3.x' }],
                }),*/
            ],
			title: 'Quarkus Guide',
            favicon: '/logo.png',
            locales: {
                root: {
                    label: 'Français',
                    lang: 'fr',
                },
            },
            logo: {
                src: './src/assets/logo.png',
            },
			social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/Xenophee' },
                { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/perrine-dassonville-dev/' },
            ],
			sidebar: [
                { label: 'Avant-propos', slug: 'avant-propos' },
				/*{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},*/
				{
					label: 'Panache ORM',
					autogenerate: { directory: 'panache-orm' },
				},
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
