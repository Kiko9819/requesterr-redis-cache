import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { JwtService } from "./jwt.service"

@Controller()
export class JwtController {

    constructor(private jwtService: JwtService) {}

    @MessagePattern('set-token')
    async setToken(data) {
        return await this.jwtService.setToken(data.key, data.value);
    }

    @MessagePattern('get-token')
    async getToken(key) {
        return await this.jwtService.getToken(key);
    }

    @MessagePattern('delete-token')
    async deleteToken(key) {
        return await this.jwtService.deleteToken(key);
    }
}