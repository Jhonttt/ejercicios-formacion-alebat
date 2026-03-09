import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsApiImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_components_api_image_galleries';
  info: {
    displayName: 'image gallery';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface ComponentsApiLinksList extends Struct.ComponentSchema {
  collectionName: 'components_components_api_links_lists';
  info: {
    displayName: 'links list';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsApiRichText extends Struct.ComponentSchema {
  collectionName: 'components_components_api_rich_texts';
  info: {
    displayName: 'rich text';
  };
  attributes: {
    description: Schema.Attribute.RichText;
  };
}

export interface InformationTitleDescription extends Struct.ComponentSchema {
  collectionName: 'components_information_title_descriptions';
  info: {
    displayName: 'title/description';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface MoreDetailsClassDetails extends Struct.ComponentSchema {
  collectionName: 'components_more_details_class_details';
  info: {
    displayName: 'Class details';
    icon: 'dashboard';
  };
  attributes: {
    class: Schema.Attribute.Enumeration<['A1', 'B1', 'A2', 'B2']>;
    schedule: Schema.Attribute.Enumeration<['morning', 'afternoon', 'night']>;
  };
}

export interface MoreDetailsEventComponent extends Struct.ComponentSchema {
  collectionName: 'components_more_details_event_components';
  info: {
    displayName: 'Event details';
    icon: 'dashboard';
  };
  attributes: {
    date: Schema.Attribute.Date;
    place: Schema.Attribute.Enumeration<['Madrid', 'Barcelona', 'Valencia']>;
    time: Schema.Attribute.Time;
  };
}

export interface MoreDetailsTeacherDetails extends Struct.ComponentSchema {
  collectionName: 'components_more_details_teacher_details';
  info: {
    displayName: 'Teacher details';
    icon: 'dashboard';
  };
  attributes: {
    experience: Schema.Attribute.String;
    speciality: Schema.Attribute.Enumeration<
      ['maths', 'natures', 'spanish', 'science']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components-api.image-gallery': ComponentsApiImageGallery;
      'components-api.links-list': ComponentsApiLinksList;
      'components-api.rich-text': ComponentsApiRichText;
      'information.title-description': InformationTitleDescription;
      'more-details.class-details': MoreDetailsClassDetails;
      'more-details.event-component': MoreDetailsEventComponent;
      'more-details.teacher-details': MoreDetailsTeacherDetails;
    }
  }
}
