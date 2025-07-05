import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate frontend developer who loves crafting beautiful and responsive web interfaces. I specialize in turning complex ideas into clean, functional, and visually appealing designs. With solid experience in React, Tailwind CSS, and modern web development tools, I focus on writing scalable and maintainable code. I’m always eager to learn new technologies and stay updated with the latest trends in frontend development. My goal is to deliver smooth, user-friendly digital experiences that leave a lasting impression and add real value to every project I work on.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        year: "2025 - Present",
        role: "Frontend Developer",
        company: "Quest Digiflex Pvt. LTD",
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and implemented RESTful APIs. Collaborated with managers on live projects to gather requirements and align frontend goals. Built responsive, cross-device compatible UIs and developed reusable, modular components to enhance scalability and maintainability.`,
        technologies: ["Javascript", "React.js", "Tailwind CSS", "Material UI", "Vite", "Git", "GitHub"],
    },
    // {
    //     year: "2022 - 2023",
    //     role: "Frontend Developer",
    //     company: "Adobe",
    //     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    //     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    // },
    // {
    //     year: "2021 - 2022",
    //     role: "Full Stack Developer",
    //     company: "Facebook",
    //     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    //     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
    // },
    // {
    //     year: "2020 - 2021",
    //     role: "Software Engineer",
    //     company: "Paypal",
    //     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    //     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
    // },
];

export const PROJECTS = [
    {
        title: "Ujjain Mahakal Website",
        image: project5, 
        description: "A responsive and SEO-optimized spiritual tourism platform built with Next.js and CSS Modules for UjjainMahakal.com. Integrated REST APIs to handle dynamic bookings for tours, poojas, hotels, vehicles, and helicopter packages. Cloud-based image hosting with Contabo improved load speed by 40%.",
        technologies: ["React", "Next.js", "CSS Modules", "REST API", "Contabo Cloud"],
    },
    {
        title: "MP Jungle Safari",
        image: project1,
        description:
            "A MERN stack-based website enabling real-time safari bookings with dynamic routing and hotel data integration through REST APIs.",
        technologies: ["React", "Tailwind CSS", "Vite", "Node.js", "Express", "MongoDB"],
    },
    {
        title: "Tractors-24",
        image: project3,
        description:
            "Responsive MERN web application showcasing tractor listings with modern UI using MUI and smooth client-side routing.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Material UI"],
    },
    {
        title: "Digiflex Website",
        image: project2,
        description:
            "A 60+ page company website built from scratch, focusing on responsive UI and performance across devices. Led a team of 10+ developers and handled deployment and GitHub-based collaboration.",
        technologies: ["HTML", "React", "Vite", "Tailwind CSS"],
    },
    {
        title: "Portfolio Website",
        image: project4,
        description:
            "A personal portfolio website showcasing projects, skills, experience and contact information.",
        technologies: ["React", "Vite", "Tailwind CSS"],
    },
];

export const CONTACT = {
    address: "Rajendra Nagar, Indore - 452012",
    phoneNo: `+91 7489951720`,
    email: "divyanshuaaliwal@gmail.com",
};
