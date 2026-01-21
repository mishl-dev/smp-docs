---
title: Ultimate Teams
description: A complete teams and clans plugin with cross-server support
---

A complete teams/clans system with shared homes, enderchests, warps, and ally/enemy management.

## Creating a Team

| Command | Description |
|---------|-------------|
| `/team create <name>` | Create a new team |
| `/team invite <player>` | Invite a player to your team |
| `/team join` | Join a team you've been invited to |
| `/team leave` | Leave your current team |

## Team Management

| Command | Description |
|---------|-------------|
| `/team info` | View team information |
| `/team list` | List all teams on the server |
| `/team kick <player>` | Kick a player from your team |
| `/team disband` | Disband your team (owner only) |
| `/team promote <player>` | Promote a member to manager |
| `/team demote <player>` | Demote a manager to member |
| `/team prefix <prefix>` | Set your team's chat prefix |

## Team Home & Warps

| Command | Description |
|---------|-------------|
| `/team sethome` | Set the team home location |
| `/team home` | Teleport to team home |
| `/team setwarp <name>` | Create a public team warp |
| `/team warp <name>` | Teleport to a team warp |
| `/team delwarp <name>` | Delete a team warp |

## Allies & Enemies

Manage relationships with other teams:

| Command | Description |
|---------|-------------|
| `/team ally add <team>` | Add a team as ally |
| `/team ally remove <team>` | Remove an ally |
| `/team enemy add <team>` | Mark a team as enemy |
| `/team enemy remove <team>` | Remove enemy status |
| `/team pvp` | Toggle friendly fire for your team |

## Team Chat

| Command | Description |
|---------|-------------|
| `/tc <message>` | Send message to team only |
| `/ac <message>` | Send message to team and allies |

## Team Bank

If economy is enabled:

| Command | Description |
|---------|-------------|
| `/team deposit <amount>` | Deposit money to team bank |
| `/team withdraw <amount>` | Withdraw from team bank |

## Team Enderchests

Teams can have shared enderchests. Access via `/team echest` (if enabled).

## Integrations

- **HuskHomes:** Team teleportation integrates with HuskHomes
- **Cross-server:** Works across multiple servers with MySQL/Redis setup
