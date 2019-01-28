// import shortUUID from 'short-uuid';
import shortid from 'shortid';

export const makeGraphiteUrl = (username, id) => `https://app.graphitedocs.com/shared/docs/${username}-${id}`;

// copypasta from https://gist.github.com/mathewbyrne/1280286
export const slugify = text => text
  .toString()
  .toLowerCase()
  .replace(/\.+/g, '-') // Replace dots with -
  .replace(/\s+/g, '-') // Replace spaces with -
  .replace(/[^\w-]+/g, '') // Remove all non-word chars
  .replace(/--+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, ''); // Trim - from end of text

export const friendlyId = model => `${model.attrs.friendlyId}-${slugify(model.attrs.name || model.attrs.title)}`;

export const makeShortId = () => {
  shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
  return shortid.generate();
};
