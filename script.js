// Data
const commands = [
  "Create a Product Hunt launch campaign for next Tuesday",
  "Get our first 1,000 users in 30 days",
  "Find subreddits where our target customers hang out",
  "Launch our new pricing and announce it everywhere",
  "Analyze why our LinkedIn ads cost so much lately",
  "Build hype for our beta waitlist opening",
  "Turn our best case study into social content",
];

const suggestionSets = [
  [
    { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2 a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", text: "Show me last week's performance", prompt: "Show me how my marketing performed last week. Break it down by channel - organic, paid ads, social, email. Highlight what's working and what's not. My LinkedIn ads seem expensive lately, flag if something's off." },
    { icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z", text: "Create campaign from my best post", prompt: "My post about AI replacing junior developers blew up on LinkedIn. Turn it into a full campaign - adapt it for Twitter, write an email for my newsletter, create ad variations. Make it work across all channels." },
    { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "Optimize my ads for lower costs", prompt: "My Meta ads are too expensive right now. Review what I'm running, kill what's not working, and suggest new angles to test. I need to lower my cost per customer without losing volume." },
    { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", text: "Find opportunities on Reddit", prompt: "Find subreddits where B2B founders talk about marketing problems. I sell a website builder. Show me trending discussions where I can jump in and help. Draft some authentic comments I can use." },
    { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", text: "Schedule posts across all channels", prompt: "Plan my content for the next two weeks - LinkedIn, Twitter, and blog. We're launching a new feature soon. Optimize posting times for tech founders and mix in product updates with helpful content." },
    { icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "Generate executive report", prompt: "Create a marketing summary for our board meeting. Cover what we spent, what we got, what worked, what didn't. Include recommendations for next quarter's budget. Keep it visual and to the point." },
  ],
  [
    { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", text: "Launch Product Hunt campaign", prompt: "We're launching on Product Hunt next week. Create the product description, first comment, gallery images, and an email to send our users. Also draft outreach messages for hunters. Goal is to hit top 5." },
    { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "Write newsletter about latest update", prompt: "Write a newsletter announcing our new Figma integration. My audience is design-focused founders. Make the subject line catchy, explain why they'll love it, add GIFs, and a clear call-to-action. Keep it conversational." },
    { icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z", text: "What's my best performing content?", prompt: "Show me my top content from the last few months across blog, LinkedIn, and Twitter. Rank by engagement and signups. What patterns should I repeat? What's working that I should double down on?" },
    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Create week-long launch campaign", prompt: "Design a launch campaign for our new AI feature. Map out content for each day - teasers, announcement, tutorials, case studies, closing offer. Coordinate across email, social, and blog." },
    { icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", text: "Turn my landing page into ads", prompt: "My landing page converts well with the headline 'Build websites in minutes, not weeks'. Extract this into ad variations for LinkedIn, Facebook carousels, and Google search ads. Keep what's working." },
    { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", text: "Find trending topics in my niche", prompt: "What's trending in B2B SaaS marketing right now? Find hot topics from Twitter, LinkedIn, and communities. Suggest unique angles we can take. I want thought leadership, not generic takes." },
  ],
  [
    { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", text: "Where should I find my first 100 users?", prompt: "I built a Slack integration for customer feedback. Currently just friends and family using it. My ideal customers are product managers at small startups. Where should I find them? Give me specific channels and what to do daily." },
    { icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1", text: "Build backlink strategy for SEO", prompt: "Our blog needs more authority. Find sites in the project management space that accept guest posts. Create an outreach email template and suggest content ideas we can pitch. I have a few hours per week for this." },
    { icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122", text: "Launch viral Twitter thread campaign", prompt: "Write a Twitter thread about how we hit our revenue goal in two months. Make the first tweet hook people instantly. Include data, screenshots, and one controversial take. Aim for maximum engagement." },
    { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", text: "Analyze competitor marketing strategy", prompt: "Deep dive into how Notion, ClickUp, and Airtable do marketing. What channels are they using? What's their messaging? Find their top keywords and ad patterns. Show me gaps where we can differentiate." },
    { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "Calculate ROI of current campaigns", prompt: "Break down my marketing ROI from last quarter. Show me what each channel actually returned - Google Ads, LinkedIn, content. Calculate true cost per customer and tell me where to invest more or cut back." },
    { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", text: "Build content calendar for next month", prompt: "Plan next month's content across LinkedIn, blog, Twitter, and newsletter. We have a product update mid-month and a conference at the end. Create a cohesive story that ties everything together." },
  ],
];

const testimonials = [
  {
    name: "Leandro Herrera",
    handle: "Founder and CEO at Tera",
    image: "/public/testimonials/leandro-herrera.jpg",
    quote: "We're thrilled with the results. Ottic transforms our data into high-quality content that drives traffic and compounds over time: a huge asset."
  },
  {
    name: "Lucas Costas",
    handle: "CEO of Briefer (YC S 23)",
    image: "/public/testimonials/lucas-costas.jpg",
    quote: "We worked with Ottic to support our content strategy, and they are consistently thoughtful, responsive, and easy to collaborate with."
  },
  {
    name: "Sophia Faria",
    handle: "COO at Abstra (YC S21)",
    image: "/public/testimonials/sophia-faria.jpg",
    quote: "I was skeptical at first, but Ottic replaced 100% our content team. Highly recommend!"
  },
  {
    name: "Tiago Serrano",
    handle: "Founder and CEO at Solucx",
    image: "/public/testimonials/tiago-serrano.jpg",
    quote: "Ottic was a game-changer. It's like having a strategic editorial brain and a senior content team in one."
  },
];

const faqs = [
  {
    question: "What is Ottic?",
    answer: "Ottic is GTM infrastructure for AI-native companies. It's an AI-powered system that runs your entire go-to-market—from content and ads to analytics and distribution—through simple chat commands. Think of it as your marketing department in a terminal."
  },
  {
    question: "Do I need marketing experience to use Ottic?",
    answer: "No. Ottic is built for founders who want to ship fast without hiring a marketing team. You describe what you want in plain English, and AI agents handle strategy and execution. No marketing expertise required."
  },
  {
    question: "What is an AI agent for GTM?",
    answer: "AI agents are autonomous systems that plan and execute marketing tasks across platforms. Unlike chatbots that just suggest ideas, Ottic's agents actually run campaigns, create content, optimize ads, and coordinate across channels—without human intervention."
  },
  {
    question: "Why should I care about GTM infrastructure now?",
    answer: "AI search is reshaping how people discover products. Companies like HubSpot lost 75% of their organic traffic in the past year. CACs are skyrocketing. Building product is getting easier, but GTM is getting harder. In the long run, distribution is your only moat—not the product itself."
  },
  {
    question: "What types of marketing can I run with Ottic?",
    answer: "Everything. Launch campaigns, create content, run paid ads, analyze performance, optimize SEO, track competitors, schedule social posts, build email sequences, and more. Ottic coordinates all channels from a single interface—no switching between 10 different tools."
  },
  {
    question: "How much does Ottic cost?",
    answer: "Ottic is free forever if you self-host (open source, MIT license). For Ottic Cloud with managed infrastructure and premium features, pricing starts at a fraction of hiring a single marketer. No long-term contracts—pay monthly and cancel anytime."
  },
];

const announcements = [
  { type: "in-progress", icon: "⚡", text: "Multi-channel analytics dashboard", status: "75% complete" },
  { type: "planned", icon: "◆", text: "Real-time competitor tracking" },
  { type: "under-review", icon: "●", text: "LinkedIn AI agent with auto-posting" },
  { type: "cta-mixed", icon: "→", text: "See what we're building next &", linkText: "request a feature", link: "#request-feature" },
];

// State
let currentSuggestionSet = 0;
let placeholderText = "";
let commandIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimer = null;

// Theme Management
function initTheme() {
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.classList.toggle('dark', theme === 'dark');
  updateThemeIcon(theme);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  if (theme === 'dark') {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
}

// Animated Input Placeholder
function typeWriter() {
  const currentCommand = commands[commandIndex];
  const typingSpeed = isDeleting ? 30 : 60;
  const pauseTime = isDeleting ? 500 : 2000;

  if (!isDeleting && charIndex < currentCommand.length) {
    placeholderText = currentCommand.slice(0, charIndex + 1);
    charIndex++;
    document.getElementById('placeholder-text').textContent = placeholderText;
    typingTimer = setTimeout(typeWriter, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    placeholderText = currentCommand.slice(0, charIndex - 1);
    charIndex--;
    document.getElementById('placeholder-text').textContent = placeholderText;
    typingTimer = setTimeout(typeWriter, typingSpeed);
  } else if (!isDeleting && charIndex === currentCommand.length) {
    setTimeout(() => {
      isDeleting = true;
      typeWriter();
    }, pauseTime);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    commandIndex = (commandIndex + 1) % commands.length;
    typingTimer = setTimeout(typeWriter, typingSpeed);
  }
}

// Input Handling
function handleInputChange() {
  const input = document.getElementById('user-input');
  const placeholder = document.getElementById('placeholder-container');
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');

  if (input.value.trim()) {
    placeholder.style.display = 'none';
    submitBtn.classList.add('expanded');
    submitText.style.display = 'inline';
  } else {
    placeholder.style.display = 'flex';
    submitBtn.classList.remove('expanded');
    submitText.style.display = 'none';
  }

  // Auto-resize
  input.style.height = 'auto';
  input.style.height = Math.max(120, input.scrollHeight) + 'px';
}

// Suggestions
function renderSuggestions() {
  const container = document.getElementById('suggestions');
  const suggestions = suggestionSets[currentSuggestionSet];

  container.innerHTML = '';
  suggestions.forEach((suggestion, index) => {
    const btn = document.createElement('button');
    btn.className = 'suggestion-btn';
    btn.innerHTML = `
      <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${suggestion.icon}" />
      </svg>
      ${suggestion.text}
    `;
    btn.onclick = () => {
      document.getElementById('user-input').value = suggestion.prompt;
      handleInputChange();
    };
    container.appendChild(btn);
  });
}

function rotateSuggestions() {
  currentSuggestionSet = (currentSuggestionSet + 1) % suggestionSets.length;
  renderSuggestions();
}

// Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonials-scroll');
  const track = document.createElement('div');
  track.className = 'testimonials-track';

  // Duplicate testimonials 3 times for infinite scroll
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  allTestimonials.forEach((testimonial, index) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <div class="testimonial-header">
        <div class="testimonial-avatar">
          <img src="${testimonial.image}" alt="${testimonial.name}" onerror="this.style.display='none'">
        </div>
        <div class="testimonial-info">
          <div class="testimonial-name">${testimonial.name}</div>
          <div class="testimonial-handle">${testimonial.handle}</div>
        </div>
      </div>
      <div class="testimonial-quote">${testimonial.quote}</div>
    `;
    track.appendChild(card);
  });

  container.appendChild(track);
}

// FAQ Accordion
function renderFAQ() {
  const container = document.getElementById('faq-accordion');

  faqs.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.innerHTML = `
      <button class="accordion-trigger">
        ${faq.question}
        <svg class="accordion-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div class="accordion-content">
        <div class="accordion-content-inner">${faq.answer}</div>
      </div>
    `;

    const trigger = item.querySelector('.accordion-trigger');
    trigger.onclick = () => {
      const isActive = item.classList.contains('active');
      // Close all items
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    };

    container.appendChild(item);
  });
}

// Announcement Bar
function renderAnnouncementBar() {
  const scrollContainer = document.querySelector('.announcement-scroll');

  // Duplicate announcements for infinite scroll
  const allAnnouncements = [...announcements, ...announcements];

  allAnnouncements.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'announcement-item';

    if (item.type === 'in-progress') {
      div.innerHTML = `
        <span class="announcement-icon">${item.icon}</span>
        <span style="font-weight: 500; color: #47ffa4;">In Progress:</span>
        <span>${item.text}</span>
        <span class="announcement-status">${item.status}</span>
        <span class="announcement-divider">|</span>
      `;
    } else if (item.type === 'planned') {
      div.innerHTML = `
        <span style="color: rgba(0, 229, 114, 0.6);">${item.icon}</span>
        <span style="font-weight: 500; color: #47ffa4;">Planned:</span>
        <span>${item.text}</span>
        <span class="announcement-divider">|</span>
      `;
    } else if (item.type === 'under-review') {
      div.innerHTML = `
        <span class="announcement-icon">${item.icon}</span>
        <span style="font-weight: 500; color: #47ffa4;">Under Review:</span>
        <span>${item.text}</span>
        <span class="announcement-divider">|</span>
      `;
    } else if (item.type === 'cta-mixed') {
      div.innerHTML = `
        <span class="announcement-icon">${item.icon}</span>
        <span>${item.text}</span>
        <a href="${item.link}" style="font-weight: 500; color: #06ff83; text-decoration: underline;">${item.linkText}</a>
        <span class="announcement-divider">|</span>
      `;
    }

    scrollContainer.appendChild(div);
  });
}

// Modal
function openModal() {
  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
}

// Demo Section
const demoData = {
  research: {
    prompt: "Hey, can you research keywords for AI courses? I want to understand what people are searching for.",
    output: `🔍 Got it! Running keyword research for AI courses...

Connecting to SEMrush API...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Fetched 3,398 keywords
✓ Filtered by relevance & volume
✓ Categorized by intent & type

Top Opportunities:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"ai course"         → 5,400/mo  45% KD  VERY HIGH
"prompt engineering" → 2,400/mo  61% KD  VERY HIGH
"machine learning"  → 1,600/mo  17% KD  VERY HIGH

Total Traffic Potential: 83.15M visits/year
Average KD: 41% (Medium competition)

💡 Strategy Recommendation:
   Focus on "Educational" + "Conversion" keywords
   Target "VERY HIGH" relevance terms first
   Estimated reach: 15-20K qualified leads/month`
  },
  campaign: {
    prompt: "I loved that technical post we published last week. Can you create a campaign based on it?",
    output: `🚀 Perfect! Creating a campaign from your top-performing post...

Analyzing: "Technical deep-dive: Our migration story"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Generated 8 new technical posts in similar style
✓ Scheduled across LinkedIn, Twitter, Reddit
✓ Set up A/B tests for 4 headline variations
✓ Allocated $8,500 budget

Content Calendar:
Mon 10am → "Database optimization techniques"
Wed 2pm  → "Scaling Redis for 10M requests/day"
Fri 9am  → "Our approach to zero-downtime deploys"

Targeting:
• Senior Engineers (5+ years)
• DevOps/SRE roles
• Companies: 100-1000 employees

Estimated reach: 25K-30K technical professionals
Ready to launch when you are!`
  },
  optimization: {
    prompt: "Our ads are too expensive. Can you optimize them to get CPA down to $12?",
    output: `⚡ On it! Analyzing your ads and optimizing for $12 CPA...

Current CPA: $18.50 | Target: $12.00
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Changes Made:
✓ Paused 3 underperforming ad sets (-$2.1K/mo)
✓ Increased budget on top performers (+$3.2K/mo)
✓ Refined audience: removed "general tech" segment
✓ Updated 5 ad creatives with higher CTR variants

New Performance Projection:
• CPA: $18.50 → $11.80 (↓36%) ✨
• Monthly spend: $12.4K → $10.8K (↓13%)
• Conversions: 670 → 915 (↑37%)

ROI Improvement: +$4,200/month

All changes deployed! Monitoring for 48h...`
  }
};

function setupDemoTabs() {
  const tabs = document.querySelectorAll('.demo-tab');
  const promptText = document.getElementById('demo-prompt-text');
  const outputText = document.getElementById('demo-output-text');

  tabs.forEach(tab => {
    tab.onclick = () => {
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active to clicked tab
      tab.classList.add('active');

      // Get demo data
      const demoType = tab.getAttribute('data-demo');
      const data = demoData[demoType];

      // Update content
      if (promptText && outputText && data) {
        promptText.textContent = data.prompt;
        outputText.textContent = data.output;
      }
    };
  });
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Escape to close modal
  if (e.key === 'Escape') {
    closeModal();
  }

  // Enter in textarea
  const input = document.getElementById('user-input');
  if (e.target === input && e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    if (input.value.trim()) {
      openModal();
    }
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderSuggestions();
  renderTestimonials();
  renderFAQ();
  renderAnnouncementBar();
  initializeDemo();
  setupDemoTabs();
  typeWriter();

  // Event listeners
  document.getElementById('theme-toggle').onclick = toggleTheme;
  document.getElementById('user-input').oninput = handleInputChange;
});
// Complete Demo Section JavaScript

const demoPrompts = [
  {
    id: 1,
    category: "Research",
    label: "Hey, can you research keywords for AI courses? I want to understand what people are searching for.",
    ui: "keyword-research",
    output: `🔍 Got it! Running keyword research for AI courses...

Connecting to SEMrush API...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Fetched 3,398 keywords
✓ Filtered by relevance & volume
✓ Categorized by intent & type

Top Opportunities:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"ai course"         → 5,400/mo  45% KD  VERY HIGH
"prompt engineering" → 2,400/mo  61% KD  VERY HIGH
"machine learning"  → 1,600/mo  17% KD  VERY HIGH

Total Traffic Potential: 83.15M visits/year
Average KD: 41% (Medium competition)

💡 Strategy Recommendation:
   Focus on "Educational" + "Conversion" keywords
   Target "VERY HIGH" relevance terms first
   Estimated reach: 15-20K qualified leads/month`
  },
  {
    id: 2,
    category: "Campaign",
    label: "I loved that technical post we published last week. Can you create a campaign based on it?",
    ui: "campaign",
    output: `🚀 Perfect! Creating a campaign from your top-performing post...

Analyzing: "Technical deep-dive: Our migration story"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Generated 8 new technical posts in similar style
✓ Scheduled across LinkedIn, Twitter, Reddit
✓ Set up A/B tests for 4 headline variations
✓ Allocated $8,500 budget

Content Calendar:
Mon 10am → "Database optimization techniques"
Wed 2pm  → "Scaling Redis for 10M requests/day"
Fri 9am  → "Our approach to zero-downtime deploys"

Targeting:
• Senior Engineers (5+ years)
• DevOps/SRE roles
• Companies: 100-1000 employees

Estimated reach: 25K-30K technical professionals
Ready to launch when you are!`
  },
  {
    id: 3,
    category: "Optimization",
    label: "Our ads are too expensive. Can you optimize them to get CPA down to $12?",
    ui: "optimization",
    output: `⚡ On it! Analyzing your ads and optimizing for $12 CPA...

Current CPA: $18.50 | Target: $12.00
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Changes Made:
✓ Paused 3 underperforming ad sets (-$2.1K/mo)
✓ Increased budget on top performers (+$3.2K/mo)
✓ Refined audience: removed "general tech" segment
✓ Updated 5 ad creatives with higher CTR variants

New Performance Projection:
• CPA: $18.50 → $11.80 (↓36%) ✨
• Monthly spend: $12.4K → $10.8K (↓13%)
• Conversions: 670 → 915 (↑37%)

ROI Improvement: +$4,200/month

All changes deployed! Monitoring for 48h...`
  },
  {
    id: 4,
    category: "Research",
    label: "Find me some good Reddit threads where we can contribute and get visibility",
    ui: "research",
    output: `🔍 Sure! Scanning Reddit for relevant opportunities...

Found 12 high-value threads where you can add value
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

r/devops (2.1M members)
└─ "Struggling with CI/CD pipeline costs"
   → 847 upvotes │ Posted 4h ago
   → Opportunity Score: 9.2/10
   💬 I've drafted a helpful response for you

r/kubernetes (890K members)
└─ "How do you monitor prod at scale?"
   → 623 upvotes │ Posted 8h ago
   → Opportunity Score: 8.7/10
   💬 Response ready to review

r/aws (450K members)
└─ "Best practices for cost optimization?"
   → 412 upvotes │ Posted 2h ago
   → Opportunity Score: 9.0/10
   💬 Response ready

Want me to post these responses for you?`
  },
  {
    id: 5,
    category: "Scheduling",
    label: "Schedule some LinkedIn posts for the next 2 weeks. Focus on our best performing times.",
    ui: "scheduling",
    output: `📅 Got it! Setting up your LinkedIn content calendar...

Scheduled 12 posts for optimal engagement times
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Week 1:
Mon 10:00 → "5 mistakes we made scaling to 1M users"
Wed 14:00 → "Why we chose Postgres over MongoDB"
Fri 09:00 → "Technical hiring: our interview process"

Week 2:
Mon 10:00 → "Observability on a budget: our stack"
Wed 14:00 → "From monolith to microservices"
Thu 16:00 → "How we handle database migrations"
Fri 09:00 → "Our approach to on-call rotations"

Optimal posting times based on your audience:
• Monday 10am (24% higher engagement)
• Wednesday 2pm (18% higher engagement)
• Friday 9am (31% higher engagement)

All set! Auto-publishing enabled.`
  },
  {
    id: 6,
    category: "Reporting",
    label: "I have a board meeting tomorrow. Can you generate an executive summary of our GTM performance?",
    ui: "reporting",
    output: `📈 Absolutely! Pulling together your Q4 GTM report...

Executive GTM Summary - Q4 2024
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CAC              $847  (↓23% vs Q3)
LTV              $12.4K (↑15% vs Q3)
LTV:CAC Ratio    14.6x (Target: 10x) ✓

Marketing Spend: $42.5K
Pipeline Generated: $1.2M
ROI: 28x

Top Channels:
1. LinkedIn      → $680K pipeline (57%)
2. Reddit        → $312K pipeline (26%)
3. Twitter       → $198K pipeline (17%)

Content Performance:
• 47 pieces published
• 2.8M impressions
• 89K clicks (3.2% CTR)
• 847 conversions

🎯 Next Quarter Recommendations:
   → Scale LinkedIn (proven channel)
   → Launch podcast series (in progress)
   → Expand Reddit presence (untapped)

Full report saved: /reports/q4-2024-gtm.pdf`
  }
];

// UI Generators
const UIGenerators = {
  'keyword-research': () => {
    const keywords = [
      { keyword: "ai course", volume: "5,400", kd: "45%", relevance: "VERY HIGH", category: "Educational", type: "Conversion" },
      { keyword: "artificial intelligence course", volume: "2,900", kd: "48%", relevance: "VERY HIGH", category: "Educational", type: "Conversion" },
      { keyword: "what is generative ai", volume: "2,500", kd: "55%", relevance: "HIGH", category: "Core AI", type: "Awareness" },
      { keyword: "free ai course", volume: "2,400", kd: "49%", relevance: "HIGH", category: "Educational", type: "Conversion" },
      { keyword: "prompt engineering", volume: "2,400", kd: "61%", relevance: "VERY HIGH", category: "Technical", type: "Specialized" },
      { keyword: "ai courses online", volume: "1,600", kd: "43%", relevance: "HIGH", category: "Educational", type: "Conversion" },
      { keyword: "machine learning", volume: "1,600", kd: "17%", relevance: "VERY HIGH", category: "Technical", type: "Specialized" },
      { keyword: "learn ai free", volume: "1,300", kd: "58%", relevance: "HIGH", category: "Educational", type: "Conversion" },
      { keyword: "ai music generator", volume: "1,300", kd: "24%", relevance: "MEDIUM", category: "Application", type: "Functional" },
      { keyword: "ai certification", volume: "1,000", kd: "40%", relevance: "HIGH", category: "Educational", type: "Conversion" },
    ];

    return `
      <div class="ui-keyword-research">
        <div class="ui-toolbar">
          <span class="stat">16 courses</span>
          <span class="stat highlight">3,398 keywords</span>
          <span class="stat">83.15M traffic</span>
          <span class="stat">41% avg KD</span>
          <span class="stat">🌐 Global</span>
        </div>
        <div class="ui-filters">
          <input type="text" placeholder="Search..." />
          <select><option>Product</option></select>
          <select><option>Category</option></select>
          <select><option>Relevance</option></select>
        </div>
        <div class="keyword-table">
          <table>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Volume</th>
                <th>KD%</th>
                <th>Relevance</th>
                <th>Category</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              ${keywords.map(kw => `
                <tr>
                  <td><strong>${kw.keyword}</strong></td>
                  <td><span class="keyword-value">${kw.volume}</span></td>
                  <td><span class="${parseInt(kw.kd) < 30 ? 'keyword-kd-low' : 'keyword-kd-high'}">${kw.kd}</span></td>
                  <td><span class="relevance-badge ${kw.relevance === 'VERY HIGH' ? 'very-high' : kw.relevance === 'HIGH' ? 'high' : 'medium'}">${kw.relevance}</span></td>
                  <td><span class="category-badge">${kw.category}</span></td>
                  <td>${kw.type}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  'scheduling': () => {
    const posts = [
      { day: "Mon", time: "10:00", title: "5 mistakes we made scaling to 1M users", engagement: "High" },
      { day: "Wed", time: "14:00", title: "Why we chose Postgres over MongoDB", engagement: "High" },
      { day: "Fri", time: "09:00", title: "Technical hiring: our interview process", engagement: "Very High" },
      { day: "Mon", time: "10:00", title: "Observability on a budget: our stack", engagement: "High" },
      { day: "Wed", time: "14:00", title: "From monolith to microservices", engagement: "Medium" },
    ];

    return `
      <div class="ui-scheduling">
        <div class="ui-header">
          <h3>LinkedIn Content Calendar</h3>
          <span class="meta">Next 14 days • 12 posts</span>
        </div>
        <div class="calendar-list">
          ${posts.map(post => `
            <div class="calendar-item">
              <div class="calendar-item-content">
                <div class="calendar-item-title">${post.title}</div>
                <div class="calendar-item-time">${post.day} ${post.time}</div>
              </div>
              <span class="engagement-badge ${post.engagement === 'Very High' ? 'very-high' : post.engagement === 'High' ? 'high' : 'medium'}">${post.engagement}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  'campaign': () => {
    return `
      <div class="ui-campaign">
        <div class="campaign-header">
          <h3>Technical Deep-Dive Series</h3>
          <div class="campaign-meta">8 posts • 3 platforms • $8,500 budget</div>
        </div>

        <div class="campaign-section">
          <h4>Content Calendar</h4>
          <div class="campaign-item">
            <div>
              <div class="campaign-item-title">Database optimization techniques</div>
              <div class="campaign-item-time">Monday 10:00 AM</div>
            </div>
            <span class="status-badge">Scheduled</span>
          </div>
          <div class="campaign-item">
            <div>
              <div class="campaign-item-title">Scaling Redis for 10M requests/day</div>
              <div class="campaign-item-time">Wednesday 2:00 PM</div>
            </div>
            <span class="status-badge">Scheduled</span>
          </div>
          <div class="campaign-item">
            <div>
              <div class="campaign-item-title">Our approach to zero-downtime deploys</div>
              <div class="campaign-item-time">Friday 9:00 AM</div>
            </div>
            <span class="status-badge">Scheduled</span>
          </div>
        </div>

        <div class="campaign-section">
          <h4>Targeting</h4>
          <div class="targeting-tags">
            <span class="tag">Senior Engineers</span>
            <span class="tag">DevOps/SRE</span>
            <span class="tag">100-1000 employees</span>
          </div>
        </div>
      </div>
    `;
  },

  'optimization': () => {
    return `
      <div class="ui-optimization">
        <h3 style="font-size: 1.125rem; font-weight: 700; margin-bottom: 1rem;">Ad Optimization Results</h3>

        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-label">Target CPA</div>
            <div class="metric-value primary">$12.00</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">New CPA</div>
            <div class="metric-value success">$11.80</div>
            <div class="metric-change">↓ 36%</div>
          </div>
        </div>

        <div class="campaign-section">
          <h4>Changes Made</h4>
          <div class="changes-list">
            <div class="change-item">
              <span class="check">✓</span>
              <span>Paused 3 underperforming ad sets</span>
              <span class="change-amount negative">-$2.1K/mo</span>
            </div>
            <div class="change-item">
              <span class="check">✓</span>
              <span>Increased budget on top performers</span>
              <span class="change-amount positive">+$3.2K/mo</span>
            </div>
            <div class="change-item">
              <span class="check">✓</span>
              <span>Refined audience targeting</span>
            </div>
            <div class="change-item">
              <span class="check">✓</span>
              <span>Updated 5 ad creatives</span>
            </div>
          </div>
        </div>

        <div class="roi-card">
          <div class="roi-label">ROI Improvement</div>
          <div class="roi-value">+$4,200/month</div>
        </div>
      </div>
    `;
  },

  'research': () => {
    return `
      <div class="ui-campaign">
        <div class="campaign-header">
          <h3>Reddit Opportunities</h3>
        </div>

        <div class="campaign-item" style="margin-bottom: 1rem;">
          <div>
            <div class="campaign-item-title">r/devops - "Struggling with CI/CD pipeline costs"</div>
            <div class="campaign-item-time">847 upvotes │ Posted 4h ago</div>
            <div style="margin-top: 0.5rem; font-size: 0.75rem;">💬 Response drafted and ready to post</div>
          </div>
          <span class="status-badge" style="background-color: rgba(34, 197, 94, 0.1); color: rgb(34 197 94);">9.2/10</span>
        </div>

        <div class="campaign-item" style="margin-bottom: 1rem;">
          <div>
            <div class="campaign-item-title">r/kubernetes - "How do you monitor prod at scale?"</div>
            <div class="campaign-item-time">623 upvotes │ Posted 8h ago</div>
            <div style="margin-top: 0.5rem; font-size: 0.75rem;">💬 Response drafted and ready to review</div>
          </div>
          <span class="status-badge" style="background-color: rgba(34, 197, 94, 0.1); color: rgb(34 197 94);">8.7/10</span>
        </div>

        <div class="campaign-item">
          <div>
            <div class="campaign-item-title">r/aws - "Best practices for cost optimization?"</div>
            <div class="campaign-item-time">412 upvotes │ Posted 2h ago</div>
            <div style="margin-top: 0.5rem; font-size: 0.75rem;">💬 Response ready to post</div>
          </div>
          <span class="status-badge" style="background-color: rgba(34, 197, 94, 0.1); color: rgb(34 197 94);">9.0/10</span>
        </div>
      </div>
    `;
  },

  'reporting': () => {
    return `
      <div class="ui-optimization">
        <h3 style="font-size: 1.125rem; font-weight: 700; margin-bottom: 1rem;">Executive GTM Report - Q4 2024</h3>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
          <div class="metric-card">
            <div class="metric-label">CAC</div>
            <div class="metric-value">$847</div>
            <div class="metric-change">↓ 23% vs Q3</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">LTV</div>
            <div class="metric-value">$12.4K</div>
            <div class="metric-change">↑ 15% vs Q3</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">LTV:CAC</div>
            <div class="metric-value success">14.6x</div>
            <div style="font-size: 0.75rem; color: var(--muted-foreground); margin-top: 0.25rem;">Target: 10x ✓</div>
          </div>
        </div>

        <div class="campaign-section">
          <h4>Top Channels</h4>
          <div style="display: flex; align-items: center; justify-between; padding: 0.75rem; background-color: var(--card); border: 1px solid var(--border); border-radius: 0.375rem; margin-bottom: 0.5rem;">
            <span style="font-size: 0.875rem;">LinkedIn</span>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 8rem; background-color: var(--muted); border-radius: 9999px; height: 0.5rem;">
                <div style="width: 57%; background-color: var(--primary); height: 0.5rem; border-radius: 9999px;"></div>
              </div>
              <span style="font-size: 0.875rem; font-weight: 600;">$680K</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; justify-between; padding: 0.75rem; background-color: var(--card); border: 1px solid var(--border); border-radius: 0.375rem; margin-bottom: 0.5rem;">
            <span style="font-size: 0.875rem;">Reddit</span>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 8rem; background-color: var(--muted); border-radius: 9999px; height: 0.5rem;">
                <div style="width: 26%; background-color: var(--primary); height: 0.5rem; border-radius: 9999px;"></div>
              </div>
              <span style="font-size: 0.875rem; font-weight: 600;">$312K</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; justify-between; padding: 0.75rem; background-color: var(--card); border: 1px solid var(--border); border-radius: 0.375rem;">
            <span style="font-size: 0.875rem;">Twitter</span>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 8rem; background-color: var(--muted); border-radius: 9999px; height: 0.5rem;">
                <div style="width: 17%; background-color: var(--primary); height: 0.5rem; border-radius: 9999px;"></div>
              </div>
              <span style="font-size: 0.875rem; font-weight: 600;">$198K</span>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem;">
          <div class="metric-card">
            <div class="metric-label">Content Published</div>
            <div style="font-size: 1.25rem; font-weight: 700;">47 pieces</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Conversions</div>
            <div style="font-size: 1.25rem; font-weight: 700;">847</div>
          </div>
        </div>
      </div>
    `;
  }
};

// Initialize Demo
function initializeDemo() {
  renderScrollingPrompts();
  selectPrompt(demoPrompts[0]);
}

// Render Scrolling Prompt Rows
function renderScrollingPrompts() {
  const row1 = document.getElementById('prompt-row-1');
  const row2 = document.getElementById('prompt-row-2');

  if (!row1 || !row2) return;

  const prompts1 = demoPrompts.slice(0, 3);
  const prompts2 = demoPrompts.slice(3, 6);

  // Duplicate for infinite scroll
  row1.innerHTML = [...prompts1, ...prompts1].map(prompt => createPromptButton(prompt)).join('');
  row2.innerHTML = [...prompts2, ...prompts2].map(prompt => createPromptButton(prompt)).join('');

  // Add click handlers
  document.querySelectorAll('.prompt-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const promptId = parseInt(btn.dataset.promptId);
      const prompt = demoPrompts.find(p => p.id === promptId);
      if (prompt) selectPrompt(prompt);
    });
  });
}

function createPromptButton(prompt) {
  return `
    <button class="prompt-button" data-prompt-id="${prompt.id}">
      <span class="prompt-category">${prompt.category}</span>
      ${prompt.label}
    </button>
  `;
}

// Select and Display Prompt
function selectPrompt(prompt) {
  // Update active button
  document.querySelectorAll('.prompt-button').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.promptId) === prompt.id);
  });

  // Update terminal
  const userMessage = document.getElementById('terminal-user-message');
  const output = document.getElementById('terminal-output');

  if (userMessage) userMessage.textContent = prompt.label;
  if (output) output.textContent = prompt.output;

  // Update UI panel
  const uiPanel = document.getElementById('demo-ui-panel');
  if (uiPanel && UIGenerators[prompt.ui]) {
    uiPanel.innerHTML = UIGenerators[prompt.ui]();
  }
}

// Export for use in main script
if (typeof window !== 'undefined') {
  window.initializeDemo = initializeDemo;
}
