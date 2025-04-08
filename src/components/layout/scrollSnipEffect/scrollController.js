// scrollController.js
const subscribers = {
  disable: [],
  enable: [],
};

export const onDisableScroll = (callback) => {
  subscribers.disable.push(callback);
};

export const onEnableScroll = (callback) => {
  subscribers.enable.push(callback);
};

export const disableScroll = () => {
  subscribers.disable.forEach((cb) => cb());
};

export const enableScroll = () => {
  subscribers.enable.forEach((cb) => cb());
};
