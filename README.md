# webtechy — Developer Profile, Resume & Portfolio

A modern, high-performance personal profile, resume, and portfolio site for **webtechy**, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), automated with **GitHub Actions** and deployed directly to **GitHub Pages**.

This replaces the previous Publii desktop CMS workflow with a zero-maintenance, Git-driven Jamstack architecture.

---

## ⚡ Highlights

- **Automated CI/CD**: Pushing changes to the `main` branch automatically triggers GitHub Actions to build and deploy to GitHub Pages in ~30 seconds.
- **Zero-JS Static Output**: 100/100 Lighthouse performance, sub-second load times, and perfect SEO.
- **Single-File Content Management**: All resume entries, skills, background, homelab architecture, and projects are centralized in [`src/data/profile.ts`](./src/data/profile.ts). Edit it locally or directly in GitHub's web editor!
- **Homelab & Portfolio Deep Dive**: Full interactive topology diagram and breakdown of the hybrid private cloud (Apple M4 Mac mini, QNAP NAS, Tailscale CGNAT bypass, Oracle Cloud Free Tier, Cloudflare).
- **Print / PDF CV Export**: Built-in `@media print` styles allow instant export to a clean 1-2 page professional PDF resume via the "Print / PDF CV" button.
- **Dark / Light Mode**: System preference detection with manual toggle and zero-FOUC state persistence.

---

## 🛠️ Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Actions deploy workflow
├── public/
│   └── images/
│       └── homelab.png         # Homelab topology architecture diagram
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── About.astro         # Background & core engineering pillars
│   │   ├── Contact.astro       # Contact methods and links
│   │   ├── Experience.astro    # Career history, achievements & resume timeline
│   │   ├── Footer.astro        # Footer with metadata and quick links
│   │   ├── Hero.astro          # Headline, tagline, availability badge & CTAs
│   │   ├── Navbar.astro        # Responsive navigation, theme switcher & print button
│   │   ├── Projects.astro      # Featured projects & Homelab diagram lightbox
│   │   └── Skills.astro        # Categorized technical capabilities
│   ├── data/
│   │   └── profile.ts          # ⭐️ ALL PROFILE CONTENT & RESUME DATA
│   ├── layouts/
│   │   └── Layout.astro        # Master HTML layout, SEO tags & dark mode script
│   ├── pages/
│   │   ├── 404.astro           # Custom 404 page
│   │   └── index.astro         # Profile homepage
│   └── styles/
│       └── global.css          # Tailwind directives & print media stylesheet
├── astro.config.mjs            # Astro configuration
├── package.json
└── tailwind.config.mjs         # Tailwind configuration
```

---

## 📝 How to Update Your Profile & Resume

All personal details, experience, skills, and projects live in a single file:
👉 **[`src/data/profile.ts`](./src/data/profile.ts)**

You can update it in two easy ways:

### Option A: Directly in GitHub (Zero local setup)
1. Go to [`src/data/profile.ts`](./src/data/profile.ts) on GitHub.com.
2. Click the ✏️ (Edit) button.
3. Update your bio, add new job achievements, or add projects.
4. Commit changes to `main`.
5. GitHub Actions will automatically rebuild and deploy your updated site!

### Option B: Locally on your Mac
```bash
# Clone the repository
git clone https://github.com/webtechy/webtechy.github.io.git
cd webtechy.github.io

# Install dependencies
npm install

# Start local development server (runs at http://localhost:4321)
npm run dev

# Test production build
npm run build
```

---

## 🚀 GitHub Pages Configuration

To ensure your GitHub Actions workflow deploys smoothly to GitHub Pages:

1. Go to your repository settings on GitHub: **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. That's it! Every push to `main` will now trigger [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) and publish your site automatically.

---

## 📄 License

MIT © [webtechy](https://webtechy.github.io)
