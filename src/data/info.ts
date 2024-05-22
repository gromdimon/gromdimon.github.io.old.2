export const info = {
  name: "Dzmitry Hramyka",
  brief_description:
    "I'm a full-stack developer at the exciting crossroads of AI and bioinformatics",
  role: "Full Stack Developer",
  picture: "/photo.png",
  picture_alt: "Dzmitry Hramyka",
  location: "Berlin, Germany",
  cv: "/resume.pdf",

  about: {
    description: `I'm a full stack developer with a passion for AI Engineering. 
    Coming from bioinformatics background, I have a strong foundation in Big Data and responsible Software Development.
    Combining my love for coding and AI, I'm always looking for new ways to innovate and push the boundaries of technology (often in my head).
    Outside of coding, I'm enjoing sabre fencing and hicking in the wildlife.
    Interested in working together? Feel free to reach out!`,
    education: [
      {
        title: "B.Sc. in Bioinformatics",
        date: "2022 - Present",
        location: "Free University of Berlin",
        gpa: "1.2/5",
        description: `Thesis coming soon... 
        Knowldedge gained: C++, R, Algorithms, Linear Algebra, Statistics, Machine Learning`,
      },
      {
        title: "B.Sc. in Biotechnology",
        date: "2021 - 2022",
        location: "Belarusian State University",
        gpa: "9.7/10",
        description: `Didn't finish -> moved to Berlin.
        Knowldedge gained: Molecular Biology, Genetics, Biochemistry`,
      },
    ],
    experience: [
      {
        title: "Software Engineer",
        date: "08.2023 - Present",
        location: "Core Unit Bioinformatics (CUBI)",
        description: `Started as a backend developer, turned into a full stack developer.
          Worked on projects: sodar-core, sodar-server, reev, autoPVS1. 
          Contributed to the development of RESTful APIs, enhanced timeline features and fixed bugs in sodar-core and sodar-server.
          Architected and developed in collaboration with Manuel Holtgrewe a robust, user-friendly platform for analysis and assessment of genetic variants (REEV) from scratch.
          For more information follow the links.`,
        links: [
          {
            title: "sodar-core",
            url: "https://github.com/bihealth/sodar-core",
          },
          {
            title: "sodar-server",
            url: "https://github.com/bihealth/sodar-server",
          },
          {
            title: "reev",
            url: "https://github.com/bihealth/reev",
          },
        ],
      },
      {
        title: "Backend Developer",
        date: "12.2021 - 04.2022",
        location: "Jobguide",
        description: `Worked on web services for the Jobguide platform. Implemented new features and fixed bugs. Made the backend more robust and scalable.
          Technologies used: Python, Django, Django Rest Framework, MySQL.`,
        links: [
          {
            title: "Jobguide",
            url: "https://jobguide.ru/",
          },
        ],
      },
      {
        title: "Student Researcher",
        date: "11.2021 - 09.2022",
        location: "Belarusian State University",
        description: `Developed a pipeline for automatic annotation of pormoter regiones in bacteria within genomic browser SigmoID.
          The pipeline with helper scripts and data parsers was included in package CRtagFinder.
          Technologies used: Python.`,
        links: [
          {
            title: "SigmoID",
            url: "https://github.com/nikolaichik/SigmoID",
          },
          {
            title: "CRTagFinder",
            url: "https://github.com/gromdimon/CRtagFinder",
          },
        ],
      },
    ],

    skills: ["Python", "Typescript", "Javascript", "C++"], // not used yet
  },

  projects: [
    {
      title: "beLLM - A Belarusian LLM",
      date: "Dec. 2023 - Jan. 2024",
      description:
        "Pioneering the development of a Belarusian Large Language Model to promote the Belarusian literary heritage through advanced NLP.",
      // link: "https://github.com/gromdimon/beLLM",
      link: "posts/bellm",
      tech: ["Python", "PyTorch", "NumPy", "Pydantic"],
      img_alt: "beLLM Project",
      img_path: "/bellm/header.jpg",
    },
    {
      title: "LLM Bootcamp",
      date: "Oct. 2023",
      description:
        "Developed a full-stack AI assistant utilizing GPT-3, integrated with web technologies for interactive user experiences.",
      // link: "https://fullstackdeeplearning.com/llm-bootcamp/",
      link: "posts/llm-bootcamp",
      tech: ["Python", "FastAPI", "React", "GPT-3"],
      img_alt: "LLM Bootcamp Project",
      img_path: "llm_bootcamp/header.jpg",
    },
    {
      title: "MmSCel - Kaggle Contest",
      date: "Nov. 2022",
      description:
        "Engaged in a Kaggle contest to develop Machine Learning models for multimodal challenges, integrating diverse data types.",
      // link: "https://www.kaggle.com/competitions/open-problems-multimodal",
      link: "posts/mmscel",
      tech: ["PyTorch", "Scikit-learn", "Pandas", "NumPy"],
      img_alt: "MmSCel Project",
      img_path: "mmscel/header.jpg",
    },
    {
      title: "BCM_HGSC Hackathon",
      date: "Oct. 2022",
      description:
        "Created a database query tool for genomic research, contributing to a paper on its applications.",
      // link: "https://www.hgsc.bcm.edu/events/hackathon",
      link: "posts/bcm-hackathon",
      tech: ["Python", "SQLite", "Jupyter Notebooks"],
      img_alt: "BCM_HGSC Hackathon Project",
      img_path: "bcm_hackathon/header.jpg",
    },
    {
      title: "Internship at BSU - Eco-Diversity Research",
      date: "Jul. 2022",
      description:
        "Conducted eco-diversity research at Belarusian State University, analyzing environmental data to assess biodiversity.",
      // link: "https://bsu.by/en/",
      link: "posts/bsu-internship",
      tech: ["Image recognition"],
      img_alt: "BSU Internship Project",
      img_path: "bsu_internship/header.jpg",
    },
    {
      title: "FeatureCloud Hackathon",
      date: "Jun. 2022",
      description:
        "Explored metagenome research using Federated Learning and cloud computing to enhance data privacy and computational efficiency.",
      // link: "https://featurecloud.ai/hackathon-2022",
      link: "posts/featurecloud-hackathon",
      tech: ["Python", "Federated Learning frameworks"],
      img_alt: "FeatureCloud Hackathon Project",
      img_path: "featurecloud_hackathon/header.jpg",
    },
    {
      title: "AlphaFold2 for Coronavirus",
      date: "Apr. 2022 – May 2022",
      description:
        "Utilized AlphaFold2 and Azure ML to predict Coronavirus glycoprotein structures, aiding COVID-19 research.",
      // link: "https://github.com/gromdimon/AlphaFold_Glycoprotein",
      link: "posts/alphafold-coronavirus",
      tech: ["AlphaFold2", "Azure Machine Learning", "Python"],
      img_alt: "AlphaFold2 Coronavirus Project",
      img_path: "alphafold_coronavirus/header.png",
    },
    {
      title: "Internship at LLBio-IT School",
      date: "Jan. 2022 – March 2022",
      description:
        "Analyzed COVID-19 data from a statistical and computational perspective, providing data-driven insights.",
      // link: "https://www.llbschool.org/internship-trainings",
      link: "posts/llbio-school",
      tech: ["Python", "Pandas", "Matplotlib", "statistical models"],
      img_alt: "LLBio-IT School Internship Project",
      img_path: "llbio_school/header.jpg",
    },
    {
      title: "Neurohack Hackathon",
      date: "Jan. 2022 – Feb. 2022",
      description:
        "Participated in dementia research focusing on GWAS and pipeline building using Snakemake.",
      // link: "https://demondementia.com/neurohack2022/",
      link: "posts/neurohack-hackathon",
      tech: [],
      img_alt: "Neurohack Hackathon Project",
      img_path: "neurohack_hackathon/header.jpg",
    },
    {
      title: "EesyFood Project",
      date: "Dec. 2021 – March 2022",
      description:
        "Developed `EesyFood`, a web application for food delivery services, leveraging FastAPI and Flask for a robust backend and user-friendly interface.",
      // link: "https://eesyfood.herokuapp.com/",
      link: "posts/eesyfood",
      tech: ["Flask", "SQLite", "Streamlit", "Bootstrap", "Heroku"],
      img_alt: "EesyFood Project",
      img_path: "eesyfood/header.jpg",
    },
    {
      title: "Wat To Do Telegram Bot",
      date: "Oct. 2021 – Dec. 2021",
      description:
        "Created `Wat To Do`, a Telegram bot offering activity suggestions, using Python and the Telegram Bot API.",
      // link: "https://github.com/gromdimon/telegram_what_bot",
      link: "posts/wat-bot",
      tech: ["Python", "Telegram Bot API", "Heroku"],
      img_alt: "Wat To Do Telegram Bot",
      img_path: "wat_bot/header.jpg",
    },
    {
      title: "Bioactivity Prediction Project",
      date: "May. 2021 – Jul. 2021",
      description:
        "Built a Machine Learning project to predict chemical binding activity to the Beta-Amyloid protein, utilizing Scikit-learn and RDKit.",
      // link: "https://github.com/gromdimon/Bioactivity_prediction_project",
      link: "posts/bioactivity-prediction",
      tech: ["Python", "Scikit-learn", "RDKit"],
      img_alt: "Bioactivity Prediction Project",
      img_path: "bioactivity_prediction/header.jpeg",
    },
  ],

  publications: [
    {
      title: "REEV: review, evaluate and explain variants.",
      publisher: "Nucleic Acids Research",
      url: "https://doi.org/10.1093/nar/gkae366",
      date: "2024",
    },
    {
      title:
        "Harnessing Transcriptomic Signals for Amyotrophic Lateral Sclerosis to Identify Novel Drugs and Enhance Risk Prediction",
      publisher: "medRxiv",
      url: "https://www.medrxiv.org/content/10.1101/2023.01.18.23284589v2",
      date: "2023",
    },
    {
      title:
        "Promoter motif inference and annotation of promoter sequences in bacterial genomes based on the analysis of structures of alternative sigma factor-promoter complexes",
      publisher: "BGRSSB Conference",
      url: "https://disk.icgbio.ru/s/ejG5gRfYGRpML25",
      date: "2022",
    },
    {
      title:
        "Bacterial promoter identification based on 3D structures of alternative sigma-factors",
      publisher: "CTDA Conference",
      url: "https://ctda.rfe.by/media/docs/2022/konf/CTDA-2022-matherials-epub-before-print.pdf",
      date: "2022",
    },
  ],

  awards: [
    {
      title: "Deutschlandstipendium",
      description: "Stipend holder at Freie Universität Berlin",
      date: "2023",
    },
    {
      title: "MIPT biological Olympiad",
      description:
        "2 degree diploma of the final stage (Top 20 in the overall standings)",
      date: "2021",
    },
    {
      title: "Belarusian biological Olympiad",
      description: "2 degree diploma of the republic stage (Top 10 in Belarus)",
      date: "2021",
    },
  ],

  contact: {
    email: "grom.dima.grom@gmail.com",
    linkedin: "https://www.linkedin.com/in/gromdimon/",
    github: "https://www.github.com/gromdimon/",
    twitter: "https://x.com/grom_dimon/",
  },
};
