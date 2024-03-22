import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "Overview",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "Recommended Videos",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "Favorite Artists",
        icon: <CiCoins1 />,
        src: "/developer"
    },
    {
        title: "Korean Traditional Music",
        icon: <CiBoxes />,
        src: "/trad"
    },
    {
        title: "Korean Hip Hop",
        icon: <CiBullhorn />,
        src: "/kpop"
    },
    {
        title: "Korean R&B",
        icon: <CiCoffeeCup />,
        src: "/rnb"
    },
    {
        title: "Korean Ballard",
        icon: <CiDumbbell />,
        src: "/ballard"
    },
];

export const searchKeyword = [
    {
        title: "Korean Music",
        src: "/search/korean music"
    },
    {
        title: "K-POP",
        src: "/search/korean music"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "RapidAPI",
        src: "/search/RapidAPI"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/daesukim/React-Youtube",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/@DaesuKim-ek7co",
        icon: <AiFillYoutube />
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/daesu-kim-399929257",
        icon: <FaLinkedin />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/dk_ighty",
        icon: <AiOutlineInstagram />
    },
]