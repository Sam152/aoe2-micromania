// https://github.com/aocpip/aoe2stats/blob/master/src/stats/aoc_units.json
const data = [
    {
        "type": "Archery Range",
        "name": "Archer",
        "ver": "k",
        "age": "1",
        "cost": "25W 45G",
        "bt": "0:35",
        "fr": "2",
        "ad": "0.35",
        "mr": "0.96",
        "los": "6",
        "hp": "30",
        "ra": "4",
        "at": "4",
        "ar": "0/0",
        "extra": {
            "attack bonus": "+3 spearmen",
            "accuracy": "80%"
        },
        "civb": {
            "Aztec": "0:29.75 BT (15% bonus)",
            "Britons and allies": "0:29.2 BT (1.2* archer work rate -> 35/1.2)",
            "Aztec with Briton ally": "0:24.8 BT (35*0.85/1.2)",
            "Briton": "5 RA 8 LOS from Castle 6 RA 9 LOS from Imperial Age",
            "Mayans": "Cost 23W 41G in Feudal, 20W 36G in Castle, 18W 32G in Imperial Age",
            "Saracens and allies": "+2 attack against buildings"
        },
        "note": "Quick and light. Weak at close range; excels at battle from distance.",
        "t": "archer ar0 archery pierce"
    },
    {
        "type": "Archery Range",
        "name": "Crossbowman",
        "ver": "k",
        "age": "2",
        "cost": "25W 45G",
        "bt": "0:27",
        "fr": "2",
        "ad": "0.35",
        "mr": "0.96",
        "los": "7",
        "hp": "35",
        "ra": "5",
        "at": "5",
        "ar": "0/0",
        "extra": {
            "attack bonus": "+3 spearmen",
            "accuracy": "85%"
        },
        "civb": {
            "Aztec": "0:25.65 BT (15% bonus)",
            "Britons and allies": "0:22.5 BT (1.2* archer work rate -> 27/1.2)",
            "Aztec with Briton ally": "0:19.125 BT (27*0.85/1.2)",
            "Briton": "5 RA 8 LOS from Castle 6 RA 9 LOS from Imperial Age",
            "Mayans": "Cost 23W 41G in Feudal, 20W 36G in Castle, 18W 32G in Imperial Age",
            "Saracens and allies": "+2 attack against buildings"
        },
        "note": "Stronger than archer",
        "t": "archer ar1 archery pierce"
    },
    {
        "type": "Archery Range",
        "name": "Arbalest",
        "ver": "k",
        "age": "3",
        "cost": "25W 45G",
        "bt": "0:27",
        "fr": "2",
        "ad": "0.35",
        "mr": "0.96",
        "los": "7",
        "hp": "40",
        "ra": "5",
        "at": "6",
        "ar": "0/0",
        "extra": {
            "attack bonus": "+3 spearmen",
            "accuracy": "90%"
        },
        "civb": {
            "Aztec": "0:25.65 BT (15% bonus)",
            "Britons and allies": "0:22.5 BT (1.2* archer work rate -> 27/1.2)",
            "Aztec with Briton ally": "0:19.125 BT (27*0.85/1.2)",
            "Briton": "5 RA 8 LOS from Castle 6 RA 9 LOS from Imperial Age",
            "Mayans": "Cost 23W 41G in Feudal, 20W 36G in Castle, 18W 32G in Imperial Age",
            "Saracens and allies": "+2 attack against buildings"
        },
        "note": "Stronger than crossbowman",
        "t": "archer ar2 archery pierce"
    },
    {
        "type": "Archery Range",
        "name": "Cavalry Archer",
        "ver": "k",
        "age": "2",
        "cost": "40W 70G",
        "bt": "0:34",
        "fr": "2",
        "ad": "1",
        "mr": "1.4",
        "los": "5",
        "hp": "50",
        "ra": "4",
        "at": "6",
        "ar": "0/0",
        "extra": {
            "attack bonus": "+2 spearmen",
            "accuracy": "50%",
            "search radius": "6"
        },
        "civb": {
            "Britons and allies": "0:28.33 BT (1.2* archer work rate -> 34/1.2)",
            "Huns": "Costs 30W 53G in Castle age (-25% bonus), 28W 49G in Imperial Age (-30% bonus)",
            "Mongols": "RT 1.6 (-20% reload time)",
            "Saracens": "+4 attack versus buildings"
        },
        "note": "Fast, with ranged attack. Ideal for hit-and-run attacks.",
        "t": "cavarcher ca0 cavalry archer pierce"
    },
    {
        "type": "Archery Range",
        "name": "Heavy Cavalry Archer",
        "ver": "k",
        "age": "3",
        "cost": "40W 70G",
        "bt": "0:27",
        "fr": "2",
        "ad": "1",
        "mr": "1.4",
        "los": "6",
        "hp": "60",
        "ra": "4",
        "at": "7",
        "ar": "1/0",
        "extra": {
            "attack bonus": "+2 spearmen",
            "accuracy": "50%"
        },
        "civb": {
            "Britons and allies": "0:22.5 BT (1.2* archer work rate -> 34/1.2)",
            "Huns": "Costs 30W 53G in Castle age (-25% bonus), 28W 49G in Imperial Age (-30% bonus)",
            "Mongols": "RT 1.6 (-20% reload time)",
            "Saracens": "+4 attack versus buildings"
        },
        "note": "Stronger than Cavalry Archer.",
        "t": "cavarcher ca1 cavalry archery pierce"
    },
    {
        "type": "Archery Range",
        "name": "Hand Cannoneer",
        "ver": "k",
        "age": "3",
        "cost": "45F 50G",
        "bt": "0:34",
        "fr": "3.45",
        "ad": "0.35",
        "mr": "0.96",
        "los": "9",
        "hp": "35",
        "ra": "7",
        "at": "17",
        "ar": "1/0",
        "extra": {
            "attack bonus": "+1 spearmen, +10 infantry, +2 rams",
            "accuracy": "65%"
        },
        "civb": {
            "Briton ally": "0:28.33 BT (1.2* archer work rate -> 34/1.2)",
            "Spanish": "RT 2.93 (-15% reload time bonus)",
            "Turks": "44 HP (+25% HP)",
            "Turks and allies": "0:27.2 BT (-20% faster)",
            "Turk and Briton ally": "0:22.67 BT (0.8*BT/1.2)"
        },
        "note": "Powerful close attack; inaccurate at range. Attack bonus against spearman +11 in total",
        "t": "handcannon hc0 gunpowder pierce"
    },
    {
        "type": "Archery Range",
        "name": "Skirmisher",
        "ver": "k",
        "age": "1",
        "cost": "25F 35W",
        "bt": "0:22",
        "fr": "3",
        "ad": "0.5",
        "mr": "0.96",
        "los": "6",
        "hp": "30",
        "ra": "1-4",
        "at": "2",
        "ar": "0/3",
        "extra": {
            "attack bonus": "+3 spearmen, +3 archers/hand cannon/skirms/conquistadors",
            "accuracy": "90%"
        },
        "civb": {
            "Aztec": "0:18.7 BT (15% bonus)",
            "Britons and allies": "0:18.33 BT (1.2* archer work rate -> 22/1.2)",
            "Aztec with Briton ally": "0:15.85 BT (22*0.85/1.2)",
            "Byzantine": "Cost 19F 26W (25% cheaper)",
            "Saracens and allies": "+2 attack against buildings"
        },
        "note": "Ranged unit equipped with armor vs. archer attacks.",
        "t": "skirm sk0 archery pierce"
    },
    {
        "type": "Archery Range",
        "name": "Elite Skirmisher",
        "ver": "k",
        "age": "2",
        "cost": "25F 35W",
        "bt": "0:22",
        "fr": "3",
        "ad": "0.5",
        "mr": "0.96",
        "los": "7",
        "hp": "35",
        "ra": "1-5",
        "at": "3",
        "ar": "0/4",
        "extra": {
            "attack bonus": "+3 spearmen, +4 archers/hand cannon/skirms/conquistadors, +2 against cavalry archers",
            "accuracy": "90%"
        },
        "civb": {
            "Aztec": "0:18.7 BT (15% bonus)",
            "Britons and allies": "0:18.33 BT (1.2* archer work rate -> 22/1.2)",
            "Aztec with Briton ally": "0:15.85 BT (22*0.85/1.2)",
            "Byzantine": "Cost 19F 26W (25% cheaper)",
            "Saracens and allies": "+2 attack against buildings"
        },
        "note": "Stronger than skirmisher; Attack bonus against cavalry archers +6 in total (+4 against archers + 2 against cav archers).",
        "t": "skirm sk1 archery pierce"
    },
];


export class UnitStatistics {

    movementSpeed(unit) {
        return 1.0;
    }

    frameDelay(unit) {
        return 1.0;
    }

    reloadRate(unit) {
        return 1.0;
    }

}
