import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class studentsentityController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/studentsentity/get/search', this.GpSearch);
this.router.get('/studentsentity', this.GpGetAllValues);
this.router.post('/studentsentity', this.GpCreate);
        this.router.get('/studentsentity/get/searchrelationship', this.GpSearchRelationship);
    }

public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into studentsentityController.ts: GpSearch');
        new ApiAdapter().get(Constant.STUDENTSURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from studentsentityController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into studentsentityController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.STUDENTSURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from studentsentityController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into studentsentityController.ts: GpCreate');
        new ApiAdapter().post(Constant.STUDENTSURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from studentsentityController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }

    public GpSearchRelationship(req: Request, res: Response) 
                                            {
                                                   let response1:any;
                                                   let response2:any;
                                                   let response2arr:any[]=[];
                                                   let finalresponse:any;
                                                   let relURL = '/subjectsentity/get/search?subjectid='; 
                                                   new CustomLogger().showLogger('info', 'Enter into studentsentityController.ts: GpSearch');
                                                   new ApiAdapter().get(Constant.STUDENTSURL + `${req.url}`).then((res: any) => res.response.json()).then(async result => 
                                                   {
                                                      response1 = result;
                                                      new CustomLogger().showLogger('info', 'Exit from studentsentityController.ts: GpSearch');
                                                      new CustomLogger().showLogger('info', 'Enter into subjectsentityController.ts: GpSearch');
                                                      for(const data of response1[0].subjectsid)
                                                      {
                                                        await new ApiAdapter().get(`${Constant.SUBJECTSURL}` + `${relURL}` + data).then((res: any) => res.response.json()).then(result => 
                                                        {
                                                          response2 = result;
                                                          new CustomLogger().showLogger('info', 'Exit from subjectsentityController.ts: GpSearch')
                                                          response2arr.push(response2);
                                                        });
                                                      };
                                                      finalresponse = 
                                                      {
                                                        "response1" : response1,
                                                        "response2" : response2arr
                                                       }
                                                       req.baseUrl === '/mobile' ? res.send(finalresponse) :
                                                       req.baseUrl === '/web' ? res.send(finalresponse) : res.send(null);
                                                    }).catch(err => 
                                                       {
                                                         res.send(err);
                                                       });
                                            }








}

