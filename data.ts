import { Template } from "./types";

export const getProduct = (): Template[] => {
    const products: Template[] = [];

    for (let i = 0; i < 10000; i++) {
        const isVariant = i % 2 === 0;
        const product: Template = {
            categories: isVariant ? "CALZADO>ZAPATILLAS" : "CALZADO>BOTAS",
            composition: isVariant ? "VARIANTE" : "BASE",
            variant_id: i,
            product_type: 3,
            department_code: 4,
            line_code: 2,
            title: isVariant ? `ZAPATILLAS NIKE` : `BOTIN COLORADO CAT HOMBRE`,
            description: isVariant ? "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR" : "",
            color_80: {
                type: "dropdown",
                name: isVariant ? "Acero" : "",
                isOpen: false,
            },
            estilo_zap_lov: isVariant ? "Zapatilla" : "",
            gender: {
                type: "dropdown",
                name: isVariant ? "Unisex" : "Hombre",
                isOpen: false,
                props: isVariant ? { nonEditable: true } : undefined,
            },
            made_in: {
                type: "dropdown",
                name: isVariant ? "Australia" : "",
                isOpen: false,
            },
            props: isVariant ? { backgroundColor: isVariant ? "#ffa5a5" : undefined } : undefined,
        };

        products.push(product);
    }

    return products;
};
