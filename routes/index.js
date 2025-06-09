const express = require('express');
const router = express.Router();

// Sample messages array
const messages = [
  { 
    id: 1,
    text: "Hi there!", 
    user: "Amando", 
    added: new Date() 
  },
  { 
    id: 2,
    text: "Hello World!", 
    user: "Charles", 
    added: new Date() 
  }
];

// Home route - displays all messages
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Mini Message Board',
    messages: messages 
  });
});

// Form for new message
router.get('/new', (req, res) => {
  res.render('form', { 
    title: 'New Message'
  });
});

// Handle form submission
router.post('/new', (req, res) => {
  // Get form data
  const { user, text } = req.body;
  
  // Create new message object
  const newMessage = {
    id: messages.length + 1,
    text: text,
    user: user,
    added: new Date()
  };
  
  // Add to messages array
  messages.push(newMessage);
  
  // Redirect to home page
  res.redirect('/');
});

// Single message route
router.get('/message/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const message = messages.find(msg => msg.id === id);
  
  if (message) {
    res.render('message', { 
      title: 'Message Details',
      message: message 
    });
  } else {
    res.status(404).render('error', { 
      message: 'Message not found',
      error: { status: 404 } 
    });
  }
});

module.exports = router; 