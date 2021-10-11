const express = require('express');
const mainController = require('./controllers/mainController');

module.exports = (authProvider) => {
    
    // initialize router
    const router = express.Router();

    // app routes
    router.get('/', (req, res) => res.redirect('/signin'));

    // authentication routes
    router.get('/signin', 
        authProvider.signIn({
            successRedirect: '/home'
        }
    ));
    router.get('/home', mainController.getHomePage);


    router.get('/signout', 
        authProvider.signOut({
            successRedirect: '/'
        }
    ));

    // secure routes
    router.get('/id', 
        authProvider.isAuthenticated(), 
        mainController.getIdPage
    );

    // unauthorized
    router.get('/error', (req, res) => res.redirect('/500.html'));

    // error
    router.get('/unauthorized', (req, res) => res.redirect('/401.html'));

    // 404
    router.get('*', (req, res) => res.status(404).redirect('/404.html'));

    return router;
    }