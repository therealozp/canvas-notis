Canvas Notification

## Why is this a thing

Basically, I am quite baffled that Canvas does not have an option to notify students a couple of days in advance which assignments are due (which, I have missed many TRIVIAL assignments of uploading xxx or literally any other assignments that have a time different from 11:59 PM).

So, as one of the projects in the Summer series, I have decided to create an app that will pull data from the official Canvas API, and notify me whatever assignments I have upcoming.

## But why this thing?

Well, I hope you don't find the two questions redundant but I would consider this a project that helps me get back to the swing of things with NextJS 13 update, which overhauls most of what I have been doing thus far. Also it is a fun way to test my knowledge of APIs and GraphQL stuff. Also it's fun. What are you gonna do.

And yes, I will work on implementing OAuth when I get Canvas to verify that I am a completely legitimate (100%) developer with no ill intentions whatsoever. But until then, this is only available to me because it is against Canvas's ToS to tell users to find their own Auth Token and put it in. Which I heavily advise against anybody doing because there is always risk of compromise. Trust the people at Canvas, they know what they're doing way better than I do.

## Technologies

This website was made with **the latest and greatest NextJS 13**, **Chakra UI** cause it's fast, **Apollo Client and GraphQL**, and the **official Canvas LMS REST API** (which also has graphql, so idk why the misleading name). Check them out:

- [NextJS](https://nextjs.org/)
- [Chakra-UI](https://chakra-ui.com/)
- [Apollo](https://www.apollographql.com/)
- [GraphQL](https://graphql.org/)
- [Canvas LMS API](https://canvas.instructure.com/doc/api/index.html)
