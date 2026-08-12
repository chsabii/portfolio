window.WORKS = {
  agents: {
    title: "Agentic AI Workflow System",
    category: "AI Agents and Agentic AI",
    image: "img/service/ai-agents.svg",
    summary: "A production-style multi-agent system that plans tasks, calls tools, and completes multi-step business workflows with logging and human-in-the-loop checks.",
    built: [
      "Task routing agents for research, ops, and lead handling",
      "Tool calling with memory, retries, and guardrails",
      "CRM and webhook connections for real process execution"
    ],
    impact: [
      "Reduced repetitive manual work across support and growth workflows",
      "Faster, more consistent completion of multi-step tasks"
    ],
    stack: ["OpenAI", "LangGraph", "CrewAI", "Python"]
  },
  rag: {
    title: "RAG Knowledge Assistant",
    category: "LangChain and LLM Applications",
    image: "img/service/langchain.svg",
    summary: "A retrieval-augmented chatbot that answers from private documents with source grounding, prompt controls, and evaluation loops to reduce hallucinations.",
    built: [
      "Document ingestion, chunking, embeddings, and vector search",
      "Grounded Q and A with citation-style responses",
      "Prompt chains, evaluators, and a production-ready API"
    ],
    impact: [
      "Turned scattered internal docs into instant, usable answers",
      "Improved accuracy versus a plain LLM chatbot"
    ],
    stack: ["LangChain", "LlamaIndex", "Pinecone", "FAISS"]
  },
  ads: {
    title: "Paid Media Automation Stack",
    category: "Paid Media Marketing Automation",
    image: "img/service/paid-media.svg",
    summary: "End-to-end Meta and Google Ads operations covering tracking, audiences, reporting, and campaign optimization loops built for measurable ROAS.",
    built: [
      "Pixel and Conversion API setup with event mapping",
      "Custom, lookalike, and retargeting audience pipelines",
      "Automation for reporting, audience sync, and campaign maintenance"
    ],
    impact: [
      "Cleaner attribution and stronger conversion signal quality",
      "Less manual media buying with more scalable campaign ops"
    ],
    stack: ["Meta Ads", "Google Ads", "CAPI", "GTM"]
  },
  api: {
    title: "Business API Integration Hub",
    category: "Business and API Integrations",
    image: "img/service/api-integrations.svg",
    summary: "Middleware that connects CRMs, ads platforms, WhatsApp, sheets, and internal tools into reliable automated workflows.",
    built: [
      "REST and webhook bridges with auth, retries, and error handling",
      "Lead routing and notification systems",
      "n8n and Python jobs for recurring data sync"
    ],
    impact: [
      "Removed copy-paste between tools",
      "Faster lead handling and cleaner data flow"
    ],
    stack: ["Python", "n8n", "Zapier", "REST APIs"]
  },
  leads: {
    title: "Bulk Lead Generation Pipeline",
    category: "Data Scraping and Lead Generation",
    image: "img/service/lead-generation.svg",
    summary: "Ethical bulk extraction and enrichment workflows that produce cleaned, scored cold and warm lead lists ready for CRM and outreach.",
    built: [
      "Scrapers with validation, retries, and rate control",
      "Deduping, normalization, and enrichment",
      "Cold and warm audience segmentation for campaigns"
    ],
    impact: [
      "High-quality prospect lists without heavy manual research",
      "Faster pipeline filling for sales and marketing teams"
    ],
    stack: ["Python", "Scrapy", "Selenium", "SQL"]
  },
  voice: {
    title: "AI Voice and Call Agent",
    category: "AI Voice and Call Agents",
    image: "img/service/voice-agents.svg",
    summary: "A conversational voice agent for inbound and outbound calls covering qualification, booking, support, and follow-ups.",
    built: [
      "STT and TTS call flows with natural conversation handling",
      "CRM-connected booking and lead qualification",
      "Call logging, transcripts, and analytics"
    ],
    impact: [
      "24/7 call handling without missed leads",
      "Lower cost per conversation at higher volume"
    ],
    stack: ["Twilio", "Whisper", "ElevenLabs", "LLM"]
  },
  powerbi: {
    title: "Power BI Executive Dashboards",
    category: "Power BI and BI Automation",
    image: "img/service/power-bi.svg",
    summary: "Executive-ready dashboards and automated reporting so marketing, sales, and ops teams act on live, trustworthy KPIs.",
    built: [
      "Interactive dashboards with modeled data and DAX measures",
      "Scheduled refresh and Power Query transformations",
      "Automated report delivery into Teams and email"
    ],
    impact: [
      "One source of truth for business KPIs",
      "Faster decisions with less spreadsheet work"
    ],
    stack: ["Power BI", "DAX", "Power Query", "SQL"]
  },
  crm: {
    title: "CRM and Ads Data Sync",
    category: "CRM Specialist and Automation",
    image: "img/service/crm.svg",
    summary: "Dynamics 365 process design plus integrations that keep customer, lead, and ads data aligned across sales and marketing.",
    built: [
      "Lead and opportunity pipeline configuration",
      "Azure and SQL integrations with marketing tools",
      "Reporting views for follow-up and pipeline hygiene"
    ],
    impact: [
      "Better customer visibility across teams",
      "Faster follow-ups and cleaner CRM records"
    ],
    stack: ["Dynamics 365", "Azure", "SQL Server"]
  },
  hotel: {
    title: "Hotel Cancellation Rate EDA",
    category: "Data Analysis and Insights",
    image: "img/gallery/hotel-eda.svg",
    summary: "Exploratory data analysis in Python to find the drivers behind hotel booking cancellations and recommend practical actions.",
    built: [
      "Data cleaning, feature exploration, and statistical summaries",
      "Visual analysis of cancellation patterns by segment and season",
      "Insight report for reducing cancellation risk"
    ],
    impact: [
      "Clear view of which booking factors drive cancellations",
      "Actionable recommendations for operations and pricing"
    ],
    stack: ["Python", "Pandas", "EDA", "Matplotlib"]
  },
  recommender: {
    title: "Recommender System",
    category: "Data Mining and ML",
    image: "img/gallery/recommender.svg",
    summary: "A data mining project that recommends relevant items using pattern discovery and similarity modeling.",
    built: [
      "User and item feature engineering",
      "Similarity and ranking logic for recommendations",
      "Evaluation of recommendation quality"
    ],
    impact: [
      "Showed how historical behavior can surface better matches",
      "Foundation for personalization in product and content systems"
    ],
    stack: ["Python", "Data Mining", "ML"]
  },
  kotlin: {
    title: "Kotlin Mobile App",
    category: "Mobile Development",
    image: "img/gallery/kotlin-app.svg",
    summary: "An Android application built in Kotlin with a practical UI and core app flows for real device use.",
    built: [
      "Android screens and navigation in Kotlin",
      "Core user flows and local data handling",
      "Clean UI structure for a usable mobile experience"
    ],
    impact: [
      "Delivered a working mobile prototype",
      "Applied structured app development beyond data-only work"
    ],
    stack: ["Kotlin", "Android", "UI"]
  },
  chatbot: {
    title: "Python NLTK Chatbot",
    category: "NLP and Conversational AI",
    image: "img/gallery/chatbot.svg",
    summary: "A chatbot built from scratch in Python using NLTK for intent handling and conversational responses.",
    built: [
      "Text preprocessing and intent matching with NLTK",
      "Rule and NLP hybrid response flow",
      "Simple conversational interface for testing"
    ],
    impact: [
      "Practical NLP foundation later used in LLM and voice agents",
      "Working chatbot without relying on a hosted bot platform"
    ],
    stack: ["Python", "NLTK", "NLP"]
  }
};
