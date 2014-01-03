Example REST service using Koa

<strong>Only works with Node.js version higher than 0.11.3</strong>

To start the app a special flag is required: <code>node --harmony-generators ./app.js</code>

The book collection used in the example is available in the <code>sw.json</code> file. The code assumes that the database name is <em>starwars</em> and the collection is <em>books</em> - henceforth to import the JSON file execute the following (alter if necessary):

<code>mongoimport --db starwars --collection books --file sw.json</code>

For futher information check: 