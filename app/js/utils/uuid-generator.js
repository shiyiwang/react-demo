class UUIDGenerator {
  constructor(){
    this.ORIGNAL_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  }

  uuid(len, radix){
    let chars = this.ORIGNAL_CHARS;

    let [uuid, radixTmp] = [[], radix || chars.length];

    if (len) {
      // Compact form
      for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radixTmp];
    } else {
      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          let r = 0 | Math.random() * 16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('').toLowerCase();
  }

  // A more performant, but slightly bulkier, RFC4122v4 solution.  We boost performance
  // by minimizing calls to random()
  uuidFast(){
    let [chars, uuid, rnd] = [this.ORIGNAL_CHARS, new Array(36), 0];

    for (let i = 0; i < 36; i++) {
      if (i == 8 || i == 13 ||  i == 18 || i == 23) {
        uuid[i] = '-';
      } else if (i == 14) {
        uuid[i] = '4';
      } else {
        if (rnd <= 0x02) rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
        let r = rnd & 0xf;
        rnd = rnd >> 4;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }

    return uuid.join('').toLowerCase();
  }

  // A more compact, but less performant, RFC4122v4 solution:
  uuidCompact(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0;
      let v = c == 'x' ? r : (r & 0x3 | 0x8);

      return v.toString(16).toLowerCase();
    });
  }
}

module.exports = new UUIDGenerator();
