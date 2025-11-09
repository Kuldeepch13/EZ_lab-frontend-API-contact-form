# 🚀 EZ Labs – Frontend Assignment (Single Page)

### 🌐 Live Demo  
[https://ez-lab-frontend-api-contact-form-vc.vercel.app/](https://ez-lab-frontend-api-contact-form-vc.vercel.app/)

---

## 📋 Project Overview

This is a **React + Vite + TailwindCSS** single-page web application built as part of the **EZ Labs Frontend Assignment**.  
It showcases multiple UI sections and a working contact form integrated with an external API.

---

## 🧱 Features

- ⚡ Built using **React**, **Vite**, and **TailwindCSS**
- 🧭 **Single-page application** with these sections:
  - Hero  
  - About Team  
  - About Us  
  - Services  
  - Portfolio  
  - Contact Form
- 📨 **Contact Form Integration** with API:  
  ```http
  POST https://vernanbackend.ezlab.in/api/contact-us/
✅ Validations for name, email, phone, and message fields

🔄 Loading, success, and error states

🧪 Includes Postman collection for API testing

💻 Run Locally
1️⃣ Clone the Repository
bash
Copy code
git clone https://github.com/Kuldeepch13/EZ_lab-frontend-API-contact-form.git
cd EZ_lab-frontend-API-contact-form
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Start Development Server
bash
Copy code
npm run dev
Then open your browser at:
👉 http://localhost:5173

🛠 Notes
TailwindCSS v3 is used.
If you face version issues:

bash
Copy code
rm -rf node_modules
npm install
Make sure Node.js v18+ is installed.

The vite.config.mjs file should already exist.

You can freely modify styles to better match the original Figma design.

📮 Postman API Testing
A Postman collection (postman_collection.json) is included for testing the Contact API.

To test using Postman:
Import the collection into Postman

Use the POST method with the following request body:

json
Copy code
{
  "name": "Test User",
  "email": "testuser@gmail.com",
  "phone": "9876543210",
  "message": "Testing contact form via Postman"
}
🚢 Deployment
This project is deployed live on Vercel.
You can view it here:
👉[ https://ez-lab-frontend-api-contact-form.vercel.app/](https://ez-lab-frontend-api-contact-form-vc.vercel.app/)

⚙️ Tech Stack
Frontend: React (Vite)

Styling: TailwindCSS

Deployment: Vercel

API Testing: Postman

👨‍💻 Author
Developed by Kuldeep Chaudhary
📧 Email: dc629753@gmail.com
🌐 GitHub: https://github.com/Kuldeepch13
💼 LinkedIn: https://www.linkedin.com/in/kuldeepchuadhary1311/


