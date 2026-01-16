
export interface Project {
    title: string;
    techStack: string[];
    description: string;
    link: {
        label: string;
        href: string;
    };
}

export interface WorkExperience {
    company: string;
    link: string;
    badges: string[];
    title: string;
    start: string;
    end: string;
    description: string;
}

export interface Education {
    school: string;
    degree: string;
    start: string;
    end: string;
}

export interface Social {
    name: string;
    url: string;
    icon: string;
}

export interface UserData {
    name: string;
    initials: string;
    location: string;
    locationLink: string;
    about: string;
    summary: string;
    avatarUrl: string;
    resumeUrl: string;
    personalWebsiteUrl: string;
    contact: {
        email: string;
        tel: string;
        social: Social[];
    };
    education: Education[];
    work: WorkExperience[];
    skills: string[];
    projects: Project[];
}

export const userData: UserData = {
    name: "Shilna P",
    initials: "SP", // Derived from Name or user provided 'Ms'? User said 'Ms'.
    location: "Palakkad, Kerala, India",
    locationLink: "https://www.google.com/maps/search/Palakkad,%20Kerala,%20India",
    about:
        "Highly motivated Software Engineer with experience in building scalable web applications, RESTful APIs, and AI-powered systems. Passionate about clean architecture, performance optimization, and DevOps-driven development.",
    summary:
        "I am a Software Engineer with strong expertise in Python-based backend development and modern frontend frameworks. I enjoy building robust APIs, integrating Generative AI and LLMs, and delivering secure, high-performance applications through clean code and best engineering practices.",
    avatarUrl: "",
    resumeUrl: "https://drive.google.com/file/d/1adWPCmR47Tn70qHf-ish_683oirlv7FG/view?usp=sharing",
    personalWebsiteUrl: "",
    contact: {
        email: "shilna2447@gmail.com",
        tel: "+917560992447",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/Shilnasaj",
                icon: "fab fa-github",
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/shilna-parokkot-88917423b",
                icon: "fab fa-linkedin-in",
            },
            {
                name: "Email",
                url: "mailto:shilna2447@gmail.com",
                icon: "fas fa-envelope",
            },
        ],
    },
    education: [
        {
            school: "University of Calicut",
            degree: "Master of Computer Applications (MCA)",
            start: "2019",
            end: "2022",
        },
        {
            school: "University of Calicut",
            degree: "Bachelor of Computer Applications (BCA)",
            start: "2016",
            end: "2019",
        },
    ],
    work: [
        {
            company: "Bridge Global",
            link: "https://www.bridge-global.com/",
            badges: ["Python", "Javascript", "REST API", "LLM", "GenAI", "ReactJs", "NextJs", "NodeJs", "AWS"],
            title: "Software Developer",
            start: "Jun 2025",
            end: "Present",
            description:
                "Developing and maintaining scalable RESTful APIs and responsive frontends. Integrated Generative AI and LLM-based features such as chatbots, semantic search, and personalized recommendations. Implemented authentication, authorization, security best practices, and performance optimizations while collaborating with cross-functional teams.",
        },
        {
            company: "Exlitem India (Offshore Research Partners)",
            link: "https://exlitem.com/",
            badges: ["Django", "DRF", "PostgreSQL", "REST API", "Git"],
            title: "Software Development Engineer 01 (SDE01)",
            start: "Aug 2024",
            end: "Feb 2025",
            description:
                "Built robust RESTful APIs using Django Rest Framework. Designed secure authentication and authorization systems, utilized Django ORM for database interactions, optimized PostgreSQL queries, and actively participated in code reviews and collaborative development workflows.",
        },
        {
            company: "Trigeminal AI",
            link: "https://trigeminal.ai/",
            badges: ["FastAPI", "Django", "SQL", "Nginx", "DevOps"],
            title: "Full Stack Developer",
            start: "Apr 2023",
            end: "Aug 2024",
            description:
                "Worked on full-stack development using FastAPI and Django. Built scalable APIs, managed databases, integrated DevOps tools like Nginx and Gunicorn, and delivered high-quality applications following agile methodologies.",
        },
        {
            company: "Luminar Technolab",
            link: "https://www.luminartechnolab.com/",
            badges: ["Python", "Django", "Angular", "Training"],
            title: "Full Stack Developer Trainee",
            start: "Jun 2022",
            end: "Dec 2022",
            description:
                "Trained in Python, Django, Angular, and Git. Gained hands-on experience across the full software development lifecycle, building foundational full-stack applications with strong version control practices.",
        },
    ],
    skills: [
        "Python",
        "Django",
        "FastAPI",
        "REST API",
        "LLM",
        "Generative AI",
        "JavaScript",
        "React.js",
        "PostgreSQL",
        "SQL",
        "AWS",
        "DigitalOcean",
        "Nginx",
        "Gunicorn",
        "Git",
        "Linux",
    ],
    projects: [
        {
            title: "Digital Pathology and Radiology Solution",
            techStack: ["Python", "FastAPI", "Pydicom", "OpenSlide", "AWS S3"],
            description:
                "Built a medical imaging platform integrating digital pathology and radiology. Implemented high-performance APIs, real-time communication using WebSockets, S3-based storage, and a microservices architecture for scalability and reliability.",
            link: {
                label: "View Project",
                href: "#",
            },
        },
        {
            title: "DD Camera Booking Application",
            techStack: ["Django REST", "React.js", "PostgreSQL"],
            description:
                "Developed a full-stack camera booking system with RESTful APIs and a responsive frontend. Followed modular design principles and managed version control using Git and GitHub.",
            link: {
                label: "GitHub",
                href: "#",
            },
        },
    ],
};
