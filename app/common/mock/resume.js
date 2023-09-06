import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

export const ContactDetails = [
  {
    id: 1,
    icon: <BiSolidPhoneCall />,
    contact_head: "Phone",
    contact_info: "+91 7027141891",
    url: "tel:+917027141891",
  },
  {
    id: 2,
    icon: <AiOutlineMail />,
    contact_head: "Email",
    contact_info: "kakkaransh40@gmail.com",
    url: "mailto:kakkaransh40@gmail.com",
  },
  {
    id: 3,
    icon: <CiLocationOn />,
    contact_head: "Address",
    contact_info: "Radaur,Haryana",
  },
];

export const TechnicalSkills = [
  {
    tech: "React Js",
  },
  {
    tech: "Javascript",
  },
  {
    tech: "NPM",
  },
  {
    tech: "Git",
  },
  {
    tech: "CSS",
  },
  {
    tech: "Bootstrap",
  },
  {
    tech: "HTML",
  },
];

export const EducationDetails = [
  {
    heading: "Master Of Computer Application : ",
    field: "Computer Science",
    location: "Amity University ,Noida",
    startDate: "July 2023",
    endDate: "present",
  },
  {
    heading: "Diploma in Web Technologies : ",
    field: "Information & Technology",
    location: "Hatron Skill Center ,Yamunanagar",
    startDate: "Nov 2021",
    endDate: "Dec 2022",
  },
  {
    heading: "Bachelor Of Commerce : ",
    field: "Business & Commerce",
    location: "Kurukshetra University ,Kurukshetra",
    startDate: "Jul 2018 ",
    endDate: "Aug 2021",
  },
];

export const ExperienceDetails = [
  {
    heading: "Himtreasure Infotech, LLP,",
    location: "React Developer",
    field: "Mohali",
    startDate: "Sep 2022",
    endDate: "Apr 2023",
    description: [
      {
        desc: "Created Web Applications Based on React",
      },
      {
        desc: "Integrated Rest Calls using React To Streamline User Interface Performance",
      },
      {
        desc: "Engaged with Clients To Plan and Optmize SIte Issue And Queries.",
      },
    ],
  },
  {
    heading: "Coderzbar Agency ,",
    location: "React Developer",
    field: "Mohali",
    startDate: "Apr 2023",
    endDate: "present",
    description: [
      {
        desc: "Successfully developed a dog store web app",
      },
      {
        desc: "Made consistent contributions to daily tasks and activities",
      },
    ],
  },
];
