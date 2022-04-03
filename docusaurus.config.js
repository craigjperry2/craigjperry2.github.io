/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
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
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    navbar: {
      title: "Craig Perry's Notebook",
      logo: {
        alt: 'My Site Logo',
        src: 'img/android-chrome-512x512.png',
      },
      items: [
        {
          href: 'https://github.com/craigjperry2',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Craig Perry. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github')
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
	  routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/craigjperry2/craigjperry2.github.io/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
