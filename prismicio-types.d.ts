// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type FooterDocumentDataSlicesSlice = SocialsSlice;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Title field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Copyright field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copyright
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright: prismic.KeyTextField;

  /**
   * Link design field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_design
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_design: prismic.LinkField;

  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;

type NavigationDocumentDataSlicesSlice = NavigationItemSlice;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Name field in *Navigation*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: NAme of the navigation list
   * - **API ID Path**: navigation.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | SigninFormSlice
  | LoginFormSlice
  | GraphicBlocSlice
  | BentoGridSlice
  | TrustedBySlice
  | HeroSectionSlice
  | AlternateGridSlice
  | ImageBlockSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type TagDocumentDataSlicesSlice = HeroSectionSlice;

/**
 * Content for Tag documents
 */
interface TagDocumentData {
  /**
   * Status field in *Tag*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tag.status
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  status: prismic.KeyTextField;

  /**
   * Text field in *Tag*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tag.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Slice Zone field in *Tag*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: tag.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<TagDocumentDataSlicesSlice>;
}

/**
 * Tag document from Prismic
 *
 * - **API ID**: `tag`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TagDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<TagDocumentData>, "tag", Lang>;

export type AllDocumentTypes =
  | FooterDocument
  | NavigationDocument
  | PageDocument
  | TagDocument;

/**
 * Item in *AlternateGrid → Default → Primary → items*
 */
export interface AlternateGridSliceDefaultPrimaryItemsItem {
  /**
   * title field in *AlternateGrid → Default → Primary → items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.default.primary.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid → Default → Primary → items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.default.primary.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Item in *AlternateGrid → Image Right → Primary → items*
 */
export interface AlternateGridSliceImageRightPrimaryItemsItem {
  /**
   * title field in *AlternateGrid → Image Right → Primary → items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.imageRight.primary.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid → Image Right → Primary → items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.imageRight.primary.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *AlternateGrid → Default → Primary*
 */
export interface AlternateGridSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *AlternateGrid → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: alternate_grid.default.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *AlternateGrid → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *AlternateGrid → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * items field in *AlternateGrid → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<
    Simplify<AlternateGridSliceDefaultPrimaryItemsItem>
  >;
}

/**
 * Default variation for AlternateGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AlternateGridSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *AlternateGrid → Image Right → Primary*
 */
export interface AlternateGridSliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *AlternateGrid → Image Right → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: alternate_grid.imageRight.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *AlternateGrid → Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.imageRight.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid → Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.imageRight.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *AlternateGrid → Image Right → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.imageRight.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * items field in *AlternateGrid → Image Right → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.imageRight.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<
    Simplify<AlternateGridSliceImageRightPrimaryItemsItem>
  >;
}

/**
 * Image Right variation for AlternateGrid Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGridSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<AlternateGridSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *AlternateGrid*
 */
type AlternateGridSliceVariation =
  | AlternateGridSliceDefault
  | AlternateGridSliceImageRight;

/**
 * AlternateGrid Shared Slice
 *
 * - **API ID**: `alternate_grid`
 * - **Description**: AlternateGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGridSlice = prismic.SharedSlice<
  "alternate_grid",
  AlternateGridSliceVariation
>;

/**
 * Item in *BentoGrid → Default → Primary → BentoBloc*
 */
export interface BentoGridSliceDefaultPrimaryBentoblocItem {
  /**
   * Title field in *BentoGrid → Default → Primary → BentoBloc*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento_grid.default.primary.bentobloc[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Text field in *BentoGrid → Default → Primary → BentoBloc*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento_grid.default.primary.bentobloc[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *BentoGrid → Default → Primary → BentoBloc*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bento_grid.default.primary.bentobloc[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * id_bloc field in *BentoGrid → Default → Primary → BentoBloc*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento_grid.default.primary.bentobloc[].id_bloc
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  id_bloc: prismic.KeyTextField;
}

/**
 * Primary content in *BentoGrid → Default → Primary*
 */
export interface BentoGridSliceDefaultPrimary {
  /**
   * Title field in *BentoGrid → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento_grid.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * BentoBloc field in *BentoGrid → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: bento_grid.default.primary.bentobloc[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  bentobloc: prismic.GroupField<
    Simplify<BentoGridSliceDefaultPrimaryBentoblocItem>
  >;
}

/**
 * Default variation for BentoGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BentoGridSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BentoGrid*
 */
type BentoGridSliceVariation = BentoGridSliceDefault;

/**
 * BentoGrid Shared Slice
 *
 * - **API ID**: `bento_grid`
 * - **Description**: BentoGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoGridSlice = prismic.SharedSlice<
  "bento_grid",
  BentoGridSliceVariation
>;

/**
 * Primary content in *CustomerBrand → Default → Primary*
 */
export interface CustomerBrandSliceDefaultPrimary {
  /**
   * Logo field in *CustomerBrand → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_brand.default.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * svg field in *CustomerBrand → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_brand.default.primary.svg
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  svg: prismic.RichTextField;
}

/**
 * Default variation for CustomerBrand Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerBrandSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CustomerBrandSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CustomerBrand*
 */
type CustomerBrandSliceVariation = CustomerBrandSliceDefault;

/**
 * CustomerBrand Shared Slice
 *
 * - **API ID**: `customer_brand`
 * - **Description**: CustomerBrand
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerBrandSlice = prismic.SharedSlice<
  "customer_brand",
  CustomerBrandSliceVariation
>;

/**
 * Item in *GraphicBloc → Default → Primary → Images_first_slide*
 */
export interface GraphicBlocSliceDefaultPrimaryImagesItem {
  /**
   * image field in *GraphicBloc → Default → Primary → Images_first_slide*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: graphic_bloc.default.primary.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * image id field in *GraphicBloc → Default → Primary → Images_first_slide*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: graphic_bloc.default.primary.images[].image_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  image_id: prismic.KeyTextField;
}

/**
 * Item in *GraphicBloc → Default → Primary → images_second_slide*
 */
export interface GraphicBlocSliceDefaultPrimaryImagesSecondSlideItem {
  /**
   * image field in *GraphicBloc → Default → Primary → images_second_slide*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: graphic_bloc.default.primary.images_second_slide[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * image id field in *GraphicBloc → Default → Primary → images_second_slide*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: graphic_bloc.default.primary.images_second_slide[].image_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  image_id: prismic.KeyTextField;
}

/**
 * Primary content in *GraphicBloc → Default → Primary*
 */
export interface GraphicBlocSliceDefaultPrimary {
  /**
   * Title field in *GraphicBloc → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: graphic_bloc.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Text field in *GraphicBloc → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: graphic_bloc.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Button field in *GraphicBloc → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: graphic_bloc.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField;

  /**
   * Images_first_slide field in *GraphicBloc → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: graphic_bloc.default.primary.images[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<
    Simplify<GraphicBlocSliceDefaultPrimaryImagesItem>
  >;

  /**
   * images_second_slide field in *GraphicBloc → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: graphic_bloc.default.primary.images_second_slide[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images_second_slide: prismic.GroupField<
    Simplify<GraphicBlocSliceDefaultPrimaryImagesSecondSlideItem>
  >;
}

/**
 * Default variation for GraphicBloc Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GraphicBlocSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GraphicBlocSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *GraphicBloc*
 */
type GraphicBlocSliceVariation = GraphicBlocSliceDefault;

/**
 * GraphicBloc Shared Slice
 *
 * - **API ID**: `graphic_bloc`
 * - **Description**: GraphicBloc
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GraphicBlocSlice = prismic.SharedSlice<
  "graphic_bloc",
  GraphicBlocSliceVariation
>;

/**
 * Primary content in *HeroSection → Default → Primary*
 */
export interface HeroSectionSliceDefaultPrimary {
  /**
   * Tag field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag: prismic.KeyTextField;

  /**
   * Tag status field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.tag_status
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag_status: prismic.KeyTextField;

  /**
   * Titre field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.titre
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titre: prismic.KeyTextField;

  /**
   * Custom title field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.custom_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  custom_title: prismic.RichTextField;

  /**
   * Text field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Image card field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.image_card
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_card: prismic.ImageField<never>;

  /**
   * Image spotify field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.image_spotify
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_spotify: prismic.ImageField<never>;
}

/**
 * Default variation for HeroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroSection*
 */
type HeroSectionSliceVariation = HeroSectionSliceDefault;

/**
 * HeroSection Shared Slice
 *
 * - **API ID**: `hero_section`
 * - **Description**: HeroSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSlice = prismic.SharedSlice<
  "hero_section",
  HeroSectionSliceVariation
>;

/**
 * Primary content in *ImageBlock → Default → Primary*
 */
export interface ImageBlockSliceDefaultPrimary {
  /**
   * Image field in *ImageBlock → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_block.default.primary.imageBlock
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imageBlock: prismic.ImageField<never>;
}

/**
 * Default variation for ImageBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageBlock*
 */
type ImageBlockSliceVariation = ImageBlockSliceDefault;

/**
 * ImageBlock Shared Slice
 *
 * - **API ID**: `image_block`
 * - **Description**: ImageBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSlice = prismic.SharedSlice<
  "image_block",
  ImageBlockSliceVariation
>;

/**
 * Primary content in *LoginForm → Default → Primary*
 */
export interface LoginFormSliceDefaultPrimary {
  /**
   * Title field in *LoginForm → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: login_form.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Default variation for LoginForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LoginFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LoginFormSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *LoginForm*
 */
type LoginFormSliceVariation = LoginFormSliceDefault;

/**
 * LoginForm Shared Slice
 *
 * - **API ID**: `login_form`
 * - **Description**: LoginForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LoginFormSlice = prismic.SharedSlice<
  "login_form",
  LoginFormSliceVariation
>;

/**
 * Primary content in *NavigationItem → Default → Primary*
 */
export interface NavigationItemSliceDefaultPrimary {
  /**
   * Link field in *NavigationItem → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Child Link field in *NavigationItem → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for the child item
   * - **API ID Path**: navigation_item.default.primary.child_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  child_link: prismic.LinkField;
}

/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationItemSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NavigationItem*
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;

/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: NavigationItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSlice = prismic.SharedSlice<
  "navigation_item",
  NavigationItemSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *SigninForm → Default → Primary*
 */
export interface SigninFormSliceDefaultPrimary {
  /**
   * Title field in *SigninForm → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: signin_form.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Default variation for SigninForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SigninFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SigninFormSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SigninForm*
 */
type SigninFormSliceVariation = SigninFormSliceDefault;

/**
 * SigninForm Shared Slice
 *
 * - **API ID**: `signin_form`
 * - **Description**: SigninForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SigninFormSlice = prismic.SharedSlice<
  "signin_form",
  SigninFormSliceVariation
>;

/**
 * Item in *Socials → Default → Primary → Social*
 */
export interface SocialsSliceDefaultPrimarySocialItem {
  /**
   * social_id field in *Socials → Default → Primary → Social*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: socials.default.primary.social[].social_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  social_id: prismic.KeyTextField;

  /**
   * link field in *Socials → Default → Primary → Social*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: socials.default.primary.social[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

/**
 * Primary content in *Socials → Default → Primary*
 */
export interface SocialsSliceDefaultPrimary {
  /**
   * Social field in *Socials → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: socials.default.primary.social[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social: prismic.GroupField<Simplify<SocialsSliceDefaultPrimarySocialItem>>;
}

/**
 * Default variation for Socials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SocialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SocialsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Socials*
 */
type SocialsSliceVariation = SocialsSliceDefault;

/**
 * Socials Shared Slice
 *
 * - **API ID**: `socials`
 * - **Description**: Socials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SocialsSlice = prismic.SharedSlice<
  "socials",
  SocialsSliceVariation
>;

/**
 * Item in *TrustedBy → Default → Primary → Logo*
 */
export interface TrustedBySliceDefaultPrimaryLogoItem {
  /**
   * image field in *TrustedBy → Default → Primary → Logo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: trusted_by.default.primary.logo[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *TrustedBy → Default → Primary*
 */
export interface TrustedBySliceDefaultPrimary {
  /**
   * Text field in *TrustedBy → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trusted_by.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Logo field in *TrustedBy → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: trusted_by.default.primary.logo[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  logo: prismic.GroupField<Simplify<TrustedBySliceDefaultPrimaryLogoItem>>;
}

/**
 * Default variation for TrustedBy Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrustedBySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TrustedBySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TrustedBy*
 */
type TrustedBySliceVariation = TrustedBySliceDefault;

/**
 * TrustedBy Shared Slice
 *
 * - **API ID**: `trusted_by`
 * - **Description**: TrustedBy
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrustedBySlice = prismic.SharedSlice<
  "trusted_by",
  TrustedBySliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      TagDocument,
      TagDocumentData,
      TagDocumentDataSlicesSlice,
      AllDocumentTypes,
      AlternateGridSlice,
      AlternateGridSliceDefaultPrimaryItemsItem,
      AlternateGridSliceDefaultPrimary,
      AlternateGridSliceImageRightPrimaryItemsItem,
      AlternateGridSliceImageRightPrimary,
      AlternateGridSliceVariation,
      AlternateGridSliceDefault,
      AlternateGridSliceImageRight,
      BentoGridSlice,
      BentoGridSliceDefaultPrimaryBentoblocItem,
      BentoGridSliceDefaultPrimary,
      BentoGridSliceVariation,
      BentoGridSliceDefault,
      CustomerBrandSlice,
      CustomerBrandSliceDefaultPrimary,
      CustomerBrandSliceVariation,
      CustomerBrandSliceDefault,
      GraphicBlocSlice,
      GraphicBlocSliceDefaultPrimaryImagesItem,
      GraphicBlocSliceDefaultPrimaryImagesSecondSlideItem,
      GraphicBlocSliceDefaultPrimary,
      GraphicBlocSliceVariation,
      GraphicBlocSliceDefault,
      HeroSectionSlice,
      HeroSectionSliceDefaultPrimary,
      HeroSectionSliceVariation,
      HeroSectionSliceDefault,
      ImageBlockSlice,
      ImageBlockSliceDefaultPrimary,
      ImageBlockSliceVariation,
      ImageBlockSliceDefault,
      LoginFormSlice,
      LoginFormSliceDefaultPrimary,
      LoginFormSliceVariation,
      LoginFormSliceDefault,
      NavigationItemSlice,
      NavigationItemSliceDefaultPrimary,
      NavigationItemSliceVariation,
      NavigationItemSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      SigninFormSlice,
      SigninFormSliceDefaultPrimary,
      SigninFormSliceVariation,
      SigninFormSliceDefault,
      SocialsSlice,
      SocialsSliceDefaultPrimarySocialItem,
      SocialsSliceDefaultPrimary,
      SocialsSliceVariation,
      SocialsSliceDefault,
      TrustedBySlice,
      TrustedBySliceDefaultPrimaryLogoItem,
      TrustedBySliceDefaultPrimary,
      TrustedBySliceVariation,
      TrustedBySliceDefault,
    };
  }
}
