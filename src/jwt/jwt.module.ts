import { Module } from "@nestjs/common";
import { RedisCacheModule } from "src/cache/redis-cache.module";
import { JwtController } from "./jwt.controller";
import { JwtService } from "./jwt.service";

@Module({
    imports: [RedisCacheModule],
    providers: [JwtService],
    controllers: [JwtController]
})
export class JwtModule {}