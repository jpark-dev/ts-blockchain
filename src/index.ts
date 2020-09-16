import * as CryptoJS from "crypto-js";

class Block {
  static calcBlockhHash = (
    index: number,
    prevHash: string,
    timeStamp: number,
    data: string
  ): string => CryptoJS.SHA256(index + prevHash + timeStamp + data).toString();

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.prevHash === "string" &&
    typeof aBlock.timeStamp === "number" &&
    typeof aBlock.data === "string";

  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timeStamp: number;

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

let blockChain: Block[] = [originalBlock];

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const prevBlock: Block = getLatestBlock();
  const newIndex: number = prevBlock.index + 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calcBlockhHash(
    newIndex,
    prevBlock.hash,
    newTimeStamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    prevBlock.hash,
    data,
    newTimeStamp
  );
  return newBlock;
};

console.log(createNewBlock("hello"), createNewBlock("bye bye"));

const isBlockValid = (targetBlock: Block, prevBlock: Block): boolean => {
  if (!Block.validateStructure(targetBlock)) {
    return false;
  } else if (prevBlock.index + 1 !== targetBlock.index) {
    return false;
  } else if (prevBlock.hash !== targetBlock.prevHash) {
    return false;
  } else if () 
};
export {};
