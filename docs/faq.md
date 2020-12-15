# FAQ

## What's Node.js and how do I install it?

Visit [their website](https://nodejs.org/en/) and download and install it. Very straight forward. Otherwise, Google more information related to your system needs.

## Will this harm my computer?

No.

## Have you gotten a card yet?

[Sure did!](https://i.imgur.com/59CRzGq.png)

## Will I get banned from of the stores?

Perhaps, but it's the risk we're willing to take! To help minimize this, take a look at [#1050](https://github.com/jef/streetmerchant/issues/1050).

## I got a problem and need help

File an [issue](https://github.com/jef/streetmerchant/issues/new/choose). I'll do my best to get to you. I work a full time job and this is only a hobby of mine.

## How do I get the latest code?

Run the following commands:

```shell
git pull origin main
npm install
npm run start
```

If you changed the code at all, this will most likely fail. You can clear out your changes by doing:

```shell
git checkout .
git pull origin main
npm install
npm run start
```

You can also to [git-stash](https://git-scm.com/docs/git-stash), but we won't expand on that here.


## Why don't my notifications work?

There is probably an [issue](https://github.com/jef/streetmerchant/issues?q=is%3Aissue+sort%3Aupdated-desc+sound+is%3Aclosed) that has [already](https://github.com/jef/streetmerchant/issues/182) [been](https://github.com/jef/streetmerchant/issues/116) [resolved](https://github.com/jef/streetmerchant/issues/155).

## I'd love to contribute, how do I do that?

Make a [pull request](https://github.com/jef/streetmerchant/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc)! All contributions are welcome.

## How do I add a store?

Here's a little write-up I did: [Adding a store](help/general.md#adding-a-store).

## Why do I have to download all this stuff just to get this bot working?

Well, I would rather you didn't either. See [#11](https://github.com/jef/streetmerchant/issues/11).

## Why does Amazon show an error page (with a picture of an animal) instead of adding to cart or going to the detail page?

This is intended; see [#733](https://github.com/jef/streetmerchant/issues/733). This indicates that the item is out of stock and only available from a third-party seller (often at a markup).

## I'm using streetmerchant in the cloud and X isn't working.

There is _a lot_ of undefined behavior with using streetmerchant in the cloud. Some sites may block IPs from your cloud provider. It is possible that a VPN will help circumvent these problems.
