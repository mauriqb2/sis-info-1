import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      nombre: "Pepe perales",
      rol: 'Doctor',
      ci: 8016331
    };
  }
}
