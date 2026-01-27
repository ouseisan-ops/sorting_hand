## XJTLU “Sorting Hat” – Holland Interest Profiler for Postgraduate Major Intention

This project is a small web-based tool for prospective postgraduate students who are considering applying to Xi’an Jiaotong-Liverpool University (XJTLU). It uses a Holland interest questionnaire (RIASEC model) to approximate the user’s interest profile and then maps that profile to suggested XJTLU master’s programmes, together with a radar chart visualization.

### Features

- **Holland-based questionnaire**: 24 statements covering the six Holland types (R/I/A/S/E/C), answered on a 5-point agreement scale.
- **Automated scoring**: sums scores for each interest type, ranks them, and builds a three-letter Holland code.
- **Profile explanation**: interprets the top two types as a two-letter combination (e.g. `AI`, `SE`) and renders a short narrative in Chinese.
- **Programme recommendations**: suggests XJTLU master’s majors based on the two-letter combination and links to the official XJTLU postgraduate page.
- **Radar chart visualization**: renders the interest profile with Chart.js.
- **Responsive layout**: works cleanly on both mobile and desktop screens with a card-based, single-page flow (intro → questionnaire → results).
- **Future media slots**: dedicated HTML sections where images, videos or interactive components can be plugged in later without changing core logic.

All user-facing text is in Chinese, while all code comments and this README are in English.

### Tech Stack

- **Front-end only**: static site with vanilla HTML, CSS, and JavaScript.
- **Visualization**: [`Chart.js`](https://www.chartjs.org/) loaded via CDN for the radar chart.
- **No build step required**: everything can be served as static assets (suitable for Netlify or any static hosting).

### Project Structure

- `index.html` – single-page application shell:
  - Intro section for context and call-to-action.
  - Questionnaire section that displays one question at a time.
  - Result section with Holland code, radar chart, explanation, and recommended majors.
  - Well-marked placeholder blocks for future images/videos/interactive content.
- `assets/styles.css` – global styling and responsive layout:
  - Theme variables for colours, spacing, and radii.
  - Mobile-first, card-based layout.
  - Styling for buttons, question options, progress bar, radar chart container, result cards, and media slots.
- `assets/main.js` – application logic:
  - Question list, Holland scoring, and combination-to-major mapping.
  - Navigation and auto-advance behaviour for the questionnaire.
  - Result rendering (Holland code, narrative, recommended majors, radar chart).

The original prototype HTML file is kept in the repository as a reference snapshot of the first version.

### Running the Project Locally

You do not need any backend or build tools to run this project; a simple static server (or even directly opening the file) is enough.

**Option 1 – Open directly from the file system**

1. Locate `index.html` in the project root.
2. Double-click to open it in your browser.
3. Complete the questionnaire and view the results page.

> Note: On some browsers and OS configurations, local file restrictions can occasionally affect loading of external resources like the Chart.js CDN. If something does not display correctly, use Option 2.

**Option 2 – Use a lightweight static server**

If you have Node.js installed, from the project root you can:

```bash
npx serve .
```

Then open the printed local URL (for example `http://localhost:3000`) in your browser.

Any other static file server (Python’s `http.server`, VS Code “Live Server” etc.) will also work.

### How to Adjust Questions and Mappings

- **Edit questions**:
  - Open `assets/main.js`.
  - Find the `questions` array.
  - Update the Chinese text or reorder questions as needed.
  - Keep each item’s `id` as one of `R`, `I`, `A`, `S`, `E`, `C` so scoring stays correct.

- **Edit combination explanations and majors**:
  - In `assets/main.js`, find the `comboData` object.
  - Each key is a two-letter code (e.g. `AI`, `SE`) mapped to:
    - `title` – the displayed headline.
    - `desc` – narrative explanation in Chinese.
    - `majors` – a `、`-separated list of recommended majors.
  - Update narratives or majors as needed; the result section automatically reflects these changes.

### Extending the UI with Images, Video, or Interactive Sections

The HTML layout already contains neutral “slots” where richer content can be added later:

- **Intro page media slot**:
  - In `index.html`, search for `intro-media-slot`.
  - Replace the placeholder `<div class="intro-media-slot">` with:
    - A hero image (e.g. campus photo).
    - An embedded video (e.g. overview of XJTLU postgraduate study).
    - A simple interactive element (e.g. step-by-step onboarding).

- **Result page media slot**:
  - In `index.html`, search for `result-media-slot`.
  - You can insert:
    - Major-specific images.
    - An embedded video introducing a programme cluster.
    - An interactive card that lets users click through to learn more.

If you later want per-major images or videos, a typical extension in `assets/main.js` would be to:

1. Add optional fields (for example `imageUrl` or `videoUrl`) into each `comboData` entry.
2. In the result-rendering logic, check for these optional fields and conditionally render thumbnails or media elements into the result media slot.

### Deployment Guide (Netlify)

This project is designed to be deployed as a static site on Netlify. A typical deployment flow is:

1. **Prepare the repository**
   - Ensure the root of the repository contains:
     - `index.html`
     - `assets/` folder (with `styles.css` and `main.js`)
     - `README.md`
   - Run `git status` and confirm only expected files are tracked (no secrets or local-only artefacts).

2. **Push to a Git provider**
   - Create a remote repository on GitHub, GitLab, or Bitbucket.
   - From the project root:

   ```bash
   git add .
   git commit -m "Initial XJTLU Holland tool"
   git branch -M main
   git remote add origin YOUR_REMOTE_URL
   git push -u origin main
   ```

3. **Create a Netlify site from Git**
   - Sign in to Netlify and choose **“Add new site” → “Import an existing project”**.
   - Select your Git provider and the repository created in step 2.
   - For build settings:
     - **Build command**: leave empty (no build step needed).
     - **Publish directory**: `/` (project root).
   - Click **Deploy site**.

4. **Verify the deployment**
   - Once Netlify finishes the deploy, open the generated URL.
   - Test on a desktop and a mobile device:
     - Intro page loads and button starts the test.
     - All questions can be answered and progress bar updates.
     - The result page shows Holland code, narrative, radar chart, and major cards.

5. **(Optional) Add a custom domain**
   - In Netlify’s site settings, add your own domain.
   - Update DNS records at your domain registrar as instructed by Netlify.
   - Wait for DNS propagation and confirm the tool is reachable at the custom domain.

After the first deployment, the normal workflow is:

1. Make changes locally (e.g. add a new image/video, adjust question text, or tweak layout).
2. Commit and push to the main branch.
3. Netlify automatically builds and redeploys the updated version.

