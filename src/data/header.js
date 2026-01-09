import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
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
        src: "/artists"
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
        title: "Angular",
        src: "/search/angular"
    },
    {
        title: "React",
        src: "/search/react"
    },
    {
        title: "CMS",
        src: "/search/cms"
    },
    {
        title: "Typescript",
        src: "/search/typescript"
    },
    {
        title: "Express",
        src: "/search/express"
    },
    {
        title: "MongoDB",
        src: "/search/mongodb"
    },
    {
        title: "MySQL",
        src: "/search/mysql"
    },
    {
        title: "PHP",
        src: "/search/php"
    },
    {
        title: "Docker",
        src: "/search/docker"
    },
    {
        title: "Kubernetes",
        src: "/search/kubernetes"
    },
    {
        title: "AWS",
        src: "/search/aws"
    },
    {
        title: "Azure",
        src: "/search/azure"
    },
    {
        title: "Bootstrap",
        src: "/search/bootstrap"
    },
    {
        title: "Tailwind",
        src: "/search/tailwind"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/daesukim/React-Youtube",
        icon: <AiFillGithub />
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
    }
]