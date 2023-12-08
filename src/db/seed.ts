import * as dotenv from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import * as schema from "./schema"

dotenv.config()
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing")
}

const queryClient = postgres(process.env.DATABASE_URL)
export const db = drizzle(queryClient, { schema })

const aielts = {
  title: "AIELTS",
  slug: "aielts",
  description:
    "AIELTS is a groundbreaking web application designed to aid users in honing their essay writing skills, specifically tailored for those preparing for language proficiency tests such as IELTS. By integrating the advanced capabilities of ChatGPT, AIELTS offers a unique platform where users can not only have their essays evaluated but also engage in mock essay tests. This application provides instant feedback, tips, and guidance, helping users improve their writing skills and boost their confidence before taking the actual test.",
  year: "2023",
  featuredImage: "c5b0f9a4-e6c2-4c87-9dce-8326e1ab93b2",
  demoWebsite: "https://aielts.io/",
  tags: ["ChatGPT", "Nextjs"],
  content: `**Core Features:**

* **Essay Evaluation:** Users can submit their essays and receive immediate, AI-driven feedback on various aspects such as grammar, coherence, vocabulary, and structure.
* **Mock Essay Tests:** AIELTS offers a range of mock essay tests that mimic the format and topics of actual language proficiency exams, giving users a realistic test preparation experience.
* **Personalized Feedback:** Utilizing ChatGPT's capabilities, the application provides personalized feedback to each user, identifying specific areas for improvement and offering constructive advice.
* **Progress Tracking:** Users can track their progress over time, with insights into how their writing skills are evolving and areas where they are consistently improving or need more focus.
* **Interactive Learning Experience:** The application offers an engaging and interactive user experience, encouraging users to practice regularly and learn from their mistakes.
* **Resource Library:** AIELTS includes a resource library with tips, sample essays, and guidelines on writing effective essays for language proficiency tests.
* **User-Friendly Interface:** Designed with simplicity and ease of use in mind, the application caters to users of all technical backgrounds.

**Technical Stack:**

* (Here, detail the specific technologies used in the development of AIELTS, such as programming languages, frameworks, APIs, etc.)`,
  featured: true,
}

const enzo = {
  title: "Enzo Teaster",
  slug: "enzo-teaster",
  description:
    "The Enzo Teaster is a cutting-edge real estate pre-sale project located in the heart of Vancouver, designed to showcase properties through an engaging online platform. Our teaster website operates as a Single Page Application (SPA), providing a seamless and intuitive user experience that guides potential buyers through the offerings with ease and sophistication. Leveraging the power of Next.js, the website is optimized for search engines, ensuring maximum visibility and attracting a broader audience.",
  year: "2023",
  client: "Careston",
  featuredImage: "987edca8-a6ce-454b-a713-97efe4b51e85",
  demoWebsite: "https://liveenzo.com/",
  tags: ["Nextjs", "Mailchimp", "SCSS"],
  content: `## **Single Page Application Design**

Streamlines navigation and speeds up page load times, delivering content without the need to refresh the page.

![enzo-hero-landing](https://hugo-coding.s3.us-west-1.amazonaws.com/xCd1z305_qrvgfg2zjasD.webp "enzo-hero-landing")

## **One-Click Navigation**

A user-centric design allows visitors to effortlessly scroll and register their interest, using just one click and one hand – embodying the client's vision for a clean, direct, and straightforward user journey.

![enzo-scrolling](https://hugo-coding.s3.us-west-1.amazonaws.com/enzoScrolling.gif "enzo-scrolling")

## **Mobile-First Approach**

Ensures the website is fully functional and aesthetically pleasing on mobile devices, catering to the needs of modern homebuyers.`,
  featured: true,
}

const astralRewards = {
  title: "Astral Rewards",
  slug: "astral-rewards",
  description:
    "Astral Rewards is a cutting-edge web application developed by Astral RE Service that revolutionizes the real estate industry's user loyalty experience. This platform offers selected users exclusive benefits, including discounted property listings, special financing options, and early access to pre-sale opportunities. Astral Rewards also keeps users informed with the latest real estate news and market trends. As a Full Stack Developer on the project, my role included planning API routes, handling documentation, and automating testing to ensure a seamless and user-friendly experience. The project's success is evident in its growing user base and its ability to enhance user loyalty within the real estate sector.",
  year: "2023",
  client: "Astral RE Services",
  featuredImage: "944b6fee-243e-48ce-8e3d-93206b352907",
  demoWebsite: "https://liveenzo.com/",
  tags: ["Reactjs.", "CRM (Customer relationship management)"],
  content: `### **1. Calculating referral rewards:**&#xA;To address the varying reward amounts for each referral, we implemented a sophisticated system to calculate and allocate rewards accordingly, ensuring fairness and accuracy in rewarding different users.

1. **2. User activity logging:**
   We developed a robust user activity logging mechanism to track user interactions and engagement within Astral Rewards, enabling us to gather valuable insights and improve the user experience.
2. **3. Presale information updates:**
   Managing diverse media links and types within the presale information required a user-friendly admin page. We successfully designed and implemented a CRUD-enabled admin interface for seamless handling of presale updates.
3. **4. Admin dashboard creation:**
   Our team crafted a comprehensive admin dashboard, empowering administrators to efficiently monitor users, handle events, and manage updates. This dashboard served as a central hub for streamlining administrative tasks effectively.`,
  featured: false,
}

