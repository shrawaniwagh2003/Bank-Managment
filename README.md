<div align="center">
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
</div>

<h3 align="center">A Bank Application</h3>

---

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🎨 [UI Overview](#ui-overview)  
5. 🤸 [Quick Start](#quick-start)  

---

## <a name="introduction">🤖 Introduction</a>

Built with Next.js, **BankEase** is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances effortlessly.  

---

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js  
- TypeScript  
- Appwrite  
- Plaid  
- Dwolla  
- React Hook Form  
- Zod  
- TailwindCSS  
- Chart.js  
- ShadCN  

---

## <a name="features">🔋 Features</a>

👉 **Authentication**: An ultra-secure SSR authentication with proper validations and authorization.  
👉 **Connect Banks**: Integrates with Plaid for multiple bank account linking.  
👉 **Home Page**: Shows a general overview of the user account with total balance from all connected banks, recent transactions, money spent on different categories, etc.  
👉 **My Banks**: Check the complete list of all connected banks with respective balances, and account details.  
👉 **Transaction History**: Includes pagination and filtering options for viewing transaction history across banks.  
👉 **Real-time Updates**: Reflects changes across all relevant pages upon connecting new bank accounts.  
👉 **Funds Transfer**: Allows users to transfer funds using Dwolla to other accounts with required fields and recipient bank ID.  
👉 **Responsiveness**: Ensures the application adapts seamlessly to various screen sizes and devices, providing a consistent user experience across desktop, tablet, and mobile platforms.  

And many more, including code architecture and reusability.  

---

## <a name="ui-overview">🎨 UI Overview</a>

The user interface is designed for simplicity and functionality, featuring a responsive layout and real-time data updates.

### **Login Page**  
![Login Page View](./public/UI/Login.jpg)  
*The login page allows users to securely sign into their accounts using email and password, providing a secure gateway to their financial information.*

### **Signup Page**  
![Signup Page View](./public/UI/Signup.jpg)  
*The signup page enables new users to create an account by providing their basic information such as name, email, and password. It ensures a smooth onboarding process.*

### **Dashboard View**  
![Dashboard Screenshot](./public/UI/Dashboard.jpg)  
*The dashboard offers a comprehensive overview of the user's financial status, displaying total balance, recent transactions, and analytics for quick insights.*

### **My Banks**  
![My Banks Screenshot](./public/UI/My%20Banks.jpg)  
*The "My Banks" section allows users to manage their linked bank accounts, view account details, and perform basic banking operations.*

### **Transaction History**  
![Transaction History Screenshot](./public/UI/Transaction%20History.jpg)  
*Users can access their complete transaction history, enabling them to track spending, transfers, and deposits over time.*

### **Payment Transfer**  
![Payment Transfer Screenshot](./public/UI/Payment%20Transfer.jpg)  
*This section facilitates seamless payment transfers, allowing users to send funds to any recipient, either by selecting from saved contacts or entering new ones.*

---

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

### **Prerequisites**  
Make sure you have the following installed on your machine:  

- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/) (Node Package Manager)  

### **Cloning the Repository**  

```bash
git clone https://github.com/shrawaniwagh2003/Bank-Managment.git
cd Bank-Managment
```
### **Installing Dependencies**  
Run the following command to install all necessary dependencies:

```bash
npm install
```
### **Running the Application**
Start the development server:
```bash
npm run dev
```


npm run dev
Your application should now be running on http://localhost:3000.

### **🚀 Conclusion**
BankEase simplifies financial management by combining advanced features with a user-friendly interface. With its focus on real-time updates, seamless integration, and top-notch security, BankEase empowers users to stay in control of their finances effortlessly.