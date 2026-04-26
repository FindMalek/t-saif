# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```

we are going to create a portfolio that's like this
    https://www.samkolder.com/ in nextjs typescript and all of that stuff,
  this
    is going to be very complicated this is why we need to split it into
    multiple phases, so this is why we need to create github issues for this
    project

    okay to explain it, we will create a portfolio for Saif Tarchoun, he is a
    Filmm maker and video grapher also and editor, he has a lot of experience
    and we really like the portfolio i sent you, the layout ui AND
  everything
    that looks about it, so we are going to use shadcn components to create
    that

    we can change the theme of shadcn like we want, so dont customize the
    component with adding extra classnames and shit like that, just edit
    directly the compoenent, but i dont think we will face that, anyways we
    want 3 pages, landing page, work, and contact, make sure the API is
  clean,
    we will use resend for emails so prepare that the backend all of that


    we are also going to use upstash for ratelimiting the form and we are going to host in vercel and
    for env variable pls use t3 oss env vars and make sure eveyrthing is safe and create .env.example 

    we also need to create databse using prisma and postgess the db will have contact
    first name last name email or phone number and message
    make sure we use zod and everything is typesafe please 

    since we are using upstash free tier we need to create a cron job that hits each 4 days using github actions for the /health endpooint that we are going to have it will check how fast our db , check the upstash service and resend too (sends a placeholder email) and placeholder submission in the contact page 

    now let's talk about the ui and layout
    since we agreed on having only 3 pages let's talk about the landing page and starting in the top

    the navigation change Kold to "saif." with the cool font and in the right keep home, work and cotnact
    we also want to have GASP effect from page to page
    use this for the contact button https://magicui.design/docs/components/pulsating-button

    tbh we can do this too for the mobile tho https://magicui.design/docs/components/dock or maybe for both desktop and the mobile and dumb the idea of having header nav, and just put the "saif." being non sticky

i like this https://magicui.design/docs/components/flickering-grid try to integrate it as background
also make sure the full website is ready for both desktop and mobile 
there is this too https://magicui.design/docs/components/interactive-grid-pattern



    now let's talk about the heroseciton in the website i have sent it has a really 


    for the herosection wide video please use this https://magicui.design/docs/components/pixel-image and maybe with this too https://magicui.design/docs/components/backlight

    for CTA maybe use this https://magicui.design/docs/components/warp-background

    this is a cool idea too https://magicui.design/docs/components/magic-card

    after submitting the form use this https://magicui.design/docs/components/confetti

    i think we should use this in the work page maybe ? https://magicui.design/docs/components/blur-fade

    for the herosection text, this is looking cool https://magicui.design/docs/components/typing-animation
this too tbh https://magicui.design/docs/components/line-shadow-text this https://magicui.design/docs/components/text-reveal

for the CTA https://magicui.design/docs/components/number-ticker and this https://magicui.design/docs/components/video-text

we should use this somehere https://magicui.design/docs/components/highlighter

now for the brands just put 5 placeholders 

for the projects in the landing page, when we hover over them they should start playing a preview
and we should have a title for the project, the company and the date and also "link" that uses this https://magicui.design/docs/components/text-3d-flip

for the CTA use the things that i told u about 

his footer looks amazing try to use the same thing

now let's discuss everthing i told you about in here