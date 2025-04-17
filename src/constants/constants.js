import YearsSince from "../utils/YearsSince";

export const projects = [
    {
        title: 'Workout Builder',
        description: `
        This is a dynamic, web‑based fitness platform that helps you design, log and track every workout—no matter what gear you own. By pulling from your personal equipment profile, it automatically suggests exercises and builds custom routines, complete with rep, set and weight logging
        
        Try it yourself:
        Username: testuser
        Password: TestPass123!
            `.trim(),
        image: '/images/projects/default-exercise.png',
        tags: ['Django', 'NextJS', 'TypeScript', 'Redux', 'AWS'],
        source: '',
        visit: 'https://workout-builder-ui.vercel.app/',
        id: 1,
    },
    {
        title: 'Expense Tracking App',
        description: "A simple react Expense Tracker, that uses State Management in React, Context API, " +
            "Local Storage, and Material UI. The app uses Speechly to use voice capabilities to add " +
            "income and expenses. The app is hosted with Netlify.",
        image: '/images/projects/expense.png',
        tags: ['React', 'JavaScript', 'Netlify', 'SpeechlyAPI'],
        visit: 'https://beck-expense-tracker-app.netlify.app/',
        source: 'https://github.com/db1721/Expense-Tracker',
        id: 5,
    },
    {
        title: 'Album Finder',
        description: "A framework that uses the MusicBrainz and YouTube API to find and download albums. Uses EasyID3 to add metadata",
        image: '/images/projects/album.jpg',
        tags: ['Python', 'API'],
        source: 'https://github.com/db1721/Album-Finder',
        id: 6,
    },
    {
        title: 'Webull Trading Bot',
        description: "A framework that uses the Webull API to buy and sell stocks, creating a personalized weighted portfolio. " +
            "Includes an algorithm to calculate intrinsic value of favorite stocks",
        image: '/images/projects/trading.jpg',
        tags: ['Python', 'API'],
        source: 'https://github.com/db1721/Webull_Trading_Bot',
        id: 4,
    },
];

export const TimeLineData = [
    {year: 1, text: 'Adaptability',},
    {year: 2, text: 'Creativity',},
    {year: 3, text: 'Problem-Solving',},
    {year: 4, text: 'Lifelong Learner',},
    {year: 5, text: 'Self-Motivated',},
];

export const myImage = [
    {image: '/images/dog.png',},
];

