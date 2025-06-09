# Express Message Board

A simple, elegant message board application built with Express.js and EJS.

## Features

- View all messages on the homepage
- Create new messages with user name and text
- View individual message details
- Responsive, modern dark mode UI

## Tech Stack

- Node.js
- Express.js
- EJS templating
- CSS (custom styling with soft dark mode)

## Installation

```bash
# Clone the repository
git clone https://github.com/bit2swaz/express-message-board.git

# Navigate to project directory
cd express-message-board

# Install dependencies
npm install

# Start the server
npm start
```

## Development

```bash
# Run with nodemon for development (auto-restart on file changes)
npm run dev
```

## Project Structure

```
express-message-board/
├── app.js              # Main application file
├── routes/             # Route handlers
│   └── index.js        # Main routes
├── views/              # EJS templates
│   ├── partials/       # Reusable template parts
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs       # Homepage view
│   ├── form.ejs        # New message form
│   ├── message.ejs     # Single message view
│   └── error.ejs       # Error page
└── public/             # Static assets
    └── stylesheets/    # CSS files
        └── style.css   # Main stylesheet
```

## License

ISC

## Author

[bit2swaz](https://github.com/bit2swaz)