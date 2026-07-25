/**
 * Productive Weeks of Your Life - Core Logic
 * Vanilla JavaScript (ES6+), LocalStorage, Canvas Animations
 */

document.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------
    // CONSTANTS & CONFIGURATION
    // ----------------------------------------------------
    const LIFE_EXPECTANCY = 75;
    const PRODUCTIVE_AGE = 40;
    const WEEKS_PER_YEAR = 52.1775;
    const TOTAL_PRODUCTIVE_WEEKS = Math.floor(PRODUCTIVE_AGE * WEEKS_PER_YEAR); // 2087 weeks

    // ----------------------------------------------------
    // MOTIVATIONAL QUOTES (100+ items)
    // ----------------------------------------------------
    const QUOTES = [
        { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
        { text: "The best time to build your future is this week.", author: "Unknown" },
        { text: "You don't lose years. You lose weeks.", author: "Unknown" },
        { text: "Small actions every week create extraordinary lives.", author: "James Clear" },
        { text: "One more week gone. Did you use it well?", author: "Self-Reflection" },
        { text: "It is not that we have a short time to live, but that we waste a lot of it.", author: "Seneca" },
        { text: "You may delay, but time will not.", author: "Benjamin Franklin" },
        { text: "The key is not in spending time, but in investing it.", author: "Stephen R. Covey" },
        { text: "Time is what we want most, but what we use worst.", author: "William Penn" },
        { text: "Until you value yourself, you won't value your time. Until you value your time, you will not do anything with it.", author: "M. Scott Peck" },
        { text: "Ordinary people think merely of spending time. Great people think of using it.", author: "Arthur Schopenhauer" },
        { text: "The two most powerful warriors are patience and time.", author: "Leo Tolstoy" },
        { text: "Time is a created thing. To say 'I don't have time' is to say 'I don't want to'.", author: "Lao Tzu" },
        { text: "Better three hours too soon than a minute too late.", author: "William Shakespeare" },
        { text: "Time takes it all, whether you want it to or not.", author: "Stephen King" },
        { text: "Lost time is never found again.", author: "Benjamin Franklin" },
        { text: "Time is the longest distance between two places.", author: "Tennessee Williams" },
        { text: "You can't reuse wasted time. Make this week count.", author: "Unknown" },
        { text: "He who dares to waste one hour of time has not discovered the value of life.", author: "Charles Darwin" },
        { text: "Punctuality is the thief of time.", author: "Oscar Wilde" },
        { text: "Time is the most valuable thing a man can spend.", author: "Theophrastus" },
        { text: "Do not waste time, for that is the stuff life is made of.", author: "Benjamin Franklin" },
        { text: "Time flies over us, but leaves its shadow behind.", author: "Nathaniel Hawthorne" },
        { text: "The shortest period of time is that between writing down a plan and forgetting it.", author: "Unknown" },
        { text: "You must have control over your time, or others will control it for you.", author: "Unknown" },
        { text: "Don't let the fear of the time it will take to accomplish something stand in the way of your doing it.", author: "Earl Nightingale" },
        { text: "An inch of time cannot be bought with an inch of gold.", author: "Chinese Proverb" },
        { text: "Time brings all things to pass.", author: "Aeschylus" },
        { text: "Time is a companion that goes with us on a journey. It reminds us to cherish every moment.", author: "Jean-Luc Picard" },
        { text: "Realize that now, in this moment, you are creating your future.", author: "Unknown" },
        { text: "If you spend too much time thinking about a thing, you'll never get it done.", author: "Bruce Lee" },
        { text: "There is more to life than increasing its speed.", author: "Mahatma Gandhi" },
        { text: "Time is the wisest counselor of all.", author: "Pericles" },
        { text: "We must use time creatively, in the knowledge that the time is always ripe to do right.", author: "Martin Luther King Jr." },
        { text: "How we spend our days is, of course, how we spend our lives.", author: "Annie Dillard" },
        { text: "We must use time as a tool, not as a couch.", author: "John F. Kennedy" },
        { text: "Make time for the things that matter, before time takes them away.", author: "Unknown" },
        { text: "Consistency beats intensity. What are you doing this week?", author: "James Clear" },
        { text: "A calendar is a tool to protect your time, not just schedule it.", author: "Unknown" },
        { text: "Your energy is your currency. Spend it on things that compound.", author: "Unknown" },
        { text: "Regret for wasted time is more wasted time.", author: "Mason Cooley" },
        { text: "Either you run the day or the day runs you.", author: "Jim Rohn" },
        { text: "Tomorrow is often the busiest day of the week.", author: "Spanish Proverb" },
        { text: "A year from now you may wish you had started today.", author: "Karen Lamb" },
        { text: "The critical ingredient is getting off your butt and doing something.", author: "Nolan Bushnell" },
        { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
        { text: "If you love life, don't waste time, for time is what life is made up of.", author: "Bruce Lee" },
        { text: "Great things are done by a series of small things brought together.", author: "Vincent Van Gogh" },
        { text: "Never let yesterday use up too much of today.", author: "Will Rogers" },
        { text: "Don't wait. The time will never be just right.", author: "Napoleon Hill" },
        { text: "To do list: Make the most of this week.", author: "Daily Reminder" },
        { text: "The future is promised to no one. Build today.", author: "Unknown" },
        { text: "Spend your weeks on things that survive your lifespan.", author: "Unknown" },
        { text: "You get 52 chances a year. Make this one count.", author: "Unknown" },
        { text: "A week of discipline brings a lifetime of results.", author: "Unknown" },
        { text: "Only the present is ours to direct. Direct it well.", author: "Marcus Aurelius" },
        { text: "Waste your money and you're only out of money, but waste your time and you've lost a part of your life.", author: "Michael LeBoeuf" },
        { text: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.", author: "Stephen King" },
        { text: "In truth, people can generally make time for what they choose to do; it is not the time but the will that is wanting.", author: "John Lubbock" },
        { text: "Work hard, be kind, and amazing things will happen.", author: "Conan O'Brien" },
        { text: "Productivity is being able to do things that you were never able to do before.", author: "Franz Kafka" },
        { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
        { text: "One worth-while task carried to a successful conclusion is worth half-a-hundred half-finished tasks.", author: "B.C. Forbes" },
        { text: "Be not afraid of going slowly, be afraid only of standing still.", author: "Chinese Proverb" },
        { text: "There is no waste of time in life like making explanations.", author: "Benjamin Disraeli" },
        { text: "Make each day your masterpiece.", author: "John Wooden" },
        { text: "It is not enough to be busy. So are the ants. The question is: What are we busy about?", author: "Henry David Thoreau" },
        { text: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.", author: "George Bernard Shaw" },
        { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
        { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
        { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
        { text: "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus.", author: "Alexander Graham Bell" },
        { text: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
        { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
        { text: "There is no shortcut to any place worth going.", author: "Beverly Sills" },
        { text: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa" },
        { text: "The power of compounding applies to habits as well as capital.", author: "Naval Ravikant" },
        { text: "The standard of pace is set by the most productive week.", author: "Unknown" },
        { text: "Time is a flat circle, but you write the geometry.", author: "Unknown" },
        { text: "What you do today is what matters most.", author: "Buddha" },
        { text: "Small adjustments lead to massive shifts over 40 years.", author: "Unknown" },
        { text: "Every week is a new frame in your legacy.", author: "Unknown" },
        { text: "Live intentionally. The alternative is living accidentally.", author: "Unknown" },
        { text: "Make your actions match your aspirations.", author: "James Clear" },
        { text: "To know the value of one week, ask the editor of a weekly newspaper.", author: "Unknown" },
        { text: "Life is a visual sum of the choices we execute weekly.", author: "Unknown" },
        { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
        { text: "Do not count the weeks. Make the weeks count.", author: "Muhammad Ali" },
        { text: "The tragedy of life is what dies inside a man while he lives.", author: "Albert Schweitzer" },
        { text: "Your future self is begging you to take action this week.", author: "Unknown" },
        { text: "Be the curator of your focus.", author: "Unknown" },
        { text: "Happiness is not something readymade. It comes from your own actions.", author: "Mahatma Gandhi" },
        { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
        { text: "Focus on impact, not just activity.", author: "Sheryl Sandberg" },
        { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
        { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
        { text: "Make your life a story worth visualizing.", author: "Unknown" }
    ];

    // ----------------------------------------------------
    // INITIAL STATE / STORAGE
    // ----------------------------------------------------
    let userDob = localStorage.getItem("productive_dob") || "";
    let appTheme = localStorage.getItem("productive_theme") || "dark";
    let appAccent = localStorage.getItem("productive_accent") || "blue-purple";

    // ----------------------------------------------------
    // DOM ELEMENTS
    // ----------------------------------------------------
    const dobInput = document.getElementById("dob-input");
    const dobForm = document.getElementById("dob-form");
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const helpToggleBtn = document.getElementById("help-toggle");
    const shortcutsModalEl = document.getElementById("shortcutsModal");
    const shortcutsModal = new bootstrap.Modal(shortcutsModalEl);

    // Section containers to reveal/hide
    const statsSection = document.getElementById("stats-section");
    const progressSection = document.getElementById("progress-section");
    const gridSection = document.getElementById("grid-section");
    const timelineSection = document.getElementById("timeline-section");
    const factsSection = document.getElementById("facts-section");

    // Stat Values
    const statAge = document.getElementById("stat-age");
    const statCompleted = document.getElementById("stat-completed");
    const statRemaining = document.getElementById("stat-remaining");
    const statProgress = document.getElementById("stat-progress");
    const progressFill = document.getElementById("progress-fill");
    const progressPercentLabel = document.getElementById("progress-percentage-label");

    // Grid details
    const lifeGridElement = document.getElementById("life-grid-element");
    const gridYearLabels = document.getElementById("grid-year-labels");

    // Quote details
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    const nextQuoteBtn = document.getElementById("next-quote-btn");

    // Facts list
    const factsList = document.getElementById("facts-list");
    const dynamicContextFact = document.getElementById("dynamic-context-fact");
    const printReportBtn = document.getElementById("print-report-btn");
    const shareProgressBtn = document.getElementById("share-progress-btn");

    // Floating Button
    const backToTopBtn = document.getElementById("back-to-top");

    // Loading overlay
    const loadingOverlay = document.getElementById("loading-overlay");

    // Canvas Background
    const bgCanvas = document.getElementById("bg-canvas");
    const bgCtx = bgCanvas.getContext("2d");
    let stars = [];

    // Confetti Canvas
    const confettiCanvas = document.getElementById("confetti-canvas");
    const confettiCtx = confettiCanvas.getContext("2d");
    let confettiActive = false;
    let confettiParticles = [];

    // ----------------------------------------------------
    // INITIALIZATION RUN
    // ----------------------------------------------------
    function init() {
        // Hide loading screen
        setTimeout(() => {
            loadingOverlay.style.opacity = 0;
            setTimeout(() => loadingOverlay.classList.add("d-none"), 500);
        }, 600);

        // Apply visual theme from storage
        document.documentElement.setAttribute("data-theme", appTheme);
        document.documentElement.setAttribute("data-accent", appAccent);
        updateThemeIcon();
        updateActiveAccentDot();

        // Canvas setups
        resizeCanvases();
        window.addEventListener("resize", resizeCanvases);
        initStars();
        animateStars();

        // Populate quote
        displayRandomQuote();

        // If DOB already in storage, calculate immediately
        if (userDob) {
            dobInput.value = userDob;
            calculateTime(userDob);
        }

        // Initialize tooltips
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

        // Scroll reveals trigger
        setupScrollReveal();
    }

    // ----------------------------------------------------
    // ACCENT COLOR & THEME CONTROLS
    // ----------------------------------------------------
    function updateThemeIcon() {
        if (appTheme === "light") {
            themeIcon.className = "bi bi-sun-fill";
            themeToggleBtn.title = "Toggle Dark Theme (T Key)";
        } else {
            themeIcon.className = "bi bi-moon-stars-fill";
            themeToggleBtn.title = "Toggle Light Theme (T Key)";
        }
    }

    function toggleTheme() {
        appTheme = appTheme === "light" ? "dark" : "light";
        localStorage.setItem("productive_theme", appTheme);
        document.documentElement.setAttribute("data-theme", appTheme);
        updateThemeIcon();
    }

    function updateActiveAccentDot() {
        document.querySelectorAll(".accent-dot").forEach(dot => {
            if (dot.getAttribute("data-accent-choice") === appAccent) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    document.querySelectorAll(".accent-dot").forEach(dot => {
        dot.addEventListener("click", (e) => {
            const selectedAccent = e.target.getAttribute("data-accent-choice");
            appAccent = selectedAccent;
            localStorage.setItem("productive_accent", appAccent);
            document.documentElement.setAttribute("data-accent", appAccent);
            updateActiveAccentDot();
            
            // Re-render grid to apply new future accent color
            if (userDob) {
                const results = performTimeCalculations(userDob);
                renderGrid(results.productiveWeeksCompleted, results.currentWeekIndex);
            }
        });
    });

    themeToggleBtn.addEventListener("click", toggleTheme);
    helpToggleBtn.addEventListener("click", () => shortcutsModal.show());

    // ----------------------------------------------------
    // CORE CALCULATIONS
    // ----------------------------------------------------
    function performTimeCalculations(dobString) {
        const dob = new Date(dobString);
        const today = new Date();
        
        // Age calculations
        const ageInMs = today - dob;
        const msPerYear = 1000 * 60 * 60 * 24 * 365.2425;
        const currentAge = Math.max(0, ageInMs / msPerYear);

        // Grid calculations
        const totalWeeksLived = currentAge * WEEKS_PER_YEAR;
        const productiveWeeksCompleted = Math.min(TOTAL_PRODUCTIVE_WEEKS, totalWeeksLived);
        const productiveWeeksRemaining = Math.max(0, TOTAL_PRODUCTIVE_WEEKS - productiveWeeksCompleted);
        const percentageCompleted = (productiveWeeksCompleted / TOTAL_PRODUCTIVE_WEEKS) * 100;
        const percentageRemaining = 100 - percentageCompleted;

        // Find current week index relative to DOB
        const currentWeekIndex = Math.floor(totalWeeksLived);

        return {
            currentAge,
            totalWeeksLived,
            productiveWeeksCompleted: Math.floor(productiveWeeksCompleted),
            productiveWeeksRemaining: Math.ceil(productiveWeeksRemaining),
            percentageCompleted,
            percentageRemaining,
            currentWeekIndex
        };
    }

    function calculateTime(dobValue) {
        const results = performTimeCalculations(dobValue);

        // Validation - Date in future check
        if (results.currentAge <= 0) {
            dobInput.classList.add("is-invalid");
            return;
        }
        dobInput.classList.remove("is-invalid");

        // Reveal hidden sections
        statsSection.classList.remove("d-none");
        progressSection.classList.remove("d-none");
        gridSection.classList.remove("d-none");
        timelineSection.classList.remove("d-none");
        factsSection.classList.remove("d-none");

        // Force triggers scroll reveals
        triggerScrollReveal();

        // Animate counter values
        animateCounter(statAge, results.currentAge, 2);
        animateCounter(statCompleted, results.productiveWeeksCompleted, 0);
        animateCounter(statRemaining, results.productiveWeeksRemaining, 0);
        animateCounter(statProgress, results.percentageCompleted, 1);

        // Fill Progress Bar
        setTimeout(() => {
            progressFill.style.width = `${Math.min(100, results.percentageCompleted)}%`;
            progressPercentLabel.innerText = `${results.percentageCompleted.toFixed(1)}% Completed`;
        }, 100);

        // Render visual objects
        renderGrid(results.productiveWeeksCompleted, results.currentWeekIndex);
        updateTimeline(results.currentAge);
        populateFacts(results.currentAge, results.productiveWeeksRemaining);

        // If today is user's birthday, burst confetti!
        checkBirthdayCelebration(dobValue);
    }

    // DOB form submission
    dobForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const value = dobInput.value;
        if (!value) return;

        localStorage.setItem("productive_dob", value);
        userDob = value;
        calculateTime(value);

        // Trigger confetti for submission feedback
        triggerConfettiBurst();
    });

    // ----------------------------------------------------
    // ANIMATED STATISTICS COUNTERS
    // ----------------------------------------------------
    function animateCounter(element, target, decimals = 0) {
        let start = 0;
        const duration = 1200; // ms
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = start + (target - start) * easeProgress;

            if (decimals > 0) {
                element.innerText = currentValue.toFixed(decimals) + (element.id === "stat-progress" ? "%" : "");
            } else {
                element.innerText = Math.floor(currentValue).toLocaleString();
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                if (decimals > 0) {
                    element.innerText = target.toFixed(decimals) + (element.id === "stat-progress" ? "%" : "");
                } else {
                    element.innerText = Math.floor(target).toLocaleString();
                }
            }
        }

        requestAnimationFrame(update);
    }

    // ----------------------------------------------------
    // RENDER LIFE GRID
    // ----------------------------------------------------
    function renderGrid(weeksCompleted, currentWeekIndex) {
        lifeGridElement.innerHTML = "";
        gridYearLabels.innerHTML = "";

        // Build Year Labels on the left
        for (let year = 0; year <= PRODUCTIVE_AGE; year += 5) {
            const label = document.createElement("span");
            label.innerText = `Yr ${year}`;
            gridYearLabels.appendChild(label);
        }

        // Generate grid squares
        const totalSquares = TOTAL_PRODUCTIVE_WEEKS; // 2087
        const fragments = document.createDocumentFragment();

        const isGridGrayedOut = currentWeekIndex >= totalSquares;

        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement("div");
            square.className = "grid-square";

            const yearOfLife = Math.floor(i / WEEKS_PER_YEAR);
            const weekOfYear = Math.floor(i % WEEKS_PER_YEAR) + 1;

            square.setAttribute("data-tooltip", `Week ${i + 1} (Age ${yearOfLife}, Wk ${weekOfYear})`);

            if (isGridGrayedOut) {
                // If user is older than 40, entire grid turns gray
                square.classList.add("gray-out");
            } else {
                if (i < weeksCompleted) {
                    square.classList.add("completed");
                } else if (i === currentWeekIndex) {
                    square.classList.add("current");
                } else {
                    square.classList.add("future");
                }
            }

            fragments.appendChild(square);
        }

        lifeGridElement.appendChild(fragments);
    }

    // ----------------------------------------------------
    // TIMELINE SYNC
    // ----------------------------------------------------
    function updateTimeline(age) {
        const todayNode = document.getElementById("timeline-node-today");
        const timelineAgeVal = document.getElementById("timeline-age-val");
        
        timelineAgeVal.innerText = age.toFixed(1);

        // Position current node relative to 75-year expectancy limit
        let percentage = (age / LIFE_EXPECTANCY) * 100;
        percentage = Math.min(100, Math.max(0, percentage));

        todayNode.style.left = `${percentage}%`;

        // Style the productive end node active status
        const prodNode = document.getElementById("timeline-node-prod");
        if (age >= PRODUCTIVE_AGE) {
            prodNode.classList.add("active");
        } else {
            prodNode.classList.remove("active");
        }
    }

    // ----------------------------------------------------
    // DYNAMIC PERSPECTIVE FACTS
    // ----------------------------------------------------
    function populateFacts(age, weeksRemaining) {
        factsList.innerHTML = "";

        const facts = [
            { label: "Wasting 1 Week", value: `${(1 / TOTAL_PRODUCTIVE_WEEKS * 100).toFixed(3)}% loss of productive span` },
            { label: "Wasting 1 Year", value: `${(52.1775 / TOTAL_PRODUCTIVE_WEEKS * 100).toFixed(2)}% loss of productive span` },
            { label: "Highly Productive Span", value: `${PRODUCTIVE_AGE} Years (~${TOTAL_PRODUCTIVE_WEEKS} Weeks)` }
        ];

        facts.forEach(fact => {
            const item = document.createElement("div");
            item.className = "fact-item";
            item.innerHTML = `
                <span class="text-muted fw-semibold">${fact.label}</span>
                <span class="fact-badge">${fact.value}</span>
            `;
            factsList.appendChild(item);
        });

        // Dynamic perspective message
        let contextMsg = "";
        if (age >= PRODUCTIVE_AGE) {
            contextMsg = `
                You are currently <strong>${age.toFixed(1)} years old</strong>. Your peak 40-year productive window has concluded. 
                However, time compounds in every decade. Every week now is a bonus chance to share your wisdom, guide others, 
                and build your legacy without limits. Focus on compounding quality and depth.
            `;
        } else {
            contextMsg = `
                You are currently <strong>${age.toFixed(1)} years old</strong>. You have <strong>${weeksRemaining.toLocaleString()} productive weeks</strong> remaining until you reach Age 40. 
                <br><br>
                If you increase your weekly consistency by just 1%, the compounding output by the end of your productive era will make your creative impact virtually unstoppable. Use this week intentionally.
            `;
        }
        dynamicContextFact.innerHTML = contextMsg;
    }

    // ----------------------------------------------------
    // SHARING & PRINT DIALOGS
    // ----------------------------------------------------
    printReportBtn.addEventListener("click", () => {
        window.print();
    });

    shareProgressBtn.addEventListener("click", () => {
        const title = "My Productive Weeks Grid";
        const text = `I'm visualizing my productive weeks left on Earth. Time is a non-renewable resource! Check yours out.`;
        const url = window.location.href;

        if (navigator.share) {
            navigator.share({ title, text, url })
                .catch(err => console.log("Share failed:", err));
        } else {
            // Clipboard fallback
            const dummy = document.createElement('input');
            document.body.appendChild(dummy);
            dummy.value = `${text} ${url}`;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
            
            // Temporary alert styling
            alert("Progress summary copied to clipboard! Share it anywhere.");
        }
    });

    // ----------------------------------------------------
    // MOTIVATIONAL QUOTES ACTIONS
    // ----------------------------------------------------
    function displayRandomQuote() {
        // Fade effect
        quoteText.style.opacity = 0;
        quoteAuthor.style.opacity = 0;

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * QUOTES.length);
            const quote = QUOTES[randomIndex];
            quoteText.innerText = `"${quote.text}"`;
            quoteAuthor.innerText = quote.author;
            quoteText.style.opacity = 1;
            quoteAuthor.style.opacity = 1;
        }, 250);
    }

    nextQuoteBtn.addEventListener("click", displayRandomQuote);

    // ----------------------------------------------------
    // BACKGROUND DRIFTING STAR CANVAS
    // ----------------------------------------------------
    function resizeCanvases() {
        bgCanvas.width = window.innerWidth;
        bgCanvas.height = window.innerHeight;
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    }

    function initStars() {
        stars = [];
        const starCount = Math.floor((window.innerWidth * window.innerHeight) / 9000);
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * bgCanvas.width,
                y: Math.random() * bgCanvas.height,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                speedY: -(Math.random() * 0.15 + 0.05),
                glow: Math.random() > 0.8
            });
        }
    }

    function animateStars() {
        bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
        
        const isLightTheme = document.documentElement.getAttribute("data-theme") === "light";
        bgCtx.fillStyle = isLightTheme ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.2)";

        stars.forEach(star => {
            bgCtx.beginPath();
            bgCtx.globalAlpha = star.opacity;
            bgCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            bgCtx.fill();

            // Drift star upwards
            star.y += star.speedY;

            // Twinkle glow
            if (star.glow) {
                star.opacity += (Math.random() - 0.5) * 0.05;
                star.opacity = Math.max(0.1, Math.min(0.7, star.opacity));
            }

            // Wrap around
            if (star.y < 0) {
                star.y = bgCanvas.height;
                star.x = Math.random() * bgCanvas.width;
            }
        });

        requestAnimationFrame(animateStars);
    }

    // ----------------------------------------------------
    // CONFETTI CANVAS PARTY SYSTEM
    // ----------------------------------------------------
    function checkBirthdayCelebration(dobValue) {
        const dobDate = new Date(dobValue);
        const today = new Date();

        if (dobDate.getMonth() === today.getMonth() && dobDate.getDate() === today.getDate()) {
            // It is user's birthday today!
            triggerConfettiBurst(true);
        }
    }

    function triggerConfettiBurst(isBirthday = false) {
        confettiActive = true;
        confettiParticles = [];

        const colors = ["#6366f1", "#a855f7", "#10b981", "#f97316", "#ef4444", "#06b6d4"];
        const particleCount = isBirthday ? 150 : 80;

        for (let i = 0; i < particleCount; i++) {
            confettiParticles.push({
                x: Math.random() * confettiCanvas.width,
                y: confettiCanvas.height + 20, // start from bottom and burst up
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                speedX: (Math.random() - 0.5) * 12,
                speedY: -(Math.random() * 15 + 10),
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                gravity: 0.35,
                opacity: 1
            });
        }

        if (isBirthday) {
            setTimeout(() => {
                alert("🎉 Happy Birthday! A brand new year of life starts today. Make this week exceptional!");
            }, 500);
        }

        runConfettiLoop();
    }

    function runConfettiLoop() {
        if (!confettiActive) return;

        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        let activeCount = 0;

        confettiParticles.forEach(p => {
            if (p.opacity <= 0) return;

            activeCount++;
            confettiCtx.save();
            confettiCtx.translate(p.x, p.y);
            confettiCtx.rotate((p.rotation * Math.PI) / 180);
            confettiCtx.globalAlpha = p.opacity;
            confettiCtx.fillStyle = p.color;
            confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            confettiCtx.restore();

            // Physics
            p.x += p.speedX;
            p.y += p.speedY;
            p.speedY += p.gravity;
            p.rotation += p.rotationSpeed;
            
            // Fade out as it falls past half screen height
            if (p.speedY > 0) {
                p.opacity -= 0.01;
            }
        });

        if (activeCount > 0) {
            requestAnimationFrame(runConfettiLoop);
        } else {
            confettiActive = false;
            confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        }
    }

    // ----------------------------------------------------
    // SCROLL REVEAL UTILITIES & INTERACTIVITY
    // ----------------------------------------------------
    function setupScrollReveal() {
        const observerOptions = {
            root: null,
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                }
            });
        }, observerOptions);

        document.querySelectorAll(".scroll-reveal").forEach(el => {
            observer.observe(el);
        });
    }

    function triggerScrollReveal() {
        document.querySelectorAll(".scroll-reveal").forEach(el => {
            el.classList.add("revealed");
        });
    }

    // Back to top floating button visibility
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove("d-none");
        } else {
            backToTopBtn.classList.add("d-none");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ----------------------------------------------------
    // KEYBOARD SHORTCUTS
    // ----------------------------------------------------
    window.addEventListener("keydown", (e) => {
        // Skip shortcuts if user is currently typing in input field
        if (document.activeElement.tagName === "INPUT") {
            if (e.key === "Escape") {
                dobInput.blur();
            }
            return;
        }

        const key = e.key.toLowerCase();
        
        if (key === "d") {
            e.preventDefault();
            dobInput.focus();
            dobInput.select();
        } else if (key === "t") {
            e.preventDefault();
            toggleTheme();
        } else if (key === "q") {
            e.preventDefault();
            displayRandomQuote();
        } else if (key === "p") {
            e.preventDefault();
            window.print();
        } else if (e.key === "?") {
            e.preventDefault();
            shortcutsModal.show();
        }
    });

    // ----------------------------------------------------
    // RUN APPLICATION
    // ----------------------------------------------------
    init();
});
