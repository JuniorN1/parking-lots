import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Working.. 😀😀😀😀';
  }
}
