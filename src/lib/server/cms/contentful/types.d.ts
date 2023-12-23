import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeFooterFields {
    name: EntryFields.Symbol;
    copyright: EntryFields.Symbol;
    links?: EntryFields.Object;
}

export type TypeFooter = Entry<TypeFooterFields>;

export interface TypeHeaderFields {
    name: EntryFields.Symbol;
    logoTitle: EntryFields.Symbol;
    logoUrl: EntryFields.Symbol;
    links: EntryFields.Object;
}

export type TypeHeader = Entry<TypeHeaderFields>;

export interface TypeHeroBannerFields {
    name: EntryFields.Symbol;
    title: EntryFields.Symbol;
    blurb?: EntryFields.RichText;
    asset: Asset;
    assetPosition: "left" | "right";
}

export type TypeHeroBanner = Entry<TypeHeroBannerFields>;

export interface TypePageFields {
    name: EntryFields.Symbol;
    title: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    header: Entry<TypeHeaderFields>;
    template: Entry<TypeTemplateFlexFields>;
    footer: Entry<TypeFooterFields>;
}

export type TypePage = Entry<TypePageFields>;

export interface TypePostFields {
    name: EntryFields.Symbol;
    title: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    publishDate: EntryFields.Date;
    category: "Developers" | "Partners" | "Product" | "Strategy";
    authors: EntryFields.Symbol[];
    body: EntryFields.RichText;
    mainImage: Asset;
}

export type TypePost = Entry<TypePostFields>;

export interface TypeTemplateFlexFields {
    name: EntryFields.Symbol;
    blocks: Entry<TypeHeroBannerFields>[];
}

export type TypeTemplateFlex = Entry<TypeTemplateFlexFields>;
