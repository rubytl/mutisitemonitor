import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from "./base.service";
import { factory } from '../helpers';
import { ProgressActions } from '../actions/progress.action';
import { BsModalService } from 'ngx-bootstrap/modal';

@Injectable()
export class SnmpConfigService extends BaseService {

    constructor(http: HttpClient, progressAct: ProgressActions, modelService: BsModalService) {
        super(http, progressAct, modelService);
    }

    getSnmpConfig() {
        return this.get(factory.getSnmpConfigUrl(), factory.createHeaderWithToken());
    }
}
