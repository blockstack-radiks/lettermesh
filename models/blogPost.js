import { Model } from 'radiks';
import { makeShortId } from '../lib/utils';

export default class BlogPost extends Model {
  static schema = {
    title: {
      type: String,
      decrypted: true,
    },
    graphiteUrl: {
      type: String,
      decrypted: true,
    },
    graphiteID: {
      type: String,
      decrypted: true,
    },
    graphiteUsername: {
      type: String,
      decrypted: true,
    },
    authorName: {
      type: String,
      decrypted: true,
    },
    headerImageUrl: {
      type: String,
      decrypted: true,
    },
    userGroupId: {
      type: String,
      decrypted: true,
    },
    friendlyId: {
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

  beforeSave = () => {
    this.attrs.friendlyId = this.attrs.friendlyId || makeShortId();
    return this;
  }
}
