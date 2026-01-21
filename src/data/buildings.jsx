import sawmillImg from "/home/sttom/crafting-game/src/assets/sawmill.png";
import forgeImg from "/home/sttom/crafting-game/src/assets/forge.png";
export const stoneMill = {
  name: "Stone Mill",
  cost: {
    iron: 20,
  },
  income: {
    stone: [5, 1000],
  },
};

export const lumberyard = {
  name: "Lumberyard",
  cost: {
    stone: 30,
    wood: 10,
    iron: 20,
  },
  income: {
    wood: [5, 1000],
  },
};

export const ironMine = {
  name: "Iron Mine",
  cost: { wood: 50 },
  income: {
    iron: [10, 500],
    stone: [10, 500],
  },
};
export const sawMill = {
  name: "Saw Mill",
  cost: { stone: 100 },
  img: sawmillImg,
  craftedGoods: "plank",
};

export const forge = {
  name: "Forge",
  cost: { iron: 100, stone: 75 },
  img: forgeImg,
  craftedGoods: "ironNails",
};
