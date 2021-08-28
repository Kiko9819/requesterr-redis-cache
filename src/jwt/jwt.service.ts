import { Injectable } from "@nestjs/common";
import { RedisCacheService } from "src/cache/redis-cache.service";

@Injectable()
export class JwtService {

    constructor(private readonly redisCacheService: RedisCacheService) {}

    async setToken(key, value) {
        return await this.redisCacheService.set(key, value);
    }

    async getToken(key) {
        return await this.redisCacheService.get(key);
    }

    async deleteToken(key) {
        return await this.redisCacheService.delete(key);
    }
}