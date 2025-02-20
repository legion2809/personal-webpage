import rmorf_icon from '../assets/img/rmorf_icon.png'
import effects_icon from '../assets/img/effects_icon.png'

// Header links
export const header_links = [
    {
        href: "#top",
        text: "Home",
        title: "To the top of the page"
    },
    {
        href: "#aboutme",
        text: "About me",
        title: "To \"About me\" section"
    },
    {
        href: "#portfolio",
        text: "Portfolio",
        title: "To \"My Projects\" section"
    },
    {
        href: "#contacts",
        text: "Contacts",
        title: "To \"Contacts\" section"
    }
]

// Main text of "About me" section
export const aboutme_text = [
    {
        id: 0,
        text: "Hello there, reader! My name is Yerkanat Sheriyazdanov. I'm from Kazakhstan, living in the city named Öskemen (or Ust'-Kamenogorsk) and at the moment I'm actively looking for a job in IT sphere."
    },
    {
        id: 1,
        text: "My general interest in computers started in 2010, when, as a 9-year-old kid, I was introduced to the world of video games. Since then, videogames became the main hobby in my life."
    },
    {
        id: 2,
        text: "Speaking of interest in programming specifically, it came much later (specifically - in 2017, when I was in 10th grade at school). For this I'd like to thank the modding community of my first and one of my favorite computer games - \"Mafia: The City of Lost Heaven\". Thus, I can say that one hobby at one time contributed to the emergence of a new one."
    },
    {
        id: 3,
        text: "After realizing that I'm unfit for physical work due to illness and because of strong interest in IT sphere, I decided that the work as a programmer will be 100% suitable for me."
    },
    {
        id: 4,
        text: "Currently I'm focused on improving my skills on the following programming languages and technologies:"
    }
]

// List of technologies, skills and languages in the main text of "About me" section
export const list_of_skills = [
    {
        id: 0,
        item: "Git, Docker;"
    },
    {
        id: 1,
        item: "C, C++, C#, Java;"
    },
    {
        id: 2,
        item: "HTML, CSS, JS (including React);"
    },
    {
        id: 3,
        item: "Python, PHP, SQL;"
    },
    {
        id: 4,
        item: "MySQL, PostgreSQL, MS SQL Server, SQLite;"
    },
    {
        id: 5,
        item: "1C: Enterprise configurations development;"
    },
    {
        id: 6,
        item: "Windows and Linux servers administration;"
    },
    {
        id: 7,
        item: "Cloud-native applications, CI/CD and etc."
    },
]

// Projects list at "My Projects" section
export const projects_list = [
    {
        img_src: rmorf_icon,
        name: "Rmorf.bin Editor",
        desc: "Rmorf.bin Editor is a program which purposed to animate morph objects in \"Mafia: The City of Lost Heaven\".",
        link: "https://github.com/legion2809/RmorfBinEditorWPF",
        dev_year: "2021",
        role: "Co-author",
        dev: "Smelson (<a href=\"https://github.com/Smelson\" target=\"_blank\">GitHub profile</a>), Firefox3860 (<a href=\"https://github.com/Firefox3860\" target=\"_blank\">GitHub profile</a>)",
        used: "C#, .NET Framework 4.6, WPF"
    },
    {
        img_src: effects_icon,
        name: "Effects.bin Editor",
        desc: "A program which purposed to add or remove particle effects from a particular mission in \"Mafia: The City of Lost Heaven\".",
        link: "https://github.com/legion2809/EffectsBinEditorWPF",
        dev_year: "2023",
        role: "Co-author",
        dev: "Smelson (<a href=\"https://github.com/Smelson\" target=\"_blank\">GitHub profile</a>)",
        used: "C#, .NET Core 6.0, WPF"
    }
]

// Social links at "Contacts" section
export const social_links = [
    {
        id: "github",
        class: "fa-brands fa-github",
        link: "https://github.com/legion2809",
        title: "Me at GitHub"
    },
    {
        id: "vk",
        class: "fa-brands fa-vk",
        link: "https://vk.com/yerkanat_sh",
        title: "Me at VKontakte"
    },
    {
        id: "steam",
        class: "fa-brands fa-steam",
        link: "https://steamcommunity.com/id/yerkanat_s/",
        title: "Me at Steam"
    },
    {
        id: "telegram",
        class: "fa-brands fa-telegram",
        link: "https://t.me/yerkanat_sh",
        title: "Me at Telegram"
    }
]