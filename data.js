//====== Skills ====
export const skills = [
  {
    img: "images/logos/net-seeklogo.com.svg",
    name: ".Net",
    percent: 65,
    barColor: "bg-info"
  },
  {
    img: "images/logos/dot-net-core-framework.svg",
    name: "Asp .Net Core",
    percent: 75,
    barColor: "bg-success"
  },
  {
    img: "images/logos/microsoft_sql_server.svg",
    name: "MsSql DB",
    percent: 69,
    barColor: "bg-success"
  },
  {
    img: "images/logos/webapi-aspmvc.svg",
    name: "Rest APIs",
    percent: 65,
    barColor: "bg-warning"
  },
  {
    img: "images/logos/Angular.svg",
    name: "Angular",
    percent: 69,
    barColor: "bg-danger"
  },
  {
    img: "images/logos/blazor.png",
    name: "Blazor",
    percent: 50,
    barColor: "bg-success"
  },
  {
    img: "images/logos/bootstrap.svg",
    name: "Bootstrap",
    percent: 69,
    barColor: "bg-success"
  },
  {
    img: "images/logos/html-5.svg",
    name: "Html",
    percent: 69,
    barColor: "bg-success"
  },
  {
    img: "images/logos/css3.svg",
    name: "Css",
    percent: 69,
    barColor: "bg-success"
  },
  {
    img: "images/logos/javascript.svg",
    name: "Javascript",
    percent: 69,
    barColor: "bg-success"
  },
  {
    img: "images/logos/typescript.svg",
    name: "TypeScript",
    percent: 50,
    barColor: "bg-warning"
  }
];



// educationData.js
// Export a plain array – works with <script type="module"> or CommonJS
export const education = [
  {
    id: "aptech",
    title: "Aptech Diploma of Software Engineering",
    period: "2018 - 2021",
    description:
      "Aptech is a globally recognized IT training institute that offers hands-on software engineering programs with a focus on programming, databases, and web development.",
    institution: "Aptech Learning Center, Karachi, Pakistan"
  },
  {
    id: "intermediate",
    title: "Intermediate Pre-Engineering",
    period: "2013 - 2016",
    description:
      "Completed pre-engineering studies with core subjects in Physics, Chemistry, and Mathematics, building a strong foundation for technical education.",
    institution: "Government Degree College, Karachi, Pakistan"
  },
  {
    id: "matric",
    title: "Matriculation",
    period: "2011 - 2013",
    description:
      "Secondary school education with emphasis on Science subjects, laying the groundwork for higher studies in engineering.",
    institution: "Beaconhouse School System, Karachi, Pakistan"
  }
];



