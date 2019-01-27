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
    friendlyId: {
      type: String,
      decrypted: true,
    },
    typefaceImageUrl: {
      type: String,
      decrypted: true,
    },
  }

  beforeSave() {
    this.attrs.friendlyId = this.attrs.friendlyId || makeShortId();
    return this;
  }
}
