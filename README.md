<h1 align="center">purgomalum-filter</h1>
Purgomalum Swear Filter is a web swear-filter service based of an api. The `purgomalum-filter` node package uses this API to easily filter text in Node.JS for your any needs!

NOTE: READ MORE AT [PURGOMALUM.com](https://www.purgomalum.com)

## Install
```sh

npm i purgomalum-filter

```

## Usage
Basic overview of usage

```javascript

const Filter = require("purgomalum-filter");
const filter = new Filter();

filter.clean("Hello a$$")
.then((cleanedText) => {
    console.log(cleanedText); // Will log out "Hello ***"
});

```

You can also use `filter.containsProfanity()` to check if it contains profanity.

```javascript

filter.containsProfanity("Hello friend!")
.then((isBad) => {
    console.log(isBad) // Will log out "false"
})

```

If you perfer not to use promises, you can use `await` `in async` functions.

```javascript

async function() {
    var cleaned = await filter.clean("a$$");
}

```

One of the coolest things about this filter, is that it doesn't always filter out substrings. For example:

```javascript

await filter.containsProfanity("cock") // true
await filter.containsProfanity("cockpit") // false

```


You can use the config object to create a new `Filter`, like this:

```javascript
var config = {
	fill_char: "~",
	add: ["sussybaka"]
}
var filter = new Filter(config)
```


Here is a short explanation about each of the Purgomalum configuration properties (from the official Purgomalum Website)

| Name | Type| Description|
|--|--|--| 
| fill_text | string | Text used to replace any words matching the profanity list. Accepts letters, numbers, underscores (_) tildes (~), exclamation points (!), dashes/hyphens (-), equal signs (=), pipes (\|), single quotes ('), double quotes ("), asterisks (*), open and closed curly brackets ({ }), square brackets ([ ]) and parentheses (). Maximum length of 20 characters. When not used, the default is an asterisk (\*) fill. |
|fill_char|string|Single character used to replace any words matching the profanity list. Fills designated character to length of word replaced. Accepts underscore (_) tilde (~), dash/hyphen (-), equal sign (=), pipe (\|) and asterisk (\*). When not used, the default is an asterisk (\*) fill.|
| add | array | An array of additional words to be added to the profanity list. Accepts letters, numbers, underscores (_) and commas (,). Accepts up to 10 words (or 200 maximum characters in length). The filter is case-insensitive, so the case of your entry is not important. |

> **Note**: You can only have either  `fill_char` or `fill_text`. You cannot have both.




## Author

**Devepation**
# purgomalum-filter
