import getApiKey from "./apiKey"

export default function getSection(section, nrOfArticles, page)
{
    return `https://content.guardianapis.com/${section}?api-key=${getApiKey()}&show-fields=trailText,thumbnail&page-size=${nrOfArticles}&page=${page}`;
}