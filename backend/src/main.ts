import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
      
async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule,{
            cors: true
        });
        // app.enableCors({
        //     origin: "http://localhost:4200",
        //     methods: 'GET,POST,PUT,DELETE',
        //     credentials: true,
        // })
        await app.listen(process.env.PORT ?? 3000);
    } catch (error) {
        console.log(error)
    } 
}
bootstrap();
