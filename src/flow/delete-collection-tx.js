export const DELETE_COLLECTION = `
    import DappyContract from 0x01Dappy

    transaction{
    prepare(acct: AuthAccount)
    {
        let collection <- acct.load<@DappyContract.Collection>(from: DappyContract.CollectionStoragePath)
        ?? panic("Could not load the resource")
        destroy collection
        acct.unlink(DappyContract.CollectionPublicPath)
    }
    }
    `;