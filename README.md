🌐 SWASTHYANET
Smart Community Health Monitoring & Early Warning System
SwasthyaNet is an AI + IoT–powered platform that delivers real-time water-quality monitoring, early anomaly detection, ML-driven risk prediction, and community-level alerting through WhatsApp, IVR, and a unified GIS dashboard.
Designed for scalability, accessibility, and low-resource environments.
🚀 Features
🔹 IoT Water Quality Monitoring
Continuous sensing (pH, turbidity, TDS, temperature)
TinyML on-device anomaly detection
Offline-first resilience
🔹 Cloud Analytics & ML Engine
Risk prediction algorithms
Trend analysis & outbreak forecasting
Explainable ML models
🔹 Multi-Language Alerts
WhatsApp notifications
IVR voice alerts
PHC & community-level communication
🔹 GIS Dashboard
Interactive map of water points
Hotspot detection
Device status and trends
Role-based access for officials
🔹 Syndromic Reporting
Citizen symptom reporting (App / WhatsApp / IVR)
ASHA/ANM verification workflow
Integrated monitoring loop
🏗️ System Architecture
┌─────────────────────────────────────────────┐
│                 Edge Layer                  │
│ Water sensors │ TinyML MCU │ Offline buffer │
└─────────────────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────┐
│             Connectivity Layer              │
│         LoRaWAN / GSM Transmission          │
└─────────────────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────┐
│                Cloud Layer                  │
│   Data ingestion │ Storage │ Preprocessing  │
└─────────────────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────┐
│              Analytics Layer                │
│    ML models │ Risk scoring │ Forecasting   │
└────────────────────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────┐
│             Application Layer               │
│  GIS Dashboard │ Mobile App │ WhatsApp/IVR  │
└─────────────────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────┐
│             Governance Layer                │
│ Health dept workflows │ Reports │ Policies  │
└─────────────────────────────────────────────┘
🛠️ Key Innovations
Tech
Low-cost rugged sensor nodes
Edge-based TinyML anomaly detection
Offline-first gateway architecture
Rainfall × turbidity fusion model
Scalable & modular cloud backend
Community
Local-language content delivery
Citizen reporting channels
ASHA/ANM workflow integration
Micro-enterprise technician model
🧭 Deployment Roadmap
🔸 Phase 1 — Build & Test
Hardware assembly & calibration
Development of apps, dashboards, and TinyML models
🔸 Phase 2 — Field Pilot
Deployment at selected water points
Training of ASHA/ANM workers
Launch of WhatsApp & IVR systems
🔸 Phase 3 — Validation
Laboratory comparisons
Performance evaluation
Model refinement during monsoon conditions
🔸 Phase 4 — Scale-Up
Expansion to additional villages/blocks
Technician onboarding
Integration with government health systems
📊 Expected Outcomes
Early anomaly detection through continuous monitoring
Faster health-worker mobilization
High community engagement through accessible channels
Strong governance through unified dashboards
Scalable, low-cost solution for widespread use
📁 Project Files
📄 Full reference presentation:
SWASTHYANET-FINAL PPT.pdf
🤝 Collaborations
Open for partnerships with:
Public health departments
NGOs & social-impact organizations
Smart City missions
Universities & research institutions
CSR initiatives
