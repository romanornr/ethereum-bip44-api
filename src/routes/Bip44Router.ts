import {Router, Request, Response, NextFunction} from 'express';
import * as EthereumBip44 from 'ethereum-bip44';

/**
 * @export
 * @class Bip44Router
 */
export class Bip44Router {
    router: Router

    /**
     * Creates an instance of Bip44Router.
     *
     * @memberOf Bip44Router
     */
    constructor(){
        this.router = Router();
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
    public fromPrivateSeed(req: Request, res: Response, next: NextFunction){
        let userid = parseInt(req.params.id);
        if(!userid) {
            res.status(404)
            .send({
                message: 'Fail',
                status: res.status,
                userid
            })
        }
        let wallet = EthereumBip44.fromPrivateSeed(process.env.ethereumPrivKey)
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

const Bip44Routes = new Bip44Router();
Bip44Routes.init();
export default Bip44Routes.router;
