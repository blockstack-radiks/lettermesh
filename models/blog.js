import { UserGroup } from 'radiks';
// import shortid from 'shortid';

import { makeShortId } from '../lib/utils';


export default class Blog extends UserGroup {
  static schema = {
    ...UserGroup.schema,
    name: {
      type: String,
      decrypted: true,
    },
    description: {
      type: String,
      decrypted: true,
    },
    friendlyId: {
      type: String,
      decrypted: true,
    },
    typefaceImageUrl: {
      type: String,
      decrypted: true,
    },
  }

  static findByUrlParam(urlParam, options = { decrypt: true }) {
    const friendlyId = urlParam.split('-')[0];
    return this.findOne({
      friendlyId,
    }, options);
  }

  beforeSave() {
    this.attrs.friendlyId = this.attrs.friendlyId || makeShortId();
    return this;
  }
}
