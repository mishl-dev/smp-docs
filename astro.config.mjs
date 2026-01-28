// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from "starlight-ion-theme";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [ion()],
			title: 'Infinity SMP ',
			logo: {
				src: './public/infinity.png',
			},
			favicon: '/infinity.png',
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'Welcome', slug: 'index' },
					],
				},
				{
					label: 'Player Guide',
					items: [
						{ label: 'Account Linking', slug: 'plugins/discordsrv' },
						{ label: 'Homes & Teleportation', slug: 'plugins/huskhomes' },
						{ label: 'Teams (BetterTeams)', slug: 'plugins/betterteams' },
						{ label: 'Voice Chat', slug: 'plugins/simplevoicechat' },
						{ label: 'Skins', slug: 'plugins/skinsrestorer' },
						{ label: 'Shulker Boxes', slug: 'plugins/axshulkers' },
						{ label: 'One Player Sleep', slug: 'plugins/oneplayersleep' },
					],
				},
			],
		}),
	],
});
