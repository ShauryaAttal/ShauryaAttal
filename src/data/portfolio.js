export const profile = {
  email: 'shaurya.attal@gmail.com',
  socials: { github: 'https://github.com/ShauryaAttal', linkedin: 'https://www.linkedin.com/in/shaurya-attal-512b5829b' },
  resumes: { software: '/resume-software-engineering.pdf', research: '/resume-research.pdf' },
  bio: {
    headline: 'I like working on hard problems.',
      paragraphs: [
    [
      { text: 'I’m ' },
      { text: 'Shaurya Attal', bold: true },
      { text: ', a Computer Science student at Georgia Tech ' },
      { text: 'exploring how software and artificial intelligence can help people make better decisions.', bold: true },
      { text: ' I am most energized by problems that sit at the ' },
      { text: 'intersection of technology and society', bold: true },
      { text: ', where thoughtful engineering has the potential to improve how people learn, work, and navigate an increasingly data-driven world.' },
    ],

    [
      { text: 'That mission has guided nearly every project I have built. ', bold: true },
      { text: 'Through ' },
      { text: 'LearnerSnapshot', bold: true },
      { text: ', I am exploring how cognitive data and machine learning can make education more personalized and accessible. My ' },
      { text: 'AI governance research', bold: true },
      { text: ' focuses on building transparent frameworks for evaluating AI systems and encouraging responsible deployment. Projects like ' },
      { text: 'AquaImpact', bold: true },
      { text: ' use predictive modeling to better understand environmental challenges, while ' },
      { text: 'The Pit Wall', bold: true },
      { text: ' and ' },
      { text: 'StockRiskEd', bold: true },
      { text: ' demonstrate how complex data can be transformed into intuitive tools that people can actually use.' },
    ],

    [
      { text: 'Whether I am building a full stack application, developing machine learning models, or conducting research, I am driven by the same question: ' },
      { text: 'how can technology transform complexity into clarity', bold: true },
      { text: ' while creating meaningful, measurable value for the people who rely on it? I hope to spend my career answering that question by building systems that are not only technically sophisticated, but ' },
      { text: 'genuinely useful, trustworthy, and designed with people in mind.', bold: true },
    ],
  ],
  },
};

export const filters = ['All','Software Engineering','AI + ML','Data + Analytics','Research + Governance','Education Technology'];

export const projects = [
  { id:'', slug:'learnersnapshot', title:'LearnerSnapshot', category:'Education Technology', categories:['Software Engineering','AI + ML','Data + Analytics','Education Technology'], status:'In development', shortDescription:'A game-based cognitive assessment platform that turns behavioral signals into academic-readiness insights.', technologies:['React','TypeScript','Convex','Machine Learning'] },
  { id:'', slug:'ai-governance', title:'Malicious AI Systems Research', category:'Research + Governance', categories:['AI + ML','Research + Governance','Data + Analytics'], status:'Ongoing', shortDescription:'A classification and evidence framework for studying AI systems intentionally designed for harm.', technologies:['AI Governance','Evidence Collection','Classification','Research Systems'] },
  { id:'', slug:'pit-wall', title:'The Pit Wall', category:'Software Engineering', categories:['Software Engineering','Data + Analytics'], status:'Project', shortDescription:'An automated Formula 1 dashboard with scheduled ingestion, conditional deployments, and current racing data.', technologies:['Python','JavaScript','APIs','GitHub Actions','GitHub Pages'], liveUrl:'https://shauryaattal.github.io/Shaurya-F1-Pitwall/' },
  { id:'', slug:'aquaimpact', title:'AquaImpact', category:'AI + ML', categories:['AI + ML','Data + Analytics'], status:'Project', shortDescription:'A machine-learning application translating environmental indicators into a normalized 0–100 water-stress risk score.', technologies:['Python','Streamlit','Pandas','NumPy','Matplotlib'], liveUrl:'https://aquaimpact-predictor.streamlit.app/' },
  { id:'', slug:'compas', title:'Algorithmic Justice / COMPAS', category:'Research + Governance', categories:['AI + ML','Data + Analytics','Research + Governance'], status:'Project', shortDescription:'A recidivism prediction study pairing model performance with feature engineering, tuning, and bias evaluation.', technologies:['Python','scikit-learn','HistGradientBoosting','Fairness Evaluation'], liveUrl:'https://bias-removed-justice.streamlit.app/' },
  { id:'', slug:'stockrisked', title:'StockRiskEd', category:'Data + Analytics', categories:['Software Engineering','Data + Analytics'], status:'Project', shortDescription:'An interpretable financial analytics app for returns, rolling volatility, and investment risk classification.', technologies:['Python','Streamlit','Pandas','NumPy','Matplotlib'], liveUrl:'https://stock-risk-ed.streamlit.app/' },
];

