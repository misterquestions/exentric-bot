import * as dotenv from 'dotenv';
import Exentric from './exentric';

/*
  Check environment

  If we're not running a production environment we're safe to load
  the dotenv package to have the required variables available
*/
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

/*
  Initialize application

  Here we just create the main instance of the bot with the required handlers
  Also ensures the connection and authentication with its respective token
*/
new Exentric();
