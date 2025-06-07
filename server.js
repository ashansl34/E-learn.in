// server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// --- Mock Video Database ---
// In a real application, this would come from a database.
// Using a few placeholder video IDs to demonstrate functionality.
const placeholderVideos = [
    '3_yD_c_agvA', // Neil deGrasse Tyson Explains The Universe
    'U_O5-Man12o', // A Brief History of Quantum Mechanics
    'zih7_x7_SgE', // The Fascinating Science of Fireworks
    's2Un5P3_T7s', // What Is The Speed of Dark?
    'w3_n_b9a-so', // What Is Something?
    'hS_6Qljp5ww', // Richard Feynman on The Pleasure of Finding Things Out
    'l-gQLqv9f4o', // The Math Needed for Computer Science
    '8v_hG6rxp2g'  // Why is the Sky Blue?
];

// This function generates a predictable-yet-varied video ID based on subject, unit, and day.
const getVideoId = (subject, unit, day) => {
    // Simple algorithm to get a different video for each day
    const subjectIndex = ['physics', 'chemistry', 'biology', 'maths'].indexOf(subject.toLowerCase());
    const index = (subjectIndex + parseInt(unit) + parseInt(day)) % placeholderVideos.length;
    return placeholderVideos[index];
};

const videoData = {};
const subjects = ['physics', 'chemistry', 'biology', 'maths'];

subjects.forEach(subject => {
    videoData[subject] = {};
    for (let i = 1; i <= 15; i++) {
        videoData[subject][`unit${i}`] = {};
        for (let j = 1; j <= 10; j++) {
            videoData[subject][`unit${i}`][`day${j}`] = getVideoId(subject, i, j);
        }
    }
});


// --- API Endpoint ---
// Provides the YouTube video ID for a given subject, unit, and day.
app.get('/api/video/:subject/:unit/:day', (req, res) => {
    const { subject, unit, day } = req.params;

    try {
        const videoId = videoData[subject.toLowerCase()][`unit${unit}`][`day${day}`];
        if (videoId) {
            res.json({ videoId: videoId });
        } else {
            res.status(404).json({ error: 'Video not found' });
        }
    } catch (error) { {
        res.status(404).json({ error: 'Invalid path. Video not found.' });
    }}
});


// --- Serve Static Files ---
// Serve the main index.html file
app.get('/', (req, res) => {
    // NOTE: For local development, you would need the original dynamic index.html.
    // This server setup is provided as a reference for how a dynamic app would work.
    // To run the STATIC version locally, simply open the index.html file in your browser.
    res.sendFile(path.join(__dirname, 'index.html'));
});


// --- Start Server ---
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
    console.log('To run the site, open http://localhost:3000 in your browser.');
    console.log('Press Ctrl+C to stop the server.');
});
