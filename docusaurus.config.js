// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Craig Perry's Notebook",
  tagline: 'My notes, published online so i can (usually) always access them!',
  url: 'https://www.craigjperry.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'craigjperry2',
  projectName: 'craigjperry2.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Craig Perry's Notebook",
        logo: {
          alt: 'My Site Logo',
          src: 'img/android-chrome-512x512.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
          href: 'https://github.com/craigjperry2',
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
                label: 'Notebook',
                to: '/',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/1593633/craigjperry',
              },
              {
                label: 'Github',
                href: 'https://www.github.com/craigjperry2',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/craigjperry2',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Craig Perry. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/craigjperry2/craigjperry2.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/craigjperry2/craigjperry2.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;
