# Morning Routine Generator

## v0.1.1 Features
Generates a schedule which starts at 8:10 AM and runs to 10:00 AM
- It includes these predefined everyday tasks:
   - Put in contacts
   - Swish and Swipe routine (from [the FlyLady method](http://www.flylady.net/d/getting-started/fly-faq/#swish))
   - Clean desk
   - Have breakfast
   - and Start work
 - On every generation, it chooses one introspective activity from this list:
   - Reading
   - Gratitude Journaling
   - Mindful Breathing
   - Affirmations
   - Goal Review
- and one other "free time" activity from this list:
   - Exercise or yoga
   - Learning
   - Connect with others
   - Play with the cat
   - Play video games
   - Watch YouTube
   - Watch Netflix
   - Practice violin
   - Practice a language
- It saves the currently generated schedule to your browser's local storage so a refresh won't wipe out the schedule you've generated

## Future version desired features:
- Allow user to set start and end times
- Allow customizing
  - everyday items
  - introspective items
  - free time items
  - the order of the activities
- Allow changing how much time to spend on each

## To use
Either visit: https://thinkerdreamer.github.io/random-morning-routine/ to use the GitHub Pages-hosted version, or get the code locally and change it how you want it.
This is a [Next.js project](https://nextjs.org/learn/basics/create-nextjs-app/setup), so when you've got the code you can simply use `npm run dev` or `npm run start` to start it.

If you have trouble, check the Next.js link above. Just download the code of this app to your machine and follow the rest of the steps, using this app's code instead of creating a new one with `npx create-next-app@latest nextjs-blog ...`
