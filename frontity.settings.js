const settings = {
  name: "curriki-developer-corner-frontity-app",
  state: {
    frontity: {
      url: "https://developer-wp.curriki.org/",
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
            ["Currikiarchitecture", "/architecture/"],
            ["DatabaseSchema", "/databaseSchemas"],
            ["currikiPlatform", "/deployingthecurrikiplatfrom"],
            ["BusinessProduct", "/businessProduct"],
            ["Providers", "/providers"],
            ["Ourmission", "/ourmission"],
            ["SupportLearning", "/supportlearning"],
            ["PrivacyPolicy", "/privacypolicy"],
            ["TermsCondition", "/termscondition"],
            ["SuccessStories", "  /successstories/"],
            ["InterativeLearning", "/learning/"],
            ["GeneralDiscussion", "/generaldiscussion/"],
            ["successdetail", "/successdetail/"],
            ["Blogs", "/blogs/"],
            ["Blogdetail", "/blogdetail/"],
            ["Thankyou", "/thankyou/"],
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
          url: "https://developer-wp.curriki.org/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
