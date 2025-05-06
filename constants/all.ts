import entertainment from "./entertainment";
import usNews from "./usnews";
import money from "./money";
import politics from "./politics";

const allArticles = [
    ...entertainment,
    ...money,
    ...politics,
    ...usNews,
] as TArticle[]

export default allArticles;