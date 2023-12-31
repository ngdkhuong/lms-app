const googleRouter = require('express').Router();
const passport = require('passport');
const { generateToken } = require('../config/jwtToken');
const User = require('../models/userModel');
const expressAsyncHandler = require('express-async-handler');

googleRouter.get(
    '/login/success',
    expressAsyncHandler(async (req, res) => {
        if (req.user) {
            const findUser = await User.findOne({ email: req.user.email });
            if (findUser) {
                res.status(200).json({
                    status: true,
                    message: 'Login Successfully!',
                    token: generateToken(findUser?._id),
                    role: findUser?.roles,
                    username: findUser?.username,
                    user_image: findUser?.user_image,
                    from: 'google',
                });
            }
        } else {
            throw new Error('Something Went Wrong');
        }
    }),
);

googleRouter.get(
    '/login/failed',
    expressAsyncHandler(async (req, res) => {
        res.status(401).json({
            status: false,
            message: 'Failed to login',
        });
    }),
);

googleRouter.get('/google', passport.authenticate('google', ['profile', 'email']));

googleRouter.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/login/success',
        failureRedirect: '/login/failed',
    }),
);

googleRouter.get(
    '/logout',
    expressAsyncHandler(async (req, res) => {
        req.logOut();
        res.redirect('/');
    }),
);

module.exports = googleRouter;
