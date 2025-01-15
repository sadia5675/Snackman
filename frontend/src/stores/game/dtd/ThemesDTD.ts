export interface IThemeDTD {
    ground: string;
    wall: string;
    skybox: string |{
        right:string;
        left: string;
        top: string;
        bottom: string;
        front: string;
        back: string;
    },
    character: {
        snackman:  string | { path: string; scale: number };
        ghost: string | { path: string; scale: number };
    };
}

export interface IThemes {
    [key: string]: IThemeDTD; // der Schlüssel ist der Theme-Name
}