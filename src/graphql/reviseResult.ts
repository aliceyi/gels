const customDefs = `
    type ReviseResult {
        id: Int
        affectedRows: Int
        status: Int
        message: String
    }
`

const customResolvers = {}

export { customDefs, customResolvers }