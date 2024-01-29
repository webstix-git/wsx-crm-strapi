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

export interface AddressIndiaAddress extends Schema.Component {
  collectionName: 'components_address_india_addresses';
  info: {
    displayName: 'India Address';
    icon: 'book';
    description: '';
  };
  attributes: {
    streetInfo: Attribute.String;
    streetInfo2: Attribute.String;
    areaName: Attribute.String;
    cityName: Attribute.String;
    state: Attribute.String;
    pinCode: Attribute.String;
    landmark: Attribute.String;
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
    employee: Attribute.Relation<
      'agreement.payment-history',
      'oneToOne',
      'api::employee.employee'
    >;
  };
}

export interface BlocksBlocks extends Schema.Component {
  collectionName: 'components_blocks_blocks';
  info: {
    displayName: 'Blocks';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    jobTitle: Attribute.String;
    jobDetails: Attribute.Text;
    jobDate: Attribute.Date;
    jobType: Attribute.Enumeration<
      [
        'Maintenance',
        'Quote',
        'Issue',
        'Purchase',
        'Website Care',
        'Upgrades',
        'Basecamp',
        'Refund',
        'Bonus'
      ]
    >;
    ticketId: Attribute.String;
    blocksUsed: Attribute.String;
    creditDebit: Attribute.String;
    referenceURL: Attribute.String;
    approvedScheduled: Attribute.Boolean;
    employee: Attribute.Relation<
      'blocks.blocks',
      'oneToOne',
      'api::employee.employee'
    >;
  };
}

export interface EmployeeAttachments extends Schema.Component {
  collectionName: 'components_employee_attachments';
  info: {
    displayName: 'attachments';
    icon: 'walk';
  };
  attributes: {
    uploadName: Attribute.String;
    uploads: Attribute.Media;
  };
}

export interface EmployeeEmergencyContact extends Schema.Component {
  collectionName: 'components_employee_emergency_contacts';
  info: {
    displayName: 'Emergency Contact';
    icon: 'briefcase';
  };
  attributes: {
    contactName: Attribute.String;
    phone: Attribute.String;
    relation: Attribute.String;
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
      'address.india-address': AddressIndiaAddress;
      'agreement.agreement': AgreementAgreement;
      'agreement.payment-history': AgreementPaymentHistory;
      'blocks.blocks': BlocksBlocks;
      'employee.attachments': EmployeeAttachments;
      'employee.emergency-contact': EmployeeEmergencyContact;
      'login-info.login-info': LoginInfoLoginInfo;
      'socials.socials': SocialsSocials;
    }
  }
}
