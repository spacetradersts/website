const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'spacetraders.ts',
  tagline: 'TypeScript library for spacetraders',
  url: 'https://spacetraders.github.io',
  baseUrl: '/spacetraders.ts/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'spacetradersts',
  projectName: 'spacetraders.ts',
  themeConfig: {
    navbar: {
      title: 'spacetradersTS',
      logo: {
        alt: 'spacetradersTS',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Getting Started',
        },
        {
          href: 'https://github.com/OfficialSirH/spacetradersTS',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'discord.gg/XFMaTn6taf',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Official_SirH',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/spacetradersts/spacetraders.ts',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} spacetraders.ts. built by Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/OfficialSirH/spacetradersTS-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
