import block from "../components/block"

describe("Toast block", () => {

    describe("block", () => {
        it("Has id, label, category and content set", async () => {
            expect(block.id).toEqual(`section-${process.env.MODULE_ID}`)
            expect(block.label).toBeTruthy()
            expect(block.category).toEqual('Notifications')
            expect(block.content).toBeTruthy()
        })
    })
})
