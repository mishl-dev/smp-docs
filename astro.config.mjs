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
					label: 'Core Plugins',
					items: [
						{ label: 'HuskHomes', slug: 'plugins/huskhomes' },
					],
				},
				{
					label: 'Teams',
					items: [
						{ label: 'Ultimate Teams', slug: 'plugins/ultimateteams' },
					],
				},
				{
					label: 'Voice Chat',
					items: [
						{ label: 'Simple Voice Chat', slug: 'plugins/simplevoicechat' },
					],
				},
				{
					label: 'Bukkit Plugins',
					items: [
						{ label: 'AxShulkers', slug: 'plugins/axshulkers' },
						{ label: 'CoreProtect', slug: 'plugins/coreprotect' },
						{ label: 'InstantRestock', slug: 'plugins/instantrestock' },
						{ label: 'LagFixer', slug: 'plugins/lagfixer' },
						{ label: 'NoChatReports', slug: 'plugins/nochatreports' },
						{ label: 'OnePlayerSleep', slug: 'plugins/oneplayersleep' },
						{ label: 'PetProtect', slug: 'plugins/petprotect' },
						{ label: 'ProtocolLib', slug: 'plugins/protocollib' },
						{ label: 'SkinsRestorer', slug: 'plugins/skinsrestorer' },
					],
				},
			],
		}),
	],
});
