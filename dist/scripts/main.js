// scripts/main.ts
import {
  world as world2,
  system as system2
} from "@minecraft/server";

// scripts/classes.ts
import { world } from "@minecraft/server";

// scripts/maps/ft_site_15.ts
var SpawnPointNTF = [
  { x: 2066, y: 66, z: -4894 },
  { x: 2068, y: 66, z: -4894 },
  { x: 2070, y: 66, z: -4894 },
  { x: 2066, y: 66, z: -4896 },
  { x: 2068, y: 66, z: -4896 },
  { x: 2070, y: 66, z: -4896 },
  { x: 2066, y: 66, z: -4898 },
  { x: 2068, y: 66, z: -4898 },
  { x: 2070, y: 66, z: -4898 }
];
var SpawnPointCI = [
  { x: 1958, y: 105, z: -4723 },
  { x: 1959, y: 106, z: -4722 },
  { x: 1960, y: 106, z: -4721 },
  { x: 1962, y: 105, z: -4718 },
  { x: 1964, y: 104, z: -4715 },
  { x: 1939, y: 105, z: -4716 },
  { x: 1937, y: 105, z: -4718 },
  { x: 1936, y: 105, z: -4720 },
  { x: 1934, y: 105, z: -4722 }
];
var SpawnPointGuard = [
  { x: 1930, y: 60, z: -4649 },
  { x: 1930, y: 60, z: -4651 },
  { x: 1930, y: 60, z: -4653 },
  { x: 1932, y: 60, z: -4649 },
  { x: 1932, y: 60, z: -4651 },
  { x: 1932, y: 60, z: -4653 },
  { x: 1934, y: 60, z: -4649 },
  { x: 1934, y: 60, z: -4651 },
  { x: 1934, y: 60, z: -4653 }
];

