import TwitchChat, { getUptime } from './TwitchChat.js';
// import options from './options.js';
// import { default as options } from './options.js';
import * as options from './options.js';
// const { default: { size } } = await import('./options.js');

const { default: { size } } = options;

console.log(TwitchChat);

console.log(getUptime());

console.log(options);

console.log(size);
