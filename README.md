# Express Message Board

> A sleek, modern message board application built with Express.js and EJS featuring a responsive dark mode UI.

![Express Message Board](https://via.placeholder.com/800x400?text=Express+Message+Board)

## Features

- **Clean, Modern UI** with soft dark mode theme
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Smooth Animations** for enhanced user experience
- **Create Messages** with a simple, intuitive form
- **View Individual Messages** with detailed information
- **Real-time Form Validation** for better user feedback
- **Polished Interactions** with hover effects and transitions

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating, Vanilla JavaScript
- **Styling**: Custom CSS with animations
- **Database**: In-memory storage (easily extendable to MongoDB/PostgreSQL)

## How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/bit2swaz/express-message-board.git
   cd express-message-board
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
express-message-board/
├── app.js                 # Main application file
├── routes/                # Route handlers
│   └── index.js           # Main routes
├── views/                 # EJS templates
│   ├── partials/          # Reusable template parts
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs          # Homepage view
│   ├── form.ejs           # New message form
│   ├── message.ejs        # Single message view
│   └── error.ejs          # Error page
└── public/                # Static assets
    ├── stylesheets/       # CSS files
    │   └── style.css      # Main stylesheet
    └── javascripts/       # JavaScript files
        └── main.js        # Main JavaScript file
```

## Live Demo

🔗 [View Live Demo](#) _(Coming soon)_

## Author

Made with ❤ by [bit2swaz](https://github.com/bit2swaz)

## License

MIT License

Copyright (c) 2024 bit2swaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.