import project1 from "../assets/projects/project-1.png"
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";


export const HERO_CONTENT = `Specializing in Python, AWS, and infrastructure automation. I design secure, high-performance data workflows and implement efficient deployment pipelines to drive business agility and operational excellence.`;

export const ABOUT_TEXT = `I’m a Software Engineer with 4 years of experience specializing in C#, Python, and AWS. I build the engines that run modern applications—focusing on high-performance backend systems, data-driven software, and scalable, secure cloud infrastructure.

I am driven by a passion for continuous learning and a desire to turn complex problems into elegant, efficient solutions. Whether I'm optimizing an AWS environment or architecting a new application from the ground up, my focus is always on delivering robust tech that drives real business impact.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - Present",
    role: "AWS Data Engineer",
    company: "Tata Consultancy Services" ,
    description: `Optimized AWS Glue ETL scripts using PySpark to load data from Amazon S3 to MySQL, ensuring high performance and data integrity. Designed and managed MySQL database objects such as tables, views, and indexes to support business reporting needs. Performed advanced data transformations and validations in Glue to deliver clean, analytics-ready datasets. The data pipelines were automatically and standardized using AWS Glue Workflows and Amazon EventBridge to make them run event-driven, with errors nevertheless handled. The ETL workflows were tested, debugged and permanently maintained through collaboration with cross-functional teams to ensure that scaling and reliability were guaranteed.`,
    technologies: ["AWS Glue", "PySpark", "MySQL", "Amazon S3", "AWS Glue","EventBridge"],
  },
  {
    year: "April 2025 - June 2025",
    role: "Data Engineer & Analytics Specialist",
    company: "Tata Consultancy Services",
    description: `Completed a knowledge transition for the Eli Lilly GCP migration and analytics project while having hands-on experience with important tools like BigQuery, Cloud Storage, and Dataflow within the Google Application Modernization framework. Helped to design and test small-scale data pipelines with the use of Python and SQL, incorporating it to ingestion and transformation steps to reach modernization goals. Consulted with senior team members to learn and adhere to GCP-based workflows, operating as part of the initial tasks related to data validation, table creation in BigQuery, and general cloud activities.`,
    technologies: ["GCP", "BigQuery", "Cloud Storage", "Dataflow", "Python", "SQL"],
  },
  
  {
    year: "2023 - 2024",
    role: "Engineer",
    company: "Virtusa Consulting Services.pvt.ltd",
    description: `Create AWS infrastructure by using Terraform. Worked on (AMIs,EC2,S3,EBS,RDS,Cloudwatch,Cloud-Formation,Security-Groups,Network routing). Create Migration Design. Integration of Git. Involved in Research of the project application architecture to support/resolve build, compile and test issues/problems`,
    technologies: ["AWS", "Gitlab", "Github", "Terraform", "Python", "SQL"],
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
