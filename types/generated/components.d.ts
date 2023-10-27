import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductsfeatureColor extends Schema.Component {
  collectionName: 'components_productsfeature_colors';
  info: {
    displayName: 'color';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    color: Attribute.String;
    price: Attribute.String;
    enable: Attribute.Boolean & Attribute.Required;
  };
}

export interface ProductsfeatureProductSFeature extends Schema.Component {
  collectionName: 'components_productsfeature_product_s_features';
  info: {
    displayName: 'feature';
    icon: 'alien';
    description: '';
  };
  attributes: {
    productFeature: Attribute.Text;
    yearSeason: Attribute.String;
    fabricCare: Attribute.String;
    size: Attribute.Component<'productsfeature.size', true>;
    productCode: Attribute.String;
  };
}

export interface ProductsfeatureSize extends Schema.Component {
  collectionName: 'components_productsfeature_sizes';
  info: {
    displayName: 'size';
  };
  attributes: {
    size: Attribute.String;
    piece: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'productsfeature.color': ProductsfeatureColor;
      'productsfeature.product-s-feature': ProductsfeatureProductSFeature;
      'productsfeature.size': ProductsfeatureSize;
    }
  }
}
