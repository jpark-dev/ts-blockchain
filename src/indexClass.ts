import crypto from "crypto";

interface BlockProp {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockProp {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calcBlockHash(prevHash, height, data);
  }

  static calcBlockHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(data).digest("hex");
  }
}

class BlockChain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    return this.blocks.length === 0
      ? ""
      : this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    return [...this.blocks];
  }
}

const blockChain = new BlockChain();

blockChain.addBlock("First b");
blockChain.addBlock("Second b");
blockChain.addBlock("Third b");

console.log(blockChain.getBlocks());
