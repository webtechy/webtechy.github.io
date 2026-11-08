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
    "Cloud Solutions Architect and Systems Engineer specializing in hybrid cloud infrastructure, GitOps self-hosted private cloud ecosystems, and automated modern Jamstack deployments. Experienced in bridging edge compute (Cloudflare, OCI), zero-trust overlay meshes (Tailscale WireGuard), and high-efficiency bare-metal hardware (Apple Silicon Mac mini) running modern PaaS runtimes (Coolify, OrbStack Docker Engine). Dedicated to helping projects achieve enterprise-grade resilience, data ownership, and sub-second web performance without bloated recurring costs.",
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
      desc: "Architecting hybrid environments that combine cloud free-tiers (OCI Always-Free), edge CDN caching, and serverless compute to deliver enterprise capabilities without unsustainable SaaS bills."
    },
    {
      icon: "network",
      title: "Zero-Trust & CGNAT Mesh Networking",
      desc: "Interconnecting distributed homelab nodes, cloud edge proxies (Caddy), and client devices via Tailscale WireGuard mesh VPN without opening residential firewall ports."
    },
    {
      icon: "server",
      title: "Self-Hosted Private PaaS & GitOps",
      desc: "Deploying sovereign private cloud stacks via Coolify PaaS on macOS with OrbStack Docker Engine and automated GitHub Actions self-hosted runner CI/CD."
    },
    {
      icon: "rocket",
      title: "Modern Jamstack & Automated CI/CD",
      desc: "Replacing fragile legacy CMS tools with Git-automated static pipelines (Astro, Tailwind, GitHub Actions) that build in milliseconds and achieve 100/100 Core Web Vitals."
    }
  ],
  skillCategories: [
    {
      name: "Cloud & Edge Infrastructure",
      icon: "cloud",
      skills: ["Oracle Cloud Infrastructure (OCI Free Tier)", "Cloudflare (DNS, CDN, WAF, DNS-01 ACME)", "AWS", "GitHub Pages", "Vercel", "Jamstack Architecture"]
    },
    {
      name: "Networking & Security",
      icon: "shield",
      skills: ["Tailscale Mesh VPN", "WireGuard Overlay", "CGNAT Bypass", "Caddy Edge Proxy", "Traefik v3 Ingress", "SSL/TLS Wildcard (Let's Encrypt)", "Zero Inbound Attack Surface"]
    },
    {
      name: "Containers & Orchestration",
      icon: "container",
      skills: ["Coolify PaaS", "OrbStack Docker Engine", "Docker Compose", "Traefik Dynamic Routing", "GitHub Actions Self-Hosted Runner", "Multi-arch ARM64 Builds"]
    },
    {
      name: "Hardware & Self-Hosted Systems",
      icon: "cpu",
      skills: ["Apple Silicon (M4 Mac mini)", "macOS APFS / OrbStack Kernel", "Nextcloud (Cloud Storage)", "Paperless-ngx (OCR Indexing)", "Karakeep / Hoarder", "Uptime Kuma & Telegram Bot Alerts"]
    },
    {
      name: "Modern Frontend & Jamstack",
      icon: "code",
      skills: ["Astro", "Tailwind CSS", "Next.js", "React / Vite", "TypeScript", "Modern HTML5/CSS3", "Responsive Design", "Core Web Vitals Optimization"]
    },
    {
      name: "DevOps & Automation",
      icon: "terminal",
      skills: ["GitOps Continuous Delivery", "GitHub Actions CI/CD", "Shell Scripting (Bash/Zsh)", "Automated Pre-flight & Cutover Scripts", "Disaster Recovery & Rollback"]
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
        "Architected an end-to-end GitOps self-hosted private cloud combining OCI edge Caddy ingress, Tailscale WireGuard mesh, and Apple Silicon Mac mini running Coolify PaaS and OrbStack Docker Engine.",
        "Deployed an outbound-only GitHub Actions Self-Hosted Runner on macOS, enabling zero-inbound-attack-surface automated deployment on every git push.",
        "Engineered zero-trust networking topology bypassing residential ISP CGNAT without exposing internal IP addresses or opening inbound firewall ports.",
        "Configured high-availability containerized microservices including Nextcloud, Paperless-ngx, and Karakeep serving encrypted data with automated backups and Telegram bot alerting."
      ],
      skills: ["Cloudflare", "OCI", "Tailscale", "Coolify", "OrbStack", "Docker", "Astro", "GitHub Actions", "Nextcloud", "Paperless-ngx"]
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
        "Configured reverse proxies and automated SSL certificate lifecycles via Let's Encrypt DNS-01 for dozens of containerized microservices.",
        "Consolidated domain portfolios, MX record email routing, and DNSSEC policies using Cloudflare, optimizing resolution latency globally.",
        "Hardened Linux host environments and container runtimes against unauthorized lateral network traversal."
      ],
      skills: ["Docker", "Reverse Proxies", "Linux", "Bash", "CI/CD", "Let's Encrypt", "DNS/CDN"]
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
      title: "Self-Hosted Homelab & GitOps Private Cloud",
      subtitle: "Enterprise-grade self-hosted PaaS on Apple Silicon (OrbStack) orchestrated via Coolify with automated GitOps CI/CD",
      description:
        "A hybrid private cloud architecture designed for total data sovereignty, maximum efficiency, and zero ongoing subscription fees. Connects high-performance Apple Silicon compute with an OCI Caddy edge proxy via an encrypted Tailscale WireGuard mesh.",
      category: "Infrastructure & Cloud",
      featured: true,
      image: "/images/homelab.png",
      imageCaption: "Updated Homelab System Architecture & Network Topology",
      githubUrl: "https://github.com/mbabros/homelab",
      liveUrl: "#homelab-details",
      tags: ["Apple Silicon M4", "Coolify PaaS", "OrbStack Docker", "Tailscale WireGuard", "OCI Free Tier", "Caddy", "Traefik v3", "GitHub Actions Runner", "Nextcloud", "Paperless-ngx"],
      highlights: [
        "Domain & DNS: Cloudflare manages DNS with automated DNS-01 ACME challenge resolution for wildcard TLS (*.<domain>) certificates.",
        "Edge Ingress (OCI Free Tier): Caddy reverse proxy on an Always-Free VM terminates public TLS and proxies securely over Tailscale WireGuard mesh VPN directly to the Mac mini with zero open firewall ports on the home network.",
        "PaaS & Dynamic Ingress: Coolify controller on macOS with OrbStack Docker Engine, leveraging Traefik v3.7 ingress (:80/:443) for dynamic Docker container routing.",
        "Zero-Inbound GitOps CI/CD: Mac Mini GitHub Actions Self-Hosted Runner polls GitHub via outbound WebSockets, executing rolling container updates with zero open inbound ports.",
        "Application Ecosystem: Nextcloud (private drive), Paperless-ngx (OCR indexing), Karakeep (AI bookmarking), WordPress, and mbabros.com Vite/React with unified Telegram alerting."
      ],
      architecture: {
        components: [
          {
            title: "Domain & DNS (Cloudflare)",
            desc: "Wildcard DNS routing and automated DNS-01 ACME challenges with DDoS mitigation and global CDN caching."
          },
          {
            title: "Edge Ingress (Oracle Cloud Free Tier)",
            desc: "OCI VM running Caddy reverse proxy, terminating TLS and forwarding across Tailscale mesh to avoid CGNAT and eliminate inbound router port forwards."
          },
          {
            title: "Primary Compute & PaaS (Apple M4 Mac Mini)",
            desc: "macOS running OrbStack Docker engine and Coolify PaaS controller with Traefik v3 ingress for automatic host-based routing."
          },
          {
            title: "GitOps CI/CD (GitHub Actions Self-Hosted Runner)",
            desc: "Outbound long-polling runner executing local docker-compose orchestrations instantly on git push without webhooks or public ingress."
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
      tags: ["Tailscale", "WireGuard", "Caddy", "Traefik", "CGNAT Bypass", "Zero Inbound Ports"],
      highlights: [
        "Bypassed residential ISP carrier-grade NAT with zero port forwards or static IP requirements.",
        "Automated DNS-01 Let's Encrypt wildcard certificate renewal for all internal and public hostnames.",
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
      issuer: "Coolify / Tailscale / Docker Ecosystems",
      date: "Ongoing"
    }
  ]
};
