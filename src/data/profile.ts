export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Infrastructure & Cloud' | 'Web & DevOps' | 'Networking & Security' | 'Open Source';
  tags: string[];
  featured: boolean;
  image?: string;
  imageCaption?: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  architecture?: {
    components: { title: string; desc: string }[];
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  handle: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  availability: string;
  contacts: {
    email: string;
    github: string;
    linkedin?: string;
    website: string;
  };
  keyPillars: {
    icon: string;
    title: string;
    desc: string;
  }[];
  skillCategories: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  education: {
    degree: string;
    institution: string;
    period: string;
    details?: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
  }[];
}

export const profileData: ProfileData = {
  name: "webtechy",
  handle: "@webtechy",
  title: "Cloud Solutions Architect & Systems Engineer",
  tagline: "Engineering cloud solutions that are feature-rich, high-performance, and cost-effective.",
  summary:
    "Cloud Solutions Architect and Systems Engineer specializing in hybrid cloud infrastructure, self-hosted private cloud ecosystems, and automated modern Jamstack deployments. Experienced in bridging edge compute (Cloudflare), cost-effective cloud services (Oracle Cloud Free Tier, AWS), and bare-metal hardware (Apple Silicon, QNAP NAS) connected through encrypted zero-trust meshes. Dedicated to helping projects achieve enterprise-grade resilience, data ownership, and sub-second web performance without bloated recurring costs.",
  location: "United States (Available Globally / Remote)",
  availability: "Open to Cloud Architecture, DevOps & Homelab Consulting",
  contacts: {
    email: "contact@webtechy.github.io",
    github: "https://github.com/webtechy",
    website: "https://webtechy.github.io",
  },
  keyPillars: [
    {
      icon: "cloud",
      title: "Cost-Effective Cloud Architecture",
      desc: "Architecting hybrid environments that combine cloud free-tiers, edge caching, and serverless compute to deliver enterprise capabilities without unsustainable SaaS bills."
    },
    {
      icon: "network",
      title: "Zero-Trust & CGNAT Mesh Networking",
      desc: "Interconnecting distributed homelab nodes, cloud VPS proxies, and client devices via Tailscale and WireGuard mesh VPNs without opening residential firewall ports."
    },
    {
      icon: "server",
      title: "Self-Hosted Private Cloud & Containers",
      desc: "Building sovereign private cloud setups with Docker, Cosmos Cloud, Portainer, Nextcloud, and Immich across Apple M4 Silicon and QNAP NAS storage."
    },
    {
      icon: "rocket",
      title: "Modern Jamstack & Automated CI/CD",
      desc: "Replacing fragile legacy CMS tools with Git-automated static pipelines (Astro, Tailwind, GitHub Actions) that build in seconds and achieve 100/100 Core Web Vitals."
    }
  ],
  skillCategories: [
    {
      name: "Cloud & Edge Infrastructure",
      icon: "cloud",
      skills: ["Oracle Cloud Infrastructure (OCI)", "Cloudflare (DNS, CDN, WAF, Workers)", "AWS", "GitHub Pages", "Vercel / Netlify", "Jamstack Architecture"]
    },
    {
      name: "Networking & Security",
      icon: "shield",
      skills: ["Tailscale Mesh VPN", "WireGuard", "CGNAT Bypass", "Nginx Proxy Manager", "SSL/TLS (Let's Encrypt DNS-01)", "Reverse Proxies", "Cloudflare Zero Trust"]
    },
    {
      name: "Containers & Orchestration",
      icon: "container",
      skills: ["Docker & Docker Compose", "Cosmos Cloud Engine", "Portainer", "Podman", "Container Hardening", "Multi-arch Builds (ARM64/x86_64)"]
    },
    {
      name: "Hardware & Self-Hosted Systems",
      icon: "cpu",
      skills: ["Apple Silicon (M4 Mac mini)", "QNAP NAS (QTS/Linux)", "RAID & ZFS Storage", "Nextcloud (Cloud Storage)", "Immich (Photo Management)", "Home Assistant"]
    },
    {
      name: "Modern Frontend & Jamstack",
      icon: "code",
      skills: ["Astro", "Tailwind CSS", "Next.js", "React", "TypeScript", "Modern HTML5/CSS3", "Responsive Design", "Core Web Vitals Optimization"]
    },
    {
      name: "DevOps & Automation",
      icon: "terminal",
      skills: ["GitHub Actions CI/CD", "Git & GitOps", "Bash / Shell Scripting", "Linux Server Administration (Ubuntu/Debian)", "Automated Backups & Monitoring"]
    }
  ],
  experiences: [
    {
      company: "Cloud & Systems Engineering",
      role: "Lead Cloud Solutions Architect",
      period: "2022 — Present",
      location: "Remote",
      description:
        "Directing the architecture and operational implementation of resilient cloud, edge, and hybrid self-hosted infrastructure for high-performance applications.",
      achievements: [
        "Designed and operationalized a hybrid-cloud environment connecting edge DNS (Cloudflare), proxy compute (Oracle Cloud Free Tier), and on-premises Apple Silicon/QNAP nodes via encrypted Tailscale meshes.",
        "Engineered zero-trust networking topology bypassing residential ISP CGNAT without exposing internal IP addresses or opening inbound firewall ports.",
        "Replaced cumbersome CMS tooling with streamlined Git-based Jamstack publishing workflows using Astro and GitHub Actions, cutting build/deploy cycle times by over 80%.",
        "Configured high-availability self-hosted storage and photo sync systems (Nextcloud & Immich) serving terabytes of encrypted data with automated offsite backup routines."
      ],
      skills: ["Cloudflare", "Oracle Cloud", "Tailscale", "Docker", "Astro", "GitHub Actions", "Nextcloud", "Immich"]
    },
    {
      company: "Infrastructure & Systems Operations",
      role: "Senior DevOps & Systems Engineer",
      period: "2018 — 2022",
      location: "Remote / Hybrid",
      description:
        "Managed containerized production workloads, automated deployment pipelines, and multi-domain DNS/security configurations.",
      achievements: [
        "Automated continuous integration and deployment pipelines with GitHub Actions for multi-tier web applications and static sites.",
        "Configured Nginx Proxy Manager and automated SSL certificate lifecycles via Let's Encrypt for dozens of containerized microservices.",
        "Consolidated domain portfolios, MX record email routing, and DNSSEC policies using Cloudflare, optimizing resolution latency globally.",
        "Hardened Linux host environments and container runtimes against unauthorized lateral network traversal."
      ],
      skills: ["Docker", "Nginx Proxy Manager", "Linux", "Bash", "CI/CD", "Let's Encrypt", "DNS/CDN"]
    },
    {
      company: "Web Technologies & Jamstack",
      role: "Systems Specialist & Web Engineer",
      period: "2015 — 2018",
      location: "San Francisco Bay Area, CA",
      description:
        "Spearheaded early adoption of static site generators (Jekyll, Hugo) and modern Jamstack architectures, transitioning clients from monolithic CMS platforms.",
      achievements: [
        "Architected lightweight static websites and developer documentation sites, reducing hosting expenses to near-zero with GitHub Pages and Netlify.",
        "Developed responsive user interfaces optimized for mobile performance, accessibility, and high Lighthouse scores.",
        "Implemented standardized Git workflows, code linting, and automated static validation."
      ],
      skills: ["Jekyll", "Hugo", "Git", "HTML5", "CSS3", "JavaScript", "Static Sites"]
    }
  ],
  projects: [
    {
      id: "homelab-private-cloud",
      title: "Self-Hosted Homelab & Hybrid Private Cloud",
      subtitle: "Enterprise-grade self-hosted infrastructure on Apple Silicon & QNAP NAS with Tailscale CGNAT bypass",
      description:
        "A complete hybrid private cloud architecture designed for complete data ownership, maximum reliability, and zero ongoing subscription fees. Connects high-performance on-premises hardware with cloud proxy compute.",
      category: "Infrastructure & Cloud",
      featured: true,
      image: "/images/homelab.png",
      imageCaption: "Complete Homelab Network & Service Architecture Topology",
      liveUrl: "#homelab-details",
      tags: ["Apple M4 Silicon", "QNAP 453be", "Tailscale", "Oracle Cloud", "Nginx Proxy Manager", "Cosmos Cloud", "Nextcloud", "Immich"],
      highlights: [
        "Domain & DNS: Cloudflare serves as registrar, CDN, and DNS layer with automated CNAME, MX alias routing, and WAF rules.",
        "Proxy Layer (Oracle Cloud Free Tier): Nginx Proxy Manager in the cloud receives public traffic and routes securely to homelab nodes via Tailscale, completely bypassing ISP CGNAT.",
        "Apple Silicon Compute Node: Apple M4 Mac mini running Cosmos Cloud container engine for high-compute workloads and instant transcoding.",
        "QNAP Storage Node: QNAP TS-453be running Portainer, hosting redundant private cloud storage with Nextcloud and AI-driven photo indexing with Immich.",
        "Data Sovereignty: Replaces recurring SaaS costs (Google One, iCloud, Dropbox) with sovereign, end-to-end controlled private storage."
      ],
      architecture: {
        components: [
          {
            title: "Domain & DNS (Cloudflare)",
            desc: "Registrar, DNS manager, MX email routing, and edge caching with DDoS mitigation."
          },
          {
            title: "Proxy Layer (Oracle Cloud Free Tier)",
            desc: "Nginx Proxy Manager in an OCI compute instance connected via Tailscale mesh VPN to securely route inbound requests without public residential IPs."
          },
          {
            title: "Compute Layer (Apple M4 Mac Mini)",
            desc: "Cosmos Cloud Docker management platform hosting Nextcloud, Immich AI models, and compute-intensive microservices."
          },
          {
            title: "Storage Layer (QNAP 453be NAS)",
            desc: "Portainer Docker platform orchestrating redundant storage arrays, automated snapshot policies, and local backup mirrors."
          }
        ]
      }
    },
    {
      id: "automated-github-pages-profile",
      title: "Automated Jamstack Profile & GitHub Actions Pipeline",
      subtitle: "Lightning-fast profile, resume, and portfolio engine with zero-JS static output",
      description:
        "A modern, maintainable profile and resume platform replacing brittle desktop CMS tools (like Publii) with an automated GitHub Actions CI/CD pipeline deploying to GitHub Pages.",
      category: "Web & DevOps",
      featured: true,
      githubUrl: "https://github.com/webtechy/webtechy.github.io",
      liveUrl: "https://webtechy.github.io",
      tags: ["Astro", "GitHub Actions", "Tailwind CSS", "TypeScript", "GitHub Pages"],
      highlights: [
        "Single-file content configuration: Updates to resume, skills, or projects take seconds via Git or GitHub's web UI.",
        "Automated CI/CD: Push to main automatically triggers GitHub Actions build and deploy via official Pages actions.",
        "100/100 Lighthouse score: Pre-rendered static HTML with zero client-side JavaScript bloat.",
        "Print-optimized CV layout: Built-in print media queries format the profile cleanly into an exportable professional resume."
      ]
    },
    {
      id: "cgnat-mesh-vpn",
      title: "Zero-Trust Tailscale & WireGuard Ingress Mesh",
      subtitle: "Secure cross-cloud and residential server mesh interconnect",
      description:
        "Engineered an encrypted zero-trust mesh network connecting residential servers behind Carrier-Grade NAT (CGNAT) with public edge nodes, allowing secure multi-domain reverse proxying without port forwarding.",
      category: "Networking & Security",
      featured: false,
      tags: ["Tailscale", "WireGuard", "Nginx", "CGNAT", "Security"],
      highlights: [
        "Bypassed residential ISP carrier-grade NAT with zero port forwards or static IP requirements.",
        "Automated DNS-01 Let's Encrypt certificate renewal for all internal and public hostnames.",
        "Direct peer-to-peer connection prioritization with encrypted DERP fallback when NAT traversal fails."
      ]
    }
  ],
  education: [
    {
      degree: "Systems & Information Technologies",
      institution: "Specialized Studies in Cloud Infrastructure & Systems Engineering",
      period: "Continuous Professional Development",
      details: "Focus on Distributed Systems, Cloud Architecture, Network Security, and Container Orchestration."
    }
  ],
  certifications: [
    {
      name: "Cloud Architecture & Jamstack Engineering",
      issuer: "Industry Standard & Hands-on Implementation",
      date: "Ongoing"
    },
    {
      name: "Container Security & Zero-Trust Networking",
      issuer: "Tailscale / Docker Ecosystems",
      date: "Ongoing"
    }
  ]
};
