import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFooterFields {
    name: EntryFieldTypes.Symbol;
    copyright: EntryFieldTypes.Symbol;
    links?: EntryFieldTypes.Object;
}

export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, "footer">;
export type TypeFooter<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFooterSkeleton, Modifiers, Locales>;

export interface TypeHeaderFields {
    name: EntryFieldTypes.Symbol;
    logoTitle: EntryFieldTypes.Symbol;
    logoUrl: EntryFieldTypes.Symbol;
    links: EntryFieldTypes.Object;
}

export type TypeHeaderSkeleton = EntrySkeletonType<TypeHeaderFields, "header">;
export type TypeHeader<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeaderSkeleton, Modifiers, Locales>;

export interface TypeHeroBannerFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    blurb?: EntryFieldTypes.RichText;
    asset: EntryFieldTypes.AssetLink;
    assetPosition: EntryFieldTypes.Symbol<"left" | "right">;
}

export type TypeHeroBannerSkeleton = EntrySkeletonType<TypeHeroBannerFields, "heroBanner">;
export type TypeHeroBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeroBannerSkeleton, Modifiers, Locales>;

export interface TypePageFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    header: EntryFieldTypes.EntryLink<TypeHeaderSkeleton>;
    template: EntryFieldTypes.EntryLink<TypeTemplateFlexSkeleton>;
    footer: EntryFieldTypes.EntryLink<TypeFooterSkeleton>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export interface TypePostFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    publishDate: EntryFieldTypes.Date;
    category: EntryFieldTypes.Symbol<"Developers" | "Partners" | "Product" | "Strategy">;
    authors: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    body: EntryFieldTypes.RichText;
    mainImage: EntryFieldTypes.AssetLink;
}

export type TypePostSkeleton = EntrySkeletonType<TypePostFields, "post">;
export type TypePost<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePostSkeleton, Modifiers, Locales>;

export interface TypeTemplateFlexFields {
    name: EntryFieldTypes.Symbol;
    blocks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHeroBannerSkeleton>>;
}

export type TypeTemplateFlexSkeleton = EntrySkeletonType<TypeTemplateFlexFields, "templateFlex">;
export type TypeTemplateFlex<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTemplateFlexSkeleton, Modifiers, Locales>;
