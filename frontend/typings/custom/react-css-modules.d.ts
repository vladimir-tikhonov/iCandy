import React = __React;

interface ICSSModules {
    (wrappedComponent: React.ReactElement<any> | React.StatelessComponent<any>, styles: any): any;
    (styles: any): any;
}

declare var CSSModules: ICSSModules;

declare module "react-css-modules" {
    export = CSSModules;
}
