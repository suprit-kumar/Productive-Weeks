# Productive Weeks of Your Life

> Every week is a square.  
> Every square is a chance.  
> Don't waste the ones you still own.  

A premium, elegant, and highly responsive single page web application designed to visually display how many **productive weeks** are left in your life. Inspired by the clean, glassmorphic styles of Apple, Stripe, Linear, and Vercel.

---

## ⚡ Overview & Core Purpose
Most people think they have unlimited time. This project challenges that cognitive bias by providing a clear, interactive visual breakdown of one's remaining time. 

By default, the visualization calculates and tracks:
- **Average Lifespan**: Capped at 75 years.
- **Productive Span**: Focuses on the peak highly productive 40 years of your career capital build (Ages 0 to 40, or representing the core active decades).
- **Interactive Visual Grid**: Displays exactly **2,087 squares** (representing $40 \text{ Years} \times 52.1775 \text{ Weeks/Year}$).
  - **Completed weeks** are rendered in Dark Gray.
  - **The current week** pulses in Orange.
  - **Future weeks** are displayed in Green (or your selected custom accent gradient).

---

## ✨ Premium Features & Interactivity
1. **Interactive Glassmorphism Card Panels**: High-end styling with soft glows, saturation boosts, and border gradients.
2. **Ambient Particle Background**: A custom HTML5 Canvas particle starfield that drifts upwards and responds elegantly to window sizing.
3. **Responsive Visual Grid Layout**: Custom CSS grid system that wraps gracefully into 52 columns on desktops, 26 on tablets, and 13 on mobile devices. No horizontal scrolling.
4. **Custom Accent Themes**: Toggle between multiple premium gradients (Indigo-Purple, Emerald-Teal, Sunset Orange, Crimson Cherry, Cyber Cyan).
5. **Dark / Light Mode Memory**: State is retained automatically in browser `LocalStorage`.
6. **Animated Time Counters**: Numerical statistics animate from zero using customized eased transitions on calculation trigger.
7. **Lifespan Milestone Timeline**: Dynamic nodes showing Born, Today, Productive Limit (Age 40), and Expectancy (Age 75).
8. **Celebration Confetti Burst**: High-performance canvas confetti system that triggers when DOB is saved or if you load the page on your birthday!
9. **Interactive Perspective Facts**: Shows the exact mathematical impact of wasting time (e.g. losing 1 week translates to a 0.048% loss of your total peak productive years).
10. **Print/PDF layout**: Uses custom `@media print` rules to optimize the page layout into a clean paper-friendly timeline report when printing or saving as a PDF.

---

## ⌨️ Keyboard Shortcuts
Maximize efficiency using built-in keyboard triggers:
- <kbd>D</kbd> : Focus and select the Date of Birth input field.
- <kbd>T</kbd> : Toggle the display mode (Light / Dark theme).
- <kbd>Q</kbd> : Generate and display a new random motivational quote.
- <kbd>P</kbd> : Open the page print/PDF dialog.
- <kbd>?</kbd> : Open the Keyboard Shortcuts helper modal.
- <kbd>ESC</kbd> : Unfocus input or exit active modals.

---

## 🛠️ Technology Stack
- **Structure**: HTML5 Semantic markup, ARIA labels for accessibility.
- **Styles**: CSS3 Custom variables, Flexbox/Grid, and Bootstrap v5.3.2.
- **Logic**: Pure Vanilla ES6+ JavaScript.
- **Storage**: Browser LocalStorage API (zero tracking or backend data leakage).
- **Aesthetics**: Outfit & Plus Jakarta Sans google typography.

---

## 📁 File Structure
```text
ProductiveSpan/
├── index.html     # Semantic structure & CDN integrations
├── style.css      # Core style definitions, themes, animations, & layouts
├── script.js     # State management, canvas loops, mathematical functions, & quote database
└── README.md      # Project overview and documentation
```

---

## 🚀 GitHub Pages Deployment
This project runs entirely on the client side. No server configuration, package installations, or build processes are necessary.

To deploy on **GitHub Pages**:
1. Create a public repository on GitHub.
2. Push `index.html`, `style.css`, `script.js`, and `README.md` to the repository.
3. In the repository settings, navigate to **Pages** under the "Code and automation" section.
4. Choose the branch (e.g., `main`) and root folder (`/`), then click **Save**.
5. Your application will be live at `https://<username>.github.io/<repository-name>/`!

---

## 📖 Math Constants
The calculation values are determined as follows:
- **Weeks Per Year**: $52.1775$ weeks
- **Total Productive Weeks**: $40 \text{ Years} \times 52.1775 = 2087$ weeks
- **Age in Years**: $\frac{\text{Current Time} - \text{DOB in Milliseconds}}{1000 \times 60 \times 60 \times 24 \times 365.2425}$
- If age is greater than 40, remaining productive weeks cap gracefully at `0`, turning the entire grid dark gray to represent completion.

---

## 📄 License
This project is open-source and free to customize under the MIT License.
