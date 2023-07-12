import { BitcoinIcon, Gamepad2Icon, TrophyIcon, Tv2Icon } from "lucide-react";

export const topics = [
  {
    id: 1,
    AccordionItemValue: "item-1",
    AccordionTriggerName: "Gaming",
    AccordionTriggerIcon: <Gamepad2Icon />,
    AccordionContent: [
      {
        id: 1,
        name: "Valheim",
      },
      {
        id: 2,
        name: "Genshin Impact",
      },
      {
        id: 3,
        name: "MineCraft",
      },
      {
        id: 4,
        name: "Pokimane",
      },
      {
        id: 5,
        name: "Halo Infinite",
      },
    ],
  },

  {
    id: 2,
    AccordionItemValue: "item-2",
    AccordionTriggerName: "Sports",
    AccordionTriggerIcon: <TrophyIcon />,
    AccordionContent: [
      {
        id: 1,
        name: "NFL",
      },
      {
        id: 2,
        name: "NBA",
      },
      {
        id: 3,
        name: "Megan Anderson",
      },
      {
        id: 4,
        name: "Arsenal F.C",
      },
      {
        id: 5,
        name: "Premier League",
      },
    ],
  },
  {
    id: 3,
    AccordionItemValue: "item-3",
    AccordionTriggerName: "Crypto",
    AccordionTriggerIcon: <BitcoinIcon />,
    AccordionContent: [
      {
        id: 1,
        name: "Bitcoin",
      },
      {
        id: 2,
        name: "Doge Coin",
      },
      {
        id: 3,
        name: "Etherum",
      },
      {
        id: 4,
        name: "Cardano",
      },
      {
        id: 5,
        name: "USDT",
      },
    ],
  },
  {
    id: 4,
    AccordionItemValue: "item-4",
    AccordionTriggerName: "Television",
    AccordionTriggerIcon: <Tv2Icon />,
    AccordionContent: [
      {
        id: 1,
        name: "Django Unchained",
      },
      {
        id: 2,
        name: "Peaky Blinder",
      },
      {
        id: 3,
        name: "Squid Game",
      },
      {
        id: 4,
        name: "Top Boy",
      },
      {
        id: 5,
        name: "Young Sheldon",
      },
    ],
  },
];
