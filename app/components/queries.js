// queries.js


// Consulta para buscar posts por un término de búsqueda
export const SEARCH_POSTS = `
  *[_type == "post" && (title match $SEARCH || categories[]->title match $SEARCH || author->name match $SEARCH) && !(_id in path("drafts.**"))] {
    _id,
    title,
    slug {
      current
    },
    "categories": categories[]->title,
    "authorName": author->name,
    "avatar": author->image.asset->url,
    publishedAt,
    "mainImage": mainImage.asset->url,
    "alt": mainImage.alt,
  }
`;
