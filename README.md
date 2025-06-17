### Smart Attendance App – Personal Attendance Tracker Web App 📋
The Smart Attendance App is a full-stack web application built to automate and simplify the process of tracking attendance for students. With a clean and responsive frontend, a secure backend, and a robust database, it allows both students and faculty members to interact with the system in real-time. It’s ideal for schools, colleges, and online classes that require digital attendance tracking.

🚀 Key Features
🔐 Role-Based User Access
Separate login flow for Students and Faculty.

Role selection after registration to route users to the appropriate dashboard.

Secure authentication using JWT tokens and bcrypt password hashing.

🧑‍🎓 Student Attendance Management
Students can mark their attendance with name and email.

Timestamp gets auto-recorded during submission.

Attendance history stored and can be retrieved at any time.

🧑‍🏫 Faculty Portal
Faculty can view all student attendance entries.

Option to download attendance reports in .CSV format.

Backend auto-generates reports in a tabular structure.

📥 Downloadable Reports
Attendance records are exportable as .csv files.

Useful for maintaining offline backups and submitting official reports.

🧰 Technology Stack
🖥 Frontend
HTML5, CSS3, JavaScript – Clean, responsive design.

Vanilla JS DOM methods – For handling user interactions.

Optional: Bootstrap/Tailwind (can be added for more UI features).

🖥 Backend
Node.js – Handles all the backend logic and routing.

Express.js – Manages APIs and middleware.

🗄️ Database
MongoDB – Stores attendance records.

Mongoose – For defining schemas and database queries.

