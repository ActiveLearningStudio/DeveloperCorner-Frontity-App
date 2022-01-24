const settings = {
  name: "curriki-developer-corner-frontity-app",
  state: {
    frontity: {
      url: "https://developer-wp.curriki.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: {
            customers: [
              ["SuccessStories", "  /category/successstories/"],
              ["BusinessProduct", "/category/businessProduct/"],
            ],
            community: [
              ["Blogs", "/category/blogs/"],
              ["webinars", "/category/webinars/"],
              ["Providers", "/category/providers"],
              ["Support Learning", "/category/supportlearning"],
            ],
            company: [
              ["Ourmission", "/ourmission"],
              ["Press&awards", "/category/pressawards/"],
            ],
            login: [["Login", "/currikiforum/"]],
            donate: [["Ourmission", "/ourmission"]],
            currikiterms: [
              ["Privacy Policy", "/category/privacy-policy/"],
              ["Terms of Services", "/category/termscondition"],
              ["Curriki Architecture", "/category/architecture/"],
            ],
            products: [
              ["DatabaseSchema", "/category/database-schema/"],
              ["currikiPlatform", "/category/deployingthecurrikiplatfrom/"],
              ["GeneralDiscussion", "/generaldiscussion/"],
              ["Interactive Learning", "/category/interactive-learning/"],
              ["howtoContribute", "/category/contribution/"],
            ],
          },

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
          url: "https://developer-wp.curriki.org",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
