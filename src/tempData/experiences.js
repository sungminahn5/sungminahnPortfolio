export const TechStack = {
  REACT: 'REACT',
  BOOTSTRAP: 'BOOTSTRAP',
  JS: 'JS',
  JQUERY: 'JQUERY',
  NODE: 'NODE',
  CSHARP: 'CSHARP',
  MYSQL: 'MYSQL',
  PHP: 'PHP',
  RELAY: 'RELAY',
  GRAPHQL: 'GRAPHQL',
}

export const timelineElememnts = [
  {
    //Meta
    id: 5,
    title: 'Software Engineer',
    company: 'Meta (aka Facebook)',
    location: 'Palo Alto, CA (Remote)',
    description: 'Developing critical features within internal tools (Onboarding, Talent Development Review, etc.)',
    date: "Jun 2022 - Present",
    category: 'WORK',
    techStack: [TechStack.REACT, TechStack.JS, TechStack.PHP, TechStack.RELAY, TechStack.GRAPHQL],
  },
  {
    //LinQuest
    id: 4,
    title: 'Staff Software Engineer with Secret Clearance',
    company: 'LinQuest',
    location: 'El Segundo, CA',
    description: 'Managing and Building Features to Support Data Accession Lists (DALs) and Contract Data Requirement Lists (CDRLs)',
    date: "Jun 2019 - May 2022",
    category: 'WORK',
    techStack: [TechStack.JS, TechStack.JQUERY, TechStack.CSHARP],
  },
  {
    //True Nutrition
    id: 3,
    title: 'Full-Stack Developer (Freelance)',
    company: 'True Nutrition',
    location: 'Long Beach, CA',
    description: 'Building Features to Manage Company Products',
    date: "Jul 2019 - Sep 2019",
    category: 'WORK',
    techStack: [TechStack.PHP, TechStack.BOOTSTRAP, TechStack.MYSQL, TechStack.BOOTSTRAP],
  },
  {
    //Military
    id: 2,
    title: 'Wheeled Vehicle Mechanic',
    company: 'U.S. Army Reserve',
    location: 'Bell, CA',
    description: '',
    date: "Jan 2015 - Jan 2021",
    category: 'WORK',
    techStack: [],
  },
  {
    //UCLA
    id: 1,
    title: 'B.S. in Computer Science',
    company: 'UCLA',
    location: 'Los Angeles, CA',
    description: 'University of California, Los Angeles',
    date: "Aug 2017 - Dec 2019",
    category: 'SCHOOL',
    techStack: [],
  }
];