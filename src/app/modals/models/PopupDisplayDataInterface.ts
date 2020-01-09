export interface PopupDisplayDataInterface {
    displayComponent?: any;
    buttons?: {
        ok?: boolean,
        cancel?: boolean,
        yes?: boolean,
        no?: boolean
    };
    popupData?: any;
    resultEvent?;
}
