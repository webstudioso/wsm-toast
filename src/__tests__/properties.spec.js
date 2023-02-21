import properties from "../properties"

describe("Toast properties", () => {

    describe("properties", () => {
        it("Has properties defined", async () => {
            expect(properties).toBeTruthy()
            expect(properties.isComponent).toBeTruthy()
            expect(properties.model).toBeTruthy()
        })

        it("isComponent checks for module id", async () => {
            const module = 'wsm-toast'
            process.env.MODULE_ID = module;
            expect(properties.isComponent({id: module})).toBeTruthy();
        });
    })
})
