import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Cache } from 'cache-manager';

@Injectable()
export class RedisCacheService {

    constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

    async get(key) {
        return await this.cache.store.get(key);;
    }

    async set(key, value) {
        return await this.cache.store.set(key, value);
    }

    async delete(key) {
        return await this.cache.store.del(key);
    }
}