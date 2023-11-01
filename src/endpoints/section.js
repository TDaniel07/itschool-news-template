import getApiKey from "./apiKey"
//api key-ul este luat dintr-un fisier care nu este partajat pe github din motive de securitate.

export default function getSection(section, nrOfArticles, page)
{
    return `https://content.guardianapis.com/${section}?api-key=${getApiKey()}&show-fields=trailText,thumbnail&page-size=${nrOfArticles}&page=${page}`;
}