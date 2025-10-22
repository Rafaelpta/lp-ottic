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
    image: "/testimonials/leandro-herrera.jpg",
    quote: "We're thrilled with the results. Ottic transforms our data into high-quality content that drives traffic and compounds over time: a huge asset."
  },
  {
    name: "Lucas Costas",
    handle: "CEO of Briefer (YC S 23)",
    image: "/testimonials/lucas-costas.jpg",
    quote: "We worked with Ottic to support our content strategy, and they are consistently thoughtful, responsive, and easy to collaborate with."
  },
  {
    name: "Sophia Faria",
    handle: "COO at Abstra (YC S21)",
    image: "/testimonials/sophia-faria.jpg",
    quote: "I was skeptical at first, but Ottic replaced 100% our content team. Highly recommend!"
  },
  {
    name: "Tiago Serrano",
    handle: "Founder and CEO at Solucx",
    image: "/testimonials/tiago-serrano.jpg",
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
  typeWriter();

  // Event listeners
  document.getElementById('theme-toggle').onclick = toggleTheme;
  document.getElementById('user-input').oninput = handleInputChange;
});
