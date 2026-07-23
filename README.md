# Studify Frontend

The Studify Frontend is a React application built with Vite designed to help students track study sessions and manage tasks.

## 🚀 Tech Stack
* **Framework:** React
* **Build Tool:** Vite
* **Language:** JavaScript
* **API Client:** Axios
* **Styling:** CSS/Modules

## 🛠️ Local Development Setup

1. **Clone the repository.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   Create a `.env` file in the root folder:
   ```text
   VITE_API_BASE_URL=http://localhost:5277/api
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```

## 🌐 Production Deployment
The `main` branch is automatically deployed to **Vercel**. 

If you need to update the API URL for production, configure the `VITE_API_BASE_URL` environment variable within the Vercel project dashboard and redeploy.
