import script from "../components/script";

describe("Toast script", () => {

    let spyFind, spyAddListener, mockElement, mockContent;

    beforeAll(() => {
        mockElement = document.createElement('div');
        mockElement.id = "wsm-toast";
        mockContent = document.createElement('p');
        mockElement.append(mockContent);
        spyAddListener = jest.spyOn(document, 'addEventListener');
        spyFind = jest.spyOn(document, 'getElementById');
        spyFind.mockReturnValue(mockElement);
    });

    describe("getComponent", () => {
        it("Finds parent toast", async () => {
            const fn = new script();
            const component = fn.getComponent();
            expect(component).toBe(mockElement);
        });
    })

    describe("initialize", () => {
        it("Finds and attachs onToast behavior to toast parent component", async () => {
            new script();
            expect(spyFind).toHaveBeenCalled();
            expect(spyAddListener).toHaveBeenCalled();
        });
    });

    describe("displayTimed", () => {
        it("Displays the toast for the duration specified in the timeout prop", async () => {
            const classListenerAdd = jest.spyOn(mockElement.classList, 'add');
            const classListenerRemove = jest.spyOn(mockElement.classList, 'remove');
            const fn = new script();
            fn.displayTimed(1);
            const { STATE } = fn.constants;
            await new Promise((r) => setTimeout(r, 10));
            expect(classListenerRemove).toHaveBeenCalledWith(STATE.HIDDEN);
            expect(classListenerAdd).toHaveBeenCalledWith(STATE.HIDDEN);

        });
    });

    describe("appendLink", () => {
        it("Appends a blue link to the url provided at the end of the paragraph", async () => {
            const fn = new script();
            const url = "https://test.co";
            fn.appendLink(url);
            const childLink = mockElement.querySelector('a');
            expect(childLink.getAttribute('href')).toBe(url);
        });
    });

    describe("configure", () => {
        it("Setups the message and color based on severity info", async () => {
            const classListenerAdd = jest.spyOn(mockElement.classList, 'add');
            const fn = new script();
            const { SEVERITY, COLOR_BORDER } = fn.constants;
            const payload = {
                alertSeverity: SEVERITY.INFO,
                message: 'Who let the dogs out', 
                link: 'https://google.com',
                timeout: 1 
            }
            fn.configure(payload);
            expect(mockContent.innerHTML).toBe(payload.message);
            expect(classListenerAdd).toHaveBeenCalledWith(COLOR_BORDER.INFO);
        });

        it("Setups the message and color based on severity error", async () => {
            const classListenerAdd = jest.spyOn(mockElement.classList, 'add');
            const fn = new script();
            const { SEVERITY, COLOR_BORDER } = fn.constants;
            const payload = {
                alertSeverity: SEVERITY.ERROR,
                message: 'Who let the dogs out', 
                link: 'https://google.com',
                timeout: 1 
            }
            fn.configure(payload);
            expect(mockContent.innerHTML).toBe(payload.message);
            expect(classListenerAdd).toHaveBeenCalledWith(COLOR_BORDER.ERROR);
        });

        it("Setups the message and color based on severity success", async () => {
            const classListenerAdd = jest.spyOn(mockElement.classList, 'add');
            const fn = new script();
            const { SEVERITY, COLOR_BORDER } = fn.constants;
            const payload = {
                alertSeverity: SEVERITY.SUCCESS,
                message: 'Who let the dogs out', 
                link: 'https://google.com',
                timeout: 1 
            }
            fn.configure(payload);
            expect(mockContent.innerHTML).toBe(payload.message);
            expect(classListenerAdd).toHaveBeenCalledWith(COLOR_BORDER.SUCCESS);
        });
    });

    describe("showToast", () => {
        it("configures, adds link and times the display of the toast based on payload with link", async () => {
            const classListenerAdd = jest.spyOn(mockElement.classList, 'add');
            const expectedLink = '<a href=\"https://google.com\" target=\"_blank\" class=\"text-blue-500\"> view now</a>';
            const fn = new script();
            const { SEVERITY, COLOR_BORDER } = fn.constants;
            const payload = {
                detail : {
                    alertSeverity: SEVERITY.SUCCESS,
                    message: 'Who let the dogs out', 
                    link: 'https://google.com',
                    timeout: 1 
                }
            }
            fn.showToast(payload);
            expect(mockContent.innerHTML).toBe(`${payload.detail.message}${expectedLink}`);
            expect(classListenerAdd).toHaveBeenCalledWith(COLOR_BORDER.SUCCESS);
        });

        it("configures, adds link and times the display of the toast based on payload without link", async () => {
            const classListenerAdd = jest.spyOn(mockElement.classList, 'add');
            const expectedLink = '';
            const fn = new script();
            const { SEVERITY, COLOR_BORDER } = fn.constants;
            const payload = {
                detail : {
                    alertSeverity: SEVERITY.INFO,
                    message: 'Who let the dogs out',
                    timeout: 1 
                }
            }
            fn.showToast(payload);
            expect(mockContent.innerHTML).toBe(`${payload.detail.message}${expectedLink}`);
            expect(classListenerAdd).toHaveBeenCalledWith(COLOR_BORDER.INFO);
        });
    });
});
