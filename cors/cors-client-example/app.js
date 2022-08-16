async function getChatters() {
  // const url = 'https://tmi.twitch.tv/group/user/codinggarden/chatters';
  // const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  // const url = `${corsProxy}https://tmi.twitch.tv/group/user/codinggarden/chatters`;
  const url = 'https://tmi-proxy.vercel.app/api/chatters';
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
}

getChatters();
