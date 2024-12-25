"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const utils_1 = require("./utils/utils");
const common_1 = require("@nestjs/common");
(0, utils_1.setupEnvFile)();
const port = 4090;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api', {
        exclude: [{ path: '/', method: common_1.RequestMethod.GET }],
    });
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'http://localhost:4010',
            'http://localhost:4020',
            'http://localhost:4030',
            'http://localhost:4040',
            'http://localhost:4050',
            'http://localhost:4060',
            'http://localhost:4070',
            'http://localhost:4080',
            'http://localhost:10023',
            'http://localhost:10024',
            'https://lemon-island-0a0f63800.2.azurestaticapps.net',
            'https://dms-admin.fieldassist.io',
            '*',
        ],
        credentials: true,
    });
    await app.listen(port, () => {
        console.log(`Elastic service is running on port ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map