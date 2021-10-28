const settings = {
  name: "curriki-developer-corner-frontity-app",
  state: {
    frontity: {
      url: "https://www.openlearnx.org/",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["CurrikiArchitecture", "/currikiArchitecture"],
            ["DatabaseSchema", "/databaseSchema"],
            ["currikiforum", "/currikiforum"],
            ["generaldiscussion", "/generaldiscussion"],
            ["currikiPlatform", "/CurrikiPLatform"],
            ["BusinessProduct", "/businessProduct"],
            ["Providers", "/providers"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://www.openlearnx.org/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
