# Object Press - React Starter

Object Press API Usage Example

## Content Endpoints

### https://api.objectpress.co/content/get-all

All "posts" for an App can be retrieved via JSON post request.

- app: Requires App ID (string).
- client: Requires Client ID (string).
- limit: Number of posts to request. Default is all posts, not required (integer).
- sort: Sort posts alphabetically. Default is sort by publishDate and not required (boolean).

### https://api.objectpress.co/content/search

All "posts" for an App can also be retrieved individually via JSON post request.

- app: Requires App ID (string).
- post: Requires Post ID (string).