export const experiences = [
  { organization:'LearnerSnapshot Inc.', role:'Founding Software Engineer & Technical Lead', dates:'Jun 2025 — Present', summary:'Building a full-stack cognitive assessment product around game-based behavioral and performance data.', contribution:'Developed the React, TypeScript, and Convex application while shaping real-time analytics and predictive readiness modeling.', technologies:['React','TypeScript','Convex','Machine Learning'] },
  { organization:'Folio · Virtual', role:'Software Engineering Fellow', dates:'Jun 2024 — Oct 2024', summary:'Improved a live WordPress product’s usability and interface for hundreds of users.', contribution:'Built features in PHP and JavaScript, collaborated with engineers through launch, and resolved production and deployment issues.', technologies:['PHP','JavaScript','HTML/CSS','WordPress'] },
  { organization:'Personal', role:'Independent Developer', dates:'Jun 2024 — Present', summary:'Building a growing portfolio of software products and technical experiments across AI, education, data analytics, and web development.', contribution:'Designed, implemented, and deployed dozens of personal projects using modern full-stack technologies while continuously learning new tools, frameworks, and engineering practices.', technologies:['React','TypeScript','Python','ML', 'Codex', 'Git'] },
];

export const research = [
  { organization:'MIT Critical Data', role:'AI Governance Researcher', dates:'Feb 2026 — Present', summary:'Investigating how to identify AI systems intentionally designed for harm without collapsing important distinctions around criminal or dual-use technology.', contribution:'Designing classification and evidence standards, conducting case studies, and building automated documentation pipelines for a public repository.', technologies:['AI Governance','Case Studies','Evidence Standards','Research Automation'] },
  { organization:'Georgia Tech CEISMC / AI4OPT', role:'Student & Lead Mentor', dates:'Jun 2023 — Present', summary:'Developing and evaluating supervised-learning approaches for optimization and sentiment analysis while supporting student learning.', contribution:'Implemented Python ML models, contributed to course development, and mentored 200+ students.', technologies:['Python','Supervised Learning','Optimization','Mentorship'] },
  { organization:'Harvard Undergraduate Ventures TECH Summer Program', role:'AI / AGI Safety Research Intern', dates:'Jun 2025 — Jul 2025', summary:'Researched AGI safety applications in healthcare and education through the program, working with Amplify Institute researchers.', contribution:'Evaluated governance challenges and recommended responsible deployment strategies.', technologies:['AGI Safety','Healthcare','Education','Governance Analysis'] },
  { organization:'Inspirit AI Scholars', role:'Student Researcher & AI Ambassador', dates:'Jul 2024 — Nov 2024', summary:'Studied recidivism prediction on the COMPAS criminal-justice dataset, connecting model performance with fairness questions.', contribution:'Reached approximately 70% accuracy with a HistGradientBoostingClassifier after feature engineering and tuning; evaluated bias and explored applications with Fulton County DOJ and My Journey Matters.', technologies:['scikit-learn','HistGradientBoosting','Feature Engineering','Bias Evaluation'] },
];

export const leadership = [
  { title:'AI4OPT Mentorship', description:'Mentored more than 200 students and supported course development across computational and data science programs.' },
  { title:'OmniTech Careers', description:'Founded and led a student initiative focused on making technology and career pathways more accessible.' },
  { title:'Technical Education', description:'Turns complex ideas in machine learning, optimization, and responsible technology into approachable learning experiences.' },
];

export const skillGroups = [
  { title:'Programming', items:['Python','Java','TypeScript','JavaScript','SQL','HTML/CSS'] },
  { title:'Product Engineering', items:['React','Convex','Streamlit','WordPress','Git','GitHub'] },
  { title:'Machine Learning + Data', items:['scikit-learn','TensorFlow','Pandas','NumPy','Predictive modeling','Model evaluation'] },
  { title:'Research + Responsible AI', items:['Evidence collection','Classification frameworks','Bias evaluation','Governance analysis','Research documentation'] },
];
