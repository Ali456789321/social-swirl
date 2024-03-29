import img1 from '../images/frontjob.jpg'
import img2 from '../images/backend.jpg'
import img3 from '../images/graphic-designing.jpg'
import img4 from '../images/seo.jpg'
import img5 from '../images/human.jpg'
import img6 from '../images/social.jpg'



const jobs = [
    {
        id: 1,
        job: "Frontend Development",
        img: img1,
        skills: ["HTML", "CSS", "JAVA"],
        desc: "Design The Website",
        details: "Social Swirl is seeking a passionate and talented Junior Front-End Developer to join our growing team. In this role, you will be responsible for building and maintaining the user interface of our web applications, working closely with designers and back-end developers to deliver a seamless and engaging user experience.",
        responsibilities: [
            "Translate UI/UX designs into clean, well-structured, and reusable front-end code using HTML, CSS, Javascript, Jquery, tailwind and bootstrap.",
            "Optimize website performance for various devices and browsers, ensuring cross-browser compatibility.",
            "Collaborate with designers and back-end developers to understand requirements and ensure consistency between the front-end and back-end.",
            "Stay up-to-date with the latest front-end technologies and trends."
        ],
        qualifications: [
            "Strong understanding of HTML, CSS, Javascript, Jquery, tailwind and bootstrap.",
            "Familiarity with at least one JavaScript framework (e.g., React, Angular, Vue.js) is a plus.",
            "Strong problem-solving and debugging skills.",
            "Excellent communication and collaboration skills.",
            "Passion for learning and staying up-to-date with the latest technologies."
        ]
    },
    {
        id: 2,
        job: "Backend Development",
        img: img2,
        skills: ["Node", "Express", "Mongodb"],
        desc: "Build Apis",
        details: "Social Swirl is offering an exciting opportunity for motivated individuals to join our software house as Intern forLaravel, PHP & MySql,. As Intern, you will have the chance to gain hands-on experience, work alongside experienced professionals, and contribute to real-world software development projects such as CRM, HRM, ERP, POS, etc. This internship is designed to provide you with valuable insights into the software development industry",
        responsibilities: [
            "Collaborate with cross-functional teams on various software projects.",
            "Assist in coding, testing, and debugging software applications.",
            "Learn and apply best practices in software development.",
            "Participate in code reviews and provide constructive feedback."
        ],
        qualifications: [
            "Pursuing a degree in Computer Science, Software Engineering, or a related field.",
            "Basic knowledge of programming languages (Laravel, PHP, MySql, C++, etc.).",
            "Eagerness to learn and a strong passion for software development.",
            "Excellent problem-solving and analytical skills."
        ]
    },
    {
        id: 3,
        job: "Graphic Designing",
        img: img3,
        skills: ["Photoshop", "Illustrator", "Canva"],
        desc: "Logo Designing",
        details: "Social Swirl is looking for a talented and experienced graphic to join our team. In this role, you will be responsible for a variety of tasks, including:",
        responsibilities: [
            "Designing and developing graphics and layouts for websites and other digital media",
            "Creating user interfaces and user experiences",
            "Working with clients to understand their needs and vision",
            "Collaborating with developers to ensure that designs are implemented correctly"
        ],
        qualifications: [
            "At least 1 year of experience as a graphic/web designer",
            "A strong portfolio of work",
            "Proficiency in Adobe Creative Suite, including Photoshop, and Illustrator",
            "Excellent communication and collaboration skills"    
        ]
    },
    {
        id: 4,
        job: "Search Engine Optimization",
        img: img4,
        skills: ["Wordpress", "Keyword Research", "Copy Writing"],
        desc: "Search Keywwords",
        details: "We are looking for a result-driven SEO Specialist to be responsible for developing optimized web strategies. The SEO executive's responsibilities include working closely with the marketing team to achieve SEO objectives, measuring the success of SEO and ROI, and assisting with the maintenance of the website's architecture to ensure user friendliness.",
        responsibilities: [
            "Conducting on-site, off-site and technical analysis of web SEO competition.",
            "Using google analytics, search console and other SEO tools to conduct performance reports regularly.",
            "Extensive and proven experience in SEO (Off-page, On-page and technical) ",
            "Thorough understanding of web design and site structures."
        ],
        qualifications: [
            "Marketing degree or related.",
            "Working knowledge of Google Analytics/search console.",
            "Experience with coding techniques.",
            "Good knowledge of back link analysis and creation."   
        ]
    },
    {
        id: 5,
        job: "Human Resource",
        img: img5,
        skills: ["Communication", "Teamwork", "Email Marketing"],
        desc: "Advising employees",
        details:" In this role, you will coordinate complex processes and deliver human resource services, which include monitoring compliance programs. You will also help execute and deliver employee experience services such as attendance, local training delivery and performance management. Key Accountabilities",
        responsibilities: [
            "Assist with the recruitment process by scheduling interviews, and conducting initial candidate assessments.",
            "Maintain employee records and HR databases, ensuring accuracy and confidentiality.",
            "Assist in the implementation of HR policies and procedures, ensuring compliance with relevant laws and regulations.",
            "Assist with HR reporting and analytics, compiling data and generating reports as needed."
        ],
        qualifications: [
            "Bachelor's degree in Human Resources, Business Administration, or related field.",
            "Proven experience as an HR Coordinator or similar role, preferably in a fast-paced environment.",
            "Strong understanding of HR functions, processes, and best practices.",
            "Excellent organizational and time management skills, with the ability to prioritize tasks and meet deadlines."
        ]
    },
    {
        id: 6,
        job: "Social Media Marketing",
        img: img6,
        skills: ["SEO", "Strategic Thinking", "Advising"],
        desc: "Social Medai Posting",
        details: "As a Social Media Associate you will be responsible for developing and executing social media strategies to promote our company across various platforms.This role involves content creation, community management, and performance analysis to ensure our social media presence aligns with company goals and resonates with our target audience.",
        responsibilities: [
            "Manage and monitor company social media accounts.",
            "Develop visually appealing and engaging content for social media platforms.",
            "Create and schedule posts that reflect the brand identity and marketing objectives.",
            "Provide regular reports with insights and recommendations for improvement"
        ],
        qualifications: [
            "Bachelor's degree in Marketing, Communications, or a related field.",
            "Familiarity with social media platforms (Instagram, Twitter, LinkedIn, Facebook, etc.).",
            "Creative mindset with a keen eye for design and visual aesthetics.",
            "Strong written and verbal communication skills."
        ]
    }
]

export default jobs