import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timeStamp: number;

  static calcBlockhHash = (
    index: number,
    prevHash: string,
    timeStamp: number,
    data: string
  ): string => CryptoJS.SHA256(index + prevHash + timeStamp + data).toString();

  constructor(
    index: number,
    hash: string,
    prevHash: string,
    data: string,
    timeStamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timeStamp = timeStamp;
  }
}

const originalBlock = new Block(0, "202020202020202", "", "Hello", 123456);

let blockChain: [Block] = [originalBlock];

console.log(blockChain);

export {};
