import { UserGroup } from 'radiks';

export default class Blog extends UserGroup {
  static schema = {
    name: {
      type: String,
      decrypted: true,
    },
    typefaceImageUrl: {
      type: String,
      decrypted: true,
    },
  }
}
