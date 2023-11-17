import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductsfeatureAttributes extends Schema.Component {
  collectionName: 'components_productsfeature_attributes';
  info: {
    displayName: 'attributes';
    description: '';
  };
  attributes: {
    brandName: Attribute.String;
    brandDesc: Attribute.String;
    gender: Attribute.String;
    features: Attribute.Component<'productsfeature.product-s-feature'>;
  };
}

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
    enable: Attribute.Boolean & Attribute.DefaultTo<false>;
    size: Attribute.Component<'productsfeature.size', true>;
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

export interface UtilsIconTextUrl extends Schema.Component {
  collectionName: 'components_utils_icon_text_urls';
  info: {
    displayName: 'icon-text-url';
  };
  attributes: {
    text: Attribute.String;
    icon: Attribute.String;
    url: Attribute.String;
  };
}

export interface UtilsIconUrl extends Schema.Component {
  collectionName: 'components_utils_icon_urls';
  info: {
    displayName: 'icon-url';
  };
  attributes: {
    icon: Attribute.String;
    url: Attribute.String;
  };
}

export interface UtilsId extends Schema.Component {
  collectionName: 'components_utils_ids';
  info: {
    displayName: 'id';
  };
  attributes: {
    key: Attribute.Decimal;
  };
}

export interface UtilsImgUrl extends Schema.Component {
  collectionName: 'components_utils_img_urls';
  info: {
    displayName: 'img-url';
  };
  attributes: {
    img: Attribute.Media;
    url: Attribute.String;
  };
}

export interface UtilsImg extends Schema.Component {
  collectionName: 'components_utils_imgs';
  info: {
    displayName: 'img';
  };
  attributes: {
    img: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'productsfeature.attributes': ProductsfeatureAttributes;
      'productsfeature.color': ProductsfeatureColor;
      'productsfeature.product-s-feature': ProductsfeatureProductSFeature;
      'productsfeature.size': ProductsfeatureSize;
      'utils.icon-text-url': UtilsIconTextUrl;
      'utils.icon-url': UtilsIconUrl;
      'utils.id': UtilsId;
      'utils.img-url': UtilsImgUrl;
      'utils.img': UtilsImg;
    }
  }
}
