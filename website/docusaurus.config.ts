import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { join } from "node:path"
const config: Config = {
  title: 'SkyUtils',
  tagline: 'Documentation for utility package for SkyHelper Bot',
  url: 'https://utils.skyhelper.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SkyHelper', // Usually your GitHub org/user name.
  projectName: 'https://github.com/imnaiyar/utils', // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes:[],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-typedoc-api',
      {
        projectRoot: join(__dirname, "../"),
        packages: ['.'],
        typedocOptions: {
          entryPoints: ['../src/index.ts'],
          tsconfig: '../tsconfig.json',
        },
      },
    ],
  ],


  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SkyHelper Utils',
      logo: {
        alt: 'SkyHelper',
        src: 'https://skyhelper.xyz/assets/img/boticon.png',
      },
      items: [
        {
          to: "/api",
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/imnaiyar/utils',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/2rjCRKZsBb',
            },
            {
              label: 'SkyHelper',
              href: 'https://skyhelper.xyz',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/imnaiyar/utils',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} [SkyHelper](https://skyhelper.xyz)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
