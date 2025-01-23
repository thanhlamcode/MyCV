# MyCV
## Introduction
MyCV is a modern and flexible resume-building platform. It is designed to allow users to create, manage, and share professional resumes and portfolios easily. This project is built using **React** and leverages modular components for easy scalability and maintenance.

## Features
- 📝 Dynamic resume builder
- 🔒 User authentication (Login & Register)
- 📊 Admin dashboard for managing features and profiles
- 📱 Fully responsive client-side UI
- 🔄 Real-time data updates with loading spinners
- 🎨 Rich animations using **WOW.js** and **CSS animations**
- 🧩 Modular and scalable code structure

## Directory Structure
```
thanhlamcode-mycv/
├── README.md
├── package.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.js
    ├── AllRoutes/
    ├── actions/
    ├── components/
    │   ├── Admin/
    │   ├── Auth/
    │   └── Client/
    ├── config/
    ├── helpers/
    ├── image/
    ├── layout/
    ├── pages/
    │   ├── Admin/
    │   ├── Auth/
    │   └── MainCV/
    ├── reducer/
    ├── routes/
    ├── service/
    └── until/
```

## Installation
To get started with MyCV, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/thanhlamcode/MyCV.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MyCV
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Scripts
- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner.
- **`npm run build`**: Builds the app for production.
- **`npm run eject`**: Ejects the app configuration (use cautiously).

## Components
### Admin Components
- 📋 **BoxTitle**: Handles title rendering for sections.
- 🛠️ **Form**: Manages various forms like profile, features, and projects.
- 🎓 **ResumeComponent**: Handles sections like achievements and education.

### Client Components
- 🧭 **Header**: Contains the navigation bar.
- 👤 **Introduce**: Displays user introductions.
- 💼 **Portfolio**: Renders user project portfolios.
- 📜 **Resume**: Displays user resume details.

## API Services
- `auth.js`: Manages authentication API requests.
- `maincv.js`: Retrieves data for the MainCV page.
- `features.admin.js`: API for managing features on the admin dashboard.

## Technologies Used
- ⚛️ **React**: Frontend framework
- 🎨 **SASS**: For styling
- 🌐 **React-Router**: For routing
- 🌟 **WOW.js**: For animations
- ⏳ **React Loader Spinner**: For loading states
- 🗃️ **Redux**: For state management

## Contributions
We welcome contributions to improve MyCV. Feel free to create issues or submit pull requests on [GitHub](https://github.com/thanhlamcode/MyCV).

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

### Screenshot
![App Screenshot](https://img.icons8.com/fluency/48/resume.png)

Enjoy building your resumes with **MyCV**!
