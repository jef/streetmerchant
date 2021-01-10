# General

## Adding a store

???+ note
    This is subject to change in the future

In the following examples, I will be using "NewStore" as the store I'm wanting to add.

### Creating a store file

First, create a TypeScript file in `src/store/model`. In this example, I'll create a file named `new-store.ts`. At this point, you can copy and paste any of the other stores and change accordingly.

#### How to grab a container (aka selector)

For the containers, what you'll wanna do is use <kbd>F12</kbd> on the site you want to Inspect and click this button

![image](https://user-images.githubusercontent.com/12074633/100685326-2669da80-334a-11eb-93a9-8ac2c659f5f3.png)

Hover over the item you want and it should give you the context:

![image](https://user-images.githubusercontent.com/12074633/100685310-1e119f80-334a-11eb-91aa-b77b0ff6c2b1.png)

You can also right-click on any website element and select 'Inspect'. That should also give you the same results.

Some people will decide to choose a parent element as it can be unique. Like this case!

I'd rather use `.button.spin-button.prod-ProductCTA--primary.button--primary` instead of `.spin-button-children` as there are probably other elements on the page that are also `.spin-button-children`.

The reason why we use these selectors anyway is to wait for the webpage to load these specific elements, to help eliminate false positives.

For easily getting the selector, you can also copy it by right clicking on the tag, Copy > Copy selector.

![image](https://user-images.githubusercontent.com/12074633/100933096-d2323800-34ba-11eb-8f06-d106f43b7ad3.png)

### Updating the models

You'll now want to add the new store to `src/store/model/index.ts`.

This is what it will look like:

```diff
--- a/src/store/model/index.ts
+++ b/src/store/model/index.ts
@@ -48,6 +48,7 @@ import {MicroCenter} from './microcenter';
 import {Mindfactory} from './mindfactory';
 import {Newegg} from './newegg';
 import {NeweggCa} from './newegg-ca';
+import {NewStore} from './new-store';
 import {Notebooksbilliger} from './notebooksbilliger';
 import {Novatech} from './novatech';
 import {Nvidia} from './nvidia';
@@ -123,6 +124,7 @@ export const storeList = new Map([
 	[Mindfactory.name, Mindfactory],
 	[Newegg.name, Newegg],
 	[NeweggCa.name, NeweggCa],
+	[NewStore.name, NewStore],
 	[Notebooksbilliger.name, Notebooksbilliger],
 	[Novatech.name, Novatech],
 	[Nvidia.name, Nvidia],
```

After that, you're pretty much set. If you plan on adding new models or series, you will have to add them to `src/store/model/store.ts` and `src/config.ts`.

Here's an example:

```diff
--- a/src/store/model/store.ts
+++ b/src/store/model/store.ts
@@ -23,6 +23,7 @@ export type Brand =
 	| 'kfa2'
 	| 'microsoft'
 	| 'msi'
+	| 'new brand'
 	| 'nvidia'
 	| 'palit'
 	| 'pny'
@@ -37,6 +38,7 @@ export type Series =
 	| '3070'
 	| '3080'
 	| '3090'
+	| 'new series'
 	| 'rx6800'
 	| 'rx6800xt'
 	| 'rx6900xt'
@@ -83,6 +85,7 @@ export type Model =
 	| 'ichill x2'
 	| 'ichill x3'
 	| 'ichill x4'
+	| 'new model'
 	| 'nitro+'
 	| 'nitro oc se'
 	| 'nitro oc'
```

```diff
--- a/src/config.ts
+++ b/src/config.ts
@@ -308,6 +308,7 @@ const store = {
        country: envOrString(process.env.COUNTRY, 'usa'),
        maxPrice: {
                series: {
+                       'new series': -1,
                        '3060ti': envOrNumber(process.env.MAX_PRICE_SERIES_3060TI),
                        3070: envOrNumber(process.env.MAX_PRICE_SERIES_3070),
                        3080: envOrNumber(process.env.MAX_PRICE_SERIES_3080),
@@ -337,6 +338,7 @@ const store = {
                };
        }),
        showOnlySeries: envOrArray(process.env.SHOW_ONLY_SERIES, [
+               'new series',
                '3060ti',
                '3070',
                '3080',

```

And voila! You're done! If you'd like to contribute to the project, feel free to create a [Pull Request](https://github.com/jef/streetmerchant/compare)! Don't forget to add the store (and brand, model, and series if you added) to the `README.md`.

???+ tip
    Here's an [example](https://github.com/jef/streetmerchant/commit/af96c5f2e808af7496f3c3299e4cf173105de48b). If you'd like to include a max price, you can add `MAX_PRICE_SERIES_NEW_SERIES` to the above instead of the `-1`.

## Creating a Discord webhook

Take a look at Discord's [Intro to Webhooks](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks), that should get you going.

This is the main portion:

![image](https://user-images.githubusercontent.com/12074633/101225522-a4d2bf00-365f-11eb-8c35-d0f013e561d6.png)

![image](https://user-images.githubusercontent.com/12074633/101225550-b87e2580-365f-11eb-8be6-48b324b37916.png)

Use the full URL that you just copied and set that value to `DISCORD_WEB_HOOK`.
