"use strict";
const express_1 = require("express");
const EthereumBip44 = require("ethereum-bip44");
/**
 * @export
 * @class Bip44Router
 */
class Bip44Router {
    /**
     * Creates an instance of Bip44Router.
     *
     * @memberOf Bip44Router
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * Get wallet address for user
     *
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     *
     * @memberOf Bip44Router
     */
    fromPrivateSeed(req, res, next) {
        let userid = parseInt(req.params.id);
        if (!userid) {
            res.status(404)
                .send({
                message: 'Fail',
                status: res.status,
                userid
            });
        }
        let wallet = EthereumBip44.fromPrivateSeed('xprv9s21ZrQH143K4BX2reUURqR54XkNhbNkFhEiRQqFkzu5z7T1dp9eMGozFTgKVu5Bs6R8Wd8BuhcJ3rj3LvzJvkc9uBc5xdhstRfJgcTLsjk');
        let userWallet = wallet.getAddress(userid);
        res.status(200).
            send({
            message: 'Success',
            status: res.status,
            userWallet
        });
    }
    /**
     *  Initialize Bip44 Router
     * @memberOf Bip44Router
     */
    init() {
        this.router.get('/:id', this.fromPrivateSeed);
    }
}
exports.Bip44Router = Bip44Router;
const Bip44Routes = new Bip44Router();
Bip44Routes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Bip44Routes.router;
