import project1 from "../assets/projects/project-1.jpeg"
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpeg";

export const HERO_CONTENT = `I am a passionate data engineer with a knack for designing robust and scalable data solutions. With 3 year of hands-on experience, I have honed my skills in data engineering tools and technologies like Python, SQL,AWS & .net. My goal is to leverage my expertise to build efficient data pipelines, ensuring data integrity and driving meaningful insights that support business growth and enhance decision-making processes.`;

export const ABOUT_TEXT = `I am an enthusiastic Software Engineer with three years of experience specializing in C#, Python, and AWS. My career has been driven by a passion for crafting robust and innovative software solutions that enhance efficiency and effectiveness. I have honed my skills across various facets of software development, from designing scalable applications to optimizing cloud infrastructure. My work includes building high-performance backend systems with C#, developing data-driven solutions with Python, and managing secure, scalable cloud environments using AWS. I am committed to continuous learning and adapting to new technologies to stay at the forefront of the industry. My goal is to contribute to cutting-edge projects and drive impactful outcomes through my technical expertise.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Engineer",
    company: "Virtusa Consulting Services.pvt.ltd",
    description: `Create AWS infrastructure by using Terraform. Worked on (AMIs,EC2,S3,EBS,RDS,Cloudwatch,Cloud-Formation,Security-Groups,Network routing). Create Migration Design. Integration of Git. Involved in Research of the project application architecture to support/resolve build, compile and test issues/problems`,
    technologies: ["AWS", "Gitlab", "Github", "Terraform"],
  },
  {
    year: "2022 - 2023",
    role: "Engineer-Technology",
    company: "Virtusa Consulting Services.pvt.ltd",
    description: ` I collaborated with IT management and clients to communicate development requirements, project status, and timely issue escalation to meet objectives. I provided production support by managing incidents, troubleshooting, and ensuring problem resolution, while adhering to regulatory and security standards. My experience includes SQL querying with Oracle and Microsoft SQL, and working on CVMPS and EOVS. `,
    technologies: ["C#", "SQl", "AppDynamics Monitoring tool", "Jira", "Bitbucket"],
  },
  {
    year: "2021 - 2022",
    role: "Associate-Engineer Technology",
    company: "Virtusa Consulting Services.pvt.ltd",
    description: ` I collaborated with IT management and clients to communicate development requirements, project status, and timely issue escalation to meet objectives. I provided production support by managing incidents, troubleshooting, and ensuring problem resolution, while adhering to regulatory and security standards. My experience includes SQL querying with Oracle and Microsoft SQL, and working on CVMPS and EOVS. `,
    technologies: ["C#", "SQl", "AppDynamics Monitoring tool", "Jira", "Bitbucket"],
  },
  {
    year: "2018 - 2021",
    role: "Co-founder",
    company: "Trigid Innovations",
    description: `As a co-founder and 3D printing engineer at Trigid Innovations, I lead the creation and delivery of high-quality 3D designs for our clients. My role ensures that our advanced printing solutions meet customer needs with precision and efficiency.`,
    technologies: ["3D-Printing"],
  },
];

export const EDUCATION =[ 
  {
  year: "2016-2020",
  college: "Aditya College of Engineering & Technology ",
  description:`As an ECE student, I'm immersed in the dynamic world of elctriconics and computer engineering. I accquire versatile technical skills, tackle intricate challenges, and collaborate effectively. My adaptability and passion for innovation drive me to design ethical and sustainable solutions. I'm poised for rewarding career in thia ever-evolving field.`,
  GPA: ["7.02 GPA"],
  Group: "Electronics & Communication Engineering",
},
  
];



export const PROJECTS = [
  {
    title: "Automation waste Segregation using IoT",
    image: project1,
    description:
      "The main objective of this project is to identify and separate dry, wet, and metal waste into their respective bins. The system is developed using sensors to differentiate between wet, dry, and metal waste, Arduino UNO, and servo motors. Through the ThingSpeak platform, we can track the number of bins with different types of waste using a mobile application.",
    technologies: ["Arduino", "Embedded C", "Thingspeak Platform"],
  },
  {
    title: "Vulnerability assessment",
    image: project2,
    description:
      "I conducted a comprehensive vulnerability assessment on Android and web applications, identifying security weaknesses in 200 websites. After thorough analysis, I reported the vulnerabilities to the respective authorities for corrective action. This effort reinforced my commitment to cybersecurity and contributed to the safety of the digital ecosystem.",
    technologies: ["GoogleDorks", "SQL Strings", "Bluestacks android emulator"],
  },
  {
    title: "Actors Portfolio",
    image: project3,
    description:
      "I created a responsive actors' portfolio website using HTML, CSS, JavaScript, and Bootstrap, featuring profiles, bios, and media showcases. The site offers a visually appealing, mobile-friendly design with interactive elements for enhanced user experience. This project highlights my skills in developing professional, user-centric web applications.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    title: "Basic Humanoid Robot",
    image: project4,
    description:
      "We used a Kinect sensor to measure the angle between elbow and shoulder joints, transmitting the data to an Arduino that controls servo arms. This setup was integrated into a humanoid robot design. The project showcases our ability to combine sensor technology and robotics for precise motion control.",
    technologies: ["Kinetic sensor", "Arduino", "Embedded C"],
  },
];

export const CONTACT = {
  address: "16-2-3, Satya Veeraju Nilayam, Rajamahendravram, Andhrapradesh, India",
  phoneNo: "+91-7013982881 ",
  email: "dattasailucky0409@gmail.com",
};
