# SoftSell - Software Resale Landing Page 🚀

This is a fully responsive, single-page marketing website built for **Credex Web Development Internship Assignment**. The fictional startup is named **SoftSell**, focused on reselling unused software licenses.

## 🌟 Objective

To build a marketing landing page that showcases features, workflow, testimonials, and a contact form — all within a modern, responsive design using relevant tools and best practices.

---

## 🛠 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & Lottie
- **Form Validation**: Zod + React Hook Form
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## ✅ Features Implemented

### 🎯 Hero Section
- Custom headline and subheading
- CTA button: “Sell My Licenses”

### ⚙️ How It Works
- Three visual steps with icons:
  1. Upload License
  2. Get Valuation
  3. Get Paid

### 💡 Why Choose Us
- Four feature tiles with icons and descriptions:
  - Instant Valuation
  - Verified Resellers
  - Fast Payouts
  - Secure & Trusted

### 🗣️ Customer Testimonials
- Two dummy reviews with name, role, and company

### 📬 Contact / Lead Form
- Fields: Name, Email, Company, License Type (dropdown), Message
- Frontend validation using **Zod**

---

## 💬 Bonus: LLM-Powered Chat Feature

To enhance user engagement and provide quick assistance, a **chat widget powered by LLM (Language Learning Model)** has been integrated into the landing page.

### 🔧 Implementation Details

- Developed a **clean and minimal chat widget UI** using Tailwind CSS and Lucide icons.
- Supports **basic user input and assistant response interaction**.
- Added support for **both real and mocked LLM responses**:
  - **Real LLM**: Connected to OpenAI API using a free-tier API key.
  - **Mocked LLM**: Fallback when request limits are exceeded or for demo purposes.
- Example hardcoded prompt suggestions include:
  - “How do I sell my license?”
  - “Is SoftSell secure?”
  - “Where can I check my payment status?”

### 📁 Backend Location

Chat logic and handler reside in:
app/api/chat/route.js

---

## 🎨 UI/UX Design Choices

- Clean and modern layout using Tailwind CSS
- Fully responsive (Mobile, Tablet, Desktop)
- Smooth, engaging animations using Framer Motion
- Lottie animation used to enhance visual storytelling
- Coherent color palette and font stack
- Accessible and semantic HTML

---

## 🧠 Additional Features (Bonus)

- ✅ Logo placeholder and favicon
- ✅ SEO meta tags and dynamic page title
- ✅ Light/Dark mode toggle
- ✅ Smooth animations and transitions
- ✅ Responsive testimonial slider

---

## 🚀 Deployment

Hosted on **Vercel**  
🔗 [Live Preview](https://softsell-next-app.vercel.app/) 

---

## ⏱ Time Spent

**Total Time Utilized:** ~14 hours

- Initial setup and structure: 1.5 hrs
- UI/UX and responsiveness: 4 hrs
- Component building & layouting: 2.5 hrs
- Animations (Framer Motion & Lottie): 2 hrs
- Form setup + validation: 1.5 hrs
- Polishing, SEO, and responsiveness checks: 0.5 hrs
- Bonus LLM : 1 hrs
- Final app checking : 1hrs

---

## 🙌 Acknowledgements

- Next js 
- OpenAI for the GPT API
- Framer Motion for smooth animations
- LottieFiles for animations
- Lucide Icons for beautiful SVGs
- Tailwind CSS for rapid styling

---

## 📬 Contact

Made with ❤️ by **Rezin Saleem V P**