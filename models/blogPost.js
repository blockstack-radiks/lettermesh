import { Model } from 'radiks';

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
    userGroupId: {
      type: String,
      decrypted: true,
    },
  }
}