const shop_it = {
  title: "Shop it",
  slug: "shop-it",
  description: `In this project we are using react as frontend frameworks. It included both user and admin side UI Element. 💡 Component are divided based on functionality . ✨ Key idea of designing the system keeping reusablity, lower coupling know more... .

If this repository is helping your ⭐️⭐️⭐️ star ⭐️⭐️⭐️ is the best support for me.

🕐 This repository is the master Repository, It is welcome for any pull request for making the code better 🚀🚀🚀.

Realworld Ecommerce System - Master Repository is the current stable version, and latest feature will be first updated in Frontend and Backend Repository first.`,
  year: "2022",
  featuredImage: "952d39aa-62d3-42bd-8ba3-b0088e5ec62a",
  tags: ["React", "E-commerce"],
  content: `\## Introduction

📝 In this project we are using react as frontend frameworks. It included both user and admin side UI Element.

💡 Component are divided based on functionality .

✨ Key idea of designing the system keeping reusablity, lower coupling \[know more... ]\(#usage).

If this repository is helping your ⭐️⭐️⭐️ star ⭐️⭐️⭐️ is the best support for me.

🕐 This repository is the master Repository, It is welcome for any pull request for making the code better 🚀🚀🚀.

Realworld Ecommerce System - Master Repository is the current stable version, and latest feature will be first updated in Frontend and Backend Repository first. &#x20;

\[🖥️ Frontend ]\(https://github.com/clonglam/shopit-frontend)

\[💾 Backend ]\(https://github.com/clonglam/shopIt-backend)

\## Technology

\- \[ReactJS]\(https://react.dev/) Model Front end JS Framework. we are using React 18

\- \[ExpressJS]\(https://expressjs.com/) Light weight web framework

\- \[Prisma]\(https://www.prisma.io/) TypeScript ORM

\- \[AWS Aurora]\(https://aws.amazon.com/rds/aurora/) A scalable secure Database

\- \[Swagger]\(https://swagger.io/tools/swagger-ui/) A Documentation tools generated by OpenAPI

\- \[EC2]\(https://aws.amazon.com/ec2/) A Secure and resizable compute capacity

\- \[Typescript]\(https://www.typescriptlang.org/) Ensure the type safety

\## Features

💁‍♂️ User authentication

🖥️ Product Catalog

🛒 Product Cart

💵 Secure Payment integration

📈 Amazing Admin dashboard

💽 Data fetch from backend server

\## Included Admin Dashboard

Data Visualization

!\[screenshot of Ecomerce System]\(/resources/adminDashboard.png)

Custom Admin Dashbaord created for CRUD Actions.

!\[screenshot of Ecomerce System]\(/resources/ProductGrids.png)

Custom Admin Dashbaord created entities with react hook form.

!\[screenshot of Ecomerce System]\(/resources/createProduct.png)

More and more feature ...`,
  featured: false,
}
const actorsGallery = {
  title: "Actors Gallery",
  slug: "actors-gallery",
  description: `Actors Gallery is an innovative web application designed specifically for students in the Acting for Global Screen. It serves as a dynamic platform where students can create and manage their own professional profiles, showcasing their talents and experiences in the world of acting.`,
  year: "2022",
  client: "Hong Kong Baptist University",
  featuredImage: "e77b2be0-d46d-480d-99ab-9908e917327b",
  demoWebsite: "https://www.ags-hkbuaf.com/",
  tags: ["Nextjs", "MySQL", "AWS S3"],
  content: `## **Media Uploads**

A key feature of Actors Gallery is the ability for students to upload multimedia content, such as images, video reels, and audio clips, which are essential for showcasing their acting skills and previous work.

![media upload](https://hugo-coding.s3.us-west-1.amazonaws.com/qfamoz7fwhbxT6Zk6-0Z2.webp "media upload")

## **Custom Profile Editing**

Leveraging a custom Content Management System (CMS), students can effortlessly edit and update their profiles. This feature allows them to add personal information, professional experiences, headshots, and any relevant media that highlights their acting skills.

![edit profile](https://hugo-coding.s3.us-west-1.amazonaws.com/rENJ-03EHCvxhstgjGS_8.webp "edit profile")

##

## **User Authentication**

Students can securely log in to their accounts, ensuring their personal and professional information is kept private and secure.

![signinPage](https://hugo-coding.s3.us-west-1.amazonaws.com/iKubmIurGzQx41HFg_Chm.webp "signin Page")

##`,
  featured: false,
}

const main = async () => {
  // await db.delete(schema.)

  const insertedProjects = await db
    .insert(schema.projects)
    .values([aielts, enzo, astralRewards, shop_it, actorsGallery])
    .returning()

  insertedProjects.forEach((project) => {
    console.log(`project ${project.title} is added to the DB.`)
  })

  // const res = await db.query.writingQuestions.findMany()
  // console.log("res", res)
}

main()
