
# Course Schedule Portal

Course Schedule Portal is a web application designed to help students manage their course schedules. It provides features to add, edit, and view course schedules, ensuring students can organize their academic plans effectively.

## Features

- Add new courses to the schedule
- Edit existing course details
- View the complete course schedule
- Search for courses by name, instructor, or time
- User-friendly interface with responsive design

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript
  - React

- **Backend:**
  - Node.js
  - Express.js
  - TypeScript

- **Database:**
  - MongoDB

- **Other Tools:**
  - Docker
  - Webpack
  - Babel
  - Prettier
  - Husky

## Getting Started

### Prerequisites

To run this project locally, you need to have the following installed:

- Node.js
- npm (Node package manager)
- MongoDB
- Docker (optional, for running with Docker)

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Behzad-Rajabalipour/course-schedule-portal.git
   \`\`\`
2. Navigate to the project directory:
   \`\`\`bash
   cd course-schedule-portal
   \`\`\`
3. Install the dependencies for both the backend and the frontend:
   \`\`\`bash
   npm run install:global
   \`\`\`

### Running the Application

#### Using Docker

1. Start the application using Docker Compose:
   \`\`\`bash
   npm run start:docker
   \`\`\`
2. Open your browser and navigate to \`http://localhost:3000\` to see the application in action.

#### Without Docker

1. Start the MongoDB server:
   \`\`\`bash
   mongod
   \`\`\`
2. Start the backend server:
   \`\`\`bash
   npm run start:server
   \`\`\`
3. Start the frontend development server:
   \`\`\`bash
   npm run start:client
   \`\`\`
4. Open your browser and navigate to \`http://localhost:3000\` to see the application in action.

## Usage

- **Adding a New Course:**
  - Navigate to the "Add Course" section
  - Fill out the form with the course's details (name, instructor, time, etc.)
  - Click "Add Course" to save the new course to your schedule

- **Editing a Course:**
  - Browse your course schedule and select the course you want to edit
  - Click on the "Edit" button
  - Update the course details and click "Save" to apply the changes

- **Deleting a Course:**
  - Browse your course schedule and select the course you want to delete
  - Click on the "Delete" button to remove the course from your schedule

- **Viewing the Schedule:**
  - Navigate to the "View Schedule" section to see all your courses listed with their details

## Project Structure

\`\`\`
course-schedule-portal/
├── .dockerignore
├── .gitignore
├── .prettierignore
├── .prettierrc.yaml
├── README.md
├── docker-compose.yml
├── package-lock.json
├── package.json
├── .github/
│   └── workflows/
├── .husky/
├── nginx/
├── scripts/
├── src/
│   ├── client/
│   └── server/
└── ...
\`\`\`

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (\`git checkout -b feature/your-feature-name\`)
3. Make your changes
4. Commit your changes (\`git commit -m 'Add some feature'\`)
5. Push to the branch (\`git push origin feature/your-feature-name\`)
6. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Special thanks to all the contributors who have helped in developing this project.
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

Feel free to reach out if you have any questions or need further assistance!
