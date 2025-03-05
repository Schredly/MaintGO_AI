# Property Maintenance & Inventory Management App

This is a mobile and web-based application designed to help property managers capture, track, and maintain building equipment. The app leverages AI to automate maintenance workflows, provide repair or replacement recommendations, and integrate with external retailer catalogs for price comparisons.

## Features

- **Capture Equipment**: Take photos and videos of building assets (HVAC, appliances, etc.).
- **AI Metadata Extraction**: Automatically extract model numbers, serial numbers, and other key details from media.
- **Inventory Management**: Store and manage equipment details, including images and documents (warranties, contracts).
- **Repair Ticketing**: Create and track repair or replacement tickets, with AI-driven assistance.
- **Cost Comparison**: Retrieve pricing data from Home Depot, Lowe’s, and other retailers for replacement equipment.
- **Maintenance Alerts**: Get reminders for scheduled maintenance and contract renewals.

## Tech Stack

- **Frontend**: React Native (iOS)
- **Backend**: Vercel (Serverless Functions)
- **Database**: Supabase (for storing equipment records and metadata)
- **Deployment**: Railway (Web), Vercel (API)
- **AI Integration**: Fine-tuned language model for maintenance recommendations

## Installation

### Prerequisites
- Node.js
- React Native CLI
- Supabase account
- Vercel account
- Railway account

### Steps to Run the App Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name
