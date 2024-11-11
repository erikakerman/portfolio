import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';

export const projects = [
    {
        id: 1,
        title: "Cupcake factory",
        year: "2024",
        category: "Web Development",
        description: "E-Commerce project. We all love our cupcakes. E-Commerce project. We all love our cupcakes. E-Commerce project. We all love our cupcakes.",
        image: project1Image
    },
    {
        id: 2,
        title: "Data Visualization Dashboard",
        year: "2022",
        category: "Data Science",
        description:
            "Interactive dashboard created using Python and Dash, visualizing complex datasets. Includes real-time data updates and customizable chart options.",
        color: "#10B981",
        technologies: ["Python", "Dash", "Pandas", "Plotly"],
        image: project2Image
    },
    {
        id: 3,
        title: "Dogs, dogs... more dogs",
        year: "2024",
        category: "Web Development",
        description: "Dog adoption site. Come get you dogs. Dog adoption site. Come get you dogs. Dog adoption site. Come get you dogs.",
        image: project3Image
    },
];