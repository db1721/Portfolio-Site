export const projects = [
  {
    title: 'Expense Tracking App',
    description: "A simple react Expense Tracker, that uses State Management in React, Context API, "
    + "Local Storage, and Material UI. The app uses Speechly to use voice capabilities to add "
    + "income and expenses. The app is hosted on Netlify.",
      image: '/images/projects/expense.PNG',
      tags: ['React', 'JavaScript', 'Netlify', 'SpeechlyAPI'],
    visit: 'https://beck-expense-tracker-app.netlify.app/',
    source: 'https://github.com/db1721/Chat-App',
    id: 5,
  },
  {
    title: 'Traffic Simulator',
    description: 'A Java Swing GUI that displays time, traffic signals and other information for traffic analysts. '
    + 'User has the ability to start, pause, stop and add cars to the simulation.',
      image: '/images/projects/trafficapp.png',
      tags: ['Java'],
    visit: 'https://github.com/db1721/TrafficSimulator/tree/App',
    source: 'https://github.com/db1721/TrafficSimulator/tree/main',
    id: 4,
  },
  {
    title: 'Directed Graph',
    description: "A program that creates a directed graph from a text file and sorts classes from a text file using depth-first search.",
    image: '/images/directed-graph.PNG',
    tags: ['Java'],
    source: 'https://github.com/db1721/Directed-Graph/tree/main',
    visit: 'https://github.com/db1721/Directed-Graph/tree/App',
    id: 3,
  },
  {
    title: 'Web App Password',
    description: 'A simple web app that allows a user to create an account or sign in. The program compares a created password'
      + ' to a text file of known common passwords and will not allow the user to use those passwords. '
      + 'All user log in information is stored to a .csv file.',
      image: '/images/projects/webapp.png',
      tags: ['Python', 'Flask'],
    source: 'https://github.com/db1721/Web-App-Password/tree/main',
    visit: 'https://github.com/db1721/Web-App-Password/tree/App',
    id: 2,
  },
  {
    title: 'Real Estate Management',
    description:'A Java program that initializes a GUI that the user can store/recall/edit details of a property. '
      + 'The details of the property being stored are, the property address, number of bedrooms, square footage, price, '
      + 'and the status of the property, and are stored in a TreeMap.',
    image: '/images/projects/propertyManagement.png',
    tags: ['Java'],
    source: 'https://github.com/db1721/RealEstateManagement/tree/main',
    visit: 'https://github.com/db1721/RealEstateManagement/tree/App',
    id: 1,
  },
];

export const TimeLineData = [
  { year: 1, text: 'Adaptability', },
  { year: 2, text: 'Creativity', },
  { year: 3, text: 'Problem-Solving', },
  { year: 4, text: 'Lifelong Learner', },
  { year: 5, text: 'Self-Motivated', },
];

export const MyImage = [
  { image: '/images/dog.png', },
];

export const certificates = [
  { id: '1', 
    issuer: 'Excel',
    title: 'Microsoft Excel 2016',
    image: '/images/icons/microsoft.png'},
  { id: '7', 
    issuer: 'SoloLearn',
    title: 'HTML',
    image: '/images/icons/sololearn.png'},
  { id: '2', 
    issuer: 'SoloLearn',
    title: 'Java',
    image: '/images/icons/sololearn.png'},
  { id: '3', 
    issuer: 'SoloLearn',
    title: 'Python',
    image: '/images/icons/sololearn.png'},
  { id: '5', 
    issuer: 'SoloLearn',
    title: 'Data Science with Python',
    image: '/images/icons/sololearn.png'},
  { id: '4', 
    issuer: 'SoloLearn',
    title: 'SQL',
    image: '/images/icons/sololearn.png'},
  { id: '6', 
    issuer: 'SoloLearn',
    title: 'Ruby',
    image: '/images/icons/sololearn.png'},
];

export const avCertificates = [
  { id: '3', 
    issuer: 'Crestron',
    title: 'CTI-P101',
    image: '/images/icons/sheffield.png'},
  { id: '2', 
    issuer: 'Crestron',
    title: 'DMC-D-4K',
    image: '/images/icons/crestron.png'},
  { id: '1', 
    issuer: 'Sheffield',
    title: 'Techworks Completion Certificate',
    image: '/images/icons/crestron.png'},
];