export const certificates = [
    {
        id: '20',
        issuer: 'Databricks',
        title: 'AWS Certified Solutions Architect - Associate',
        image: '/images/icons/db.jpg',
        pdfUrl: '/images/certs/(2025-01-08) Databricks Fundamentals Accreditation.pdf',
    },
    {
        id: '19',
        issuer: 'SAFe',
        title: 'SAFe DevOps Practitioner',
        image: '/images/icons/certified-safe-6-devops-practitioner.png',
        pdfUrl: '/images/certs/(2024-06-08) SAFe DevOps Practitioner.pdf',
    },
    {
        id: '18',
        issuer: 'AWS',
        title: 'AWS Certified Solutions Architect - Associate',
        image: '/images/icons/aws-certified-solutions-architect-associate.png',
        pdfUrl: '/images/certs/(2024-03-01) AWS Certified Solutions Architect - Associate certificate.pdf',
    },
    {
        id: '17',
        issuer: 'AWS',
        title: 'AWS Shared Responsibility Model',
        image: '/images/icons/aws_logo_cloud.png',
        pdfUrl: '/images/certs/(2023-12-01) AWS Shared Responsibility Model.pdf',
    },
    {
        id: '16',
        issuer: 'AWS',
        title: 'AWS Cloud Quest - Solutions Architect',
        image: '/images/icons/aws-cloud-quest-solutions-architect.png',
    },
    {
        id: '15',
        issuer: 'AWS',
        title: 'AWS Billing and Cost Management',
        image: '/images/icons/aws_logo_cloud.png',
        pdfUrl: '/images/certs/AWS Billing and Cost Management.pdf'
    },
    {
        id: '14',
        issuer: 'Udemy',
        title: 'AWS Lambda - A Practical Guide',
        image: '/images/icons/udemy.png',
        pdfUrl: '/images/certs/(2023-06-21) AWS Lambda - A Practical Guide.pdf'
    },
    {
        id: '14',
        issuer: 'Scrum Alliance',
        title: 'Certified Scrum Master',
        image: '/images/icons/seal-csm.png',
        pdfUrl: '/images/certs/(2023-02-27) CSM - Certified Scrum Master.pdf'
    },
    {
        id: '13',
        issuer: 'Open EDG',
        title: 'Certified Entry-Level Python Programmer',
        image: '/images/icons/pcep-30-02-medium.png',
        pdfUrl: '/images/certs/(2023-02-26) PCEP – Certified Entry-Level Python Programmer.pdf'
    },
    {
        id: '12',
        issuer: 'AWS',
        title: 'Certified Cloud Practitioner',
        image: '/images/icons/aws-certified-cloud-practitioner.png',
        pdfUrl: '/images/certs/(2022-12-16) AWS Certified Cloud Practitioner.pdf'
    },
    {
        id: '11',
        issuer: 'AWS',
        title: 'Cloud Quest - Cloud Practitioner',
        image: '/images/icons/aws-cloud-quest-cloud-practitioner-small.png'
    },
    {
        id: '10',
        issuer: 'AWS',
        title: 'AWS Technical Essentials',
        image: '/images/icons/aws_logo_cloud.png',
        pdfUrl: '/images/certs/(2022-10-18) AWS Technical Essentials.pdf'
    },
    {
        id: '09',
        issuer: 'EDx',
        title: 'Python for Everybody',
        image: '/images/icons/python_for_everybody_logo.png',
        pdfUrl: '/images/certs/(2022-07-12) Programming for Everybody.pdf'
    },
    {
        id: '08',
        issuer: 'SAFe',
        title: 'SAFe 5 Agilist',
        image: '/images/icons/safe_agilist.png',
        pdfUrl: '/images/certs/(2022-05-02) SAFe Agilist.pdf'
    },
    {
        id: '01',
        issuer: 'Microsoft',
        title: 'Microsoft Excel 2016',
        image: '/images/icons/microsoft.png',
        pdfUrl: '/images/certs/(2019-05-15) Microsoft Excel 2016.pdf'
    },
];

