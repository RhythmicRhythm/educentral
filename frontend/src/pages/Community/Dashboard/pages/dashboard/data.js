import {
    BanknotesIcon,
    UserPlusIcon,
    UserIcon,
    ChartBarIcon,
    BellIcon,
    PlusCircleIcon,
    ShoppingCartIcon,
    CreditCardIcon,
    LockOpenIcon,
  } from "@heroicons/react/24/solid";

  import { chartsConfig } from "../../configs/charts-config";

  export const projectsData = [
    {
      img: "/img/home-decor-1.jpeg",
      title: "Modern",
      tag: "Project #1",
      description:
        "As Uber works through a huge amount of internal management turmoil.",
      route: "/dashboard/profile",
      members: [
        { img: "/img/team-1.jpeg", name: "Romina Hadid" },
        { img: "/img/team-2.jpeg", name: "Ryan Tompson" },
        { img: "/img/team-3.jpeg", name: "Jessica Doe" },
        { img: "/img/team-4.jpeg", name: "Alexander Smith" },
      ],
    },
    {
      img: "/img/home-decor-2.jpeg",
      title: "Scandinavian",
      tag: "Project #2",
      description:
        "Music is something that every person has his or her own specific opinion about.",
      route: "/dashboard/profile",
      members: [
        { img: "/img/team-4.jpeg", name: "Alexander Smith" },
        { img: "/img/team-3.jpeg", name: "Jessica Doe" },
        { img: "/img/team-2.jpeg", name: "Ryan Tompson" },
        { img: "/img/team-1.jpeg", name: "Romina Hadid" },
      ],
    },
    {
      img: "/img/home-decor-3.jpeg",
      title: "Minimalist",
      tag: "Project #3",
      description:
        "Different people have different taste, and various types of music.",
      route: "/dashboard/profile",
      members: [
        { img: "/img/team-1.jpeg", name: "Romina Hadid" },
        { img: "/img/team-2.jpeg", name: "Ryan Tompson" },
        { img: "/img/team-3.jpeg", name: "Jessica Doe" },
        { img: "/img/team-4.jpeg", name: "Alexander Smith" },
      ],
    },
    {
      img: "/img/home-decor-4.jpeg",
      title: "Gothic",
      tag: "Project #4",
      description:
        "Why would anyone pick blue over pink? Pink is obviously a better color.",
      route: "/dashboard/profile",
      members: [
        { img: "/img/team-4.jpeg", name: "Alexander Smith" },
        { img: "/img/team-3.jpeg", name: "Jessica Doe" },
        { img: "/img/team-2.jpeg", name: "Ryan Tompson" },
        { img: "/img/team-1.jpeg", name: "Romina Hadid" },
      ],
    },
  ];

  export const platformSettingsData = [
    {
      title: "account",
      options: [
        {
          checked: true,
          label: "Email me when someone follows me",
        },
        {
          checked: false,
          label: "Email me when someone answers on my post",
        },
        {
          checked: true,
          label: "Email me when someone mentions me",
        },
      ],
    },
    {
      title: "application",
      options: [
        {
          checked: false,
          label: "New launches and projects",
        },
        {
          checked: true,
          label: "Monthly product updates",
        },
        {
          checked: false,
          label: "Subscribe to newsletter",
        },
      ],
    },
  ];

  export const ordersOverviewData = [
    {
      icon: BellIcon,
      color: "text-green-500",
      title: "$2400, Design changes",
      description: "22 DEC 7:20 PM",
    },
    {
      icon: PlusCircleIcon,
      color: "text-red-500",
      title: "New order #1832412",
      description: "21 DEC 11 PM",
    },
    {
      icon: ShoppingCartIcon,
      color: "text-blue-500",
      title: "Server payments for April",
      description: "21 DEC 9:34 PM",
    },
    {
      icon: CreditCardIcon,
      color: "text-orange-500",
      title: "New card added for order #4395133",
      description: "20 DEC 2:20 AM",
    },
    {
      icon: LockOpenIcon,
      color: "text-pink-500",
      title: "Unlock packages for development",
      description: "18 DEC 4:54 AM",
    },
    {
      icon: BanknotesIcon,
      color: "text-blue-gray-900",
      title: "New order #9583120",
      description: "17 DEC",
    },
  ];

  export const conversationsData = [
    {
      img: "/img/team-1.jpeg",
      name: "Sophie B.",
      message: "Hi! I need more information...",
    },
    {
      img: "/img/team-2.jpeg",
      name: "Alexander",
      message: "Awesome work, can you...",
    },
    {
      img: "/img/team-3.jpeg",
      name: "Ivanna",
      message: "About files I can...",
    },
    {
      img: "/img/team-4.jpeg",
      name: "Peterson",
      message: "Have a great afternoon...",
    },
    {
      img: "/img/bruce-mars.jpeg",
      name: "Bruce Mars",
      message: "Hi! I need more information...",
    },
  ];

