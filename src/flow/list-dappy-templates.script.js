export const LIST_DAPPY_TEMPLATES = `
  import DappyContract from 0x01Dappy

  pub fun main(): {UInt32: DappyContract.Template} {
    return DappyContract.listTemplates()
  }
`;
