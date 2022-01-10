export const CHECK_COLLECTION = `
    import DappyContract from 0x01Dappy

        pub fun main(addr: Address): Bool {
        let ref = getAccount(addr).getCapability<&{DappyContract.CollectionPublic}>(DappyContract.CollectionPublicPath).check()
        return ref
        } 
    `