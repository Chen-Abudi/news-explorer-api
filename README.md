# News Explorer API

A secure RESTful API backend for the News Explorer application, built with Node.js, Express, and MongoDB. This service provides user authentication and article management functionality with comprehensive security measures.

## Table of Contents

- [News Explorer API](#news-explorer-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
  - [Usage](#usage)
    - [Authentication](#authentication)
    - [API Examples](#api-examples)
      - [User Registration](#user-registration)
      - [User Login](#user-login)
      - [Save Article (Protected)](#save-article-protected)
  - [API Documentation](#api-documentation)
    - [Endpoints Overview](#endpoints-overview)
    - [Response Format](#response-format)
  - [Security](#security)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- User registration and authentication with JWT
- Secure password hashing with bcrypt
- Article CRUD operations
- Request validation and sanitization
- Rate limiting and security headers
- Comprehensive logging
- CORS support
- MongoDB integration with Mongoose ODM

## Tech Stack

**Runtime & Framework:**

- Node.js 22.x
- Express.js

**Database:**

- MongoDB
- Mongoose ODM

**Authentication & Security:**

- JSON Web Tokens (JWT)
- bcryptjs for password hashing
- Helmet for security headers
- CORS middleware
- Express Rate Limit

**Validation & Logging:**

- Celebrate/Joi for request validation
- Validator for data sanitization
- Winston for logging

**Development & Deployment:**

- ESLint for code quality
- Nodemon for development
- Vercel for serverless deployment

## Prerequisites

- Node.js 22.x or higher
- MongoDB database
- npm or yarn package manager

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Chen-Abudi/news-explorer-api.git
   cd news-explorer-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=3001
MONGODB_URI=mongodb://localhost:27017/news-explorer
JWT_SECRET=your-secret-key
```

## Available Scripts

| Script         | Description                           |
| -------------- | ------------------------------------- |
| `npm start`    | Start production server               |
| `npm run dev`  | Start development server with nodemon |
| `npm run lint` | Run ESLint code analysis              |

## Usage

### Authentication

The API uses JWT (JSON Web Tokens) for authentication. Protected endpoints require the Authorization header:

```http
Authorization: Bearer <your-jwt-token>
```

### API Examples

#### User Registration

```http
POST /signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### User Login

```http
POST /signin
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Save Article (Protected)

```http
POST /articles
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "keyword": "technology",
  "title": "Latest Tech Trends",
  "text": "Article description and summary",
  "date": "2024-01-15",
  "source": "TechNews",
  "link": "https://example.com/article",
  "image": "https://example.com/image.jpg"
}
```

## API Documentation

### Endpoints Overview

| Endpoint        | Method | Auth Required | Description                    |
| --------------- | ------ | ------------- | ------------------------------ |
| `/signup`       | POST   | No            | Register new user              |
| `/signin`       | POST   | No            | User authentication            |
| `/users/me`     | GET    | Yes           | Get current user profile       |
| `/articles`     | GET    | Yes           | Retrieve user's saved articles |
| `/articles`     | POST   | Yes           | Save new article               |
| `/articles/:id` | DELETE | Yes           | Remove saved article           |

### Response Format

**Success Response:**

```json
{
  "data": {
    // Response data
  }
}
```

**Error Response:**

```json
{
  "message": "Error description"
}
```

## Security

- **Authentication**: JWT-based authentication system
- **Password Security**: bcrypt hashing with salt rounds
- **Rate Limiting**: Protection against brute force attacks
- **Input Validation**: Comprehensive request validation using Joi
- **Security Headers**: Helmet.js for security headers
- **CORS**: Configured for cross-origin requests
- **Data Sanitization**: Input sanitization to prevent injection attacks

## Deployment

The application is deployed on Vercel using serverless functions:

- **Production URL**: [https://news-explorer-api-mu.vercel.app/](https://news-explorer-api-mu.vercel.app/)
- **Platform**: Vercel Serverless
- **CI/CD**: Automated deployment from GitHub

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

---

[**Live API:**](https://news-explorer-api-mu.vercel.app/)