export const avCertificates = [
    //!Template
    /*
    { id: '68', 
      issuer: 'Issuer',
      title: 'Title',
      image: '/images/icons/file.png'},
    */
    {
        id: '17',
        issuer: 'AMX',
        title: 'CC101 Core Curriculum - Audio Essentials',
        image: '/images/icons/amx.png'
    },
    {
        id: '18',
        issuer: 'AMX',
        title: 'CC102 Core Curriculum - Cabling Essentials',
        image: '/images/icons/amx.png'
    },
    {
        id: '19',
        issuer: 'AMX',
        title: 'CC103 Core Curriculum - Control Essentials',
        image: '/images/icons/amx.png'
    },
    {
        id: '20',
        issuer: 'AMX',
        title: 'CC104 Core Curriculum - Networking Essentials',
        image: '/images/icons/amx.png'
    },
    {
        id: '21',
        issuer: 'AMX',
        title: 'CC105 Core Curriculum - PC Essentials',
        image: '/images/icons/amx.png'
    },
    {
        id: '22',
        issuer: 'AMX',
        title: 'CC106 Core Curriculum - Video Essentials',
        image: '/images/icons/amx.png'
    },
    {
        id: '23',
        issuer: 'AMX',
        title: 'CT160 - Commissioning Associate',
        image: '/images/icons/amx.png'
    },
    {
        id: '25',
        issuer: 'Audinate',
        title: 'Daunte Level 1',
        image: '/images/icons/audinate.png'
    },
    {
        id: '26',
        issuer: 'Audinate',
        title: 'Daunte Level 2',
        image: '/images/icons/audinate.png'
    },
    {
        id: '27',
        issuer: 'Audinate',
        title: 'Daunte Level 3',
        image: '/images/icons/audinate.png'
    },
    {
        id: '58',
        issuer: 'Avixa',
        title: 'AV Design Level 1 - Environment Online',
        image: '/images/icons/avixa2.png'
    },
    {
        id: '59',
        issuer: 'Avixa',
        title: 'AV Design Level 2 - Infrastructure',
        image: '/images/icons/avixa2.png'
    },
    {
        id: '60',
        issuer: 'Avixa',
        title: 'AV Design Level 3 - Applied Design Online',
        image: '/images/icons/avixa2.png'
    },
    {
        id: '56',
        issuer: 'Avixa',
        title: 'AV Math for Design',
        image: '/images/icons/avixa2.png'
    },
    {
        id: '11',
        issuer: 'Avixa',
        title: 'AVT',
        image: '/images/icons/avixa2.png'
    },
    {
        id: '12',
        issuer: 'Avixa',
        title: 'CTS-I',
        image: '/images/icons/avixa2.png'
    },
    {
        id: '14',
        issuer: 'Avixa',
        title: 'Elements of System Fabrication',
        image: '/images/icons/avixa2.png'
    },
    {
        id: '15',
        issuer: 'Avixa',
        title: 'Elements of Setup and Verification',
        image: '/images/icons/avixa2.png'
    },
    {
        id: '63',
        issuer: 'Avixa',
        title: 'Networking Technology',
        image: '/images/icons/avixa2.png'
    },
    {
        id: '64',
        issuer: 'Avixa',
        title: 'Project Management for AV',
        image: '/images/icons/avixa2.png'
    },
    {
        id: '6',
        issuer: 'Biamp',
        title: 'Audia',
        image: '/images/icons/biamp.png'
    },
    {
        id: '5',
        issuer: 'Biamp',
        title: 'TesiraForte',
        image: '/images/icons/biamp.png'
    },
    {
        id: '9',
        issuer: 'Biamp',
        title: 'VoIP',
        image: '/images/icons/biamp.png'
    },
    {
        id: '7',
        issuer: 'Clearone',
        title: 'AudioVideo Distribution and Control',
        image: '/images/icons/clearone.png'
    },
    {
        id: '13',
        issuer: 'Clearone',
        title: 'Collaborate Video Conferencing',
        image: '/images/icons/clearone.png'
    },
    {
        id: '9',
        issuer: 'Clearone',
        title: 'Digital Signage',
        image: '/images/icons/clearone.png'
    },
    {
        id: '10',
        issuer: 'Clearone',
        title: 'Media Carts',
        image: '/images/icons/clearone.png'
    },
    {
        id: '24',
        issuer: 'Clearone',
        title: 'Personal Conferencing',
        image: '/images/icons/clearone.png'
    },
    {
        id: '29',
        issuer: 'Clearone',
        title: 'TableTop Conferencing',
        image: '/images/icons/clearone.png'
    },
    {
        id: '66',
        issuer: 'Crestron',
        title: 'Certified Audio Technician',
        image: '/images/icons/crestron.png'
    },
    {
        id: '4',
        issuer: 'Crestron',
        title: 'CTI-P101',
        image: '/images/icons/crestron.png'
    },
    {
        id: '57',
        issuer: 'Crestron',
        title: 'CTI-201',
        image: '/images/icons/crestron.png'
    },
    {
        id: '61',
        issuer: 'Crestron',
        title: 'CTI-Fusion-P',
        image: '/images/icons/crestron.png'
    },
    {
        id: '62',
        issuer: 'Crestron',
        title: 'CTI-SG',
        image: '/images/icons/crestron.png'
    },
    {
        id: '3',
        issuer: 'Crestron',
        title: 'DMC-D-4K',
        image: '/images/icons/crestron.png'
    },
    {
        id: '2',
        issuer: 'Crestron',
        title: 'RL-C',
        image: '/images/icons/crestron.png'
    },
    {
        id: '30',
        issuer: 'HDBaseT',
        title: 'Installer',
        image: '/images/icons/hdbaset.jpg'
    },
    {
        id: '16',
        issuer: 'Extron',
        title: 'EAVA',
        image: '/images/icons/extron.png'
    },
    {
        id: '65',
        issuer: 'Extron',
        title: 'Extron Control Professional',
        image: '/images/icons/extron.png'
    },
    {
        id: '8',
        issuer: 'Mersive',
        title: 'Solstice',
        image: '/images/icons/mersive.png'
    },
    {
        id: '32',
        issuer: 'Peerless',
        title: 'Bronze Level Certification',
        image: '/images/icons/peerless.png'
    },
    {
        id: '1',
        issuer: 'Sheffield',
        title: 'Techworks Completion Certificate',
        image: '/images/icons/sheffield.png'
    },
    {
        id: '67',
        issuer: 'Shure',
        title: 'Voice Lift System Design',
        image: '/images/icons/shure.png'
    },
    {
        id: '33',
        issuer: 'SMART',
        title: '33918 Meeting Pro Technical Training',
        image: '/images/icons/smart.png'
    },
    {
        id: '54',
        issuer: 'SMART',
        title: '33925 Room System Technical Training',
        image: '/images/icons/smart.png'
    },
    {
        id: '34',
        issuer: 'SMART',
        title: '33995 Tech Professional for Business',
        image: '/images/icons/smart.png'
    },
    {
        id: '51',
        issuer: 'SMART',
        title: '40012 Installer Training',
        image: '/images/icons/smart.png'
    },
    {
        id: '52',
        issuer: 'SMART',
        title: '40013 Introducing SMART Products',
        image: '/images/icons/smart.png'
    },
    {
        id: '53',
        issuer: 'SMART',
        title: '40014 Preparing to Install',
        image: '/images/icons/smart.png'
    },
    {
        id: '42',
        issuer: 'SMART',
        title: '40018 Professional for Education',
        image: '/images/icons/smart.png'
    },
    {
        id: '48',
        issuer: 'SMART',
        title: '40019 Amp Technical Training',
        image: '/images/icons/smart.png'
    },
    {
        id: '39',
        issuer: 'SMART',
        title: '40020 SMART Notebook 18',
        image: '/images/icons/smart.png'
    },
    {
        id: '41',
        issuer: 'SMART',
        title: '40021 SMART Board M600 series',
        image: '/images/icons/smart.png'
    },
    {
        id: '40',
        issuer: 'SMART',
        title: '40022 SMART Board 800 series',
        image: '/images/icons/smart.png'
    },
    {
        id: '35',
        issuer: 'SMART',
        title: '40023 Board 2000 and 2000 Pro series',
        image: '/images/icons/smart.png'
    },
    {
        id: '36',
        issuer: 'SMART',
        title: '40025 Board 6000 and 6000 Pro series',
        image: '/images/icons/smart.png'
    },
    {
        id: '37',
        issuer: 'SMART',
        title: '40026 Board 7000 and 7000 Pro series',
        image: '/images/icons/smart.png'
    },
    {
        id: '47',
        issuer: 'SMART',
        title: '40027 Installing Interactive Displays',
        image: '/images/icons/smart.png'
    },
    {
        id: '49',
        issuer: 'SMART',
        title: '40028 Interactive Whiteboard Systems',
        image: '/images/icons/smart.png'
    },
    {
        id: '50',
        issuer: 'SMART',
        title: '40029 Kapp Boards',
        image: '/images/icons/smart.png'
    },
    {
        id: '53',
        issuer: 'SMART',
        title: '40030 Installing Accessories',
        image: '/images/icons/smart.png'
    },
    {
        id: '43',
        issuer: 'SMART',
        title: '43001 Board MX series ',
        image: '/images/icons/smart.png'
    },
    {
        id: '44',
        issuer: 'SMART',
        title: '43002 SMART Board MX100 series',
        image: '/images/icons/smart.png'
    },
    {
        id: '38',
        issuer: 'SMART',
        title: '43003 Podium 624 and 624 Pro',
        image: '/images/icons/smart.png'
    },
    {
        id: '45',
        issuer: 'SMART',
        title: '43004 Learning Suite Online',
        image: '/images/icons/smart.png'
    },
    {
        id: '46',
        issuer: 'SMART',
        title: '43005 iQ Experience',
        image: '/images/icons/smart.png'
    },
    {
        id: '55',
        issuer: 'SMART',
        title: 'Room System with Skype for Business',
        image: '/images/icons/smart.png'
    },
    {
        id: '31',
        issuer: 'Symetrix',
        title: 'SymNet Composer Certification',
        image: '/images/icons/symetrix.png'
    },
];

