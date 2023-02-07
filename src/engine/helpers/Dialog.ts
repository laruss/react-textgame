import settings from "../settings";
import {store} from "../redux/store";
import {openDialog} from "../redux/slices/systemSlice";

interface DialogInt {
    name: string,
    body: string|null,
    buttons: { [index: string]: string; }|null;
}

const Dialog = ({name, body, buttons}: DialogInt) => ({
    name,
    body,
    buttons: buttons ? buttons : { yes: "1", no: "0" },
    asyncOpenDialog: function () {
        return new Promise((resolve) => {
            store.dispatch(openDialog({name: this.name, body: this.body, buttons: this.buttons}));
            resolve(null);
        })
    },
    open: async function () {
        await this.asyncOpenDialog();
        return new Promise((resolve) => {
            let buttons = document.querySelectorAll(`#${settings.dialog.buttonId}`);
            buttons.forEach((button) => {
                button.addEventListener('click', (event) => {
                    resolve((event.target as HTMLTextAreaElement).getAttribute(settings.dialog.buttonDataPropertyName));
                });
            });
        });
    }
});

export default Dialog;