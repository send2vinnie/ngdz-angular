
import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {

  public readonly rootApiUrl = '/';
  public readonly publicApiUrl = '/api';
  public readonly loginUrl = '/connect/token';
  public readonly configurationUrl = '/AbpUserConfiguration/GetAll';
  readonly appVersion: string = '1.0';
  readonly MOCK_API: string = 'http://localhost:8080';

}