// scripts/classes.ts
var overworld = world.getDimension("overworld");
var nether = world.getDimension("nether");
var theEnd = world.getDimension("the_end");
var AllClassesTag = [
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
  "guard_spawn"
];
var NTF_Rifle = {
  title: "\xA7bMTF - Nine Tailed Fox - Soldier",
  subtitle: "\xA7b\u673A\u52A8\u7279\u9063\u961F-\u4E5D\u5C3E\u72D0-\u961F\u5458",
  target_tip: "\xA7f\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\u914D\u5408\u4ED6\u4EEC\u963B\u6B62\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\uFF0C\u6D88\u706D\u6240\u6709\u6DF7\u6C8C\u5206\u88C2\u8005\uFF0C\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168\u3002\xA76\u542C\u4ECE\u6307\u6325\u5B98\u7684\u6307\u6325",
  tag: "ntf",
  group: "ntf",
  state: "Alive",
  tag_spawn: "ntf_spawn",
  items: [
    ["l4gg:m16", 1],
    ["l4gg:m16_mag", 8],
    ["bli:lv5", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_gasmask"],
    ["slot.armor.chest", "bli:vest_ntf"],
    ["slot.armor.legs", "bli:pants_ntf"],
    ["slot.armor.feet", "bli:boots_guard"]
  ]
};
var NTF_Breaker = {
  title: "\xA7bMTF - Nine Tailed Fox - Breaker",
  subtitle: "\xA7b\u673A\u52A8\u7279\u9063\u961F-\u4E5D\u5C3E\u72D0-\u7A81\u7834\u624B",
  target_tip: "\xA7f\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\u914D\u5408\u4ED6\u4EEC\u963B\u6B62\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\uFF0C\u6D88\u706D\u6240\u6709\u6DF7\u6C8C\u5206\u88C2\u8005\uFF0C\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168\u3002\xA76\u542C\u4ECE\u6307\u6325\u5B98\u7684\u6307\u6325",
  tag: "ntf_breaker",
  group: "ntf",
  state: "Alive",
  tag_spawn: "ntf_spawn",
  items: [
    ["l4gg:shotgun", 1],
    ["l4gg:shotgun_bullet_item", 72],
    ["bli:lv5", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_glass_hd"],
    ["slot.armor.chest", "bli:vest_ntf"],
    ["slot.armor.legs", "bli:pants_ntf"],
    ["slot.armor.feet", "bli:boots_guard"]
  ]
};
var NTF_Sniper = {
  title: "\xA7bMTF - Nine Tailed Fox - Sniper",
  subtitle: "\xA7b\u673A\u52A8\u7279\u9063\u961F-\u4E5D\u5C3E\u72D0-\u72D9\u51FB\u624B",
  target_tip: "\xA7f\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\u914D\u5408\u4ED6\u4EEC\u963B\u6B62\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\uFF0C\u6D88\u706D\u6240\u6709\u6DF7\u6C8C\u5206\u88C2\u8005\uFF0C\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168\u3002\xA76\u542C\u4ECE\u6307\u6325\u5B98\u7684\u6307\u6325",
  tag: "ntf_sniper",
  group: "ntf",
  state: "Alive",
  tag_spawn: "ntf_spawn",
  items: [
    ["l4gg:awp", 1],
    ["l4gg:awp_mag", 7],
    ["bli:lv5", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ntf"],
    ["slot.armor.legs", "bli:pants_ntf"],
    ["slot.armor.feet", "bli:boots_guard"]
  ]
};
var NTF_Commander = {
  title: "\xA7bMTF - Nine Tailed Fox - Commander",
  subtitle: "\xA7b\u673A\u52A8\u7279\u9063\u961F-\u4E5D\u5C3E\u72D0-\u6307\u6325\u5B98",
  target_tip: "\xA76\u6307\u6325\u4F60\u7684\u961F\u5458\uFF0C\xA7f\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\u914D\u5408\u4ED6\u4EEC\u963B\u6B62\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\uFF0C\u6D88\u706D\u6240\u6709\u6DF7\u6C8C\u5206\u88C2\u8005\uFF0C\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168",
  tag: "ntf_com",
  group: "ntf",
  state: "Alive",
  tag_spawn: "ntf_spawn",
  items: [
    ["l4gg:glock", 1],
    ["l4gg:glock_mag", 16],
    ["bli:lv5", 1],
    ["bli:lvw", 1],
    ["bli:yeshiyi", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ntf"],
    ["slot.armor.legs", "bli:pants_ntf"],
    ["slot.armor.feet", "bli:boots_guard"]
  ]
};
var LimitNTFDef = 27;
var LimitNTFComDef = 1;
function support_ntf() {
  world.sendMessage(`\xA7e[ANNOUNCE] \xA7bMTF unit Epsilon-11, designated Nine-Tailed Fox, has entered the facility.`);
  let LimitNTF = LimitNTFDef;
  if (CustomSupportLimit !== void 0) {
    LimitNTF = CustomSupportLimit;
  }
  let PreSpawnPlayer = world.getAllPlayers();
  let LimitCom = LimitNTFComDef;
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    overworld.runCommand(`playsound "AN" "${PlayerID}" ${position.x} ${position.y} ${position.z} 100`);
    if (LimitNTF !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        player.removeTag("spectator");
        overworld.runCommand(`gamemode adventure "${PlayerID}"`);
        const SpawnPointID = Math.floor(Math.random() * SpawnPointNTF.length);
        overworld.runCommand(
          `tp "${PlayerID}" ${SpawnPointNTF[SpawnPointID].x} ${SpawnPointNTF[SpawnPointID].y} ${SpawnPointNTF[SpawnPointID].z}`
        );
        const SpawnAllType = [NTF_Rifle, NTF_Rifle, NTF_Breaker, NTF_Commander, NTF_Sniper];
        const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
        let SpawnType = SpawnAllType[TypeRandom];
        if (SpawnType === NTF_Commander && LimitCom !== 1) {
          SpawnType = NTF_Rifle;
        }
        if (SpawnType === NTF_Commander && LimitCom === 1) {
          LimitCom = 0;
        }
        player.addTag(`${SpawnType.tag_spawn}`);
        player.addTag(`${SpawnType.tag}`);
        player.addTag(`${SpawnType.group}`);
        overworld.runCommand(`title "${PlayerID}" times 0 200 0`);
        overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
        overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}`);
        player.sendMessage(`====================================`);
        player.sendMessage(`\xA7e>>>[\u89D2\u8272\u4FE1\u606F]\xA7f\u4F60\u662F${SpawnType.subtitle}\uFF0C\xA7e\u4EFB\u52A1\u76EE\u6807\uFF1A${SpawnType.target_tip}\u3002`);
        player.sendMessage(`====================================`);
        overworld.runCommand(`clear "${PlayerID}"`);
        overworld.runCommand(`effect "${PlayerID}" health_boost 100000 0 true`);
        overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
        overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
        for (let i = 0; i < SpawnType.items.length; i++) {
          overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
        }
        for (let i = 0; i < SpawnType.armor.length; i++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
          );
          if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}`
            );
          }
        }
        LimitNTF--;
      }
    }
  });
}
var CI_Rifle = {
  title: "\xA72Chaos Insurgency - Soldier",
  subtitle: "\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u58EB\u5175",
  target_tip: "\xA7f\u6D88\u706D\u4E00\u5207\u963B\u6B62\u4F60\u4EEC\u7684\u4EBA\uFF0C\u62A2\u593ASCP\u7269\u54C1\u5E76\u64A4\u79BB\u8BBE\u65BD",
  tag: "ci",
  group: "ci",
  state: "Alive",
  tag_spawn: "ci_spawn",
  items: [
    ["l4gg:ak47", 1],
    ["l4gg:ak47_mag", 8],
    ["bli:lvci", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:vest_ci"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"]
  ]
};
var CI_Breaker = {
  title: "\xA72Chaos Insurgency - Breaker",
  subtitle: "\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u7A81\u7834\u624B",
  target_tip: "\xA76\u534F\u52A9\u4F60\u7684\u961F\u53CB\uFF0C\xA7f\u6D88\u706D\u4E00\u5207\u963B\u6B62\u4F60\u4EEC\u7684\u4EBA\uFF0C\u62A2\u593ASCP\u7269\u54C1\u5E76\u64A4\u79BB\u8BBE\u65BD",
  tag: "ci_breaker",
  group: "ci",
  state: "Alive",
  tag_spawn: "ci_spawn",
  items: [
    ["l4gg:shotgun", 1],
    ["l4gg:shotgun_bullet_item", 72],
    ["bli:lvci", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_glass_hd"],
    ["slot.armor.chest", "bli:vest_ci_h"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"]
  ]
};
var CI_Sniper = {
  title: "\xA72Chaos Insurgency - Sniper",
  subtitle: "\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u72D9\u51FB\u624B",
  target_tip: "\xA76\u534F\u52A9\u4F60\u7684\u961F\u53CB\uFF0C\xA7f\uFF0C\u6D88\u706D\u4E00\u5207\u963B\u6B62\u4F60\u4EEC\u7684\u4EBA\uFF0C\u62A2\u593ASCP\u7269\u54C1\u5E76\u64A4\u79BB\u8BBE\u65BD",
  tag: "ci_sniper",
  group: "ci",
  state: "Alive",
  tag_spawn: "ci_spawn",
  items: [
    ["l4gg:awp", 1],
    ["l4gg:awp_mag", 7],
    ["bli:lvci", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ci"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"]
  ]
};
var CI_Commander = {
  title: "\xA72Chaos Insurgency - Commander",
  subtitle: "\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u6307\u6325\u5B98",
  target_tip: "\xA76\u6307\u6325\u4F60\u7684\u961F\u5458\uFF0C\xA7f\uFF0C\u6D88\u706D\u4E00\u5207\u963B\u6B62\u4F60\u4EEC\u7684\u4EBA\uFF0C\u62A2\u593ASCP\u7269\u54C1\u5E76\u64A4\u79BB\u8BBE\u65BD",
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
    ["bli:lvw", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ci"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"]
  ]
};
var LimitCIDefault = 27;
var LimitCIComDef = 1;
function support_ci() {
  let LimitCI = LimitCIDefault;
  if (CustomSupportLimit !== void 0) {
    LimitCI = CustomSupportLimit;
  }
  let PreSpawnPlayer = world.getAllPlayers();
  let LimitCom = LimitCIComDef;
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitCI !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        player.removeTag("spectator");
        overworld.runCommand(`gamemode adventure "${PlayerID}"`);
        const SpawnPointID = Math.floor(Math.random() * SpawnPointCI.length);
        overworld.runCommand(
          `tp "${PlayerID}" ${SpawnPointCI[SpawnPointID].x} ${SpawnPointCI[SpawnPointID].y} ${SpawnPointCI[SpawnPointID].z}`
        );
        const SpawnAllType = [CI_Rifle, CI_Rifle, CI_Breaker, CI_Commander, CI_Sniper];
        const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
        let SpawnType = SpawnAllType[TypeRandom];
        if (SpawnType === CI_Commander && LimitCom !== 1) {
          SpawnType = CI_Rifle;
        }
        if (SpawnType === CI_Commander && LimitCom === 1) {
          LimitCom = 0;
        }
        player.addTag(`${SpawnType.tag_spawn}`);
        player.addTag(`${SpawnType.tag}`);
        player.addTag(`${SpawnType.group}`);
        overworld.runCommand(`title "${PlayerID}" times 0 200 0`);
        overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
        overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}`);
        player.sendMessage(`====================================`);
        player.sendMessage(`\xA7e>>>[\u89D2\u8272\u4FE1\u606F]\xA7f\u4F60\u662F${SpawnType.subtitle}\uFF0C\xA7e\u4EFB\u52A1\u76EE\u6807\uFF1A${SpawnType.target_tip}\u3002`);
        player.sendMessage(`====================================`);
        overworld.runCommand(`clear "${PlayerID}"`);
        overworld.runCommand(`effect "${PlayerID}" health_boost 100000 0 true`);
        overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
        overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
        for (let i = 0; i < SpawnType.items.length; i++) {
          overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
        }
        for (let i = 0; i < SpawnType.armor.length; i++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
          );
          if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}`
            );
          }
        }
        LimitCI--;
      }
    }
  });
}
function support_random() {
  if (Math.random() > 0.5) {
    support_ntf();
  } else {
    support_ci();
  }
}
var Guard = {
  title: "\xA71Security Officer",
  subtitle: "\xA71\u5B89\u5168\u5B98\u5458",
  target_tip: "\xA7f\u6D88\u706D\u6240\u6709\u5165\u4FB5\u8BBE\u65BD\u7684\u6DF7\u6C8C\u5206\u88C2\u8005\uFF0C\u4E0D\u60DC\u4E00\u5207\u4FDD\u62A4\u8BBE\u65BD\uFF0CMTF\u4F1A\u5728\u4E0D\u4E45\u540E\u8FDB\u5165\u8BBE\u65BD\u534F\u52A9\u4F60\u4EEC",
  tag: "guard",
  group: "guard",
  state: "Alive",
  tag_spawn: "guard_spawn",
  items: [
    ["l4gg:m16", 1],
    ["l4gg:m16_mag", 8],
    ["bli:lv2", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_glass"],
    ["slot.armor.chest", "bli:vest_guard"],
    ["slot.armor.legs", "bli:pants_guard"],
    ["slot.armor.feet", "bli:boots_guard"]
  ]
};
var Guard_Med = {
  title: "\xA7aMedical Security Officer",
  subtitle: "\xA7a\u533B\u7597\u5B89\u5168\u5B98\u5458",
  target_tip: "\xA76\u4E3A\u4F60\u7684\u961F\u53CB\u8FDB\u884C\u6CBB\u7597\uFF0C\xA7f\uFF0C\u6D88\u706D\u6240\u6709\u5165\u4FB5\u8BBE\u65BD\u7684\u6DF7\u6C8C\u5206\u88C2\u8005\uFF0C\u4E0D\u60DC\u4E00\u5207\u4FDD\u62A4\u8BBE\u65BD\uFF0CMTF\u4F1A\u5728\u4E0D\u4E45\u540E\u8FDB\u5165\u8BBE\u65BD\u534F\u52A9\u4F60\u4EEC",
  tag: "guard_med",
  group: "guard",
  state: "Alive",
  tag_spawn: "guard_spawn",
  items: [
    ["l4gg:glock", 1],
    ["l4gg:glock_mag", 16],
    ["bli:lv2", 1],
    ["bli:first_aid_kit_medic", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_guard_med"],
    ["slot.armor.legs", "bli:pants_guard_med"],
    ["slot.armor.feet", "bli:boots_guard"]
  ]
};
var Guard_Chief = {
  title: "\xA7bSecurity Chief",
  subtitle: "\xA7b\u5B89\u5168\u4E3B\u7BA1",
  target_tip: "\xA76\u6307\u6325\u4F60\u7684\u961F\u5458\uFF0C\xA7f\uFF0C\u6D88\u706D\u6240\u6709\u5165\u4FB5\u8BBE\u65BD\u7684\u6DF7\u6C8C\u5206\u88C2\u8005\uFF0C\u4E0D\u60DC\u4E00\u5207\u4FDD\u62A4\u8BBE\u65BD\uFF0CMTF\u4F1A\u5728\u4E0D\u4E45\u540E\u8FDB\u5165\u8BBE\u65BD\u534F\u52A9\u4F60\u4EEC",
  tag: "guard_chief",
  group: "guard",
  state: "Alive",
  tag_spawn: "guard_spawn",
  items: [
    ["l4gg:m16", 1],
    ["l4gg:m16_mag", 8],
    ["bli:lv5", 1],
    ["bli:lvfs", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_glass"],
    ["slot.armor.chest", "bli:vest_guard"],
    ["slot.armor.legs", "bli:pants_guard"],
    ["slot.armor.feet", "bli:boots_guard"]
  ]
};
var LimitGuardDefault = 27;
var LimitGuardMedDef = 1;
var LimitGuardChiefDef = 1;
function support_guard() {
  let LimitGuard = LimitGuardDefault;
  if (CustomSupportLimit !== void 0) {
    LimitGuard = CustomSupportLimit;
  }
  let PreSpawnPlayer = world.getAllPlayers();
  let LimitMed = LimitGuardMedDef;
  let LimitChief = LimitGuardChiefDef;
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitGuard !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        player.removeTag("spectator");
        overworld.runCommand(`gamemode adventure "${PlayerID}"`);
        const SpawnPointID = Math.floor(Math.random() * SpawnPointGuard.length);
        overworld.runCommand(
          `tp "${PlayerID}" ${SpawnPointGuard[SpawnPointID].x} ${SpawnPointGuard[SpawnPointID].y} ${SpawnPointGuard[SpawnPointID].z}`
        );
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
        player.sendMessage(`\xA7e>>>[\u89D2\u8272\u4FE1\u606F]\xA7f\u4F60\u662F${SpawnType.subtitle}\uFF0C\xA7e\u4EFB\u52A1\u76EE\u6807\uFF1A${SpawnType.target_tip}\u3002`);
        player.sendMessage(`====================================`);
        overworld.runCommand(`clear "${PlayerID}"`);
        overworld.runCommand(`effect "${PlayerID}" health_boost 100000 0 true`);
        overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
        overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
        for (let i = 0; i < SpawnType.items.length; i++) {
          overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
        }
        for (let i = 0; i < SpawnType.armor.length; i++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
          );
          if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}`
            );
          }
        }
        LimitGuard--;
      }
    }
  });
}

// scripts/main.ts
var overworld2 = world2.getDimension("overworld");
var nether2 = world2.getDimension("nether");
var theEnd2 = world2.getDimension("the_end");
var Admin = ["Ectrico", "whz2006", "Removenuke", "A POTATO awa"];
overworld2.runCommand(`kill @e[type=item]`);
ResetPlayer();
var PreTimeDef = 60;
var RoundTimeDef = 720;
var ResetTimeDef = 30;
var PreTime;
var ResetTime;
var RoundTime;
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
var ResetTimeIntervalId;
function ResetTimeReduce() {
  ResetTimeIntervalId = system2.runInterval(() => {
    ResetTime--;
    overworld2.runCommandAsync(`title @a actionbar \u91CD\u7F6E\u65F6\u95F4\uFF1A${ResetTime}`);
    if (ResetTime === 0) {
      system2.clearRun(ResetTimeIntervalId);
      InitializePreTime();
      PreTimeReduce();
    }
  }, 20);
}
var PreTimeIntervalId;
function PreTimeReduce() {
  PreTimeIntervalId = system2.runInterval(() => {
    PreTime--;
    overworld2.runCommandAsync(`title @a actionbar \u51C6\u5907\u65F6\u95F4\uFF1A${PreTime}`);
    if (PreTime === 0) {
      system2.clearRun(PreTimeIntervalId);
      InitializeRoundTime();
      RoundTimeReduce();
    }
  }, 20);
}
var RoundTimeIntervalId;
function RoundTimeReduce() {
  RoundTimeIntervalId = system2.runInterval(() => {
    RoundTime--;
    overworld2.runCommandAsync(
      `title @a actionbar \u56DE\u5408\u65F6\u95F4\uFF1A ${Math.floor(RoundTime / 60)}:${RoundTime % 60 < 10 ? "0" : ""}${RoundTime % 60}`
    );
    if (RoundTime === 0) {
      system2.clearRun(RoundTimeIntervalId);
      InitializeResetTime();
      ResetTimeReduce();
    }
  }, 20);
}
ResetTimeReduce();
var CustomSupportLimit;
var PreTime60 = 1;
var EnableDeadCount = 0;
system2.runInterval(() => {
  if (PreTime === 60 && PreTime60 === 1) {
    let player = world2.getAllPlayers();
    world2.sendMessage(`\xA7b[BGM]\xA7eHummell Gets the Rockets (Alan Walker Remix) - Hans Zimmer,Alan Walker`);
    player.forEach((player2) => {
      const position = player2.location;
      const playerID = player2.name;
      overworld2.runCommand(
        `playsound "Hummell Gets the Rockets" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(
          2
        )} ${position.z.toFixed(2)} 100`
      );
    });
    const LimitAverage = Math.floor(player.length / 3) + 1;
    overworld2.runCommand(`title @a times 0 200 0`);
    overworld2.runCommand(`title @a title \xA7eGameMode - \xA72SCP\uFF1A Inbreak`);
    overworld2.runCommand(`title @a subtitle \xA7e\u6E38\u620F\u6A21\u5F0F - \xA72SCP: \u5165\u4FB5 - 1.0.0`);
    world2.sendMessage(`\xA7e\u6E38\u620F\u6A21\u5F0F - \xA72SCP: \u5165\u4FB5 - \xA7bFission_Track\u5DE5\u4F5C\u5BA4\u5F00\u6E90\u9879\u76EE\u4F5C\u54C1 - \xA76#help\u83B7\u53D6\u6A21\u5F0F\u5E2E\u52A9`);
    system2.runTimeout(() => {
      CustomSupportLimit = LimitAverage;
      support_guard();
    }, 200);
    system2.runTimeout(() => {
      CustomSupportLimit = 2 * LimitAverage;
      support_ci();
    }, 250);
    system2.runTimeout(() => {
      CustomSupportLimit = void 0;
    }, 300);
    EnableDeadCount = 1;
    PreTime60 = 0;
  }
}, 0);
var RoundTime620 = 1;
system2.runInterval(() => {
  if (RoundTime === 620 && RoundTime620 === 1) {
    const RandomDelay = Math.random() * 1e3;
    system2.runTimeout(() => {
      support_random();
    }, RandomDelay);
    RoundTime620 = 0;
  }
}, 0);
var RoundTime500 = 1;
system2.runInterval(() => {
  if (RoundTime === 500 && RoundTime500 === 1) {
    const RandomDelay = Math.random() * 1e3;
    system2.runTimeout(() => {
      support_random();
    }, RandomDelay);
    RoundTime500 = 0;
  }
}, 0);
var RoundTime380 = 1;
system2.runInterval(() => {
  if (RoundTime === 380 && RoundTime380 === 1) {
    const RandomDelay = Math.random() * 1e3;
    system2.runTimeout(() => {
      support_random();
    }, RandomDelay);
    RoundTime380 = 0;
  }
}, 0);
var RoundTime260 = 1;
system2.runInterval(() => {
  if (RoundTime === 260 && RoundTime260 === 1) {
    const RandomDelay = Math.random() * 1e3;
    system2.runTimeout(() => {
      support_random();
    }, RandomDelay);
    RoundTime260 = 0;
  }
}, 0);
var RoundTime140 = 1;
system2.runInterval(() => {
  if (RoundTime === 140 && RoundTime140 === 1) {
    const RandomDelay = Math.random() * 1e3;
    system2.runTimeout(() => {
      support_random();
    }, RandomDelay);
    RoundTime140 = 0;
  }
}, 0);
var RoundTime720 = 1;
var VictoryDecision = 0;
var VictoryDecision2 = 1;
system2.runInterval(() => {
  if (RoundTime === 720 && RoundTime720 === 1) {
    world2.sendMessage(`\xA7e\u6E38\u620F\u5F00\u59CB`);
    overworld2.runCommand(`title @a times 0 200 0`);
    overworld2.runCommand(`title @a title \xA7eGame Start. Good Luck\uFF01.`);
    overworld2.runCommand(`title @a subtitle \xA7bMTF\u4E5D\u5C3E\u72D0\u673A\u52A8\u7279\u9063\u961F\u5DF2\u8FDB\u5165\u8BBE\u65BD`);
    let player = world2.getAllPlayers();
    player.forEach((player2) => {
      const position = player2.location;
      const playerID = player2.name;
      overworld2.runCommand(
        `playsound "Bell2" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`
      );
    });
    support_ntf();
    RoundTime720 = 0;
    system2.runTimeout(() => {
      VictoryDecision = 1;
      VictoryDecision2 = 1;
    }, 100);
  }
}, 0);
var ResetTime30 = 1;
var Team = {
  Foundation: "\xA7bSCP\u57FA\u91D1\u4F1A",
  CI: "\xA72\u6DF7\u6C8C\u5206\u88C2\u8005",
  Unknown: "\xA7f\u65E0"
};
var VectoryTeam;
system2.runInterval(() => {
  if (ResetTime === 30 && ResetTime30 === 1) {
    system2.runTimeout(() => {
      VictoryDecision = 0;
    }, 5);
    overworld2.runCommand(`title @a times 0 600 0`);
    overworld2.runCommand(`stopsound @a`);
    overworld2.runCommand(`title @a title \xA7eGame Over\uFF01`);
    overworld2.runCommand(`title @a subtitle \xA7e\u6E38\u620F\u7ED3\u675F\uFF0C\u8BF7\u7B49\u5F85\u4E0B\u4E00\u56DE\u5408\u5F00\u59CB\uFF01`);
    world2.sendMessage(`\xA7c\u6E38\u620F\u7ED3\u675F`);
    world2.sendMessage(`\xA7e=============================`);
    world2.sendMessage(` `);
    if (VectoryTeam === void 0) {
      VectoryTeam = Team.Unknown;
    }
    world2.sendMessage(`\u672C\u56DE\u5408\u80DC\u5229\u9635\u8425\uFF1A ${VectoryTeam}`);
    world2.sendMessage(`\u672C\u6B21\u8BBE\u65BD\u653B\u51FB\u5171\u9020\u6210\uFF1A ${DeadCount} \u4EBA\u6B7B\u4EA1`);
    world2.sendMessage(` `);
    world2.sendMessage(`\xA7e=============================`);
    let player = world2.getAllPlayers();
    player.forEach((player2) => {
      const position = player2.location;
      const playerID = player2.name;
      overworld2.runCommand(
        `playsound "Bell1" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`
      );
    });
    EnableDeadCount = 0;
    DeadCount = 0;
    ResetTime30 = 0;
  }
}, 0);
var ResetTime10 = 1;
system2.runInterval(() => {
  if (ResetTime === 10 && ResetTime10 === 1) {
    overworld2.runCommand(`kill @a`);
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
system2.runInterval(() => {
  if (ResetTime === 1) {
    ResetPlayer();
    overworld2.runCommand(`kill @e[type=item]`);
    ResetEvent();
  }
}, 0);
system2.runInterval(() => {
  if (VictoryDecision === 1) {
    let foundNtf = false;
    let foundCi = false;
    const players = world2.getPlayers();
    if (players.length === 0) {
      return;
    }
    for (const player of players) {
      if (player.hasTag("ntf") || player.hasTag("guard")) {
        foundNtf = true;
      }
      if (player.hasTag("ci")) {
        foundCi = true;
      }
      if (foundNtf && foundCi) {
        break;
      }
    }
    if (!foundNtf && VictoryDecision2 === 1) {
      CIVictory();
    }
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
function InitializeRound() {
  overworld2.runCommand(`kill @e[type=item]`);
  ResetPlayer();
  if (ResetTime > 0 && ResetTime < ResetTimeDef) {
    system2.clearRun(ResetTimeIntervalId);
  }
  if (PreTime > 0 && PreTime < PreTimeDef) {
    system2.clearRun(PreTimeIntervalId);
  }
  if (RoundTime > 0 && PreTime < RoundTimeDef) {
    system2.clearRun(RoundTimeIntervalId);
  }
  ResetEvent();
  InitializeResetTime();
  ResetTimeReduce();
  world2.sendMessage("\xA7e[GameMode]>_: \xA7fRound Restarted.");
}
function ResetPlayer() {
  let player = world2.getAllPlayers();
  player.forEach((player2) => {
    const PlayerID = player2.name;
    for (let i = 0; i < AllClassesTag.length; i++) {
      overworld2.runCommand(`tag "${PlayerID}" remove ${AllClassesTag[i]}`);
    }
  });
}
world2.afterEvents.chatSend.subscribe((arg) => {
  const sender = arg.sender;
  const senderID = arg.sender.name;
  const message = arg.message;
  if (Admin.includes(senderID) && message === "#help") {
    sender.sendMessage(`\xA7e============\u6A21\u5F0F\u6307\u4EE4\u5E2E\u52A9\u83DC\u5355============`);
    sender.sendMessage(` `);
    sender.sendMessage(`\xA7e#version - \u67E5\u770B\u6E38\u620F\u6A21\u5F0F\u7248\u672C\xA77`);
    sender.sendMessage(`\xA7e#round restart - \u91CD\u542F\u56DE\u5408\xA77`);
    sender.sendMessage(`\xA7e#spawn support random - \u5F3A\u5236\u5237\u65B0\u652F\u63F4\uFF1A\u968F\u673A\xA77`);
    sender.sendMessage(`\xA7e#spawn support ntf - \u5F3A\u5236\u5237\u65B0\u652F\u63F4\uFF1ANTF\xA77`);
    sender.sendMessage(`\xA7e#spawn support ci - \u5F3A\u5236\u5237\u65B0\u652F\u63F4\uFF1ACI\xA77`);
    sender.sendMessage(`\xA7e#spawn guard - \u5F3A\u5236\u5237\u65B0\uFF1A\u5B89\u4FDD\u4EBA\u5458\xA77`);
    sender.sendMessage(`\xA7e#time skip reset - \u65F6\u95F4\u63A7\u5236\uFF1A\u8DF3\u8FC7\u91CD\u7F6E\u65F6\u95F4\xA77`);
    sender.sendMessage(`\xA7e#time skip pre - \u5F3A\u5236\u5237\u65B0\uFF1A\u8DF3\u8FC7\u51C6\u5907\u65F6\u95F4\xA77`);
    sender.sendMessage(`\xA7e#time skip round - \u5F3A\u5236\u5237\u65B0\uFF1A\u8DF3\u8FC7\u56DE\u5408\u65F6\u95F4\xA77`);
    sender.sendMessage(` `);
    sender.sendMessage(`\xA7e================End\uFF01=================`);
  }
  if (Admin.includes(senderID) && message === "#version") {
    world2.sendMessage("\xA7e[GameMode]>_: \xA7fOpposing Forces v0.1.0");
  }
  if (Admin.includes(senderID) && message === "#round restart") {
    InitializeRound();
  }
  if (Admin.includes(senderID) && message === "#spawn support random") {
    support_random();
    world2.sendMessage("\xA7e[GameMode]>_: \xA7fSupport has been Spawned.");
  }
  if (Admin.includes(senderID) && message === "#spawn support ntf") {
    support_ntf();
    world2.sendMessage("\xA7e[GameMode]>_: \xA7fNTF has been Spawned.");
  }
  if (Admin.includes(senderID) && message === "#spawn support ci") {
    support_ci();
    world2.sendMessage("\xA7e[GameMode]>_: \xA7fCI has been Spawned.");
  }
  if (Admin.includes(senderID) && message === "#spawn guard") {
    support_guard();
    world2.sendMessage("\xA7e[GameMode]>_: \xA7fGuard has been Spawned.");
  }
  if (Admin.includes(senderID) && message === "#time skip reset") {
    ResetTime = 1;
    world2.sendMessage("\xA7e[GameMode]>_: \xA7fResetTime Skiped.");
  }
  if (Admin.includes(senderID) && message === "#time skip pre") {
    PreTime = 1;
    world2.sendMessage("\xA7e[GameMode]>_: \xA7fPreTime Skiped.");
  }
  if (Admin.includes(senderID) && message === "#time skip round") {
    RoundTime = 1;
    world2.sendMessage("\xA7e[GameMode]>_: \xA7fRoundTime Skiped.");
  }
});
var DeadCount = 0;
world2.afterEvents.entityDie.subscribe((arg) => {
  const DiedEntity = arg.deadEntity;
  if (DiedEntity.typeId === "minecraft:player") {
    const DiedPlayerID = DiedEntity.nameTag;
    const DiedPlayerTags = DiedEntity.getTags();
    let DiedPlayerClasses;
    if (DiedPlayerTags.includes("ntf")) {
      DiedPlayerClasses = "\xA7bNine Tailed Fox";
    } else if (DiedPlayerTags.includes("ci")) {
      DiedPlayerClasses = "\xA72Chaos Insurgency";
    } else {
      DiedPlayerClasses = "Unknow";
    }
    world2.sendMessage(`\xA7c*DIED* \xA7f[${DiedPlayerClasses}\xA7f] ${DiedPlayerID}`);
    system2.runTimeout;
    for (let i = 0; i < AllClassesTag.length; i++) {
      DiedEntity.removeTag(`${AllClassesTag[i]}`);
    }
    if (EnableDeadCount === 1) {
      DeadCount++;
    }
  }
});
world2.afterEvents.playerSpawn.subscribe((arg) => {
  const RespawnPlayer = arg.player;
  const RespawnPlayerID = arg.player.name;
  overworld2.runCommand(`gamemode spectator "${RespawnPlayerID}"`);
  RespawnPlayer.addTag("spectator");
  overworld2.runCommand(`title "${RespawnPlayerID}" times 0 200 0`);
  overworld2.runCommand(`title "${RespawnPlayerID}" title Spectator`);
  overworld2.runCommand(`title "${RespawnPlayerID}" subtitle \u4F60\u73B0\u5728\u662F\u65C1\u89C2\u8005\uFF0C\u8BF7\u7B49\u5F85\u590D\u6D3B...`);
});
system2.runInterval(() => {
  overworld2.runCommand(`effect @a saturation 10000 255 true`);
  let AllPlayer = world2.getAllPlayers();
  AllPlayer.forEach((element) => {
    const position = element.location;
    const playerID = element.name;
    element.nameTag = "";
  });
}, 100);
world2.afterEvents.playerJoin.subscribe((arg) => {
  const player = arg.playerId;
  overworld2.runCommand(`kill "${player}"`);
});
export {
  CustomSupportLimit
};

//# sourceMappingURL=../debug/main.js.map
