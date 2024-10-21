import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { Env } from "src/env";

@Module({
    imports: [
        CommonModule
    ]
})
export class CommonModule {

}