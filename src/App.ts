import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import Bip44Router from './routes/Bip44Router';

/**
 * @class App
 */
class App {

    /**
     * @type {express.Application}
     * @memberOf App
     */
    public express: express.Application;

    /**
     * Creates an instance of App.
     * 
     * @memberOf App
     */
    constructor(){
        this.express = express();
        this.middleware();
        this.routes();
    }

    /**
     * @private
     * 
     * @memberOf App
     */
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false}));
    }

    /**
     * 
     * @private
     * 
     * @memberOf App
     */
    private routes(): void {
        let router = express.Router();
        this.express.use('/api/eth/getaddress', Bip44Router)
    }
}

export default new App().express;