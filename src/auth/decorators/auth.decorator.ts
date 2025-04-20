import { applyDecorators, UseGuards } from "@nestjs/common";
import { Role } from "../enums/role.enum";
import { AuthGuard } from "../auth.guard";
import { RolesGuard } from "../guard/roles.guard";
import { Roles } from "./roles.decorator";

export function Auth(role: Role) {
return applyDecorators(
    Roles(Role.USER),
    UseGuards(AuthGuard, RolesGuard)
)
}