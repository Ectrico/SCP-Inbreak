import { world, system, } from "@minecraft/server";
import { AllClassesTag, support_ntf, support_ci, support_guard, support_random } from "./classes";
// 获取主世界维度
const overworld = world.getDimension("overworld");
// 获取下界维度
const nether = world.getDimension("nether");
// 获取末地维度
const theEnd = world.getDimension("the_end");
// 模式管理员
const Admin = ["Ectrico", "whz2006", "Removenuke", "A POTATO awa"];
// 初始化对局
overworld.runCommand(`kill @e[type=item]`);
ResetPlayer();
const PreTimeDef = 60; //Default 60;
const RoundTimeDef = 720; //Default 720;
const ResetTimeDef = 30; //Default 720;
let PreTime;
let ResetTime;
let RoundTime;
function InitializePreTime() {
    PreTime = PreTimeDef;
    PreTime++;
}
function InitializeResetTime() {
    ResetTime = ResetTimeDef;
    ResetTime++;
}
function InitializeRoundTime() {
    RoundTime = RoundTimeDef;
    RoundTime++;
}
InitializeResetTime();
// InitializePreTime();
// InitializeRoundTime()
//
//
//----------------------------------------------------------------------------------
//
//
// 倒计时函数
let ResetTimeIntervalId;
function ResetTimeReduce() {
    ResetTimeIntervalId = system.runInterval(() => {
        ResetTime--;
        overworld.runCommandAsync(`title @a actionbar 重置时间：${ResetTime}`);
        if (ResetTime === 0) {
            system.clearRun(ResetTimeIntervalId); // 停止计时器
            InitializePreTime();
            PreTimeReduce();
        }
    }, 20);
}
let PreTimeIntervalId;
function PreTimeReduce() {
    PreTimeIntervalId = system.runInterval(() => {
        PreTime--;
        overworld.runCommandAsync(`title @a actionbar 准备时间：${PreTime}`);
        if (PreTime === 0) {
            system.clearRun(PreTimeIntervalId); // 停止计时器
            InitializeRoundTime();
            RoundTimeReduce();
        }
    }, 20);
}
let RoundTimeIntervalId;
function RoundTimeReduce() {
    RoundTimeIntervalId = system.runInterval(() => {
        RoundTime--;
        overworld.runCommandAsync(`title @a actionbar 回合时间： ${Math.floor(RoundTime / 60)}:${RoundTime % 60 < 10 ? "0" : ""}${RoundTime % 60}`);
        if (RoundTime === 0) {
            system.clearRun(RoundTimeIntervalId); // 停止计时器
            InitializeResetTime();
            ResetTimeReduce();
        }
    }, 20);
}
// 从重置时间起始
ResetTimeReduce();
//
//
//----------------------------------------------------------------------------------
//
//
export let CustomSupportLimit;
// 对局事件
// 事件控制器
let PreTime60 = 1;
let EnableDeadCount = 0;
system.runInterval(() => {
    if (PreTime === 60 && PreTime60 === 1) {
        //遍历玩家事件
        let player = world.getAllPlayers();
        world.sendMessage(`§b[BGM]§eHummell Gets the Rockets (Alan Walker Remix) - Hans Zimmer,Alan Walker`);
        player.forEach((player) => {
            const position = player.location;
            const playerID = player.name;
            overworld.runCommand(`playsound "Hummell Gets the Rockets" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`);
        });
        const LimitAverage = Math.floor(player.length / 3) + 1;
        overworld.runCommand(`title @a times 0 200 0`);
        overworld.runCommand(`title @a title §eGameMode - §2SCP： Inbreak`);
        overworld.runCommand(`title @a subtitle §e游戏模式 - §2SCP: 入侵 - 1.0.0`);
        world.sendMessage(`§e游戏模式 - §2SCP: 入侵 - §bFission_Track工作室开源项目作品 - §6#help获取模式帮助`);
        system.runTimeout(() => {
            CustomSupportLimit = LimitAverage;
            support_guard();
        }, 200);
        system.runTimeout(() => {
            CustomSupportLimit = 2 * LimitAverage;
            support_ci();
        }, 250);
        system.runTimeout(() => {
            CustomSupportLimit = undefined;
        }, 300);
        EnableDeadCount = 1;
        PreTime60 = 0;
    }
}, 0);
let RoundTime620 = 1;
system.runInterval(() => {
    if (RoundTime === 620 && RoundTime620 === 1) {
        const RandomDelay = Math.random() * 1000;
        system.runTimeout(() => {
            support_random();
        }, RandomDelay);
        RoundTime620 = 0;
    }
}, 0);
let RoundTime500 = 1;
system.runInterval(() => {
    if (RoundTime === 500 && RoundTime500 === 1) {
        const RandomDelay = Math.random() * 1000;
        system.runTimeout(() => {
            support_random();
        }, RandomDelay);
        RoundTime500 = 0;
    }
}, 0);
let RoundTime380 = 1;
system.runInterval(() => {
    if (RoundTime === 380 && RoundTime380 === 1) {
        const RandomDelay = Math.random() * 1000;
        system.runTimeout(() => {
            support_random();
        }, RandomDelay);
        RoundTime380 = 0;
    }
}, 0);
let RoundTime260 = 1;
system.runInterval(() => {
    if (RoundTime === 260 && RoundTime260 === 1) {
        const RandomDelay = Math.random() * 1000;
        system.runTimeout(() => {
            support_random();
        }, RandomDelay);
        RoundTime260 = 0;
    }
}, 0);
let RoundTime140 = 1;
system.runInterval(() => {
    if (RoundTime === 140 && RoundTime140 === 1) {
        const RandomDelay = Math.random() * 1000;
        system.runTimeout(() => {
            support_random();
        }, RandomDelay);
        RoundTime140 = 0;
    }
}, 0);
let RoundTime720 = 1;
let VictoryDecision = 0;
let VictoryDecision2 = 1;
system.runInterval(() => {
    if (RoundTime === 720 && RoundTime720 === 1) {
        world.sendMessage(`§e游戏开始`);
        overworld.runCommand(`title @a times 0 200 0`);
        overworld.runCommand(`title @a title §eGame Start. Good Luck！.`);
        overworld.runCommand(`title @a subtitle §bMTF九尾狐机动特遣队已进入设施`);
        //遍历玩家事件
        let player = world.getAllPlayers();
        player.forEach((player) => {
            const position = player.location;
            const playerID = player.name;
            overworld.runCommand(`playsound "Bell2" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`);
        });
        support_ntf();
        RoundTime720 = 0;
        system.runTimeout(() => {
            VictoryDecision = 1;
            VictoryDecision2 = 1;
        }, 100);
    }
}, 0);
let ResetTime30 = 1;
const Team = {
    Foundation: "§bSCP基金会",
    CI: "§2混沌分裂者",
    Unknown: "§f无",
};
let VectoryTeam;
system.runInterval(() => {
    if (ResetTime === 30 && ResetTime30 === 1) {
        system.runTimeout(() => {
            VictoryDecision = 0;
        }, 5);
        overworld.runCommand(`title @a times 0 600 0`);
        overworld.runCommand(`stopsound @a`);
        overworld.runCommand(`title @a title §eGame Over！`);
        overworld.runCommand(`title @a subtitle §e游戏结束，请等待下一回合开始！`);
        world.sendMessage(`§c游戏结束`);
        world.sendMessage(`§e=============================`);
        world.sendMessage(` `);
        if (VectoryTeam === undefined) {
            VectoryTeam = Team.Unknown;
        }
        world.sendMessage(`本回合胜利阵营： ${VectoryTeam}`);
        world.sendMessage(`本次设施攻击共造成： ${DeadCount} 人死亡`);
        world.sendMessage(` `);
        world.sendMessage(`§e=============================`);
        //遍历玩家事件
        let player = world.getAllPlayers();
        player.forEach((player) => {
            const position = player.location;
            const playerID = player.name;
            overworld.runCommand(`playsound "Bell1" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`);
        });
        EnableDeadCount = 0;
        DeadCount = 0;
        ResetTime30 = 0;
    }
}, 0);
let ResetTime10 = 1;
system.runInterval(() => {
    if (ResetTime === 10 && ResetTime10 === 1) {
        overworld.runCommand(`kill @a`);
        ResetTime10 = 0;
    }
}, 0);
function ResetEvent() {
    PreTime60 = 1;
    RoundTime720 = 1;
    ResetTime30 = 1;
    RoundTime620 = 1;
    RoundTime500 = 1;
    RoundTime380 = 1;
    RoundTime260 = 1;
    RoundTime140 = 1;
    ResetTime10 = 1;
}
system.runInterval(() => {
    if (ResetTime === 1) {
        ResetPlayer();
        overworld.runCommand(`kill @e[type=item]`);
        ResetEvent();
    }
}, 0);
system.runInterval(() => {
    if (VictoryDecision === 1) {
        let foundNtf = false; // 标记是否有 NTF 玩家
        let foundCi = false; // 标记是否有 CI 玩家
        const players = world.getPlayers();
        if (players.length === 0) {
            return; // 如果没有玩家，不进行判定
        }
        for (const player of players) {
            // 如果找到了 NTF 或 Guard 玩家，标记 foundNtf 为 true
            if (player.hasTag("ntf") || player.hasTag("guard")) {
                foundNtf = true;
            }
            // 如果找到了 CI 玩家，标记 foundCi 为 true
            if (player.hasTag("ci")) {
                foundCi = true;
            }
            // 如果已经找到 NTF 和 CI 阵营的玩家，提前退出循环
            if (foundNtf && foundCi) {
                break;
            }
        }
        // 如果没有找到 NTF 玩家，则混沌阵营胜利
        if (!foundNtf && VictoryDecision2 === 1) {
            CIVictory();
        }
        // 如果没有找到 CI 玩家，则基金会阵营胜利
        if (!foundCi && VictoryDecision2 === 1) {
            SCPFoundationVictory();
        }
    }
}, 0);
function CIVictory() {
    VectoryTeam = Team.CI;
    InitializeRound();
    VictoryDecision2 = 0;
}
function SCPFoundationVictory() {
    VectoryTeam = Team.Foundation;
    InitializeRound();
    VictoryDecision2 = 0;
}
// system.runInterval(() => {
//   const AllPlayer = world.getAllPlayers();
//   // 检查所有玩家的标签是否都没有 "ntf"
//   const NotNTFTag = AllPlayer.every((player) => {
//     const tags = player.getTags();
//     return !tags.includes("ntf"); // 如果不包含 "ntf"，返回 true
//   });
//   // 检查所有玩家的标签是否都没有 "guard"
//   const NotGuardTag = AllPlayer.every((player) => {
//     const tags = player.getTags();
//     return !tags.includes("guard"); // 如果不包含 "ntf"，返回 true
//   });
//   // 检查所有玩家的标签是否都没有 "ci"
//   const NotCITag = AllPlayer.every((player) => {
//     const tags = player.getTags();
//     return !tags.includes("ci"); // 如果不包含 "ntf"，返回 true
//   });
//   // 如果所有玩家都没有 "ntf" 标签，执行 restart 函数
//   if (VictoryDecision === 1) {
//     if (NotNTFTag && NotGuardTag) {
//       if (VictoryDecision2 === 1) {
//         VectoryTeam = Team.CI;
//         InitializeRound();
//         VictoryDecision2 = 0;
//       }
//     } else if (NotCITag) {
//       if (VictoryDecision2 === 1) {
//         VectoryTeam = Team.Foundation;
//         InitializeRound();
//         VictoryDecision2 = 0;
//       }
//     } else if (NotNTFTag && NotGuardTag && NotCITag) {
//       if (VictoryDecision2 === 1) {
//         VectoryTeam = Team.Unknown;
//         InitializeRound();
//         VictoryDecision2 = 0;
//       }
//     } else {
//       if (VictoryDecision2 === 1) {
//         VectoryTeam = Team.Unknown;
//         InitializeRound();
//         VictoryDecision2 = 0;
//       }
//     }
//   }
// });
//
//
//----------------------------------------------------------------------------------
//
//
// 初始化函数
function InitializeRound() {
    overworld.runCommand(`kill @e[type=item]`);
    ResetPlayer();
    //重置倒计时系统
    if (ResetTime > 0 && ResetTime < ResetTimeDef) {
        system.clearRun(ResetTimeIntervalId);
    }
    if (PreTime > 0 && PreTime < PreTimeDef) {
        system.clearRun(PreTimeIntervalId);
    }
    if (RoundTime > 0 && PreTime < RoundTimeDef) {
        system.clearRun(RoundTimeIntervalId);
    }
    ResetEvent();
    InitializeResetTime();
    ResetTimeReduce();
    world.sendMessage("§e[GameMode]>_: §fRound Restarted.");
}
//
//
//----------------------------------------------------------------------------------
//
//
function ResetPlayer() {
    //重置玩家角色
    let player = world.getAllPlayers();
    player.forEach((player) => {
        const PlayerID = player.name;
        for (let i = 0; i < AllClassesTag.length; i++) {
            // world.sendMessage(`已尝试为玩家${PlayerID}移除tag:${AllClassesTag[i]}`);
            overworld.runCommand(`tag "${PlayerID}" remove ${AllClassesTag[i]}`);
        }
    });
}
//
//
//----------------------------------------------------------------------------------
//
//
// 模式自定义指令
world.afterEvents.chatSend.subscribe((arg) => {
    const sender = arg.sender;
    const senderID = arg.sender.name;
    const message = arg.message;
    // world.sendMessage(`检查发言${message}`);
    if (Admin.includes(senderID) && message === "#help") {
        sender.sendMessage(`§e============模式指令帮助菜单============`);
        sender.sendMessage(` `);
        sender.sendMessage(`§e#version - 查看游戏模式版本§7`);
        sender.sendMessage(`§e#round restart - 重启回合§7`);
        sender.sendMessage(`§e#spawn support random - 强制刷新支援：随机§7`);
        sender.sendMessage(`§e#spawn support ntf - 强制刷新支援：NTF§7`);
        sender.sendMessage(`§e#spawn support ci - 强制刷新支援：CI§7`);
        sender.sendMessage(`§e#spawn guard - 强制刷新：安保人员§7`);
        sender.sendMessage(`§e#time skip reset - 时间控制：跳过重置时间§7`);
        sender.sendMessage(`§e#time skip pre - 强制刷新：跳过准备时间§7`);
        sender.sendMessage(`§e#time skip round - 强制刷新：跳过回合时间§7`);
        sender.sendMessage(` `);
        sender.sendMessage(`§e================End！=================`);
    }
    if (Admin.includes(senderID) && message === "#version") {
        world.sendMessage("§e[GameMode]>_: §fOpposing Forces v0.1.0");
    }
    if (Admin.includes(senderID) && message === "#round restart") {
        InitializeRound();
    }
    if (Admin.includes(senderID) && message === "#spawn support random") {
        support_random();
        world.sendMessage("§e[GameMode]>_: §fSupport has been Spawned.");
    }
    if (Admin.includes(senderID) && message === "#spawn support ntf") {
        support_ntf();
        world.sendMessage("§e[GameMode]>_: §fNTF has been Spawned.");
    }
    if (Admin.includes(senderID) && message === "#spawn support ci") {
        support_ci();
        world.sendMessage("§e[GameMode]>_: §fCI has been Spawned.");
    }
    if (Admin.includes(senderID) && message === "#spawn guard") {
        support_guard();
        world.sendMessage("§e[GameMode]>_: §fGuard has been Spawned.");
    }
    if (Admin.includes(senderID) && message === "#time skip reset") {
        ResetTime = 1;
        world.sendMessage("§e[GameMode]>_: §fResetTime Skiped.");
    }
    if (Admin.includes(senderID) && message === "#time skip pre") {
        PreTime = 1;
        world.sendMessage("§e[GameMode]>_: §fPreTime Skiped.");
    }
    if (Admin.includes(senderID) && message === "#time skip round") {
        RoundTime = 1;
        world.sendMessage("§e[GameMode]>_: §fRoundTime Skiped.");
    }
});
//
//
//----------------------------------------------------------------------------------
//
//
// 玩家死亡事件
let DeadCount = 0;
world.afterEvents.entityDie.subscribe((arg) => {
    const DiedEntity = arg.deadEntity;
    if (DiedEntity.typeId === "minecraft:player") {
        const DiedPlayerID = DiedEntity.nameTag;
        // const AttackPlayer = arg.damageSource.damagingEntity?.nameTag;
        const DiedPlayerTags = DiedEntity.getTags();
        // world.sendMessage(`${AttackPlayer}`);
        let DiedPlayerClasses;
        if (DiedPlayerTags.includes("ntf")) {
            DiedPlayerClasses = "§bNine Tailed Fox";
        }
        else if (DiedPlayerTags.includes("ci")) {
            DiedPlayerClasses = "§2Chaos Insurgency";
        }
        else {
            DiedPlayerClasses = "Unknow";
        }
        world.sendMessage(`§c*DIED* §f[${DiedPlayerClasses}§f] ${DiedPlayerID}`);
        system.runTimeout;
        for (let i = 0; i < AllClassesTag.length; i++) {
            DiedEntity.removeTag(`${AllClassesTag[i]}`);
        }
        if (EnableDeadCount === 1) {
            DeadCount++;
        }
    }
});
//
//
//----------------------------------------------------------------------------------
//
//
// 玩家重生事件
world.afterEvents.playerSpawn.subscribe((arg) => {
    const RespawnPlayer = arg.player;
    const RespawnPlayerID = arg.player.name;
    overworld.runCommand(`gamemode spectator "${RespawnPlayerID}"`);
    RespawnPlayer.addTag("spectator");
    overworld.runCommand(`title "${RespawnPlayerID}" times 0 200 0`);
    overworld.runCommand(`title "${RespawnPlayerID}" title Spectator`);
    overworld.runCommand(`title "${RespawnPlayerID}" subtitle 你现在是旁观者，请等待复活...`);
});
//
//
//----------------------------------------------------------------------------------
//
//
// 玩家名称标签替换为空字符串
system.runInterval(() => {
    overworld.runCommand(`effect @a saturation 10000 255 true`);
    let AllPlayer = world.getAllPlayers();
    AllPlayer.forEach((element) => {
        const position = element.location;
        const playerID = element.name;
        element.nameTag = "";
    });
}, 100);
//
//
//----------------------------------------------------------------------------------
//
//
world.afterEvents.playerJoin.subscribe((arg) => {
    const player = arg.playerId;
    overworld.runCommand(`kill "${player}"`);
});
//# sourceMappingURL=main.js.map