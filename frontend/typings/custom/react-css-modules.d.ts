import React = __React;

interface ICSSModules {
    (wrappedComponent: React.Component<any, any> | React.StatelessComponent<any>, styles: any): any;
}

declare var CSSModules: ICSSModules;

declare module "react-css-modules" {
    export = CSSModules;
}
