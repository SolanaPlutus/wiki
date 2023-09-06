const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {

  title: 'Solana Plutus',
  tagline: 'Decoding the Solana Blockchain',
  url: 'https://solanaplutus.wiki',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://solp.cloud/solanaplutus.com/assets/favicons/favicon.ico',
  organizationName: 'SolanaPlutus', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SolanaPlutus/wiki/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-1F34ML5XWF',
        },
      }),
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Solana Plutus Wiki',
        logo: {
          alt: 'Solana Plutus Logo',
          src: 'https://solp.cloud/docs/assets/img/logo-head-dark.svg', 
          srcDark: 'https://solp.cloud/docs/assets/img/logo-head-light.svg', 
        },
        items: [

          {to: '/docs/overview', label: 'Overview', position: 'left'},
          {to: '/docs/ecosystem', label: 'Ecosystem', position: 'left'},
          {to: '/docs/developers', label: 'Developers', position: 'left'},
          {to: '/docs/tokenomics', label: 'Tokenomics', position: 'left'},

          {
            href: "https://medium.com/@SolanaPlutus",
            // label: "Medium",
            className: "header-link-icon header-medium-link",
            "aria-label": "Plutus Medium",
            position: "right",
          },
          {
            href: "https://solanaplutus.com/discord",
            // label: "Discord",
            className: "header-link-icon header-discord-link",
            "aria-label": "Plutus Discord",
            position: "right",
          },
          {
            href: "https://x.com/SolanaPlutus",
            // label: "X",
            className: "header-link-icon header-x-link",
            "aria-label": "Plutus X",
            position: "right",
          },
          {
            href: "https://t.me/SolanaPlutus",
            // label: "Telegram",
            className: "header-link-icon header-tg-link",
            "aria-label": "Plutus Telegram",
            position: "right",
          },
          {
            href: "https://github.com/SolanaPlutus",
            // label: "GitHub",
            className: "header-link-icon header-github-link",
            "aria-label": "GitHub repository",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
               
              {to: '/docs/overview', label: 'Overview', },
              {to: '/docs/ecosystem', label: 'Ecosystem',},
              {to: '/docs/developers', label: 'Developers',},
              {to: '/docs/tokenomics', label: 'Tokenomics',},
              
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Medium',
                href: 'https://medium.com/@SolanaPlutus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/SolanaPlutus',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/SolanaPlutus',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Solana Plutus website',
                href: 'https://solanaplutus.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SolanaPlutus',
              },
            ],
          },
        ],
        copyright: `Copyright &copy; ${new Date().getFullYear()} Solana Plutus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),



});
