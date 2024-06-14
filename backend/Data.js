import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Amirul',
      email: 'amirul@gmail.com',
      password: bcrypt.hashSync('123'),
      isAdmin: true,
    },
    {
      name: 'James',
      email: 'james@gmail.com',
      password: bcrypt.hashSync('123'),
      isAdmin: false,
    },
    {
      name: 'Rex',
      email: 'rex@gmail.com',
      password: bcrypt.hashSync('123'),
    },
  ],
  contents: [
    {
      name: 'Learndjango',
      slug: 'learndjango-16856c7a28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_L.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Django',
          value: 'django',
        },
        {
          label: 'Flask',
          value: 'flask',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Description: free tutorials and premium courses on building, testing, and deploying real-world web applications. Read now django hello, world how to build a simple hello, world application using. Models, views, urls, and templates. Read now flask vs django (2024) a comparison of the two leading python-based web frameworks. Click here for all the latest python tutorials from the u. S. ',
      url: 'https://learndjango.com',
      letterLength: 387,
      wordLength: 60,
    },
    {
      name: 'Udacity',
      slug: 'udacity-184be35428af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_U.png',
      category: [
        {
          label: 'Artificial Intelligence',
          value: 'artificial-intelligence',
        },
        {
          label: 'Data Science',
          value: 'data-science',
        },
      ],
      techStack: [
        {
          label: 'Node.js',
          value: 'node.js',
        },
      ],
      type: [
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        "Learn online and advance your career with courses in programming, data science, artificial intelligence, digital marketing, and more. Join today! || body: cancel cancel for free every course has real-world projects designed to develop the skills you need to reach your career goals. Personalized every project receives personalized from industry experts, and our mentors are available to answer questions whenever you're feeling stuck. Learners love udacity ed me gain on-the-job confidence, build a portfolio, and earn",
      url: 'https://www.udacity.com/',
      letterLength: 519,
      wordLength: 76,
    },
    {
      name: 'Pluralsight',
      slug: 'pluralsight-1a2d1bb628af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_P.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
      ],
      type: [
        {
          label: 'MOOC',
          value: 'mooc',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Pluralsight empowers you to master ai onboard quicker deliver faster upgrade your skills build tech fluency upskill teams collaborate better stream processes innovate smarter. If you’re an individual looking to learn python to advance your career or an enterprise team looking to cut cycle times, speed up onboarding, or give your teams the skills to realize your strategies, we remove the challenges and roadblocks slowing you down. We’re advancing the world’s tech workforce, and that starts with making your work more efficient and effective',
      url: 'https://www.pluralsight.com',
      letterLength: 544,
      wordLength: 84,
    },
    {
      name: 'Freecodecamp',
      slug: 'freecodecamp-1c1801a228af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_F.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Title: n/a || description: n/a || body: next: 'n/a' || 'body:n/an' | | 'boy:n. A. |' body - 'n/a' |. 'i'm not a big fan of a tv show,' he says. \"i don't want to be a fan of it'",
      url: 'https://www.freecodecamp.org/',
      letterLength: 176,
      wordLength: 40,
    },
    {
      name: 'Upskillcourses',
      slug: 'upskillcourses-1d9d0d6a28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_U.png',
      category: [
        {
          label: 'Sql',
          value: 'sql',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Ruby',
          value: 'ruby',
        },
        {
          label: 'Php',
          value: 'php',
        },
        {
          label: 'Rails',
          value: 'rails',
        },
        {
          label: 'React.js',
          value: 'react.js',
        },
        {
          label: 'Vue.js',
          value: 'vue.js',
        },
        {
          label: 'Node.js',
          value: 'node.js',
        },
        {
          label: 'Backbone.js',
          value: 'backbone.js',
        },
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Premium programming courses upskill is a high-quality tech training platform. Learn basic and state-of-the-art programming skills using modern technologies. New content added regularly we're constantly adding courses on topics like javascript, html5 & css3, php & mysql, node. Js, react, vue, backbone, ruby on rails and more. Over 130,000 students in 150 countries  our courses. Our students get jobs and start companies. ",
      url: 'https://upskillcourses.com',
      letterLength: 423,
      wordLength: 62,
    },
    {
      name: 'Fullstackopen',
      slug: 'fullstackopen-1f958d1828af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_F.png',
      category: [
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'FullStack Development',
          value: 'fullstack-development',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Typescript',
          value: 'typescript',
        },
        {
          label: 'Mongodb',
          value: 'mongodb',
        },
        {
          label: 'Graphql',
          value: 'graphql',
        },
        {
          label: 'Redux',
          value: 'redux',
        },
        {
          label: 'React.js',
          value: 'react.js',
        },
        {
          label: 'Node.js',
          value: 'node.js',
        },
      ],
      type: [
        {
          label: 'MOOC',
          value: 'mooc',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'The course will introduce you to modern javascript-based modern web development. The main focus is on building single page applications with reactjs that use rest apis built with node. Js. You can discuss the course and related topics in our dedicated group on https://study. Cs. Helsinki. Fi//fullstack and on: https://www. T. Me/fullaxtackcourse. ',
      url: 'https://fullstackopen.com/en/',
      letterLength: 349,
      wordLength: 52,
    },
    {
      name: 'Theodinproject',
      slug: 'theodinproject-214a900428af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_T.png',
      category: [
        {
          label: 'Databases',
          value: 'databases',
        },
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'FullStack Development',
          value: 'fullstack-development',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Ruby',
          value: 'ruby',
        },
        {
          label: 'Rails',
          value: 'rails',
        },
        {
          label: 'React.js',
          value: 'react.js',
        },
        {
          label: 'Node.js',
          value: 'node.js',
        },
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        "The odin project empowers aspiring web developers to learn together for free || body: close odin your career in web development starts here our full stack curriculum is free and ed by a passionate open source community. Learn from a curriculum with the best curated on tutorials, s, and courses. Build build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites. Connect you're not alone. Learn everything you need to know intermediate html and css advanced",
      url: 'https://www.theodinproject.com',
      letterLength: 513,
      wordLength: 83,
    },
    {
      name: 'Khanacademy',
      slug: 'khanacademy-23354d1428af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_K.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
      ],
      type: [
        {
          label: 'MOOC',
          value: 'mooc',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        "Khan academy is a nonprofit with the mission of providing a free, world-class education for anyone, anywhere. If you're seeing this message, it means we're having trouble loading external resources on our website. To and use all the features of khan academy, please enable javascript in your browser. Khan academy's library of trusted practice and lessons covers math, science, and more. Always free for learners and teachers. Teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every",
      url: 'https://www.khanacademy.org',
      letterLength: 535,
      wordLength: 83,
    },
    {
      name: 'Talkpython',
      slug: 'talkpython-251e6e4428af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_T.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Fastapi',
          value: 'fastapi',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
      ],
      cost: 'Paid',
      hasCert: false,
      description:
        'The talk python to me podcast features the best online python courses and tutorials. The talk python to me podcast is based on a trusted source. A professional trainer with over 10 years of experience has written and presented the courses. You can learn what you need exactly when you need it. Learn on learn on-demand through high quality training videos and additional resources are available 24/7 so you can rest assured that the courses you put time into become permanent resources for your career. ',
      url: 'https://training.talkpython.fm',
      letterLength: 503,
      wordLength: 85,
    },
    {
      name: 'Codecademy',
      slug: 'codecademy-26d8639828af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Python',
          value: 'python',
        },
      ],
      type: [
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Codecademy || description: learn the technical skills to get the job you want. Join over 50 million people choosing codecademy to start a new career. || body: grid regular grid regular the generation of learning build skills quicker with ai assistance gain experience with modern developer tools build skills faster with ai help build your tech career get personalized job listings and practice interview questions assess your job-readiness with ai get customized job listings. ',
      url: 'https://www.codecademy.com/',
      letterLength: 478,
      wordLength: 74,
    },
    {
      name: 'Mit',
      slug: 'mit-28aaecfe28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_M.png',
      category: [
        {
          label: 'Machine Learning',
          value: 'machine-learning',
        },
        {
          label: 'Operating Systems',
          value: 'operating-systems',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'The missing semester of your cs education classes teach you all about advanced topics within cs, from operating systems to machine learning. Students spend hundreds of hours using these tools over the course of their education (and thousands over their career), so it makes sense to make the experience as fluid and frictionless as possible. Mastering these tools enables you to spend less time on figuring out how to bend your tools to your will, but also lets you solve problems that would ly seem impossibly complex. ',
      url: 'https://missing.csail.mit.edu',
      letterLength: 520,
      wordLength: 87,
    },
    {
      name: 'Frontendmasters',
      slug: 'frontendmasters-2a791d3a28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_F.png',
      category: [
        {
          label: 'Software Engineering',
          value: 'software-engineering',
        },
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'FullStack Development',
          value: 'fullstack-development',
        },
        {
          label: 'Frontend Development',
          value: 'frontend-development',
        },
        {
          label: 'Backend Development',
          value: 'backend-development',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Go',
          value: 'go',
        },
        {
          label: 'Typescript',
          value: 'typescript',
        },
        {
          label: 'React.js',
          value: 'react.js',
        },
        {
          label: 'Vue.js',
          value: 'vue.js',
        },
        {
          label: 'Node.js',
          value: 'node.js',
        },
      ],
      type: [
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Frontend masters offers over 200 courses in javascript, react, and typescript to node. Js, fullstack, and backend. Browse our courses view learning paths learn practical tech skills from experts you can trust. Our curriculum is continually refreshed to align with the most recent advancements, guaranteeing that our learners are equipped with industry-standard best practices and cutting-edge techniques. The casual tone of the course is great because it's a great way to improve your web development and software engineering skills",
      url: 'https://frontendmasters.com/',
      letterLength: 532,
      wordLength: 79,
    },
    {
      name: 'Learnpythonthehardway',
      slug: 'learnpythonthehardway-2c86b9ca28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_L.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Learn code the hard way || description: n/a || body: programming education for pre-beginners learn code the hard way courses are the most effective system for learning the basics of computer programming. The courses have ed millions of people from all over the world, from all different age groups and skill levels. Thanks so much for putting your book on, it has served as a tremendous resource on learning python and just wanted to say i really appreciate it. ',
      url: 'https://learncodethehardway.org/',
      letterLength: 462,
      wordLength: 79,
    },
    {
      name: 'Coursera',
      slug: 'coursera-2e64ce7628af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Cybersecurity',
          value: 'cybersecurity',
        },
        {
          label: 'UX Design',
          value: 'ux-design',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
        {
          label: 'MOOC',
          value: 'mooc',
        },
      ],
      cost: 'Free',
      hasCert: true,
      description:
        'Get coursera plus for just $20 per month, billed annually. A new career in as little as 6 months roles data analyst project manager digital marketer it specialist bookkeeper cybersecurity front-end developer ux designer data analyst collect, organize, and transform data to make informed decisions. "for anyone starting out as a data analyst, this is a great introduction and is very inspiring," he said. The content was well paced and accessible to people just starting out. ',
      url: 'https://www.coursera.org',
      letterLength: 476,
      wordLength: 76,
    },
    {
      name: 'Scrimba',
      slug: 'scrimba-305cc37828af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_S.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Title: home || description: n/a || body: n/a || blunder: bbc: cnn. Com: i'm a saxophone sxsy. I don't know if it's the sex of the world, i think it'll be a good thing if you're not a big fan of the u. S. ",
      url: 'https://v2.scrimba.com/',
      letterLength: 204,
      wordLength: 44,
    },
    {
      name: 'Pythonprogramming',
      slug: 'pythonprogramming-31d7e19228af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_P.png',
      category: [
        {
          label: 'Machine Learning',
          value: 'machine-learning',
        },
        {
          label: 'Robotics',
          value: 'robotics',
        },
        {
          label: 'Data Analysis',
          value: 'data-analysis',
        },
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'Game Development',
          value: 'game-development',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Go',
          value: 'go',
        },
        {
          label: 'Django',
          value: 'django',
        },
        {
          label: 'Flask',
          value: 'flask',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Python programming tutorials from beginner to advanced on a massive variety of topics. All video and text tutorials are free. View data analysis learn how to use python with pandas, matplotlib, and other modules to gather insights from and about your data. View quantum computer programming learn the basics and concepts of working with quantum computers and qubits through practical applications and the qiskit package. View bots & ai creating various software bots, like bots in games, in chats, and to interact',
      url: 'https://pythonprogramming.net',
      letterLength: 513,
      wordLength: 82,
    },
    {
      name: 'Frontendmentor',
      slug: 'frontendmentor-33bd4d1c28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_F.png',
      category: [
        {
          label: 'Frontend Development',
          value: 'frontend-development',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'R',
          value: 'r',
        },
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Github 839,585 developers building projects, reviewing code, and ing each other improve. Frontend mentor is a win-win. You can sharpen your skills building websites and add finished projects to your portfolio to land a job. The real learning happens when you start solving real-world problems yourself. If you have a real-life workflow, you can build a portfolio-worthy project. Click here to learn more about our hiring platform learning paths. ',
      url: 'https://www.frontendmentor.io',
      letterLength: 446,
      wordLength: 69,
    },
    {
      name: 'Phptherightway',
      slug: 'phptherightway-35b1b6c628af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_P.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Php',
          value: 'php',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Php: the right way is an easy-to-read, quick reference for php best practices, accepted coding standards, and what the contributors consider to be best practices at present. There’s a lot of outdated information on the web that leads new php users astray, propagating bad practices and insecure code. This website aims to introduce new php developers to some topics which they may not discover until it is too late. It will also not tell you which tools to use, but instead offer suggestions for multiple options,',
      url: 'https://phptherightway.com/',
      letterLength: 513,
      wordLength: 86,
    },
    {
      name: 'Sololearn',
      slug: 'sololearn-378ae69828af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_S.png',
      category: [
        {
          label: 'Sql',
          value: 'sql',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Java',
          value: 'java',
        },
        {
          label: 'C++',
          value: 'cpp',
        },
        {
          label: 'C#',
          value: 'c-sharp',
        },
        {
          label: 'Go',
          value: 'go',
        },
        {
          label: 'Sql',
          value: 'sql',
        },
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
      ],
      cost: 'Free',
      hasCert: true,
      description:
        "Learn to code with interactive, hands-on courses. It’s free. With google or options choose a course for you енеративн  на рактике араотик python снов рораммирование. You'll be writing real, functional code within minutes of starting your first course. Start learning bite-sized go step-by-step through our unique courses. ",
      url: 'https://www.sololearn.com/en/',
      letterLength: 322,
      wordLength: 47,
    },
    {
      name: 'Edx',
      slug: 'edx-39b41b8828af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_E.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Learn your query your query develop ai, data, and tech skills. Get up to 30% off select programs until june 19. Edx courses and programs provide a space to learn new knowledge and skills in a variety of ways, from engaging video lectures and dynamic graphics to data visualizations and interactive elements. Learn from 260+ leading institutions audiences upskill at scale transform your organization with comprehensive upskilling solutions. Discover enterprise solutions the movement empower learners and teams around the world by creating',
      url: 'https://www.edx.org',
      letterLength: 539,
      wordLength: 82,
    },
    {
      name: 'Learnxinyminutes',
      slug: 'learnxinyminutes-3b96858028af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_L.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'C++',
          value: 'cpp',
        },
        {
          label: 'C#',
          value: 'c-sharp',
        },
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Cs-cz de-de es-es fr-fr pt-br ru-ru tr-tr zh-cn coffeescript clojure macros. Cdc de-de hu-hu id-id it-it ja-jp ko-kr lt-lt ms-my nl-nl no-nb pl-pl p',
      url: 'https://learnxinyminutes.com',
      letterLength: 148,
      wordLength: 24,
    },
    {
      name: 'Harvard',
      slug: 'harvard-3e49fa1e28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_H.png',
      category: [
        {
          label: 'Data Science',
          value: 'data-science',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free',
      hasCert: true,
      description:
        'Free online literature classes to in-person business courses for executives. Earn certificates for professional development, receive college degree credit, or take a class just for fun! advance your career. Pursue your passion. Keep learning. || body: professional and lifelong learning in-person, blended, and on courses all courses on courses free courses featured health & medicine the opportunities and difficulties facing widespread adoption of digital technologies in health care. Price $1,600 duration 4 weeks long registration dead register by jul 29 business on',
      url: 'https://pll.harvard.edu/',
      letterLength: 570,
      wordLength: 82,
    },
    {
      name: 'Projectlearn',
      slug: 'projectlearn-4039abbc28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_P.png',
      category: [
        {
          label: 'Artificial Intelligence',
          value: 'artificial-intelligence',
        },
        {
          label: 'Machine Learning',
          value: 'machine-learning',
        },
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'Mobile Development',
          value: 'mobile-development',
        },
        {
          label: 'Game Development',
          value: 'game-development',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'C#',
          value: 'c-sharp',
        },
        {
          label: 'Flutter',
          value: 'flutter',
        },
        {
          label: 'React.js',
          value: 'react.js',
        },
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Learn to code by creating projects || description: a project-based learning approach in web development, mobile development, game development, machine learning and artificial intelligence. Build web applications using html, css, javascript, react and more. Game development build awesome video games. C#, pygame, opengl, unity and more. Getnotified about new updates! 2023 projectlearn about contribution guides - 2023 projectlearn about contributions guides. ',
      url: 'https://projectlearn.io',
      letterLength: 460,
      wordLength: 61,
    },
    {
      name: 'Codewithmosh',
      slug: 'codewithmosh-41e2935c28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'React.js',
          value: 'react.js',
        },
        {
          label: 'Node.js',
          value: 'node.js',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        "Code with mosh || description: become the software engineer that companies love to hire all the coding courses you need to excel in one place. We'll work to level up your skills, increase your earning potential, and build a brighter future. 10m+ students taught 3m+ fans 20+ years of experience 51 coding courses features why code with mosh? fast-track your learning no fluff, just the good stuff!",
      url: 'https://codewithmosh.com',
      letterLength: 397,
      wordLength: 67,
    },
    {
      name: 'Engineer4free',
      slug: 'engineer4free-43b40b7028af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_E.png',
      category: [
        {
          label: 'Project Management',
          value: 'project-management',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        "Engineer4free is a free tutorial site where anyone can learn university level engineering for free. If you're cramming at 3am, reviewing for the fe exam, or just life-long-learning, you've come to the right place. I struggled with titrations for such a long time, and i finally get it! i got the same kind of question in my examination and i nailed it. Explained the ideas behind it well, rather than just throwing numbers and formulas",
      url: 'https://www.engineer4free.com/',
      letterLength: 435,
      wordLength: 75,
    },
    {
      name: 'Ui.Dev',
      slug: 'ui.dev-459adb4e28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_U.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Typescript',
          value: 'typescript',
        },
        {
          label: 'React.js',
          value: 'react.js',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Ui. Dev's advanced javascript course prepares for interviews and landed a job at netflix. We help javascript developers make more money - and enjoy themselves in the process. You'll be in great company with other developers we’ve trained. Click here for more tutorials on the javascript ecosystem. Read our tutorials and learn how to use the u. Dev app. Share your experience with us on cnn. Com. ",
      url: 'https://ui.dev',
      letterLength: 397,
      wordLength: 67,
    },
    {
      name: 'Goalkicker',
      slug: 'goalkicker-47658a2828af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_G.png',
      category: [
        {
          label: 'Sql',
          value: 'sql',
        },
        {
          label: 'Ios Development',
          value: 'ios-development',
        },
        {
          label: 'Android Development',
          value: 'android-development',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Java',
          value: 'java',
        },
        {
          label: 'C++',
          value: 'cpp',
        },
        {
          label: 'C#',
          value: 'c-sharp',
        },
        {
          label: 'Php',
          value: 'php',
        },
        {
          label: 'Haskell',
          value: 'haskell',
        },
        {
          label: 'Sql',
          value: 'sql',
        },
        {
          label: 'Node.js',
          value: 'node.js',
        },
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        "Free programming books on android development, c, c#, css, html5, ios development, java, javascript, powershell, php, python, sql sever and more || body: programming notes for professionals books order a coffee!. Net framework notes for professionals book algorithms notes for professionals book android® notes of professionals book angular 2 notes for pros. For professional's book bash notes for. Professionals book c++ notes for pros",
      url: 'https://goalkicker.com/',
      letterLength: 436,
      wordLength: 64,
    },
    {
      name: 'Dribbble',
      slug: 'dribbble-49643ad628af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_D.png',
      category: [
        {
          label: 'UI Design',
          value: 'ui-design',
        },
        {
          label: 'UX Design',
          value: 'ux-design',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Description: find the world's top designers & creative professionals on dribbble. We are where designers gain inspiration, feedback, community, and jobs. The world’s destination for design get inspired by the work of millions of top-rated designers & agencies around the world. Lilla bardenova brand + illustrator brand illustration web victa wille digital designer mobile ui web andrea jeli digital designer brand ui web dan mall design educator product ux helen tran lead",
      url: 'https://dribbble.com',
      letterLength: 473,
      wordLength: 72,
    },
    {
      name: 'Runestone',
      slug: 'runestone-4b628cc028af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_R.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Runestone academy offers free on textbooks for math and computer science. A wide range of free online textbooks are available for download. The free textbooks are designed to help you master these subjects. Our textbooks provide comprehensive and interactive resources to your students. Click here to learn more about our free on books for math & computer science and. Download our free online textbooks. For more information, visit www. Runestone. Org. ',
      url: 'https://landing.runestone.academy',
      letterLength: 454,
      wordLength: 71,
    },
    {
      name: 'Codeschool',
      slug: 'codeschool-4d22b9e028af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'R',
          value: 'r',
        },
      ],
      type: [
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Your code school experience has been automatically moved to the pluralsight platform. If you are an individual code school r, please. @pluralsight. Com to access your account. Start a 10-day free trial start a team trial skill assessments validate your skills and uncover knowledge gaps in today’s in-demand technologies. || body: s 1298 redirect link thank you! our team will be in touch shortly. Loading form. . . If this message remains, it may be',
      url: 'https://www.pluralsight.com/codeschool',
      letterLength: 450,
      wordLength: 75,
    },
    {
      name: 'Mooc',
      slug: 'mooc-4f2930fc28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_M.png',
      category: [
        {
          label: 'Artificial Intelligence',
          value: 'artificial-intelligence',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'MOOC',
          value: 'mooc',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        "Moocs (massive open on course) are all open and fully available on. You can have your own courses, with point lists and schedules tailored for you. Some of our courses can be used for your classes for free with some customization for your needs, for example by setting your own deads. For teachers popular courses show all courses study modules show all modules. If you're a beginner, you'll be able to learn the basics from the introduction to programming course. ",
      url: 'https://www.mooc.fi/en/',
      letterLength: 465,
      wordLength: 80,
    },
    {
      name: 'Upgrad',
      slug: 'upgrad-51076cb828af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_U.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Online programs and courses by top global universities. Learn from anywhere in the world and shape your future. U. S. -based universities offer a wide range of courses and programs. Online courses are offered by universities across the globe. Click here to learn more about the online courses and courses offered by the top universities in the united states. In the uk, click here for more education - if you're a professional, you'll be able to get started. ",
      url: 'https://www.upgrad.com/my/',
      letterLength: 459,
      wordLength: 78,
    },
    {
      name: 'Composingprograms',
      slug: 'composingprograms-52c2cfb628af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
      ],
      type: [
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'A free introduction to programming and computer science. This text focuses on methods for abstraction, programming paradigms, and techniques for managing the complexity of large programs. In addition to reading the chapters below, you can apply your knowledge to the programming projects that accompany the text and visualize program execution using the on python tutor. Instructors: if you are interested in adapting any of these materials for your courses, please fill out this short survey so that we can your efforts. ',
      url: 'https://www.composingprograms.com/',
      letterLength: 522,
      wordLength: 81,
    },
    {
      name: 'Learncpp',
      slug: 'learncpp-548bb8e428af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_L.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'C++',
          value: 'cpp',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Learncpp. Com is a free website devoted to teaching you how to program in modern c++. The lessons on this site will walk you through all the steps needed to write, compile, and debug your c++ programs. No prior programming experience is necessary, but programmers of all levels will benefit from our best practices, tips, and insights. A few common c++ problems 0. 9 configuring your compiler: build configurations 0. 10 configuring a compiler: compiler extensions 0. 11 configuring the compiler',
      url: 'https://www.learncpp.com',
      letterLength: 495,
      wordLength: 81,
    },
    {
      name: 'Exercism',
      slug: 'exercism-566ea60828af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_E.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Java',
          value: 'java',
        },
        {
          label: 'C++',
          value: 'cpp',
        },
        {
          label: 'C#',
          value: 'c-sharp',
        },
        {
          label: 'Ruby',
          value: 'ruby',
        },
        {
          label: 'Php',
          value: 'php',
        },
        {
          label: 'Go',
          value: 'go',
        },
        {
          label: 'Typescript',
          value: 'typescript',
        },
        {
          label: 'Rust',
          value: 'rust',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'For free languages is an independent, community funded, not-for-profit organisation. Learn, practice and get world-class mentoring in over 50 languages. Get fluent in 70 programming languages. 100% free. || body: get really good at programming. Can you solve the zebra puzzle which of the residents drinks water? who owns the zebra? can you create a zoo puzzle? if you have a problem with the zebra?',
      url: 'https://exercism.org/',
      letterLength: 399,
      wordLength: 65,
    },
    {
      name: 'Learncs',
      slug: 'learncs-5838bbd628af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_L.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'C#',
          value: 'c-sharp',
        },
      ],
      type: [
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Learncs. Org is a free interactive c# tutorial for people who want to learn the c# programming language. The free interactive tutorial is intended for everyone who wants to learn c#, fast. Click on the chapter you wish to begin from, and follow the instructions. If you want to contribute tutorials, please click on contributing tutorials down below. Receive a 50% code by using the code: 2frhugwxf0 start now. ',
      url: 'https://www.learncs.org',
      letterLength: 411,
      wordLength: 69,
    },
    {
      name: 'Css-tricks',
      slug: 'css-tricks-59fbc42c28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Css-tricks - tips, tricks, and techniques on using cascading style sheets. The main idea of css container queries is to register an element as a “container” and apply styles to other elements when the container element meets certain conditions. Geoff graham on jul 20, 2021 typewriter animation that handles anything you throw at it animation javascript murtuzaali surti almanac on jun 5, 2024. ',
      url: 'https://css-tricks.com',
      letterLength: 395,
      wordLength: 63,
    },
    {
      name: 'LearnDigital',
      slug: 'learndigital-5bdebd2628af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_L.png',
      category: [
        {
          label: 'Artificial Intelligence',
          value: 'artificial-intelligence',
        },
        {
          label: 'Cloud Computing',
          value: 'cloud-computing',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'MOOC',
          value: 'mooc',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: true,
      description:
        '|| body: grow with google uses cookies to deliver and enhance the quality of its services and to analyze traffic. Cookies are also used to serve advertising and to personalize the content and s that you see. Grow my career grow my business filter by topic type certificate duration location filters filter by topic artificial intelligence cloud computing coding & development communication data & analytics design digital marketing digital wellbeing diversity expand internationally job on safety productivity sell on sustainability type on courses products & tools live events 1 to 1 mentoring guides articles',
      url: 'https://grow.google/intl/uk/courses-and-tools/',
      letterLength: 610,
      wordLength: 94,
    },
    {
      name: 'Codegym',
      slug: 'codegym-5db2dca428af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Java',
          value: 'java',
        },
      ],
      type: [
        {
          label: 'MOOC',
          value: 'mooc',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Codegym is an online course to learn java. For beginners and for experienced programmers. Contains a java tutorial and 1200 practice tasks. 4. 8 57 reviews 4. 9 63 reviews 4. 8 1,600+ reviews i’m on it. Let’s start i'm on the course – let’s begin about the course what is learning java with codegym be like? you upgrade your “player character” to new levels, open new quests, and get achievements. ",
      url: 'https://codegym.cc',
      letterLength: 398,
      wordLength: 71,
    },
    {
      name: 'Teamtreehouse',
      slug: 'teamtreehouse-5f87c1e828af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_T.png',
      category: [
        {
          label: 'Data Science',
          value: 'data-science',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'React.js',
          value: 'react.js',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Learn to code online | treehouse || description: sign up for expert-led video courses to start your journey into coding, programming, and design. Perfect for beginners, intermediate, and advanced learners. Get 25% off with coupon code treehouse25. Learn ai, data science, python, and more—all on your own time try it free for 7 days, then $25 a month email i want to hear from treehouse about products and services. ',
      url: 'https://teamtreehouse.com',
      letterLength: 416,
      wordLength: 69,
    },
    {
      name: 'Ionicacademy',
      slug: 'ionicacademy-613eb71228af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_I.png',
      category: [
        {
          label: 'Sql',
          value: 'sql',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Learn ionic fast with step-by-step video courses and join our private community today. Simon grimm now 60+ courses  18+ app templates  5000+ students  private  14 day money back guarantee turning web developers into ionic experts. Build on your existing skills and understand what it takes to build and release native mobile apps. Work with capacitor add native features like camera, push notifications or sqlite storage to any web app and integrate native plugins. ',
      url: 'https://ionicacademy.com/',
      letterLength: 466,
      wordLength: 73,
    },
    {
      name: 'Brilliant',
      slug: 'brilliant-63162c0a28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_B.png',
      category: [
        {
          label: 'Machine Learning',
          value: 'machine-learning',
        },
        {
          label: 'Data Analysis',
          value: 'data-analysis',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Brilliant makes it easy to level up fast with fun, bite-sized lessons. Effective, hands-on learning visual, interactive lessons make concepts feel intuitive — so even complex ideas just click. Designed for ages 13 to 113. Developed for a total of 50,000. 5-star reviews on ios app store and google play trustpilot over 10 million people learning on brilliant over 50,000 5-star. Reviews on. Mobile app store and google play trustpilot. ',
      url: 'https://brilliant.org/',
      letterLength: 436,
      wordLength: 70,
    },
    {
      name: 'Futurelearn',
      slug: 'futurelearn-64d10ec028af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_F.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'MOOC',
          value: 'mooc',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Futurelearn uses cookies to enhance your experience of the website. All but strictly necessary cookies are currently disabled for this browser. Progress your way 4. 58 average rating 184,696 learner reviews powered by make your 2024 count. Get unlimited and access 1400+ on courses from top universities. Leading experts from the likes of accenture, aws and deakin university will guide you to achieve them. From data analytics to digital marketing, start learning from the best. ',
      url: 'https://www.futurelearn.com',
      letterLength: 480,
      wordLength: 75,
    },
    {
      name: 'Inside.Java',
      slug: 'inside.java-668e976428af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_I.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Java',
          value: 'java',
        },
        {
          label: 'Spring',
          value: 'spring',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Inside. Java news and views from members of the java team at oracle newscast. &nbsp & nbcsp jep café. Jep. Cafe. Also. On. The inside. Java : never ending innovation james grisanzio on june 12, 2024 oracle encoding for flattened heap values john rose on june 11, 2024 valhalla when to use dop v1. 1 nicolai parlog on june 10, 20',
      url: 'https://inside.java',
      letterLength: 328,
      wordLength: 61,
    },
    {
      name: 'Kodeco',
      slug: 'kodeco-6898bc0628af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_K.png',
      category: [
        {
          label: 'Mobile Development',
          value: 'mobile-development',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Swift',
          value: 'swift',
        },
        {
          label: 'Kotlin',
          value: 'kotlin',
        },
        {
          label: 'Dart',
          value: 'dart',
        },
        {
          label: 'Flutter',
          value: 'flutter',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Text-Based',
          value: 'text-based',
        },
      ],
      cost: 'Paid',
      hasCert: false,
      description:
        "Learn ios and swift, android and kotlin & dart and flutter development with the largest and highest-quality catalog of video courses and books on the internet. Raywenderlich. Com start for free toggle night mode starting for free kodeco requires javascript. Please enable javascript to enjoy the best experience. It's tough to keep up with mobile development these days. Constantly-changing platforms, libraries, frameworks, and more make it challenging to stay at top of your game. ",
      url: 'https://www.kodeco.com/',
      letterLength: 483,
      wordLength: 74,
    },
    {
      name: 'Learndatasci',
      slug: 'learndatasci-6a7cd91228af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_L.png',
      category: [
        {
          label: 'Machine Learning',
          value: 'machine-learning',
        },
        {
          label: 'Data Science',
          value: 'data-science',
        },
        {
          label: 'Data Mining',
          value: 'data-mining',
        },
        {
          label: 'Sql',
          value: 'sql',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Sql',
          value: 'sql',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Learn data science - tutorials, books, courses, and more – learndatasci || description: democratizing data science, machine learning, & ai education. By clicking "accept" or further use this website, you agree to allow cookies to operate this website. A new specialization that teaches data mining and machine learning in healthcare a new specialization teaches ai in healthcare a new specialisation that is based on data mining. ',
      url: 'https://www.learndatasci.com',
      letterLength: 430,
      wordLength: 66,
    },
    {
      name: 'Learnjavascript',
      slug: 'learnjavascript-6c64fd5e28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_L.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
      ],
      type: [
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
      ],
      cost: 'Paid',
      hasCert: false,
      description:
        "Learn javascript is the easiest, most interactive way to learn & practice modern javascript online. Read short lessons, solve challenges & answer flashcards. Try the first 77 lessons, challenges, projects (first 7 chapters) for free. The challenges are inspired by real-world projects to make sure that you're learning the best practices, one step at a time. You can upgrade to a pro account with a one-time payment that gives you access for 5 years. ",
      url: 'https://learnjavascript.online',
      letterLength: 451,
      wordLength: 74,
    },
    {
      name: 'Devopswithdocker',
      slug: 'devopswithdocker-6e3044ae28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_D.png',
      category: [
        {
          label: 'Databases',
          value: 'databases',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
        {
          label: 'Devops',
          value: 'devops',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Containers are a lightweight, portable way to package and deploy software applications. Throughout the course, we'll explore the various components of web services, such as reverse proxies and databases, and how they can be deployed using docker. Participants should have access to a computer with admin/superuser privileges. Attendees should also have a general understanding of software development concepts and concepts. The course will be held on january 1. ",
      url: 'https://devopswithdocker.com',
      letterLength: 462,
      wordLength: 68,
    },
    {
      name: 'Devopswithkubernetes',
      slug: 'devopswithkubernetes-6feb941a28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_D.png',
      category: [
        {
          label: 'Devops',
          value: 'devops',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'MOOC',
          value: 'mooc',
        },
      ],
      cost: 'Free',
      hasCert: true,
      description:
        "Devops with kubernetes is a free mooc created by the university of helsinki. You can learn how to deploy, manage and monitor software in kubernetes. The official start is 1st august, the university credits will not be awarded before that. Ects credits are only required for ects credits. It's recommended that you complete the course with your own computers. Click here for all the latest from the course. ",
      url: 'https://devopswithkubernetes.com',
      letterLength: 406,
      wordLength: 68,
    },
    {
      name: 'Codechef',
      slug: 'codechef-71c180a628af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Sql',
          value: 'sql',
        },
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'Data Structures',
          value: 'data-structures',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Java',
          value: 'java',
        },
        {
          label: 'C++',
          value: 'cpp',
        },
        {
          label: 'Sql',
          value: 'sql',
        },
      ],
      type: [
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Codechef - learn and practice coding with problems || description: learn coding with our free and beginner friendly courses on python, java, c, c++, data structures, algorithms, sql. Start learning today please enter valid email address to continue or with google github learn to code from scratch with job focussed courses designed by experts. 77. 6k+ learners 4. 7 view this course beginner learn java get hands-on experience in java programming with this interactive and practical course',
      url: 'https://www.codechef.com/',
      letterLength: 490,
      wordLength: 77,
    },
    {
      name: 'Realpython',
      slug: 'realpython-739c1f8028af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_R.png',
      category: [
        {
          label: 'Databases',
          value: 'databases',
        },
        {
          label: 'Devops',
          value: 'devops',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Django',
          value: 'django',
        },
        {
          label: 'Flask',
          value: 'flask',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        "Python tutorials for developers of all skill levels, python books and courses, python news, code examples, articles, and more. You'll also use both methods to recursively list directory contents. Api best-practices career community databases data-science data-structures data-viz devops django docker editors flask front-end gamedev gui machine-learning numpy projects python testing tools web-dev web-scraping real python learning paths guided",
      url: 'https://realpython.com',
      letterLength: 444,
      wordLength: 58,
    },
    {
      name: 'Javascript',
      slug: 'javascript-7590327c28af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_J.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Go',
          value: 'go',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Simple, but detailed explanations with examples and tasks, including: closures, document and events, object oriented programming and more. Buy epub/pdf share: 22900  github chat table of contents main course contains 2 parts which cover javascript as a programming language and working with a browser. The modern javascript language here we learn javascript, starting from scratch and go on to advanced concepts like oop. We concentrate on the language itself here, with the minimum of environment-specific notes. ',
      url: 'https://javascript.info',
      letterLength: 514,
      wordLength: 76,
    },
    {
      name: 'Kadenze',
      slug: 'kadenze-776f61b228af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_K.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Kadenze brings together educators, artists, and engineers from leading universities to provide world-class education in the fields of art and creative technology. Register with email register with google register with microsoft created by potrace 1. 16, written by peter selinger 2001-2019 register with clever * first name * last name * email * password *password confirmation have a coupon code? discover your creative education to take on courses from the world's leading universities, brands, and institutions. ",
      url: 'https://www.kadenze.com',
      letterLength: 515,
      wordLength: 76,
    },
    {
      name: 'Bigocheatsheet',
      slug: 'bigocheatsheet-799364f228af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_B.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'React.js',
          value: 'react.js',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "This webpage covers the space and time big-o complexities of common algorithms used in computer science. I've interviewed at several startups, and also some bigger companies, like google, , yahoo, and uber. To save all of you fine folks a ton of time, i went ahead and created a nice cheat sheet. - eric angularjs to react automated migration big-o complexity chart horrible bad fair good excellent o(log n), o(1) o(n) o(",
      url: 'https://www.bigocheatsheet.com/',
      letterLength: 421,
      wordLength: 72,
    },
    {
      name: 'Gwu',
      slug: 'gwu-7b92b1f428af11ef82f251d698235e32',
      image: '/images/letters_placeholder/default_G.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "| gw open edx || description: n/a || body: n/a || gw: gw. 'no one wants to do it,' says gw's 'open eedx'. \"no a lot of things to do with the open,' he says. The open is a great opportunity for a new generation of people to join the open. ",
      url: 'https://openedx.seas.gwu.edu/',
      letterLength: 238,
      wordLength: 51,
    },
    {
      name: 'Stanford',
      slug: 'stanford-ed02f1082a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_S.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Code in place || description: a free, human-centered, intro-to-coding course from stanford university || body: you need to enable javascript to run this app. If you want to run the app, you need to create a code that works for you. The course is free and you can download the course in a single click. Click here for more information. And the course will be available in the uk. ',
      url: 'https://codeinplace.stanford.edu',
      letterLength: 379,
      wordLength: 69,
    },
    {
      name: 'Appacademy',
      slug: 'appacademy-eed78eda2a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_A.png',
      category: [
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        "Free access to app academy's entire full-stack curriculum. It includes over 1,500 hours of readings, videos, projects and more. The course is designed to get you hired as a developer. If you're a software engineer, you'll be able to use the course to create your own website. Click here to learn more about app academy open - the first free, online web development course that's meant to get your job done. ",
      url: 'https://open.appacademy.io',
      letterLength: 407,
      wordLength: 71,
    },
    {
      name: 'Flatironschool',
      slug: 'flatironschool-f077c1ec2a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_F.png',
      category: [
        {
          label: 'Artificial Intelligence',
          value: 'artificial-intelligence',
        },
        {
          label: 'Machine Learning',
          value: 'machine-learning',
        },
        {
          label: 'Data Science',
          value: 'data-science',
        },
        {
          label: 'Cybersecurity',
          value: 'cybersecurity',
        },
        {
          label: 'Cryptography',
          value: 'cryptography',
        },
        {
          label: 'Software Engineering',
          value: 'software-engineering',
        },
        {
          label: 'Compliance',
          value: 'compliance',
        },
        {
          label: 'FullStack Development',
          value: 'fullstack-development',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Foundation',
          value: 'foundation',
        },
      ],
      type: [
        {
          label: 'MOOC',
          value: 'mooc',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
        {
          label: 'Bootcamps',
          value: 'bootcamps',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Flatiron schools is a coding bootcamp with on-campus and online courses for coding, data science, cybersecurity, and ui/ux product design. Our courses what we teach software engineering gain a foundation in software engineering by building full-stack web applications using back-end and front-end programming languages, frameworks, and artificial intelligence tools. Possible career paths: full stack developer, web developer, software engineer, and prompt engineer. Data science discover how to gather data from various sources as well',
      url: 'https://flatironschool.com',
      letterLength: 536,
      wordLength: 74,
    },
    {
      name: 'Flexboxdefense',
      slug: 'flexboxdefense-b3820e282a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_F.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Title: flexbox defense || description: n/a || body: n/a || n/a: a new tool for flexbox defense. Flexiblebox defense || description: n. A. || body: n-a | a n-a-n-b-b. A flexible defense system. Is a tool that can be used in a range of environments. ',
      url: 'http://www.flexboxdefense.com',
      letterLength: 248,
      wordLength: 45,
    },
    {
      name: 'Codepip',
      slug: 'codepip-b54871022a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Web Development',
          value: 'web-development',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Codepip is the platform for your favorite web development games. Gain an edge in your interview or project. Create a free account create a free account to enjoy these features checkpoints save your progress and access it from anywhere. Achievements track and share your in-game achievements. New releases discover games that teach coding topics. A game for learning to scale, rotate, and move elements with css transform disarray js arrays pro a games for learning css flexbox flexbox froggy',
      url: 'https://codepip.com',
      letterLength: 491,
      wordLength: 79,
    },
    {
      name: 'Flexboxfroggy',
      slug: 'flexboxfroggy-b7512c322a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_F.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Title: flexbox froggy - a game for learning css flexbox || description: n/a || body - flexbox - level 1 of 1  reset 1 2 3 4 5 6 7 8 9 10 tweet follow @playcodepip flexbox is created by codepp • • github • settings language english espaol français deutsch nederlands português català galego italiano svenska suomi dansk',
      url: 'https://flexboxfroggy.com',
      letterLength: 318,
      wordLength: 59,
    },
    {
      name: 'Codecombat',
      slug: 'codecombat-b9a319a02a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Codecombat - coding games to learn python and javascript || description: learn typed code through a programming game. Learn python, javascript, and html as you solve puzzles and learn to make your own coding games and websites. || body: n/a: n/a: a coding game, a game, and a web site. If you have a codecombat, you'll be able to create your own websites and create your",
      url: 'https://codecombat.com',
      letterLength: 370,
      wordLength: 66,
    },
    {
      name: 'Checkio',
      slug: 'checkio-bb7ca1062a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Typescript',
          value: 'typescript',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Checkio - coding games and programming challenges for beginner and advanced. You can improve your coding skills by solving engaging challenges and fun task using python and typescript. Checkio is an extra-tool during their courses so that students could practice their skills when learning new material. We're not lost, will be available soon release in days hours. Please send me an email when we back so you will be first one who check all the benefits. ",
      url: 'https://checkio.org/',
      letterLength: 456,
      wordLength: 76,
    },
    {
      name: 'Codingame',
      slug: 'codingame-bd9e5dd02a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Java',
          value: 'java',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Codingame is a challenge-based training platform for programmers. You can play with the hottest programming topics. Solve games, code ai bots, learn from your peers, have fun. Get (even) better at coding this gaming brings you more than just badges. The more you play, the more your coding improves. Play alone or compete with others. You only need 15 minutes to start. Puzzles games virtual escape rooms. ',
      url: 'https://www.codingame.com/start/',
      letterLength: 406,
      wordLength: 67,
    },
    {
      name: 'Hackerrank',
      slug: 'hackerrank-e2347c7a2a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_H.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Hackerrank is the market-leading coding test and interview solution for hiring developers. We candidates sharpen their tech skills and pursue job opportunities. From prepping for jobs and practicing coding to running a world-class technical interview, give developers the tools they need to showcase their skills, passion, and potential. Get the content you need to develop new skills – and land the job you’ve dreamed of. And practice :: the movement. Screen on skills. Leave the binary tree. ',
      url: 'https://www.hackerrank.com',
      letterLength: 494,
      wordLength: 77,
    },
    {
      name: 'Cp-algorithms',
      slug: 'cp-algorithms-e48f50762a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Data Structures',
          value: 'data-structures',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'The goal of this project is to translate the wonderful resource http://e-maxx. Ru/algo which provides descriptions of many algorithms and data structures especially popular in field of competitive programming. Moreover we want to improve the collected knowledge by extending the articles and adding new articles to the collection. The repository name and the owning organizations were renamed! now the repo is located at https://github. Com/cp-algorithms. October 31, 2022: it is now possible to select',
      url: 'https://cp-algorithms.com/',
      letterLength: 502,
      wordLength: 74,
    },
    {
      name: 'Techiedelight$',
      slug: 'techiedelight$-e6bf26962a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_T.png',
      category: [
        {
          label: 'Sql',
          value: 'sql',
        },
      ],
      techStack: [
        {
          label: 'Sql',
          value: 'sql',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Techie delight is a leading platform for technical interview preparation. Improve your algorithmic skills and crack interviews with top tech companies. Github iplastic solarized light textmate tomorrow xcode kuroir katzenmilch sql server ambiance chaos clouds midnight dracula cobalt gruvbox green on black idle fingers krtheme merbivore merbile soft mono industrial monokai pastel on dark solarized dark terminal tomorrow night tomorrow night blue tomorrow night bright tomorrow',
      url: 'https://www.techiedelight.com',
      letterLength: 479,
      wordLength: 66,
    },
    {
      name: 'Hackerearth',
      slug: 'hackerearth-e8fa19b62a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_H.png',
      category: [
        {
          label: 'Data Science',
          value: 'data-science',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Recruiters from 1,000+ companies hire the best developers. Coding contests, data science competitions, and hackathons help 10m+ developers be better. Hackerearth is a coding platform and developer assessment software. It's time to look beyond the inverted binary tree. The best tech talent for your hiring pipe is based on skills ditch the gpa, embrace the code, and reduce acquisition effort. Hackerearth elevates developer experience with its built-in ide, custom question library",
      url: 'https://www.hackerearth.com:443/',
      letterLength: 482,
      wordLength: 71,
    },
    {
      name: 'Codewars',
      slug: 'codewars-eb3fbb4a2a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Software Development',
          value: 'software-development',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Code kata is crafted by the community to you strengthen different coding techniques. Master your current language of choice, or quickly pick up any of the 55+ programming languages ed. Earn ranks and honor kata code challenges are ranked from beginner to expert level. Join a community of over 3 million developers and improve your coding skills in over 55 programming languages! codewars is a collective effort by its users, creators, and creators. ',
      url: 'https://www.codewars.com',
      letterLength: 450,
      wordLength: 73,
    },
    {
      name: 'Coderbyte',
      slug: 'coderbyte-ed5b313e2a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Prep for interviews on the #1 platform for 1m+ developers that want to level up their careers. Get unlimited candidates and admins on every plan. Start trials on a free trial. If you are a developer preparing for an interview or trying to level your coding skills, you'll be able to test your skills in the first place. Click here for more info on the top of the. 1m+ platform. Use the form below to get started. ",
      url: 'https://coderbyte.com',
      letterLength: 413,
      wordLength: 77,
    },
    {
      name: 'Codingdojo',
      slug: 'codingdojo-ef39c9de2a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Learn programming algorithms the exciting way: through hands-on exercises, challenges, and tutorials. No textbooks or lectures guaranteed! || body: welcome to the algorithm app learn the building blocks of programming like for loops, if/else statements, array manipulation, and more. Create an account please use the same email that you used on your admissions application if you are an existing student or an applicant. To your account or as admin predict the output coding challenges video walkthroughs',
      url: 'https://algorithm.codingdojo.com',
      letterLength: 504,
      wordLength: 76,
    },
    {
      name: 'Edabit',
      slug: 'edabit-f1287cc22a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_E.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Title: edabit || description: n/a || body: n/a || n/a: a tidbit. Tee: edabit: 'i don't know if i'm going to be a good guy,' he says. 'it's not a bad thing, it's a shame', he adds. ",
      url: 'https://edabit.com',
      letterLength: 180,
      wordLength: 37,
    },
    {
      name: 'Devpost',
      slug: 'devpost-f3176a8e2a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_D.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "The home for hackathons || description: participate in online virtual and in-person hackathon to build products, practice skills, learn technologies, win prizes, and grow your network. || body: the for hackers where organizations and developers come together to build, inspire, and innovate. For organizers for participants trusted by the world's leading organizations hackathon. Hackathon hackathon: the home of hackathon organizers. ",
      url: 'https://devpost.com',
      letterLength: 435,
      wordLength: 60,
    },
    {
      name: 'Pythonprinciples',
      slug: 'pythonprinciples-f5352f222a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_P.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
      ],
      type: [
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Learn the basics of python programming online with python principles. Helpful community, example-based learning, and 100+ coding exercises. Get instant on your code. Test yourself with challenges and build skills with projects. Learn python programming by actually programming. If you are a system administrator, a programmer will tell you right away if your code is correct, and if not, how to fix it. A programr will provide this , analyzing your code, checking it for correctness. ',
      url: 'https://pythonprinciples.com',
      letterLength: 484,
      wordLength: 76,
    },
    {
      name: 'Lintcode',
      slug: 'lintcode-f74acefc2a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_L.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Lintcode has the most interview problems covering google, facebook, linkedin, amazon, amazon and so on. We provide chinese and english versions for coders around the world. If you have any questions, please contact us on 020 555 111 or email us at info@lintcode. Co. Uk or call us at (888) 777-7772 or call (602) 888-8883-8255 or email info@alinta. Com. ',
      url: 'https://www.lintcode.com/',
      letterLength: 354,
      wordLength: 59,
    },
    {
      name: 'Codeforces',
      slug: 'codeforces-f92831242a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'R',
          value: 'r',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Paid',
      hasCert: false,
      description:
        'Codeforces round 953 (div. 2) 38:29:07 register now. Top rated # user rating 1 t ourist 3843 2 j iangly 3705 3 b enq 3628 4 o rzdevinwang 3571 5 g eothermal 3569 5 c nnfls_csy 3569 7 qdai0815 3530 8 e cnerwala 3499 9 g yh20 3447 10 r',
      url: 'https://codeforces.com/',
      letterLength: 233,
      wordLength: 50,
    },
    {
      name: 'Codingbat',
      slug: 'codingbat-fbd2bb2e2a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Java',
          value: 'java',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Codingbat java || description: n/a || body: id/email password forgot password create account about code +videos done prefs codingbat code practice welcome to codingbat. Logic-2 medium boolean logic puzzles -- if else && ! map-1 basic map get()/put(), no loops map-2 maps with bulk data and loops functional-1 functional mapping operations on lists with lambdas java java java example solution code java',
      url: 'https://codingbat.com/java',
      letterLength: 402,
      wordLength: 62,
    },
    {
      name: 'Spoj',
      slug: 'spoj-fe2f7b1e2a7c11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_S.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Java',
          value: 'java',
        },
        {
          label: 'C++',
          value: 'cpp',
        },
        {
          label: 'C#',
          value: 'c-sharp',
        },
        {
          label: 'Go',
          value: 'go',
        },
        {
          label: 'R',
          value: 'r',
        },
        {
          label: 'Haskell',
          value: 'haskell',
        },
      ],
      type: [
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'The solution to problems can be submitted in over 60 languages including c, c++, java, python, c#, go, haskell, ocaml, and f#. Spoj has a rapidly growing problem set/tasks available for practice 24 hours/day, including many original tasks prepared by the community of expert problem setters associated with the project. The problem setter is a true programming master and is able to build efficient algorithms. ',
      url: 'https://www.spoj.com/',
      letterLength: 411,
      wordLength: 65,
    },
    {
      name: 'Sql-ex',
      slug: 'sql-ex-007df04e2a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_S.png',
      category: [
        {
          label: 'Sql',
          value: 'sql',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Sql',
          value: 'sql',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: true,
      description:
        'Sql exercises language усски english june 14, 21:36 msk sql exercises is intended for acquiring good practical experience, which is focused on data operation, namely on sql dml. 3 rating stages are suggested, they are aimed at testing of specialists and their certification. The source is absolutely free of charge, and the certificate purchase has a voluntary basis. If you use content filter, it should allow opening child windows to pages. ',
      url: 'https://sql-ex.ru/',
      letterLength: 443,
      wordLength: 71,
    },
    {
      name: 'Trprt',
      slug: 'trprt-027798a02a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_T.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Python practice problems & exercises | trprt. Io || description: n/a || body: n/a || n/a: b/b: c/c: i'm not a python user, but i think it's a python. I don't know what to do with python practice problems & exercises. I'm trying to figure out how to use python in the future. ",
      url: 'https://www.trprt.io/',
      letterLength: 275,
      wordLength: 53,
    },
    {
      name: 'Codeabbey',
      slug: 'codeabbey-0458928c2a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free',
      hasCert: true,
      description:
        'Codeabbey (register) with username and password or else everyone can win free programming certificate here how this works, what is inside? we proudly collect s of the universities which actively use codeabbbey. Users rank solved recent at forums: fixing an anagram from therearenousernamesleftforme. Qwerty last at jun 11 2024 17:53 midi variable length numbers from zelevin',
      url: 'https://www.codeabbey.com/',
      letterLength: 374,
      wordLength: 56,
    },
    {
      name: 'Rosalind',
      slug: 'rosalind-06baca682a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_R.png',
      category: [
        {
          label: 'Bioinformatics',
          value: 'bioinformatics',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Go',
          value: 'go',
        },
        {
          label: 'Assembly',
          value: 'assembly',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Rosalind is a platform for learning bioinformatics and programming through problem solving. You'll get familiar with the operations needed to start solving challenges in the stronghold. In the armory you implement algorithms on your own. The armory is based on a variety of topics including computational mass spectrometry, alignment, dynamic programming, genome assembly, genome rearrangements, phylogeny, probability, string algorithms and others. ",
      url: 'https://rosalind.info/problems/locations/',
      letterLength: 450,
      wordLength: 61,
    },
    {
      name: 'Topcoder',
      slug: 'topcoder-08e0782e2a7d11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_T.png',
      category: [
        {
          label: 'Artificial Intelligence',
          value: 'artificial-intelligence',
        },
        {
          label: 'Data Science',
          value: 'data-science',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Our global talent network has expertise in all the right places. Ai-accelerated, no contracts, no ramp-up, no risk. View a demo 20% off all work launched in june 2024. Experts in data science topcoder’s data science experts are ready to. . The. Data science industry is a. Global leader in ai and qa. We’re here to bridge it with our global presence of 200+ ai practitioners. ',
      url: 'https://www.topcoder.com/',
      letterLength: 376,
      wordLength: 66,
    },
    {
      name: 'Harvard',
      slug: 'harvard-b4f4f0122a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_H.png',
      category: [
        {
          label: 'Sql',
          value: 'sql',
        },
        {
          label: 'Software Engineering',
          value: 'software-engineering',
        },
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'Data Structures',
          value: 'data-structures',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Sql',
          value: 'sql',
        },
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free',
      hasCert: true,
      description:
        'Cs50: introduction to computer science | harvard university || description: an introduction to the intellectual enterprises of computer science and the art of programming. On january 1, 2019 - december 31, 2024 price free * modality on image duration 11 weeks long time commitment 10 - 20 hours per week pace self-paced subject programming course language english video transcript english difficulty introductory credit audit for free add a verified certificate for $219 platform edx topics computer science data structure',
      url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0',
      letterLength: 522,
      wordLength: 79,
    },
    {
      name: 'Collegecompendium',
      slug: 'collegecompendium-b797c7182a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'College compendium || description: learn at your own pace with a curated collection of free and open source computer science resources from top colleges across america || body: you need to enable javascript to run this app. If you want to run the app, you need to use the app to run it. The app is free and free, and you can download it to your computer. It can be downloaded from a variety of sources. ',
      url: 'https://collegecompendium.org',
      letterLength: 403,
      wordLength: 76,
    },
    {
      name: 'Datastructur',
      slug: 'datastructur-b96273182a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_D.png',
      category: [
        {
          label: 'Data Structures',
          value: 'data-structures',
        },
      ],
      techStack: [
        {
          label: 'Spring',
          value: 'spring',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'The final exam is scheduled for tuesday, 5/11, 8:10 - 11 am pt. A passing grade for undergraduate students is a c- which amounts to 6,000 points in cs 61b. Course evaluations (32 extra credit points) course evals are at 75. 84% and are due tonight. All students will be given 32 extra credit points if we reach 80%. We’ll post a more detailed announcement regarding proctoring tomorrow morning. ',
      url: 'https://sp21.datastructur.es',
      letterLength: 395,
      wordLength: 69,
    },
    {
      name: 'Datasciencecourse$',
      slug: 'datasciencecourse$-bb70382a2a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_D.png',
      category: [
        {
          label: 'Machine Learning',
          value: 'machine-learning',
        },
        {
          label: 'Deep Learning',
          value: 'deep-learning',
        },
        {
          label: 'Data Science',
          value: 'data-science',
        },
        {
          label: 'Big Data',
          value: 'big-data',
        },
        {
          label: 'FullStack Development',
          value: 'fullstack-development',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Practical data science is the study and practice of how we can extract insight and knowledge from large amounts of data. It is a burgeoning field, currently attracting substantial demand from both academia and industry. This course provides a practical introduction to the “full stack” of data science analysis, including data collection and processing, data visualization and presentation, and statistical model building using machine learning. Topics covered include: collecting and processing data using relational methods, time series approaches, graph and network models, free text analysis, and spatial geographic',
      url: 'http://www.datasciencecourse.org',
      letterLength: 619,
      wordLength: 88,
    },
    {
      name: 'Cs61a$',
      slug: 'cs61a$-bd87bc5a2a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Express.js',
          value: 'express.js',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Cs 61a does not use bcourses/canvas. Lecture begins monday 6/17. Discussion section begins tuesday 6/18. Lab section starts monday 6/18. This website is under construction and its contents are subject to change. Current assignments calendar week date lecture textbook lab 00: getting started due mon 6/24 tue 6/18 functions ch. 1. Ch. 1. 4 ch. 1. 5 disc 01: control, environment diagrams hw 01: functions, control, higher-order',
      url: 'https://cs61a.org',
      letterLength: 427,
      wordLength: 67,
    },
    {
      name: 'Cs50',
      slug: 'cs50-bfd081402a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Sql',
          value: 'sql',
        },
        {
          label: 'Cybersecurity',
          value: 'cybersecurity',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'R',
          value: 'r',
        },
        {
          label: 'Sql',
          value: 'sql',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Cs50 cdn || description: n/a || body: 2007 / 2008 / 2009 / 2010 / 2011 / 2012 / 2013 / 2014 / 2015 / 2016 / 2017 / 2018 / 2019 / 2020 / 2021/ 2022/ 2023/ 2024. Ai / ap / appletv / atv - cscie1a. ',
      url: 'https://cdn.cs50.net/',
      letterLength: 195,
      wordLength: 48,
    },
    {
      name: 'Washington',
      slug: 'washington-c1c9c68c2a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_W.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Courses. Cs. Washington. Edu || description: n/a || body: courses. Index of courses frequently-questioned questions @cs-washington edu. If you have any questions, please contact us on 020 555 111 or email us at (888) 777-7772 or visit www. Eu. Int/index_f. Php. If you have a question, please do not hesitate to contact us. ',
      url: 'https://courses.cs.washington.edu',
      letterLength: 324,
      wordLength: 53,
    },
    {
      name: 'Imt-decal',
      slug: 'imt-decal-c38de43a2a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_I.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Spring',
          value: 'spring',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Imt decal, spring 2019 || description: n/a || body: n/a || n/a: body. Title: imt decal, spring 2019 | | description: n. A. || blunder: 'n. A. , n. O. ,' says tidbit: mrs decal's spokesman. ",
      url: 'http://imt-decal.org',
      letterLength: 189,
      wordLength: 36,
    },
    {
      name: 'Berkeley',
      slug: 'berkeley-c5195dac2a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_B.png',
      category: [
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "This site has links to eecs course pages and to information about e-learning labs and computing. Egyptians - esql - is a web-based web-acct self-service for accounts get accounts reset passwords. The site has a wide range of links to the eec and ecc's courses and information about the eec labs in the u. S. And europe. ",
      url: 'https://inst.eecs.berkeley.edu',
      letterLength: 320,
      wordLength: 57,
    },
    {
      name: 'Cornell',
      slug: 'cornell-c6efb1c62a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Machine Learning',
          value: 'machine-learning',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Title: syllabus | machine learning for intelligent systems || description: n/a || body: machine learning for intelligent systems cs4780/cs5780. Machine learning for intelligent systems is a system that can be used to communicate with intelligent systems in a way that can communicate with the intelligent system. Cs 4780 is the first machine learning system in the world to be able to use a machine learning platform. ',
      url: 'http://www.cs.cornell.edu/courses/cs4780/2018fa/syllabus/',
      letterLength: 418,
      wordLength: 66,
    },
    {
      name: 'Eecs70$',
      slug: 'eecs70$-c88a9aa02a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_E.png',
      category: [
        {
          label: 'Discrete Mathematics',
          value: 'discrete-mathematics',
        },
      ],
      techStack: [
        {
          label: 'Spring',
          value: 'spring',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Cs70 at uc berkeley, spring 2024 sanjit seshia, alistair sinclair lecture: tuth 3:30pm -5:00pm, dwinelle 155 jump to current week note: this content schedule for spring 2024 is subject to change. Week date lecture resources notes discussion work 0 tue 1/16 introduction, propositional logic lecture full handout 6up note 2 note 3 1 tue 1/23 induction lecture fullhandout 6 up note 3 disc 1a , solutions disc 2',
      url: 'https://www.eecs70.org',
      letterLength: 409,
      wordLength: 68,
    },
    {
      name: 'Depaul$',
      slug: 'depaul$-caba71602a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_D.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Depaul's jarvis college of computing and digital media (cdm) offers undergraduate and graduate programs in a wide and diverse range of fields. The new jarvis student center for innovation and collaboration is an 8,000 square-foot open space. It is a 32,000 sq. Ft. Production facility and a production facility designed by professional filmmakers. A 3,000 square foot open space is available to students in the u. S. And europe. ",
      url: 'https://www.cdm.depaul.edu/Pages/default.aspx',
      letterLength: 429,
      wordLength: 69,
    },
    {
      name: 'Cmu$',
      slug: 'cmu$-ccf79b062a7e11efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Machine Learning',
          value: 'machine-learning',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Carnegie mellon’s school of computer science is widely recognized as one of the first and best computer science programs in the world. Our programs train the generation of innovators to solve real-world problems and improve the way people live and work. Ri re brings together humans, robots and generative ai to create art read all news upcoming events javascript is required for the scs calendar. Click here for all the latest news and updates. ',
      url: 'https://www.cs.cmu.edu/',
      letterLength: 446,
      wordLength: 74,
    },
    {
      name: 'Vladmihalcea',
      slug: 'vladmihalcea-d1f969202a8011efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_V.png',
      category: [
        {
          label: 'Sql',
          value: 'sql',
        },
      ],
      techStack: [
        {
          label: 'Java',
          value: 'java',
        },
        {
          label: 'Sql',
          value: 'sql',
        },
        {
          label: 'Spring',
          value: 'spring',
        },
      ],
      type: [
        {
          label: 'Video Courses',
          value: 'video-courses',
        },
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        "I wrote the high-performance java persistence book, which became one of the best-selling java books on amazon. I'm currently developing the amazing hypersistence optimizer. In my free time, i develop various open-source projects (e. G. Hibernate types and flexypool ) and answer questions on stackoverflow. Book my training consulting if you are interested in having me teach you how to get the most out of your data access layer, then you",
      url: 'https://vladmihalcea.com',
      letterLength: 439,
      wordLength: 71,
    },
    {
      name: 'Codesignal',
      slug: 'codesignal-d45634002a8011efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Data Analysis',
          value: 'data-analysis',
        },
      ],
      techStack: [
        {
          label: 'Python',
          value: 'python',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Codesignal's skills assessments and ai-powered learning tools get you where you need to go. Build and assess technical skills in a realistic development environment. Hone in on skilled candidates early with our top-of-funnel evaluations for high-volume pipes. Develop improve team performance with personalized, practice-based, technical learning that delivers real, measurable results. Meet cosmo: the smartest ai-driven ai-based learning tool. ",
      url: 'https://codesignal.com',
      letterLength: 446,
      wordLength: 59,
    },
    {
      name: 'Leonnoel',
      slug: 'leonnoel-d63e1ae42a8011efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_L.png',
      category: [
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'FullStack Development',
          value: 'fullstack-development',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Assembly',
          value: 'assembly',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
        {
          label: 'Bootcamps',
          value: 'bootcamps',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Github email rss recieve new posts via email leon noel 2021 #100devs free full stack web development bootcamp (live) september 18, 2020 education free full stack coding bootcamp for those laid off or affected by the pandemic. Read using kiwix to power off learning in remote schools may 4, 2020 education how my wife and i built a remote computer lab in tanzania for the maasai. ',
      url: 'https://leonnoel.com',
      letterLength: 379,
      wordLength: 66,
    },
    {
      name: 'Kattis',
      slug: 'kattis-d826e34a2a8011efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_K.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Kattis automatically screens and evaluates each applicant’s technical skills with quick and simple coding challenges. Let us narrow down your candidates – so you can focus on hiring from the best. For companies for problem solvers for universities we have ly spent a lot of time sending out, administrating and evaluating programming test. Use the dashboard to track your candidates' progress. No manual evaluation needed with the code is automatically checked and scored in a blink. ",
      url: 'https://www.kattis.com/',
      letterLength: 484,
      wordLength: 76,
    },
    {
      name: 'Learn-c',
      slug: 'learn-c-da2b01122a8011efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_L.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Interactive Content',
          value: 'interactive-content',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Learn-c. Org is a free interactive c tutorial for people who want to learn c, fast. It is intended for everyone who wants to learn the c programming language. Click on the chapter you wish to begin from, and follow the instructions. Learn the basics hello, world! variables and types arrays multidimensional array conditions strings for loops while loops functions static advanced pointers structures function arguments by reference dynamic allocation array and pointers recursion linked lists binary trees',
      url: 'https://www.learn-c.org',
      letterLength: 506,
      wordLength: 78,
    },
    {
      name: 'Bit',
      slug: 'bit-dc4e9b162a8011efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_B.png',
      category: [
        {
          label: 'Sql',
          value: 'sql',
        },
        {
          label: 'Software Engineering',
          value: 'software-engineering',
        },
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'Data Structures',
          value: 'data-structures',
        },
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Sql',
          value: 'sql',
        },
        {
          label: 'HTML/CSS',
          value: 'html/css',
        },
      ],
      type: [
        {
          label: 'Hands-On Practice',
          value: 'hands-on-practice',
        },
        {
          label: 'Project-Based',
          value: 'project-based',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Cs50's ap® computer science principles xseries program | edx || description: this is the introduction to the intellectual enterprises of computer science and the art of programming for students in high school. Get up to 30% off select programs until june 19. Use code edxstem24. A broad and robust understanding of computers and programming how to think algorithmically and solve programming problems efficiently concepts like abstraction, algorithms, data structures, encapsulation, resource management, security, software",
      url: 'https://www.edx.org/xseries/harvardx-cs50-ap-computer-science-principles',
      letterLength: 523,
      wordLength: 74,
    },
    {
      name: 'Hackterms',
      slug: 'hackterms-de6807a22a8011efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_H.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Hackterms is a crowdsourced dictionary of coding terms. Learn when, where, and why you'd use a particular programming tool, concept, process, or language. Most requested: most requested made in the u. S. , most requested made in the us. If you're a coding user, you'll get an email when a definition is added. You can also request a description if a specific term is used. ",
      url: 'https://www.hackterms.com',
      letterLength: 373,
      wordLength: 65,
    },
    {
      name: 'Regular-expressions',
      slug: 'regular-expressions-e06309762a8011efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_R.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Express.js',
          value: 'express.js',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        'Regular expressions are a special text string for describing a pattern. You are probably familiar with wildcard notations such as *. Txt to find all text files in a file manager. The regex equivalent is. *. Tx. $. But you can do much more with regular expression. A regular expression can be used in text editor like editpad pro or powergrep. It can also be used as a text editor or a specialized text processing',
      url: 'https://www.regular-expressions.info',
      letterLength: 412,
      wordLength: 75,
    },
    {
      name: 'Learnyouahaskell',
      slug: 'learnyouahaskell-e289a2782a8011efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_L.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Go',
          value: 'go',
        },
        {
          label: 'Haskell',
          value: 'haskell',
        },
      ],
      type: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        "Learn you a haskell for great good! || description: n/a || body: hey yo! this is learn youahaskell. The whole thing is completely free to read on, but it's also available in print and i encourage you to buy as many copies as you can afford. Read the buy it! read it on!. . You can also find me idling on #haskelle where i go by the name. ",
      url: 'https://learnyouahaskell.com/',
      letterLength: 338,
      wordLength: 68,
    },
    {
      name: 'Mikkegoes',
      slug: 'mikkegoes-e45da4be2a8011efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_M.png',
      category: [
        {
          label: 'Web Development',
          value: 'web-development',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'Learn to code for free in 2024 with our free coding guide for beginners. Learn programming and web development fundamentals step-by-step. Email get the tips now now to get my free guide to teach yourself how to code from scratch. If you are interested in learning tech skills, these tips are perfect for getting started faster. Start with the basics of what coding is about, and learn in-demand skills to build a tech career step- by step. ',
      url: 'https://mikkegoes.com',
      letterLength: 440,
      wordLength: 77,
    },
    {
      name: 'Codeeval',
      slug: 'codeeval-e64b6c842a8011efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Software Development',
          value: 'software-development',
        },
      ],
      techStack: [
        {
          label: 'Vue.js',
          value: 'vue.js',
        },
      ],
      type: [
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free/Paid',
      hasCert: false,
      description:
        "Hirevue offers a complete library of interview, game-based, virtual job tryouts and technical assessments. Candidates complete a brief assessment of their interests, interests, and background to present candidates with more opportunities. The results are then compared to your organization's open opportunities, recommending your organization’s opening opportunities, and recommending a candidate for the job. A demo of potential–not resumes will be available on the mobile request demo. ",
      url: 'https://www.hirevue.com/platform/assessment-software',
      letterLength: 488,
      wordLength: 66,
    },
    {
      name: 'Codility',
      slug: 'codility-e82df8002a8011efbbe0357cd7e525f7',
      image: '/images/letters_placeholder/default_C.png',
      category: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      techStack: [
        {
          label: 'Other',
          value: 'other',
        },
      ],
      type: [
        {
          label: 'Text-Based',
          value: 'text-based',
        },
        {
          label: 'Coding Practice',
          value: 'coding-practice',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        'The #1 rated coding test & interview platform. Test developer skills with online coding interviews and create programming assessments to hire developers. Book a demo skills-based talent management for an ai-driven world. Our team of industrial-organizational psychologists has infused every aspect of the codility platform with rigorously reed yet accessible assessment science. Embrace the skills revolution with our innovative engineering skills model, skill-mapped content library,',
      url: 'https://www.codility.com/',
      letterLength: 484,
      wordLength: 65,
    },
  ],

  // submissions: [
  //   {
  //     name: 'Submission Content1',
  //     slug: 'sample-content1' + Date.now(),
  //     image: '/images/default.png',
  //     category: [],
  //     cost: 'Free',
  //     hasCert: false,
  //     type: [],
  //     description: 'https://example.com',
  //     url: 'https://example.com',
  //     rating: 0,
  //     numReviews: 0,
  //   },
  // ],
};

export default data;
