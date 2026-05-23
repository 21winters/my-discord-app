import config from './config.js';

/**
 * Register the metadata to be stored by Discord. This should be a one time action.
 * Note: uses a Bot token for authentication, not a user token.
 */
const url = `https://discord.com/api/v10/applications/${config.DISCORD_CLIENT_ID}/role-connections/metadata`;
// supported types: number_lt=1, number_gt=2, number_eq=3 number_neq=4, datetime_lt=5, datetime_gt=6, boolean_eq=7, boolean_neq=8
const body = [
  {
    key: 'inter_knot_level',
    name: 'Inter-Knot Level',
    description: 'ZZZ lvl',
    type: 2,
  },

const response = await fetch(url, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bot ${config.DISCORD_TOKEN}`,
  },
});
if (response.ok) {
  const data = await response.json();
  console.log(data);
} else {
  //throw new Error(`Error pushing discord metadata schema: [${response.status}] ${response.statusText}`);
  const data = await response.text();
  console.log(data);
}

// register.js — запускается один раз
const body = [
  {
    key: "inter_knot_level",
    name: "Inter-Knot Level",
    description: "Уровень в ZZZ",
    type: 2  // NUMBER_LESS_THAN_OR_EQUAL
  }
];

await fetch(`https://discord.com/api/v10/applications/${CLIENT_ID}/role-connections/metadata`, {
  method: "PUT",
  headers: { Authorization: `Bot ${TOKEN}`, "Content-Type": "application/json" },
  body: JSON.stringify(body)
});

// Записываем данные пользователя
await fetch(`https://discord.com/api/v10/users/@me/applications/${CLIENT_ID}/role-connection`, {
  method: "PUT",
  headers: { Authorization: `Bearer ${userAccessToken}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    platform_name: "Zenless Zone Zero",  // название под аватаркой
    platform_username: "Aish1teiru21",          // никнейм
    metadata: {
      inter_knot_level: 60              // твои данные
    }
  })
});
