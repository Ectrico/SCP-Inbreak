import { world } from "@minecraft/server";
import { SpawnPointNTF, SpawnPointCI, SpawnPointGuard } from "./maps/ft_site_15";
import { CustomSupportLimit } from "./main";
// 获取主世界维度
const overworld = world.getDimension("overworld");
// 获取下界维度
const nether = world.getDimension("nether");
// 获取末地维度
const theEnd = world.getDimension("the_end");
export const AllClassesTag = [
    "ntf",
    "ntf_breaker",
    "ntf_sniper",
    "ntf_com",
    "ntf_spawn",
    "ci",
    "ci_breaker",
    "ci_sniper",
    "ci_com",
    "ci_spawn",
    "guard",
    "guard_med",
    "guard_chief",
    "guard_spawn",
];
// system.runInterval(() => {
//   let player = world.getAllPlayers();
//     player.forEach((player) => {
//       const position = player.location;
//       // overworld.runCommand(
//       //   `playsound c1a3_05_switchover @a ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 1`
//       // );
//       player.runCommandAsync(`say test`);
//     });
// }, 0);
//------------------------------------------------------------------------------
export const NTF_Rifle = {
    title: "§bMTF - Nine Tailed Fox - Soldier",
    subtitle: "§b机动特遣队-九尾狐-队员",
    target_tip: "§f支援设施内的安全官员配合他们阻止混沌分裂者的入侵，消灭所有混沌分裂者，尽全力保护设施安全。§6听从指挥官的指挥",
    tag: "ntf",
    group: "ntf",
    state: "Alive",
    tag_spawn: "ntf_spawn",
    items: [
        ["l4gg:m16", 1],
        ["l4gg:m16_mag", 8],
        ["bli:lv5", 1],
    ],
    armor: [
        ["slot.armor.head", "bli:fast_gasmask"],
        ["slot.armor.chest", "bli:vest_ntf"],
        ["slot.armor.legs", "bli:pants_ntf"],
        ["slot.armor.feet", "bli:boots_guard"],
    ],
};
export const NTF_Breaker = {
    title: "§bMTF - Nine Tailed Fox - Breaker",
    subtitle: "§b机动特遣队-九尾狐-突破手",
    target_tip: "§f支援设施内的安全官员配合他们阻止混沌分裂者的入侵，消灭所有混沌分裂者，尽全力保护设施安全。§6听从指挥官的指挥",
    tag: "ntf_breaker",
    group: "ntf",
    state: "Alive",
    tag_spawn: "ntf_spawn",
    items: [
        ["l4gg:shotgun", 1],
        ["l4gg:shotgun_bullet_item", 72],
        ["bli:lv5", 1],
    ],
    armor: [
        ["slot.armor.head", "bli:fast_glass_hd"],
        ["slot.armor.chest", "bli:vest_ntf"],
        ["slot.armor.legs", "bli:pants_ntf"],
        ["slot.armor.feet", "bli:boots_guard"],
    ],
};
export const NTF_Sniper = {
    title: "§bMTF - Nine Tailed Fox - Sniper",
    subtitle: "§b机动特遣队-九尾狐-狙击手",
    target_tip: "§f支援设施内的安全官员配合他们阻止混沌分裂者的入侵，消灭所有混沌分裂者，尽全力保护设施安全。§6听从指挥官的指挥",
    tag: "ntf_sniper",
    group: "ntf",
    state: "Alive",
    tag_spawn: "ntf_spawn",
    items: [
        ["l4gg:awp", 1],
        ["l4gg:awp_mag", 7],
        ["bli:lv5", 1],
    ],
    armor: [
        ["slot.armor.head", "bli:fast_med"],
        ["slot.armor.chest", "bli:vest_ntf"],
        ["slot.armor.legs", "bli:pants_ntf"],
        ["slot.armor.feet", "bli:boots_guard"],
    ],
};
export const NTF_Commander = {
    title: "§bMTF - Nine Tailed Fox - Commander",
    subtitle: "§b机动特遣队-九尾狐-指挥官",
    target_tip: "§6指挥你的队员，§f支援设施内的安全官员配合他们阻止混沌分裂者的入侵，消灭所有混沌分裂者，尽全力保护设施安全",
    tag: "ntf_com",
    group: "ntf",
    state: "Alive",
    tag_spawn: "ntf_spawn",
    items: [
        ["l4gg:glock", 1],
        ["l4gg:glock_mag", 16],
        ["bli:lv5", 1],
        ["bli:lvw", 1],
        ["bli:yeshiyi", 1],
    ],
    armor: [
        ["slot.armor.head", "bli:fast_med"],
        ["slot.armor.chest", "bli:vest_ntf"],
        ["slot.armor.legs", "bli:pants_ntf"],
        ["slot.armor.feet", "bli:boots_guard"],
    ],
};
// 刷新上限
const LimitNTFDef = 27;
const LimitNTFComDef = 1;
// NTF刷新函数
export function support_ntf() {
    world.sendMessage(`§e[ANNOUNCE] §bMTF unit Epsilon-11, designated Nine-Tailed Fox, has entered the facility.`);
    let LimitNTF = LimitNTFDef;
    if (CustomSupportLimit !== undefined) {
        LimitNTF = CustomSupportLimit;
    }
    let PreSpawnPlayer = world.getAllPlayers();
    let LimitCom = LimitNTFComDef;
    // world.sendMessage(`指挥官上限：${LimitCom}`);
    PreSpawnPlayer.forEach((player) => {
        const position = player.location;
        const PlayerTag = player.getTags();
        const PlayerID = player.name;
        overworld.runCommand(`playsound "AN" "${PlayerID}" ${position.x} ${position.y} ${position.z} 100`);
        if (LimitNTF !== 0) {
            // world.sendMessage(`刷新限制：${LimitNTF}`);
            if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
                // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
            }
            else {
                player.removeTag("spectator");
                overworld.runCommand(`gamemode adventure "${PlayerID}"`);
                const SpawnPointID = Math.floor(Math.random() * SpawnPointNTF.length);
                // world.sendMessage(`SpawnPointID:${SpawnPointID} Player:${PlayerID}`);
                overworld.runCommand(`tp "${PlayerID}" ${SpawnPointNTF[SpawnPointID].x} ${SpawnPointNTF[SpawnPointID].y} ${SpawnPointNTF[SpawnPointID].z}`);
                const SpawnAllType = [NTF_Rifle, NTF_Rifle, NTF_Breaker, NTF_Commander, NTF_Sniper];
                const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
                let SpawnType = SpawnAllType[TypeRandom];
                if (SpawnType === NTF_Commander && LimitCom !== 1) {
                    SpawnType = NTF_Rifle;
                    // world.sendMessage(`指挥官上限：${LimitCom},改为刷新NTF_Rifle`);
                }
                if (SpawnType === NTF_Commander && LimitCom === 1) {
                    LimitCom = 0;
                    // world.sendMessage(`刷新指挥官,上限--：${LimitCom}`);
                }
                player.addTag(`${SpawnType.tag_spawn}`);
                player.addTag(`${SpawnType.tag}`);
                player.addTag(`${SpawnType.group}`);
                overworld.runCommand(`title "${PlayerID}" times 0 200 0`);
                overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
                overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}`);
                player.sendMessage(`====================================`);
                player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
                player.sendMessage(`====================================`);
                overworld.runCommand(`clear "${PlayerID}"`);
                overworld.runCommand(`effect "${PlayerID}" health_boost 100000 0 true`);
                overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
                overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
                for (let i = 0; i < SpawnType.items.length; i++) {
                    overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
                }
                for (let i = 0; i < SpawnType.armor.length; i++) {
                    overworld.runCommand(`replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`);
                    if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
                        overworld.runCommand(`replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}`);
                    }
                }
                LimitNTF--;
            }
        }
    });
}
//------------------------------------------------------------------------------
export const CI_Rifle = {
    title: "§2Chaos Insurgency - Soldier",
    subtitle: "§2混沌分裂者-士兵",
    target_tip: "§f消灭一切阻止你们的人，抢夺SCP物品并撤离设施",
    tag: "ci",
    group: "ci",
    state: "Alive",
    tag_spawn: "ci_spawn",
    items: [
        ["l4gg:ak47", 1],
        ["l4gg:ak47_mag", 8],
        ["bli:lvci", 1],
    ],
    armor: [
        ["slot.armor.head", "bli:fast_gasmask_ci"],
        ["slot.armor.chest", "bli:vest_ci"],
        ["slot.armor.legs", "bli:pants_ci"],
        ["slot.armor.feet", "bli:boots_guard"],
    ],
};
export const CI_Breaker = {
    title: "§2Chaos Insurgency - Breaker",
    subtitle: "§2混沌分裂者-突破手",
    target_tip: "§6协助你的队友，§f消灭一切阻止你们的人，抢夺SCP物品并撤离设施",
    tag: "ci_breaker",
    group: "ci",
    state: "Alive",
    tag_spawn: "ci_spawn",
    items: [
        ["l4gg:shotgun", 1],
        ["l4gg:shotgun_bullet_item", 72],
        ["bli:lvci", 1],
    ],
    armor: [
        ["slot.armor.head", "bli:fast_glass_hd"],
        ["slot.armor.chest", "bli:vest_ci_h"],
        ["slot.armor.legs", "bli:pants_ci"],
        ["slot.armor.feet", "bli:boots_guard"],
    ],
};
export const CI_Sniper = {
    title: "§2Chaos Insurgency - Sniper",
    subtitle: "§2混沌分裂者-狙击手",
    target_tip: "§6协助你的队友，§f，消灭一切阻止你们的人，抢夺SCP物品并撤离设施",
    tag: "ci_sniper",
    group: "ci",
    state: "Alive",
    tag_spawn: "ci_spawn",
    items: [
        ["l4gg:awp", 1],
        ["l4gg:awp_mag", 7],
        ["bli:lvci", 1],
    ],
    armor: [
        ["slot.armor.head", "bli:fast_med"],
        ["slot.armor.chest", "bli:vest_ci"],
        ["slot.armor.legs", "bli:pants_ci"],
        ["slot.armor.feet", "bli:boots_guard"],
    ],
};
export const CI_Commander = {
    title: "§2Chaos Insurgency - Commander",
    subtitle: "§2混沌分裂者-指挥官",
    target_tip: "§6指挥你的队员，§f，消灭一切阻止你们的人，抢夺SCP物品并撤离设施",
    tag: "ci_com",
    group: "ci",
    state: "Alive",
    tag_spawn: "ci_spawn",
    items: [
        ["l4gg:ak47", 1],
        ["l4gg:ak47_mag", 8],
        ["l4gg:glock", 1],
        ["l4gg:glock_mag", 16],
        ["bli:lvci", 1],
        ["bli:lvw", 1],
    ],
    armor: [
        ["slot.armor.head", "bli:fast_med"],
        ["slot.armor.chest", "bli:vest_ci"],
        ["slot.armor.legs", "bli:pants_ci"],
        ["slot.armor.feet", "bli:boots_guard"],
    ],
};
// 刷新上限
const LimitCIDefault = 27;
const LimitCIComDef = 1;
// CI刷新函数
export function support_ci() {
    // world.playMusic("AN");
    // world.sendMessage(`§e[ANNOUNCE] §bMTF unit Epsilon-11, designated Nine-Tailed Fox, has entered the facility.`);
    let LimitCI = LimitCIDefault;
    if (CustomSupportLimit !== undefined) {
        LimitCI = CustomSupportLimit;
    }
    let PreSpawnPlayer = world.getAllPlayers();
    let LimitCom = LimitCIComDef;
    // world.sendMessage(`指挥官上限：${LimitCom}`);
    // world.sendMessage(`上限：${LimitCI}`);
    PreSpawnPlayer.forEach((player) => {
        const position = player.location;
        const PlayerTag = player.getTags();
        const PlayerID = player.name;
        if (LimitCI !== 0) {
            if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
            }
            else {
                player.removeTag("spectator");
                overworld.runCommand(`gamemode adventure "${PlayerID}"`);
                const SpawnPointID = Math.floor(Math.random() * SpawnPointCI.length);
                // world.sendMessage(`SpawnPointID:${SpawnPointID} Player:${PlayerID}`);
                // world.sendMessage(`上限：${LimitCI}`);
                overworld.runCommand(`tp "${PlayerID}" ${SpawnPointCI[SpawnPointID].x} ${SpawnPointCI[SpawnPointID].y} ${SpawnPointCI[SpawnPointID].z}`);
                const SpawnAllType = [CI_Rifle, CI_Rifle, CI_Breaker, CI_Commander, CI_Sniper];
                const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
                let SpawnType = SpawnAllType[TypeRandom];
                if (SpawnType === CI_Commander && LimitCom !== 1) {
                    SpawnType = CI_Rifle;
                    // world.sendMessage(`指挥官上限：${LimitCom},改为刷新CI_Rifle`);
                }
                if (SpawnType === CI_Commander && LimitCom === 1) {
                    LimitCom = 0;
                    // world.sendMessage(`刷新指挥官,上限--：${LimitCom}`);
                }
                player.addTag(`${SpawnType.tag_spawn}`);
                player.addTag(`${SpawnType.tag}`);
                player.addTag(`${SpawnType.group}`);
                overworld.runCommand(`title "${PlayerID}" times 0 200 0`);
                overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
                overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}`);
                player.sendMessage(`====================================`);
                player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
                player.sendMessage(`====================================`);
                overworld.runCommand(`clear "${PlayerID}"`);
                overworld.runCommand(`effect "${PlayerID}" health_boost 100000 0 true`);
                overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
                overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
                for (let i = 0; i < SpawnType.items.length; i++) {
                    overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
                }
                for (let i = 0; i < SpawnType.armor.length; i++) {
                    overworld.runCommand(`replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`);
                    if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
                        overworld.runCommand(`replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}`);
                    }
                }
                LimitCI--;
            }
        }
    });
}
export function support_random() {
    if (Math.random() > 0.5) {
        support_ntf();
    }
    else {
        support_ci();
    }
}
//------------------------------------------------------------------------------
export const Guard = {
    title: "§1Security Officer",
    subtitle: "§1安全官员",
    target_tip: "§f消灭所有入侵设施的混沌分裂者，不惜一切保护设施，MTF会在不久后进入设施协助你们",
    tag: "guard",
    group: "guard",
    state: "Alive",
    tag_spawn: "guard_spawn",
    items: [
        ["l4gg:m16", 1],
        ["l4gg:m16_mag", 8],
        ["bli:lv2", 1],
    ],
    armor: [
        ["slot.armor.head", "bli:fast_glass"],
        ["slot.armor.chest", "bli:vest_guard"],
        ["slot.armor.legs", "bli:pants_guard"],
        ["slot.armor.feet", "bli:boots_guard"],
    ],
};
export const Guard_Med = {
    title: "§aMedical Security Officer",
    subtitle: "§a医疗安全官员",
    target_tip: "§6为你的队友进行治疗，§f，消灭所有入侵设施的混沌分裂者，不惜一切保护设施，MTF会在不久后进入设施协助你们",
    tag: "guard_med",
    group: "guard",
    state: "Alive",
    tag_spawn: "guard_spawn",
    items: [
        ["l4gg:glock", 1],
        ["l4gg:glock_mag", 16],
        ["bli:lv2", 1],
        ["bli:first_aid_kit_medic", 1],
    ],
    armor: [
        ["slot.armor.head", "bli:fast_med"],
        ["slot.armor.chest", "bli:vest_guard_med"],
        ["slot.armor.legs", "bli:pants_guard_med"],
        ["slot.armor.feet", "bli:boots_guard"],
    ],
};
export const Guard_Chief = {
    title: "§bSecurity Chief",
    subtitle: "§b安全主管",
    target_tip: "§6指挥你的队员，§f，消灭所有入侵设施的混沌分裂者，不惜一切保护设施，MTF会在不久后进入设施协助你们",
    tag: "guard_chief",
    group: "guard",
    state: "Alive",
    tag_spawn: "guard_spawn",
    items: [
        ["l4gg:m16", 1],
        ["l4gg:m16_mag", 8],
        ["bli:lv5", 1],
        ["bli:lvfs", 1],
    ],
    armor: [
        ["slot.armor.head", "bli:fast_glass"],
        ["slot.armor.chest", "bli:vest_guard"],
        ["slot.armor.legs", "bli:pants_guard"],
        ["slot.armor.feet", "bli:boots_guard"],
    ],
};
// 刷新上限
const LimitGuardDefault = 27;
const LimitGuardMedDef = 1;
const LimitGuardChiefDef = 1;
// CI刷新函数
export function support_guard() {
    // world.playMusic("AN");
    // world.sendMessage(`§e[ANNOUNCE] §bMTF unit Epsilon-11, designated Nine-Tailed Fox, has entered the facility.`);
    let LimitGuard = LimitGuardDefault;
    if (CustomSupportLimit !== undefined) {
        LimitGuard = CustomSupportLimit;
    }
    let PreSpawnPlayer = world.getAllPlayers();
    let LimitMed = LimitGuardMedDef;
    let LimitChief = LimitGuardChiefDef;
    // world.sendMessage(`指挥官上限：${LimitCom}`);
    PreSpawnPlayer.forEach((player) => {
        const position = player.location;
        const PlayerTag = player.getTags();
        const PlayerID = player.name;
        if (LimitGuard !== 0) {
            if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
            }
            else {
                player.removeTag("spectator");
                overworld.runCommand(`gamemode adventure "${PlayerID}"`);
                const SpawnPointID = Math.floor(Math.random() * SpawnPointGuard.length);
                // world.sendMessage(`SpawnPointID:${SpawnPointID} Player:${PlayerID}`);
                overworld.runCommand(`tp "${PlayerID}" ${SpawnPointGuard[SpawnPointID].x} ${SpawnPointGuard[SpawnPointID].y} ${SpawnPointGuard[SpawnPointID].z}`);
                const SpawnAllType = [Guard, Guard, Guard_Med, Guard_Chief];
                const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
                let SpawnType = SpawnAllType[TypeRandom];
                if (SpawnType === Guard_Med && LimitMed !== 1) {
                    SpawnType = Guard;
                }
                if (SpawnType === Guard_Med && LimitMed === 1) {
                    LimitMed = 0;
                }
                if (SpawnType === Guard_Chief && LimitChief !== 1) {
                    SpawnType = Guard;
                }
                if (SpawnType === Guard_Chief && LimitChief === 1) {
                    LimitChief = 0;
                }
                player.addTag(`${SpawnType.tag_spawn}`);
                player.addTag(`${SpawnType.tag}`);
                player.addTag(`${SpawnType.group}`);
                overworld.runCommand(`title "${PlayerID}" times 0 200 0`);
                overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
                overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}`);
                player.sendMessage(`====================================`);
                player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
                player.sendMessage(`====================================`);
                overworld.runCommand(`clear "${PlayerID}"`);
                overworld.runCommand(`effect "${PlayerID}" health_boost 100000 0 true`);
                overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
                overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
                for (let i = 0; i < SpawnType.items.length; i++) {
                    overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
                }
                for (let i = 0; i < SpawnType.armor.length; i++) {
                    overworld.runCommand(`replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`);
                    if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
                        overworld.runCommand(`replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}`);
                    }
                }
                LimitGuard--;
            }
        }
    });
}
//# sourceMappingURL=classes.js.map