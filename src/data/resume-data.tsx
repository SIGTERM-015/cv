import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Nerea Kalandadze",
  initials: "NK",
  location: "Barcelona, Spain, CET",
  locationLink: "https://www.google.com/maps/place/barcelona",
  about: "DevSecOps / SRE Lead",
  summary: (
    <>
      DevSecOps Lead and SRE Engineer leading teams to deploy, secure and
      operate reliable cloud infrastructure in providers like GCP and AWS using
      IaC tools like Terraform. I define DevSecOps strategy and standards, build
      CI/CD pipelines on native cloud products like CloudBuild and CodePipeline,
      and mentor engineers. I also have hands-on experience in cybersecurity,
      improving security in client environments and testing it against possible
      vulnerabilities.
    </>
  ),
  avatarUrl: "https://cdn.yellowumbrella.dev/pic.png",
  personalWebsiteUrl: "https://sigterm.vodka",
  contact: {
    email: "me@sigterm.vodka",
    tel: "+34611588382",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/NereaCassian",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nerea-kalandadze/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "ULL",
      degree: "Computer Science Degree",
      start: "2016",
      end: "2020",
    },
    {
      school: "CESUR",
      degree: "Game Dev Professional Course",
      start: "2020",
      end: "2022",
    },
  ],
  certifications: [
    {
      name: "Cloud Architect",
      issuer: "Amazon Web Services",
      date: "2025",
      expiryDate: "2028",
    },
    {
      name: "Cloud Architect",
      issuer: "Google Cloud",
      date: "2025",
      expiryDate: "2028",
    },
  ],
  work: [
    {
      company: "Making Science",
      link: "https://www.makingscience.com/",
      badges: [
        "Remote",
        "Leadership",
        "DevSecOps",
        "GCP & AWS",
        "Kubernetes",
        "Terraform",
        "Security",
        "SRE",
      ],
      title: "DevSecOps / SRE Lead",
      start: "2026",
      end: "Present",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Lead the DevSecOps practice, defining strategy, standards and best
              practices for secure and reliable cloud infrastructure across
              client and internal projects.
            </li>
            <li>
              Mentor and coordinate a team of engineers, driving technical
              decisions, code reviews and delivery quality.
            </li>
            <li>
              Own the security posture of client environments: threat modeling,
              IAM governance, hardening and incident response.
            </li>
            <li>
              Architect and standardize IaC (Terraform) and CI/CD pipelines to
              accelerate delivery while enforcing security and compliance.
            </li>
            <li>
              Drive observability and reliability initiatives (monitoring,
              alerting, SLOs) and lead the On Call rotation.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Typsa",
      link: "https://www.typsa.com/",
      badges: ["DevOps", "Onprem to Cloud", "CI/CD", "AD", "Security", "GCP"],
      title: "Fullstack Developer and DevOps",
      start: "2022",
      end: "2022",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              I migrated an old on premise set of microservice to GCP improving
              security and reliability of the services. Creating development,
              preview and production environments and improved the code delivery
              process, reducing code issues and downtime
            </li>
            <li>
              I developed a CICD pipeline using Jenkins, so developers could
              deploy new versions of the services.
            </li>
            <li>
              I reworked and secured the company Active Directory and solved the
              present security issues.
            </li>
            <li>
              I developed a IAM, onboarding and developer access management
              system to make permission management easier and more secure, and
              dispositions of accounts for new employees.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "GIGAS Hosting",
      link: "https://gigas.com/",
      badges: [
        "Sysadmin",
        "Linux",
        "KVM",
        "Qemu",
        "Virtualization",
        "Windows",
        "Linux",
        "Security",
        "Own Cloud",
      ],
      title: "LV2 Support and Sysadmin",
      start: "2022",
      end: "2023",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Offered advanced support for clients that were hired products and
              virtual machines that ran on KVM and Qemu. I helped them deploy
              software to the virtual machines like databases, ORM, CMS, and
              also helped them manage and maintain those products.
            </li>
            <li>
              Improved the process and the software used for the virtual
              machines' orchestration, managing and disposition, reducing
              downtime and improving its performance
            </li>
            <li>
              Improved security in internal software used for daily internal
              tasks like accounting and VM and infrastructure management
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Making Science",
      link: "https://www.makingscience.com/",
      badges: [
        "Remote",
        "DevOps",
        "GCP & AWS",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Python",
        "Security",
      ],
      title: "DevSecOps Engineer",
      start: "2023",
      end: "2025",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Worked deploying, maintaining, securing, improving and monitoring
              cloud infrastructure orchestrated using Terraform and Ansible,
              both for clients and internal products of the company
            </li>
            <li>
              Pentested and improved security in client environments, managing
              IAM and monitoring events.
            </li>
            <li>
              Implemented monitoring and alert systems for client environments
              and participated in the On Call rotation.
            </li>
            <li>Developed CICD pipelines and code delivery procedures.</li>
            <li>Deployed and maintained cost optimized Kubernetes Clusters.</li>
            <li>
              Developed AI solutions like chatbots, ad and Social Media content
              creators, and Marketing analysis tools
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "KaveTech",
      link: "https://kavehome.com/",
      badges: [
        "Remote",
        "IAC",
        "Kubernetes",
        "Terraform",
        "Python",
        "Security",
        "GCP",
        "On Premise",
      ],
      title: "DevSecOps Engineer and Cibersecurity analyst",
      start: "2025",
      end: "2026",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Lead in the adoption of IAC tools like Terraform to deploy and
              manage the company's infrastructure.
            </li>
            <li>
              Lead the efforts to improve the security of the company's
              infrastructure, on premise servers, office security, etc.
            </li>
            <li>Maintain and improve the company's Kubernetes Clusters.</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Leadership",
    "Team Lead",
    "DevSecOps",
    "DevOps",
    "GCP & AWS",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Python",
    "Security",
    "On Premise",
    "CI/CD",
    "AD",
    "Linux",
    "Windows",
    "Virtualization",
    "Qemu",
    "KVM",
    "Pentesting",
    "AI",
    "SecOps",
    "SRE",
    "Sysadmin",
    "RedTeam",
    "BlueTeam",
  ],
  projects: [],
} as const;
