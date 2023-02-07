const settings = {
    icons: {
        size: '50px',
        hoverColor: '#5b5b5b',
        clickedColor: '#949494'
    },
    dialog: {
        buttonId: "dialog-choice-button",
        buttonDataPropertyName: "datatype"
    },
    input: {
        validation: {
            onlyAlphabetic: 'Only alphabetic symbols are allowed',
            onlyNumeric: 'Only numeric symbols are allowed',
            onlyNextSymbols: 'Only next symbols are allowed: ',
            restrictWhiteSpaces: 'Whitespaces are not allowed',
        }
    },
    saveLoadContent: {
        saveDialog: {
            name: "Are you sure?",
            body: "Do you really want to save game to this slot?"
        },
        loadDialog: {
            name: "Are you sure?",
            body: "Do you really want to load game? All unsaved changes will be lost."
        },
        deleteSaveDialog: {
            name: "Are you sure?",
            body: "Do you really want to delete this save slot? All data from it will be erased."
        },
        slots: {
            quantity: 7,
            defaultName: "saveslot"
        },
        buttons: {
            save: "save",
            load: "load",
            delete: "delete",
            download: "download to device",
            rename: "rename saveslot",
            size: "45px",
            upload: "upload from device",
            successMessages: {
                save: "successfully saved",
                load: "successfully loaded",
                delete: "saveslot has been deleted",
                rename: "saveslot has been renamed",
            },
            errorMessages: {
                download: 'It seems like save file is from another game or corrupted 😢',
            }
        }
    },
    restartGameDialog: {
        name: "Are you sure?",
        body: "Do you really want to restart the game? All unsaved changes will be lost."
    },
    image: {
        loadMessage: "Image is loading..."
    },
    sideMenu: {
        buttons: {
            openSideMenu: 'open side menu',
            closeSideMenu: 'close side menu',
            saveGames: "savegames",
            restart: "restart",
            settings: "settings",
            gameIcons: {
                previousPage: "undo",
                nextPage: "redo",
                fullScreen: "full screen"
            }
        }
    },
    app: {
        defaultName: "React TextGame Engine",
        generalErrorText: "Something went wrong 😢, check console for details.",
        version: '0.2.0',
    }
};

export default settings;