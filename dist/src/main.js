"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const Sentry = require("@sentry/node");
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter({ logger: true }));
    Sentry.init({
        dsn: 'https://edad56d57fd645b595e00168e6febca1@o504759.ingest.sentry.io/5592048',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }));
    await app.listen(3000);
    console.log(`Application is running on : ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map