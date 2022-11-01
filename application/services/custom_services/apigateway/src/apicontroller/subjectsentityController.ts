import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class subjectsentityController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/subjectsentity/get/search', this.GpSearch);
this.router.post('/subjectsentity', this.GpCreate);
        //#@gepdelimeterone@#
    }

public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into subjectsentityController.ts: GpSearch');
        new ApiAdapter().get(Constant.SUBJECTSURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from subjectsentityController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into subjectsentityController.ts: GpCreate');
        new ApiAdapter().post(Constant.SUBJECTSURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from subjectsentityController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }

    //#@gepdelimeter@#








}

