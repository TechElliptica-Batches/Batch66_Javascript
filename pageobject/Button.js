

export class ButtonPage{

    constructor(page){
        this.page = page;
        this.primaryButton = this.page.getByRole("button",{name : "Primary Button"});
        this.msg = this.page.locator("[id='basicMessage']");
    }

    async clickOnPrimaryButton(){
        await this.primaryButton.hover();
        await this.primaryButton.click();
    }

    async showAndHideTextValidation(expectedText){
        await expect(this.msg).toBeVisible({timeout: 2000});
        const msg = await this.msg.textContent();
        expect(msg).toBe(expectedText);
        await expect(this.msg).toBeHidden({timeout : 5000});
    }

}