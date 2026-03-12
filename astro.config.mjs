// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightVersions from 'starlight-versions'
import starlightGiscus from 'starlight-giscus'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
            plugins: [
                /*starlightVersions({
                    versions: [{ slug: '3.x' }],
                }),*/
                starlightGiscus({
                    repo: 'Xenophee/Quarkus-Guide',
                    repoId: 'R_kgDOQW1VjA',
                    category: 'Announcements',
                    categoryId: 'DIC_kwDOQW1VjM4Cx2nt',
                    inputPosition: "top",
                    lazy: true,
                    theme: {
                        light: 'light_protanopia',
                        dark: 'dark_protanopia',
                    }
                })
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
                    label: 'Interface Web Qute',
                    autogenerate: { directory: 'templates-qute' },
                },
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
