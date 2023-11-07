import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginNavigationAudience extends Schema.CollectionType {
  collectionName: 'audience';
  info: {
    singularName: 'audience';
    pluralName: 'audiences';
    displayName: 'Audience';
    name: 'audience';
  };
  options: {
    increments: true;
    comment: 'Audience';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    key: Attribute.UID<'plugin::navigation.audience', 'name'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::navigation.audience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::navigation.audience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginNavigationNavigation extends Schema.CollectionType {
  collectionName: 'navigations';
  info: {
    singularName: 'navigation';
    pluralName: 'navigations';
    displayName: 'Navigation';
    name: 'navigation';
  };
  options: {
    increments: true;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.Text & Attribute.Required;
    slug: Attribute.UID & Attribute.Required;
    visible: Attribute.Boolean & Attribute.DefaultTo<false>;
    items: Attribute.Relation<
      'plugin::navigation.navigation',
      'oneToMany',
      'plugin::navigation.navigation-item'
    >;
    localizations: Attribute.Relation<
      'plugin::navigation.navigation',
      'oneToMany',
      'plugin::navigation.navigation'
    >;
    localeCode: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::navigation.navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::navigation.navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginNavigationNavigationItem extends Schema.CollectionType {
  collectionName: 'navigations_items';
  info: {
    singularName: 'navigation-item';
    pluralName: 'navigation-items';
    displayName: 'Navigation Item';
    name: 'navigation-item';
  };
  options: {
    increments: true;
    timestamps: true;
    comment: 'Navigation Item';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    title: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    type: Attribute.Enumeration<['INTERNAL', 'EXTERNAL', 'WRAPPER']> &
      Attribute.DefaultTo<'INTERNAL'>;
    path: Attribute.Text;
    externalPath: Attribute.Text;
    uiRouterKey: Attribute.String;
    menuAttached: Attribute.Boolean & Attribute.DefaultTo<false>;
    order: Attribute.Integer & Attribute.DefaultTo<0>;
    collapsed: Attribute.Boolean & Attribute.DefaultTo<false>;
    related: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToOne',
      'plugin::navigation.navigations-items-related'
    >;
    parent: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToOne',
      'plugin::navigation.navigation-item'
    >;
    master: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'manyToOne',
      'plugin::navigation.navigation'
    >;
    audience: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToMany',
      'plugin::navigation.audience'
    >;
    additionalFields: Attribute.JSON & Attribute.DefaultTo<{}>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginNavigationNavigationsItemsRelated
  extends Schema.CollectionType {
  collectionName: 'navigations_items_related';
  info: {
    singularName: 'navigations-items-related';
    pluralName: 'navigations-items-relateds';
    displayName: 'Navigations Items Related';
    name: 'navigations_items_related';
  };
  options: {
    increments: true;
    timestamps: false;
    populateCreatorFields: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    related_id: Attribute.String & Attribute.Required;
    related_type: Attribute.String & Attribute.Required;
    field: Attribute.String & Attribute.Required;
    order: Attribute.Integer & Attribute.Required;
    master: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::navigation.navigations-items-related',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::navigation.navigations-items-related',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlousesBlouses extends Schema.CollectionType {
  collectionName: 'blouse';
  info: {
    singularName: 'blouses';
    pluralName: 'blouse';
    displayName: 'Blouses';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attribute: Attribute.Component<'productsfeature.attributes'>;
    color: Attribute.Component<'productsfeature.color', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blouses.blouses',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blouses.blouses',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlousesJsonBlousesJson extends Schema.SingleType {
  collectionName: 'blouses_jsons';
  info: {
    singularName: 'blouses-json';
    pluralName: 'blouses-jsons';
    displayName: 'BlousesJson';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jsonData: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blouses-json.blouses-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blouses-json.blouses-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCardiganSweaterCardiganSweater
  extends Schema.CollectionType {
  collectionName: 'cardigan_sweaters';
  info: {
    singularName: 'cardigan-sweater';
    pluralName: 'cardigan-sweaters';
    displayName: 'cardiganSweater';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attribute: Attribute.Component<'productsfeature.attributes'>;
    color: Attribute.Component<'productsfeature.color', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cardigan-sweater.cardigan-sweater',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cardigan-sweater.cardigan-sweater',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCardiganSweaterJsonCardiganSweaterJson
  extends Schema.SingleType {
  collectionName: 'cardigan_sweater_jsons';
  info: {
    singularName: 'cardigan-sweater-json';
    pluralName: 'cardigan-sweater-jsons';
    displayName: 'CardiganSweaterJson';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jsonData: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cardigan-sweater-json.cardigan-sweater-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cardigan-sweater-json.cardigan-sweater-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCoatsCoatsCoatsCoats extends Schema.CollectionType {
  collectionName: 'coat_coat';
  info: {
    singularName: 'coats-coats';
    pluralName: 'coat-coat';
    displayName: 'coatsCoats';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attribute: Attribute.Component<'productsfeature.attributes'>;
    color: Attribute.Component<'productsfeature.color', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::coats-coats.coats-coats',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::coats-coats.coats-coats',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDressesDresses extends Schema.CollectionType {
  collectionName: 'dress';
  info: {
    singularName: 'dresses';
    pluralName: 'dress';
    displayName: 'Dresses';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attribute: Attribute.Component<'productsfeature.attributes'>;
    color: Attribute.Component<'productsfeature.color', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dresses.dresses',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dresses.dresses',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    benefitsArea: Attribute.Component<'utils.img'>;
    mobileApp: Attribute.Component<'utils.img-url', true>;
    logo: Attribute.Media;
    telNumber: Attribute.Component<'utils.icon-text-url'>;
    disabilityDesc: Attribute.String;
    disability: Attribute.Component<'utils.icon-text-url'>;
    socialmediaTitle: Attribute.String;
    socialmediaImg: Attribute.Media;
    socialmedia: Attribute.Component<'utils.icon-url', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeHome extends Schema.SingleType {
  collectionName: 'homepage';
  info: {
    singularName: 'home';
    pluralName: 'homepage';
    displayName: 'home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    marketplace1: Attribute.Component<'utils.img-url', true>;
    marketplace2: Attribute.Component<'utils.img-url', true>;
    banner: Attribute.Component<'utils.img-url', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiJacketsJackets extends Schema.CollectionType {
  collectionName: 'jacket';
  info: {
    singularName: 'jackets';
    pluralName: 'jacket';
    displayName: 'Jackets';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attribute: Attribute.Component<'productsfeature.attributes'>;
    color: Attribute.Component<'productsfeature.color', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jackets.jackets',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::jackets.jackets',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJumpersJumpers extends Schema.CollectionType {
  collectionName: 'jumper';
  info: {
    singularName: 'jumpers';
    pluralName: 'jumper';
    displayName: 'Jumpers';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attribute: Attribute.Component<'productsfeature.attributes'>;
    color: Attribute.Component<'productsfeature.color', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jumpers.jumpers',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::jumpers.jumpers',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLeggingsLeggings extends Schema.CollectionType {
  collectionName: 'legging';
  info: {
    singularName: 'leggings';
    pluralName: 'legging';
    displayName: 'Leggings';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attribute: Attribute.Component<'productsfeature.attributes'>;
    color: Attribute.Component<'productsfeature.color', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::leggings.leggings',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::leggings.leggings',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPantsPants extends Schema.CollectionType {
  collectionName: 'pant';
  info: {
    singularName: 'pants';
    pluralName: 'pant';
    displayName: 'pants';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attribute: Attribute.Component<'productsfeature.attributes'>;
    color: Attribute.Component<'productsfeature.color', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pants.pants',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pants.pants',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPantsJsonPantsJson extends Schema.SingleType {
  collectionName: 'pants_jsons';
  info: {
    singularName: 'pants-json';
    pluralName: 'pants-jsons';
    displayName: 'pantsJson';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jsonData: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pants-json.pants-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pants-json.pants-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    color: Attribute.Component<'productsfeature.color', true>;
    feature: Attribute.Component<'productsfeature.product-s-feature'>;
    desc: Attribute.Text;
    jsonData: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShirtsShirts extends Schema.CollectionType {
  collectionName: 'shirt';
  info: {
    singularName: 'shirts';
    pluralName: 'shirt';
    displayName: 'Shirts';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attribute: Attribute.Component<'productsfeature.attributes'>;
    color: Attribute.Component<'productsfeature.color', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shirts.shirts',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shirts.shirts',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSkirtsSkirts extends Schema.CollectionType {
  collectionName: 'skirt';
  info: {
    singularName: 'skirts';
    pluralName: 'skirt';
    displayName: 'Skirts';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attribute: Attribute.Component<'productsfeature.attributes'>;
    color: Attribute.Component<'productsfeature.color', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::skirts.skirts',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::skirts.skirts',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSkirtsJsonSkirtsJson extends Schema.SingleType {
  collectionName: 'skirts_jsons';
  info: {
    singularName: 'skirts-json';
    pluralName: 'skirts-jsons';
    displayName: 'SkirtsJson';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jsonData: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::skirts-json.skirts-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::skirts-json.skirts-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSweatshirtsSweatshirts extends Schema.CollectionType {
  collectionName: 'sweatshirt';
  info: {
    singularName: 'sweatshirts';
    pluralName: 'sweatshirt';
    displayName: 'sweatshirts';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attribute: Attribute.Component<'productsfeature.attributes'>;
    color: Attribute.Component<'productsfeature.color', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sweatshirts.sweatshirts',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sweatshirts.sweatshirts',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSweatshirtsJsonSweatshirtsJson extends Schema.SingleType {
  collectionName: 'sweatshirts_jsons';
  info: {
    singularName: 'sweatshirts-json';
    pluralName: 'sweatshirts-jsons';
    displayName: 'SweatshirtsJson';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jsonData: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sweatshirts-json.sweatshirts-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sweatshirts-json.sweatshirts-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTshirtsTshirts extends Schema.CollectionType {
  collectionName: 'tshirt';
  info: {
    singularName: 'tshirts';
    pluralName: 'tshirt';
    displayName: 'tshirts';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attribute: Attribute.Component<'productsfeature.attributes'>;
    color: Attribute.Component<'productsfeature.color', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tshirts.tshirts',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tshirts.tshirts',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTshirtsJsonTshirtsJson extends Schema.SingleType {
  collectionName: 'tshirts_jsons';
  info: {
    singularName: 'tshirts-json';
    pluralName: 'tshirts-jsons';
    displayName: 'TshirtsJson';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jsonData: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tshirts-json.tshirts-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tshirts-json.tshirts-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::navigation.audience': PluginNavigationAudience;
      'plugin::navigation.navigation': PluginNavigationNavigation;
      'plugin::navigation.navigation-item': PluginNavigationNavigationItem;
      'plugin::navigation.navigations-items-related': PluginNavigationNavigationsItemsRelated;
      'api::blouses.blouses': ApiBlousesBlouses;
      'api::blouses-json.blouses-json': ApiBlousesJsonBlousesJson;
      'api::cardigan-sweater.cardigan-sweater': ApiCardiganSweaterCardiganSweater;
      'api::cardigan-sweater-json.cardigan-sweater-json': ApiCardiganSweaterJsonCardiganSweaterJson;
      'api::coats-coats.coats-coats': ApiCoatsCoatsCoatsCoats;
      'api::dresses.dresses': ApiDressesDresses;
      'api::footer.footer': ApiFooterFooter;
      'api::home.home': ApiHomeHome;
      'api::jackets.jackets': ApiJacketsJackets;
      'api::jumpers.jumpers': ApiJumpersJumpers;
      'api::leggings.leggings': ApiLeggingsLeggings;
      'api::pants.pants': ApiPantsPants;
      'api::pants-json.pants-json': ApiPantsJsonPantsJson;
      'api::product.product': ApiProductProduct;
      'api::shirts.shirts': ApiShirtsShirts;
      'api::skirts.skirts': ApiSkirtsSkirts;
      'api::skirts-json.skirts-json': ApiSkirtsJsonSkirtsJson;
      'api::sweatshirts.sweatshirts': ApiSweatshirtsSweatshirts;
      'api::sweatshirts-json.sweatshirts-json': ApiSweatshirtsJsonSweatshirtsJson;
      'api::tshirts.tshirts': ApiTshirtsTshirts;
      'api::tshirts-json.tshirts-json': ApiTshirtsJsonTshirtsJson;
    }
  }
}
