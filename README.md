Quick start
-----------
```bash
yarn dev
````
Will compile a pdf from mock into `/dist` folder.
This file will be ignored by git.

```bash
yarn build
````
Will bundle the code into a single js file in `/dist` folder that will be used as a dependency in the backend app.
This command should be run after code changes, and resulting dist file should be committed.

Entities
--------
There are two entities in the root of the app. `Sitemap` and `Userflow`.

Mocks
-----
Every entity folder has a `mock.json` file that is taken from backend answer to `/<entity>/:id/export` endpoint.
It is then used in dev script to simulate library call from backend.
You can update them if needed.
***Don't modify them by hand, use backend's answer!***

Formats
-------
Every entity folder has multiple formats that have corresponding file names (pdf, png, csv).


Other scripts
-------------
If you want to build something other than pdf of a sitemap - refer to `package.json`'s scripts section.
Scripts are being composed of next terms:
```bash
yarn dev:<entity>:<format>
```
With format defaulting to pdf.
For example, `yarn dev:sitemap` will compile a pdf of a sitemap and `yarn dev:userflow` will compile a pdf of a userflow.
If you add new formats - don't forget to add scripts to `package.json`.
