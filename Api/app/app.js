import bodyParser from 'body-parser';
import config from './config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import routes from './REST/routes';

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Logging middleware
app.use(morgan('dev'));

// Parse URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '2048kb' }));

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    dbName: 'butik',
}, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info('Connect with the database established');
    }
});

// Handle process termination to close the database connection
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.error('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

// Setup REST routes
routes(app);

// Serve the 'index.html' for all other routes
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(config.port, function () {
    console.info(`Server is running at ${config.port}`);
});

export default app; // Export the app instance