// =============================================
// JOBS – FULLY UPDATED WITH YOUR REAL EXPERIENCE
// =============================================
export const jobs = [
  {
    id: "fiverr",
    company: "Fiverr, Freelancer",
    logo: "images/logos/Fiverr-Logo.jpg", // Add your logo
    title: "Full Stack .NET Developer",
    description: `
      I’m a passionate .NET Core MVC and Angular Developer with strong expertise in Azure, Docker, and Microservices architecture      
      Over the past few years, I’ve built modern, scalable, and secure web applications for clients across different industries. My focus is on clean architecture, performance optimization, and delivering real business value.
      <b class="text-success">Open to freelance & remote opportunities!</b>
    `.trim(),
    location: "Karachi, Pakistan · Remote",
    duration: "1 Month",
    startDate: "2025-10-01",
    endDate: null,
    link: "https://www.fiverr.com",
    skills: ["Angular", ".NET Core", "Azure", "Docker", "Microservices"]
  },
  {
    id: "amfco",
    company: "AMFCO International",
    logo: "images/logos/amfco_logo.png",
    title: "Associate Banking Software Developer",
    description: `
      Major Duties in Software Development for the Banking Sector<br><br>
      As a Banking Sector Software Developer, my role involved designing, developing, and maintaining secure and efficient banking applications. Key responsibilities include:<br><br>
      1. Core Banking System Development & Maintenance<br>
      2. Security & Compliance<br>
      3. Data Management & Reporting
    `.trim(),
    location: "On-site",
    duration: "1 yr 5 mos",
    startDate: "2024-02-01",
    endDate: "2025-06-30",
    link: "https://amfco.net/",
    skills: ["Genexus", "ASP.NET MVC Core", "SQL", "Banking Systems"]
  },
  {
    id: "nebras",
    company: "Nebras Enterprise Business Solution",
    logo: "images/logos/nebrasenterprisebusinesssolution_logo.jpg",
    title: "Associate ERP Developer",
    description: "Contributed to ERP system enhancements, focusing on business logic, database optimization, and user experience.",
    location: "On-site",
    duration: "3 mos",
    startDate: "2023-12-01",
    endDate: "2024-02-29",
    link: "https://www.nebrascorp.com/Insights",
    skills: ["SQL", "ASP.NET MVC", "ERP Systems"]
  },
  {
    id: "mehran-api",
    company: "MEHRAN COMMERCIAL ENTERPRISES",
    logo: "images/logos/mehran_commercial_enterprises_logo.jpg",
    title: ".Net Rest API Junior Developer",
    description: "Working Harder to Increase my Progress and Experience at Evolve Mehran Company",
    location: "Korangi District, Sindh, Pakistan",
    duration: "2 mos",
    startDate: "2023-10-01",
    endDate: "2023-11-30",
    link: "https://www.mce.com.pk/",
    skills: ["REST APIs", "Microsoft SQL Server", ".NET Core"]
  },
  {
    id: "mehran-intern",
    company: "MEHRAN COMMERCIAL ENTERPRISES",
    logo: "images/logos/mehran_commercial_enterprises_logo.jpg",
    title: ".net API Internee Developer",
    description: `
      Thanks to Mehran Team I have been selected for .NET Internee as API software Internee Developer. Willing to have Nice Working Pack in Future.<br>
      <i>--- Thanks Aptech Korangi ---</i>
    `.trim(),
    location: "Creek, National Industrial Park, Karachi, Pakistan",
    duration: "6 mos",
    startDate: "2023-05-01",
    endDate: "2023-10-31",
    link: "https://www.mce.com.pk/",
    skills: ["ASP.NET Web API", ".NET Framework"]
  },
  {
    id: "cartzlink",
    company: "CARTZ Link",
    logo: "images/logos/logo-login.png",
    title: "Asp.Net MVC Intern Developer",
    description: `
      I worked as Internship in Cartz was best Experience for me. Got So much experience in Short Amount of Time.<br>
      It was Good Experience for me to get Touch in Software House.
    `.trim(),
    location: "Hybrid",
    duration: "3 mos",
    startDate: "2022-11-01",
    endDate: "2023-01-31",
    link: "https://cartzlink.com/",
    skills: ["ASP.NET MVC", "Databases", "PHP Core", "C#"]
  }
];





// data.js
export const projects = [
  {
    id: "vision",
    title: "eCommerce Project on Aptech Vission 2022",
    image: "images/logos/Vision.png",
    link: "https://msaqib123.github.io/Vission2022/",
    demo: "https://msaqib123.github.io/Vission2022/",
    demoLink:"https://www.youtube.com/watch?v=bklrNFWDZdA",
    categories: ["Vision"]
  },
  {
    id: "dating",
    title: "Dateing Project",
    image: "images/img1.jpg",
    link: "https://github.com/MSaqib123/Angular_dotNet",
    // demo: "https://github.com/MSaqib123/Angular_dotNet",
    categories: ["API"]
  },
  {
    id: "jwt",
    title: "JWT Token",
    image: "images/img1.jpg",
    link: "https://github.com/MSaqib123/Angular_dotNet",
    categories: ["API"]
  },
  {
    id: "clothbazar",
    title: "ClothBaza MVC 4.8 Project",
    image: "images/logos/clothBazar.png",
    link: "https://github.com/MSaqib123/ClothBazar",
    categories: ["MVC"]
  },
  {
    id: "college",
    title: "College Management System<br>E-Project Aptech",
    image: "images/College-Management-System.png",
    link: "https://github.com/MSaqib123/CollegeManagemementSystem",
    categories: ["MVCCore"]
  },
  {
    id: "ams",
    title: "C# Rest APIs Working on AMS_ERP in Evolve",
    image: "images/logos/evolveAms.png",
    link: "http://ams.evolveppt.com/",
    demo: "http://ams.evolveppt.com/",
    categories: ["evolve"]
  }
];

// Auto-extract unique categories
const allCategories = new Set();
projects.forEach(p => p.categories.forEach(cat => allCategories.add(cat)));

export const categories = ["all", ...Array.from(allCategories)];