/**
 * Prefix a /public asset with the deploy basePath.
 *
 * next/image and next/link apply basePath automatically, but a plain <a href>
 * or <link> does not — those need this helper or they 404 on GitHub Pages.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
