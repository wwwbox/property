import { Transformer } from './../Transformation/PropertyTransformer';
import { Property } from "./Property";

export interface PropertiesConfiguration {
    properties?: Property[];
    titles?: { [name: string]: string };
    extraProperties?: Property[];
    orderBy?: string[] | ((properties: Property[]) => string[]);
    renderTitle?: {
        [name: string]: (property: Property, autofiyable: any) => any;
    },
    renderValue?: {
        [name: string]: (property: Property, data: any, autofiyable: any) => any;
    },
    transformer? : {
        [name : string] : (autofiyable :any) => Transformer
    }
}