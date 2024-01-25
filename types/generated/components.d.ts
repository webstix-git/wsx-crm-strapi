import type { Schema, Attribute } from '@strapi/strapi';

export interface AddressAddress extends Schema.Component {
  collectionName: 'components_address_addresses';
  info: {
    displayName: 'Address';
    icon: 'pinMap';
  };
  attributes: {
    streetDetails: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    ZIP: Attribute.String;
    country: Attribute.String;
    mapLink: Attribute.Text;
    email: Attribute.Email;
    phone: Attribute.String;
  };
}

export interface AgreementAgreement extends Schema.Component {
  collectionName: 'components_agreement_agreements';
  info: {
    displayName: 'agreement';
    icon: 'thumbUp';
    description: '';
  };
  attributes: {
    agreementName: Attribute.String;
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    active: Attribute.Boolean;
    service: Attribute.Relation<
      'agreement.agreement',
      'oneToOne',
      'api::service.service'
    >;
  };
}

export interface AgreementPaymentHistory extends Schema.Component {
  collectionName: 'components_agreement_payment_histories';
  info: {
    displayName: 'paymentHistory';
    icon: 'cube';
    description: '';
  };
  attributes: {
    transName: Attribute.String;
    amount: Attribute.Decimal;
    transDetail: Attribute.Text;
    service: Attribute.Relation<
      'agreement.payment-history',
      'oneToOne',
      'api::service.service'
    >;
    transDate: Attribute.Date;
    blocks: Attribute.Integer;
    purchasedThrough: Attribute.Enumeration<
      [
        'Pay Now Form',
        'Maintenace Blocks Page',
        'Cheque',
        'Cash',
        'Wire Transfer'
      ]
    >;
  };
}

export interface LoginInfoLoginInfo extends Schema.Component {
  collectionName: 'components_login_info_login_infos';
  info: {
    displayName: 'loginInfo';
    icon: 'user';
    description: '';
  };
  attributes: {
    loginName: Attribute.String;
    loginURL: Attribute.String;
    userName: Attribute.String;
    password: Attribute.String;
    loginType: Attribute.Enumeration<
      [
        'FTP Info',
        'DNS Info',
        'Control Panel Info',
        'SEO Info',
        'Payment Gateway Info',
        'Newsletter Info',
        'CRM Info',
        'GitHub Info',
        'Gitlab Info',
        'Software Info',
        'Vendor Info',
        'Plugin Info',
        'CloudFlare Info',
        'CDN Info',
        'Other Info'
      ]
    >;
    PIN: Attribute.String;
    otherInfo: Attribute.Text;
    twoFAEnabled: Attribute.Boolean;
    twoFAInfo: Attribute.Text;
    serverName: Attribute.String;
    IPAddress: Attribute.String;
    active: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socails_socials';
  info: {
    displayName: 'SocialLinks';
    icon: 'earth';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    URL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address.address': AddressAddress;
      'agreement.agreement': AgreementAgreement;
      'agreement.payment-history': AgreementPaymentHistory;
      'login-info.login-info': LoginInfoLoginInfo;
      'socials.socials': SocialsSocials;
    }
  }
}
