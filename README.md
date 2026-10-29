# Full-Stack Development Capstone Project - Cars Dealership Application

## Project Overview
The Cars Dealership Application is a cloud-native, responsive web platform developed for a national car retailer in the United States. The application displays national dealership branches across all states and allows customers to browse inventory, inspect dealer profiles, read customer feedback enriched with sentiment analysis, and submit their own vehicle reviews.

## Architecture & Technology Stack
- **Frontend:** React, HTML5, CSS3, Bootstrap
- **Backend:** Django, Python, Django REST Framework
- **Microservices:**
  - **Dealership & Reviews Database Service:** Node.js, Express, MongoDB (Dockerized Mongoose service)
  - **Sentiment Analysis Service:** Python, Flask, NLTK SentimentIntensityAnalyzer (Watson NLU Microservice)
- **Database:** SQLite (Relational Car Makes & Models catalog) & MongoDB (Dealerships and customer reviews)
- **Containerization & Deployment:** Docker, Kubernetes, IBM Cloud Code Engine
- **CI/CD:** GitHub Actions automated workflow
