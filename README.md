# CRM_APP

A modern Customer Relationship Management (CRM) application developed using Next.js, Django REST Framework, and PostgreSQL. This system helps organizations manage customers, leads, deals, tickets, activities, notifications, and business operations efficiently through an intuitive user interface.

---

## 🚀 Features

* User Authentication & Authorization
* Dashboard & Analytics
* Lead Management
* Deal Management
* Ticket Management
* Company Management
* Activity Tracking
* Notifications System
* Search Functionality
* File Attachments
* Responsive User Interface
* Role-Based Access Control

---

## 🛠️ Technology Stack

### Frontend

* Next.js
* React
* TypeScript
* Material UI (MUI)
* CSS

### Backend

* Django
* Django REST Framework (DRF)
* PostgreSQL

### Version Control

* Git
* GitHub

---

## 📁 Project Structure

```text
CRM_APP/
│
├── CRM Frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   ├── next.config.js
│   └── tsconfig.json
│
└── CRM Backend/
    ├── crm_backend/
    ├── users/
    ├── leads/
    ├── deals/
    ├── tickets/
    ├── dashboard/
    ├── companies/
    ├── notifications/
    ├── search/
    ├── attachments/
    ├── activities/
    └── manage.py
```

---

## ⚙️ Frontend Setup

```bash
cd "CRM Frontend"

npm install

npm run dev
```

Frontend will run on:

```text
http://localhost:3000
```

---

## ⚙️ Backend Setup

### Create Virtual Environment

```bash
cd "CRM Backend"

python -m venv env
```

### Activate Virtual Environment

#### Windows

```bash
env\Scripts\activate
```

#### Linux / macOS

```bash
source env/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Apply Migrations

```bash
python manage.py migrate
```

### Run Server

```bash
python manage.py runserver
```

Backend will run on:

```text
http://127.0.0.1:8000
```

---

## 🔐 Environment Variables

Create a `.env` file and configure the required environment variables.

Example:

```env
SECRET_KEY=your_secret_key
DEBUG=True

DB_NAME=crm_db
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
```

---

## 🗄️ Database

This project uses:

* PostgreSQL

Make sure PostgreSQL is installed and running before starting the backend server.

---

## 📦 Git Workflow

```bash
git add .

git commit -m "Your commit message"

git push
```

---

## 👥 Team Members

* Sameera KP
* Naifa
* Seeja V.M
* Asna Parvin

---

## 📚 Project Purpose

This CRM system was developed as a collaborative team project to streamline customer relationship management processes and provide an efficient platform for managing business operations.

---

## 📄 License

This project is intended for educational and project demonstration purposes.
