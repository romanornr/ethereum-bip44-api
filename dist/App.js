"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const Bip44Router_1 = require("./routes/Bip44Router");
/**
 * @class App
 */
class App {
    /**
     * Creates an instance of App.
     *
     * @memberOf App
     */
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    /**
     * @private
     *
     * @memberOf App
     */
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    /**
     *
     * @private
     *
     * @memberOf App
     */
    routes() {
        let router = express.Router();
        this.express.use('/api/eth/getaddress', Bip44Router_1.default);
    }
}
exports.default = new App().express;
