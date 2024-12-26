import logo from './logo.svg'
import about from './about.png'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './1.png'
import project_img_2 from './2.png'
import project_img_3 from './3.png'
import project_img_4 from './4.png'
import project_img_5 from './5.png'
import project_img_6 from './6.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    about,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Skyline Haven",
      price: "$2,50,000",
      location: "California",
      image: project_img_1
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_2
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_3
    },
    {
      title: "Central Square",
      price: "$2,50,000",
      location: "Los Angeles",
      image: project_img_4
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_5
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Expertise You Can Trust",
        // title: "Marketing Manager",
        image: profile_img_1,
        alt: "Expertise You Can Trust",
        // rating: 5,
        text: "With 7 years of industry experience, Toothshaper ensures precision, quality, and innovation in every dental design."
    },
    {
        name: "Seamless Collaboration",
        // title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Seamless Collaboration",
        // rating: 4,
        text: "Tailored to meet your needs, we offer transparent communication and efficient solutions for your lab’s success.."
    },
    {
        name: "Cutting-Edge Technology",
        // title: "Co-Founder",
        image: profile_img_3,
        alt: "Cutting-Edge Technolog",
        // rating: 5,
        text: "Utilizing the latest CAD/CAM techniques and equipment, we deliver designs that combine functionality and aesthetics flawlessly."
    }
];