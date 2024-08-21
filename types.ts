export interface DropdownField {
    type: "dropdown";
    name: string;
    isOpen: boolean;
    props?: {
        nonEditable?: boolean;
        backgroundColor?: string;
    };
}

export interface TextField {
    type: "text";
    name: string;
    isOpen?: boolean;
    props?: {
        nonEditable?: boolean;
        backgroundColor?: string;
    };
}

export interface Template {
    categories: string;
    composition: string;
    variant_id: number;
    product_type: number;
    department_code: number;
    line_code: number;
    title: string;
    description: string;
    // branch: DropdownField;
    color_80: DropdownField
    estilo_zap_lov: string;
    gender: DropdownField | TextField;
    made_in: DropdownField;
    props?: any;
}
