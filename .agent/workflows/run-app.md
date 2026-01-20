---
description: how to run the JNU Jaipur Virtual Classroom application
---

To run the application, follow these steps in order:

### 1. Start the Backend Server
Navigate to the `server` directory, install dependencies, and start the development server.
```bash
cd server
npm install
npm run dev
```

### 2. Start the Student Client
In a new terminal, navigate to the `client` directory, install dependencies, and start the frontend.
```bash
cd client
npm install
npm run dev
```

### 3. Start the Admin Panel
In a new terminal, navigate to the `admin` directory, install dependencies, and start the admin dashboard.
```bash
cd admin
npm install
npm run dev
```

> [!NOTE]
> Make sure you have **MongoDB** running locally or a valid `MONGO_URI` in `server/.env`.
