LUCIDQUANT PROJECT CONTEXT FOR CURSOR AI

1. PROJECT GOAL (The North Star)

Goal: To build a fully functional, professional-grade, AI-driven quantitative trading system named LucidQuant that identifies and exploits "Edge" in event-based prediction markets (Kalshi and Polymarket). The system must be a compelling portfolio piece for quant firm recruiters, demonstrating expertise in full-stack development, data engineering, machine learning, and DeFi integration.

Performance Target: Achieve a 60%+ win rate in paper trading by generating high-conviction signals based on the calculated "Edge."

2. CORE ARCHITECTURE & TECHNOLOGY STACK

Component
Technology
Role
Key Challenge
AI/ML Backbone
MindsDB
Unified data, ML model training, Signal Generation, MCP Agent.
Integrating LLM sentiment and predictive models via SQL.
Data Warehouse
PostgreSQL
Persistent storage for market data, news, trades, and signals.
Designing a robust, indexed schema for time-series data.
Data Sources
Kalshi API
Market data and automated trading (REST API).
Handling rate limits and ensuring low-latency execution.
Data Sources
Polymarket
Market data (Gamma API) and automated trading (On-Chain).
Critical: Polymarket trading requires Web3.py for on-chain smart contract interaction.
Backend/ETL
Python 3.11+ (FastAPI)
Data ingestion, Strategy Engine, API for Frontend.
Orchestrating scheduled data pulls and trade execution logic.
Frontend/UI
Next.js/React
Professional "Neon Quant Noir" dashboard (6 screens).
Implementing complex data visualizations and the AI chat interface.


3. THE CORE SIGNAL: "EDGE"

The entire system revolves around calculating the Edge for an event market:

\text{Edge} = \text{Predicted Probability} - \text{Implied Probability}

•
Predicted Probability: Output from the MindsDB outcome_predictor model (Phase 3).

•
Implied Probability: Current market price (e.g., Polymarket YES price).

A positive Edge suggests the market is mispriced, creating a trading opportunity.

4. BIG FUCKING CHECKLIST (The Full Roadmap)

This checklist contains every major task required to complete the project. No holes.

PHASE 1: FOUNDATION & DATA INGESTION (Infra & ETL)

Status
Task
Details
[ ]
Project Setup
Initialize project directory and Git repository.
[ ]
Docker Compose
Create docker-compose.yml for PostgreSQL and MindsDB services.
[ ]
DB Schema
Execute SQL to create all 5 core tables: markets_kalshi, markets_polymarket, news_articles, trades, signals.
[ ]
Python Environment
Set up Python virtual environment and install core dependencies (requests, psycopg2, web3.py, etc.).
[ ]
Kalshi Client
Write kalshi_client.py for market data fetching and order placement.
[ ]
Polymarket Client
Write polymarket_client.py for Gamma API data fetching.
[ ]
News Client
Write news_client.py for fetching news and initial topic tagging.
[ ]
ETL Orchestration
Write main Python script to run scheduled data ingestion into PostgreSQL.
[ ]
MindsDB Connection
Configure MindsDB to connect to the PostgreSQL database as a data source.
[ ]
Validation
Confirm all tables are populated and data is correctly normalized.


PHASE 2: DATA UNIFICATION & BASELINE STRATEGY (Pipeline Proof)

Status
Task
Details
[ ]
MindsDB View 1
Create view_event_markets (Full Outer Join Kalshi/Polymarket, calculate spread).
[ ]
MindsDB View 2
Create view_event_with_news (Join markets with news, add initial feature placeholders).
[ ]
MindsDB View 3
Create view_training_data (Final feature set for model training, add label_outcome target).
[ ]
Strategy Engine
Implement strategy_engine.py structure (main loop, signal check, execution).
[ ]
Baseline Logic
Implement Cross-Exchange Spread Strategy logic in the engine.
[ ]
Paper Trading
Implement log_paper_trade function to write trades to the trades table.
[ ]
Backtesting Core
Develop a script to replay historical data and test the baseline strategy.
[ ]
Validation
Confirm baseline strategy generates signals and logs trades end-to-end.


PHASE 3: AI/ML CORE & SIGNAL GENERATION (Intelligence)

Status
Task
Details
[ ]
LLM Integration
Create MindsDB OpenAI integration for advanced sentiment analysis.
[ ]
Sentiment Model
Create mindsdb.news_sentiment_model to enrich news articles with sentiment score/tag.
[ ]
Predictive Model
Create mindsdb.outcome_predictor model on view_training_data to predict label_outcome.
[ ]
Final Signal View
Create mindsdb.view_final_signals to calculate the real-time Edge (Predicted Prob - Implied Prob).
[ ]
Advanced Strategy
Update strategy_engine.py to query view_final_signals and implement position sizing based on Edge/Confidence.
[ ]
Model Evaluation
Generate calibration plots, feature importance (SHAP), and out-of-sample metrics.
[ ]
Risk Management
Implement initial risk rules (e.g., max position size, daily loss limit) in the engine.
[ ]
Validation
Confirm the advanced strategy shows a significant performance improvement over the baseline.


PHASE 4: DASHBOARD & AI AGENT LAYER (Presentation)

Status
Task
Details
[ ]
Web Project Init
Initialize Next.js/React frontend and FastAPI backend.
[ ]
"Neon Quant Noir"
Implement the dark-mode theme and styling using Tailwind CSS.
[ ]
FastAPI Endpoints
Create API endpoints for all 6 screens (e.g., /api/trades, /api/signals).
[ ]
Dashboard: Overview
Implement Equity Curve, Sharpe/Win Rate KPIs, Active Signals mini-table.
[ ]
Dashboard: Signals
Implement filterable table, row-click detail modal (price chart, feature importance).
[ ]
Dashboard: Trades
Implement Open/Closed positions tabs, PnL curve, trade detail modal.
[ ]
Dashboard: Models
Implement Model cards, calibration plots, and Retrain/Deploy wizard.
[ ]
Dashboard: News
Implement sentiment timeline, topic grouping, and word cloud.
[ ]
AI Agent Chat UI
Implement the split-pane chat interface (Left: Chat, Right: Dynamic Context).
[ ]
MCP Integration
Integrate FastAPI with MindsDB MCP server for conversational queries.
[ ]
Final Docs
Write comprehensive documentation (Architecture Diagram, Model Report, Strategy Explanation).
[ ]
Final Review
Polish UI/UX, optimize performance, and prepare for portfolio showcase.


5. CRITICAL TECHNICAL NOTES

•
Polymarket Trading: Must use Web3.py to interact with the underlying smart contracts. This is not a simple REST call.

•
Data Unification: The join between Kalshi and Polymarket relies on a normalized topic key. This will require either manual mapping or an NLP model to match markets (e.g., "Will the Fed raise rates in June?" vs. "FED_RATE_HIKE_JUN").

•
Model Calibration: The success of the Edge calculation depends entirely on the model's predicted probabilities being well-calibrated. This must be a focus of Phase 3.

•
Deployment: The entire system should be deployable via the single docker-compose.yml file.







