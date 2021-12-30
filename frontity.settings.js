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
          menu:{
            customers:[
              ["SuccessStories", "  /successstories/"],
              ["BusinessProduct", "/businessProduct"],
            ],
            community:[
              ["Blogs", "/blogs/"],
              ["webinars", "/webinars/"],
              ["Providers", "/providers"],
              ["Support Learning", "/supportlearning"],
            ],
            company:[
              ["Ourmission", "/ourmission"],
              ["Press&awards", "/pressawards/"],
            ],
            login:[ 
              ["Login", "/currikiforum/"],
            ],
            donate:[ 
              ["Ourmission", "/ourmission"],
            ],
            currikiterms:[ 
              ["Privacy Policy", "/privacypolicy"],
              ["Terms of Services", "/termscondition"],
              ["Curriki Architecture", "/architecture/"],
            ],
            products: [
            ["DatabaseSchema", "/databaseSchemas"],
            ["currikiPlatform", "/deployingthecurrikiplatfrom"],
           
            ["InterativeLearning", "/learning/"],
            ["GeneralDiscussion", "/generaldiscussion/"],
            ["SuccessStory", "/successdetail/"],
            ["Blogdetail", "/blogdetail/"],
            ["Thankyou", "/thankyou/"],
            ["Press&detail", "/pressdetail/"],
            // ["404page", "/error/"],
            ["NewUI", "/newui/"],
            ["howtoContribute", "/contribution/"],
          ]
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
          url: "https://developer-wp.curriki.org/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