export const authorsTableData = [
    {
      img: "/img/team-2.jpeg",
      name: "John Michael",
      email: "john@creative-tim.com",
      job: ["Manager", "Organization"],
      online: true,
      date: "23/04/18",
    },
    {
      img: "/img/team-1.jpeg",
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      job: ["Programator", "Developer"],
      online: false,
      date: "11/01/19",
    },
    {
      img: "/img/team-4.jpeg",
      name: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      job: ["Executive", "Projects"],
      online: true,
      date: "19/09/17",
    },
    {
      img: "/img/team-3.jpeg",
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      job: ["Programator", "Developer"],
      online: true,
      date: "24/12/08",
    },
    {
      img: "/img/bruce-mars.jpeg",
      name: "Bruce Mars",
      email: "bruce@creative-tim.com",
      job: ["Manager", "Executive"],
      online: false,
      date: "04/10/21",
    },
    {
      img: "/img/team-2.jpeg",
      name: "Alexander",
      email: "alexander@creative-tim.com",
      job: ["Programator", "Developer"],
      online: false,
      date: "14/09/20",
    },
  ];

  export const statisticsCardsData = [
    {
      color: "blue",
      icon: BanknotesIcon,
      title: "Today's Money",
      value: "$53k",
      footer: {
        color: "text-green-500",
        value: "+55%",
        label: "than last week",
      },
    },
    {
      color: "pink",
      icon: UserIcon,
      title: "Today's Users",
      value: "2,300",
      footer: {
        color: "text-green-500",
        value: "+3%",
        label: "than last month",
      },
    },
    {
      color: "green",
      icon: UserPlusIcon,
      title: "New Clients",
      value: "3,462",
      footer: {
        color: "text-red-500",
        value: "-2%",
        label: "than yesterday",
      },
    },
    {
      color: "orange",
      icon: ChartBarIcon,
      title: "Sales",
      value: "$103,430",
      footer: {
        color: "text-green-500",
        value: "+5%",
        label: "than yesterday",
      },
    },
  ];

  const websiteViewsChart = {
    type: "bar",
    height: 220,
    series: [
      {
        name: "Views",
        data: [50, 20, 10, 22, 50, 10, 40],
      },
    ],
    options: {
      ...chartsConfig,
      colors: "#fff",
      plotOptions: {
        bar: {
          columnWidth: "16%",
          borderRadius: 5,
        },
      },
      xaxis: {
        ...chartsConfig.xaxis,
        categories: ["M", "T", "W", "T", "F", "S", "S"],
      },
    },
  };
  
  const dailySalesChart = {
    type: "line",
    height: 220,
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      ...chartsConfig,
      colors: ["#fff"],
      stroke: {
        lineCap: "round",
      },
      markers: {
        size: 5,
      },
      xaxis: {
        ...chartsConfig.xaxis,
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  };
  
  const completedTasksChart = {
    ...dailySalesChart,
    series: [
      {
        name: "Tasks",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      },
    ],
  };
  
  export const statisticsChartsData = [
    {
      color: "blue",
      title: "Website View",
      description: "Last Campaign Performance",
      footer: "campaign sent 2 days ago",
      chart: websiteViewsChart,
    },
    {
      color: "pink",
      title: "Daily Sales",
      description: "15% increase in today sales",
      footer: "updated 4 min ago",
      chart: dailySalesChart,
    },
    {
      color: "green",
      title: "Completed Tasks",
      description: "Last Campaign Performance",
      footer: "just updated",
      chart: completedTasksChart,
    },
  ];

  export const projectsTableData = [
    {
      img: "/img/logo-xd.svg",
      name: "Material XD Version",
      members: [
        { img: "/img/team-1.jpeg", name: "Romina Hadid" },
        { img: "/img/team-2.jpeg", name: "Ryan Tompson" },
        { img: "/img/team-3.jpeg", name: "Jessica Doe" },
        { img: "/img/team-4.jpeg", name: "Alexander Smith" },
      ],
      budget: "$14,000",
      completion: 60,
    },
    {
      img: "/img/logo-atlassian.svg",
      name: "Add Progress Track",
      members: [
        { img: "/img/team-2.jpeg", name: "Ryan Tompson" },
        { img: "/img/team-4.jpeg", name: "Alexander Smith" },
      ],
      budget: "$3,000",
      completion: 10,
    },
    {
      img: "/img/logo-slack.svg",
      name: "Fix Platform Errors",
      members: [
        { img: "/img/team-3.jpeg", name: "Jessica Doe" },
        { img: "/img/team-1.jpeg", name: "Romina Hadid" },
      ],
      budget: "Not set",
      completion: 100,
    },
    {
      img: "/img/logo-spotify.svg",
      name: "Launch our Mobile App",
      members: [
        { img: "/img/team-4.jpeg", name: "Alexander Smith" },
        { img: "/img/team-3.jpeg", name: "Jessica Doe" },
        { img: "/img/team-2.jpeg", name: "Ryan Tompson" },
        { img: "/img/team-1.jpeg", name: "Romina Hadid" },
      ],
      budget: "$20,500",
      completion: 100,
    },
    {
      img: "/img/logo-jira.svg",
      name: "Add the New Pricing Page",
      members: [{ img: "/img/team-4.jpeg", name: "Alexander Smith" }],
      budget: "$500",
      completion: 25,
    },
    {
      img: "/img/logo-invision.svg",
      name: "Redesign New Online Shop",
      members: [
        { img: "/img/team-1.jpeg", name: "Romina Hadid" },
        { img: "/img/team-4.jpeg", name: "Alexander Smith" },
      ],
      budget: "$2,000",
      completion: 40,
    },
  ]; 