export const experience = [

    {
        id: 8,
        company: 'Index Analytics',
        logo: '/images/icons/index.jpg',
        role: 'UI Developer',
        startDate: 'Jan 2025',
        endDate: 'Present',
        description: [
            'Designed and developed a Retrieval-Augmented Generation (RAG) AI application interface using Next.js, delivering a clean and responsive UI with seamless user interactions',
            'Integrated API endpoints, with Redux, to support dynamic AI-based content generation, ensuring fast retrieval and accurate contextual output',
            'Collaborated closely with backend and data teams to refine prompt engineering and optimize the overall RAG pipeline',
            'Focused on performance, accessibility, and UI/UX best practices to elevate the front-end experience',
        ],
    },
    {
        id: 8,
        company: 'Index Analytics',
        logo: '/images/icons/index.jpg',
        role: 'DevOps Engineer',
        startDate: 'Nov 2024',
        endDate: 'Present',
        description: [
            "Assist in the evaluation and recommendation of application software packages, and application integration and testing tools",
            'Created and maintained AWS CloudFormation templates to provision and manage infrastructure across development, staging, and production environments',
            'Implemented repeatable and secure deployment patterns, reducing manual configuration errors and improving infrastructure consistency',
        ],
    },
    {
        id: 7,
        company: 'Index Analytics',
        logo: '/images/icons/index.jpg',
        role: 'Full Stack Developer',
        startDate: 'Jan 2024',
        endDate: 'Present',
        description: [
            'Creation of AWS architectural designs for application planning',
            'Integrated a regression testing framework into the application lifecycle, enabling early detection of defects and improved release quality',
            'Designed and implemented custom algorithms to reduce API latency and increase database query efficiency and improve application performance',
        ],
    },
    {
        id: 6,
        company: 'Index Analytics',
        logo: '/images/icons/index.jpg',
        role: 'Jr. Full Stack Developer',
        startDate: 'Jun 2022',
        endDate: 'Jan 2024',
        description: [
            'Developed a full-stack AWS application that enabled users to upload and validate forms against complex rule sets',
            'Built interactive Angular components for seamless user experience, and connected them to Python-based validation services hosted on AWS Lambda',
            'Configured Route 53 for domain routing and developed custom CloudFormation templates to provision IAM roles, Lambda functions, VPC security groups, and AWS Secrets Manager',
            'Designed a scalable framework to migrate hundreds of thousands of legacy form files (TXT/CSV) into a structured PostgreSQL database',
            'Improved processing throughput and reduced data migration time by optimizing batch operations and parallel processing logic',
        ],
    },
    {
        id: 6,
        company: 'Skyward',
        logo: '/images/icons/skyward.jpg',
        role: 'Mid-Level Software Developer',
        startDate: 'Jun 2022',
        endDate: 'Apr 2023',
        description: [
            "Development of Python framework that automates a multitude of tasks through mainframe integration with various APIs",
            "Development of Python framework that automates end‑to‑end testing through a mainframe",
            "Continuous GitHub PR creation and reviews",
            "Creation and editing of technical documents including Software Architecture Diagrams, Unit Test Coverage reports, Feature Matrices, User Guides, Test Results Reports, and System Design Documents",
            "Demos to CMS stakeholders on products developed",
            "Utilization of Teams, Slack, Zoom, Jira, and Confluence for team collaboration",
            "Frequent participation in sprint‑ending demos showcasing newly built features, process improvements, and new skills learned",
            "Architecting a framework that automates mainframe tasks by processing data in JSON, Excel, and CSV formats—turning days of manual labor into minutes",
        ],
    },
    {
        id: 5,
        company: 'Skyward',
        logo: '/images/icons/skyward.jpg',
        role: 'Jr. Developer',
        startDate: 'Nov 2021',
        endDate: 'Jun 2022',
        description: [
            "Design, develop, enhance, debug, and implement software in an agile development environment",
            "Apply emerging automated build, test, and deployment capabilities; help develop project teams toward integrating solutions",
            "Mentor and guide team members who have less experience",
            "Address problems identified with system integration and capability during testing and implementation of developed software in support of customer objectives",
            "Consult with project teams and end users to identify software requirements",
            "Assist in the evaluation and recommendation of application software packages, and application integration and testing tools",
            "Resolve issues and problems with developed software and respond to suggestions for improvements and enhancements",
            "Participate in the development of software documentation such as training/user manuals",
        ],
    },
    {
        id: 4,
        company: 'Visual Sound Inc.',
        logo: '/images/icons/visual_sound_logo.jpg',
        role: 'Field Commissioning Engineer',
        startDate: 'Feb 2018',
        endDate: 'Oct 2021',
        description: [
            'Generation of modules in Simpl Windows and Simpl+ (C# language) to integrate new technology into legacy systems',
            'Designing, implementation, and updating of user interfaces with VTPro-e',
            'Building code for A/V classrooms and workspaces that varied from simple conference rooms to complex rooms for divisible spaces from a central control system',
            'Managing/Coordinating multiple jobs from initial installation through commissioning of the system',
            'Fielding of service calls that consisted of anything from hardware issues to locating/mitigating software bugs',
            'Programming of audio systems in Symmetrix, Biamp, and ClearOne',
        ],
    },
    {
        id: 3,
        company: 'Cenero',
        logo: '/images/icons/cenero_logo.jpg',
        role: 'Technical Service Engineer/Field Service Engineer',
        startDate: 'Aug 2016',
        endDate: 'Feb 2018',
        description: [
            'Servicing/Commissioning of new and legacy A/V systems',
            'Continuous management of multiple service tickets that involved coordinating, scheduling, generating quotes and site visits',
        ],
    },
    {
        id: 2,
        company: 'Visual Sound Inc.',
        logo: '/images/icons/visual_sound_logo.jpg',
        role: 'Installer',
        startDate: 'Jan 2015',
        endDate: 'Aug 2016',
        description: [
            'Servicing/Commissioning of new and legacy A/V systems',
        ],
    },
    {
        id: 1,
        company: 'Design & Integration, Inc.',
        logo: '/images/icons/design_and_integration_logo.jpg',
        role: 'Fabrication Manager',
        startDate: 'Jan 2012',
        endDate: 'Dec 2014',
        description: [
            'Creatively and cleanly built racks, keeping a consistent design and standard throughout multiple jobs',
            'Developed plans for individuals and teams to effectively complete racks on-time and under hours',
            'Worked closely with design engineers to develop consistent and accurate designs for A/V racks',
        ]
    },
];
