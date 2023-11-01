// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DOCOCK',
  tagline: 'I LOVE COCK',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://l4dsr.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/l4dsr-wiki',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'l4dsr', // Usually your GitHub org/user name.
  projectName: 'l4dsr-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    discordUrl: 'https://discord.gg/JhndxqQEwg',
    githubUrl: 'https://github.com/l4dsr/l4dsr-wiki',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/l4dsr/l4dsr-wiki/tree/master/packages/create-docusaurus/templates/shared/',

          admonitions: {
              keywords: ['note', 'tip', 'info', 'caution', 'danger', 'diffe', 'diffm', 'diffh'],
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'docSidebar',
            sidebarId: 'rulesSidebar',
            position: 'left',
            label: 'Rules'
          },
          {
            href: 'https://github.com/l4dsr/l4dsr-wiki',
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
                label: 'Start here',
                to: '/docs/category/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Left 4 Dead 2 Leaderboards',
                href: 'https://speedrun.com/l4d2',
              },
              {
                label: 'Left 4 Dead Leaderboards',
                href: 'https://speedrun.com/l4d',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/JhndxqQEwg',
              },
              {
                label: 'Twitch',
                href: 'https://twitch.tv/l4druns',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/l4dsr/l4dsr-wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
