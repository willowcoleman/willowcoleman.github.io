// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-awarded-mindlin-prize-for-innovative-ideas-in-science-at-harvey-mudd-college-microscope",
          title: 'Awarded Mindlin Prize for Innovative Ideas in Science at Harvey Mudd College :microscope:...',
          description: "",
          section: "News",},{id: "news-received-nsf-grfp-honorable-mention-pencil2",
          title: 'Received NSF GRFP Honorable Mention :pencil2:',
          description: "",
          section: "News",},{id: "news-completed-a-year-long-certificate-in-urban-humanities-at-ucla-through-citylab-ucla-city-sunset",
          title: 'Completed a year-long certificate in Urban Humanities at UCLA through CityLab-UCLA :city_sunset:',
          description: "",
          section: "News",},{id: "news-started-phd-in-geography-at-ucla-in-the-okin-lab",
          title: 'Started PhD in Geography at UCLA in the Okin Lab!',
          description: "",
          section: "News",},{id: "news-selected-for-2025-26-ucla-graduate-research-mentorship-fellowship-pencil2",
          title: 'Selected for 2025-26 UCLA Graduate Research Mentorship Fellowship :pencil2:',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%77%63%6F%6C%65%6D%61%6E@%67.%75%63%6C%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/red-willow-coleman", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-6582-4922", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=FNhFOjUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
