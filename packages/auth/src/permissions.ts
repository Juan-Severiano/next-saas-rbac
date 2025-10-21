import type { AbilityBuilder } from "@casl/ability"
import type { AppAbility } from "."
import type { Role } from "./roles"

type PermissionsByRole = (user: unknown, builder: AbilityBuilder<AppAbility>) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN(_, { can }) {
    can('manage', 'all')
  },
  MEMBER(_, { can }) {
    can('invite', 'User')
  },
  BILLING(_, { can }) {
    can('invite', 'User')
  },
}
