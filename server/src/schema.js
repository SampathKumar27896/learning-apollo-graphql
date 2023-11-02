/** To create schemas we need Apollo server,
 * GraphQL and GraphQL tag
 *
 * GraphQL provides the core logic for parsing
 * and validating the graphql queries
 * 
 * Apolloserver is the full fledged GraphQL
 * spec complaiance server
 * 
 * GraphQL tag provides GraphQL template literal
 */
const gql = require("graphql-tag");
/**
 * graphql-tag - It's a tagged templated literal for
 * wrapping GraphQL strings, such as the schema definitions
 * This converts the GraphQL stirngs into the format that 
 * Apollo libraries expect when working with operations and schemas
 * and also it enables syntax highlighting
 */
const typeDefinitions = gql`

type Query {
    "Query to get tracks array for the homepage"
    tracksForHomePage: [Track!]!
}
"A track is a group of Modules that teaches about a specific topic"
type Track {
    "The unique identifier for the track"
    id: ID!

    "The title of the track"
    title: String!

    "The Author name of the track"
    author: Author!

    "The illustration to display in track card or track page details"
    thumbnail: String

    "The track's approximate duration in minutes"
    length: Int

    "The number of modules the track contains"
    modulesCount: Int
}

"The Author of a track"
type Author {
    "The unique identifier for the Author"
    id: ID!

    "The name of the Author"
    name: String!

    "The url to show the Author photo"
    photo: String
}

`;

module.exports = typeDefinitions;