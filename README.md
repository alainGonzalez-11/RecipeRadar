# RecipeRadar

## Objective

Develop a web application for the management of cooking recipes with search options by ingredients, time of preparation, and dish type, among others, is to provide a user-friendly platform for individuals who enjoy cooking to discover new recipes, save their favorite recipes, and organize their cooking activities efficiently. The application aims to streamline the recipe search process, facilitate the meal planning process, and improve the overall cooking experience for the user.

## Project Description
This project is part of the Computer Science Kata for Devf, it consists in creating an application using HTML, CSS and JS that works as a product catalog and includes search and filtering features according to user selection.

### Examples
- Pokedex.
- Movie catalog.
- Superhero catalog.
- Register form.
- Medical appointment calendar.
- Youtube clon.
- Product (drugstore, supermarket, library, etc.) catalog.

### Required functionalities
- [ ] Use web technologies to build a website that sows a list of products or a product register which shows whatever has been registered.
- [X] Show at least 3 values for each product and it's image.
- [ ] Use form elements to filter the data shown in the screen.
- [X] Create the views dinamically using JS.
- [X] Use GRID/Flexbox, materialize or Bootstrap.
- [X] Add a menu and a footer.
- [X] Use Git, conventional commits and atomic commits.
- [ ] Apply good practices for variable reach.

### Optional functionalities
- [X] Get the info from an array, localstorage or an API/JSON.
- [ ] Navigation to other pages (Detail, contact, etc.)
- [ ] Use githubpages.
- [X] Use constants for value comparison and understandable names for variables and functions.
- [X] Make a part of the functionality using JS and replicate it with ES6.

### Disclaimer
- To make the project more realistic, ChatGPT was used to answer the requirement questionnarie simulating that Andrew Rea (from Binging with Babish) and Alex (from the french guy cooking youtube channel) want to hire someone to build them a web page where they want to publish recepies where the user can search by ingredients, prepping time, kind of dish, etc. Includea section with recommendations according to user preferences.
- The recipes used in this project were gotten from Kaggle's "Food.com - Recipes and Reviews" dataset, which cointains over 500,000 recipes. To make it mor manageable in the first stage the data was converted to a JSON and truncated to 10,000 recipes; you can find the dataset in: https://www.kaggle.com/datasets/irkaal/foodcom-recipes-and-reviews?resource=download


## Gathering of requirements

### Questionnarie

 1. What inspired you to create this web application? What are your goals for it?

> Andrew Rea: As someone who loves cooking and has a passion for sharing recipes with others, I wanted to create a platform that would allow me to share my recipes in an organized and user-friendly way. I have a large following on YouTube and social media, and I wanted to provide my audience with a way to **easily access my recipes and find exactly what they're looking for.** My goal for this web application is to provide a *seamless user experience* that allows my fans to **search for recipes based on their preferences, including ingredients, prepping time, kind of dish, and more.**

> Alex: As a professional chef and content creator, I'm always looking for ways to share my recipes and culinary knowledge with a wider audience. I believe that food is one of the most universal forms of cultural expression, and I'm passionate about helping people explore new cuisines and flavors. My goal for this web application is to create a **hub for food enthusiasts where they can easily find and discover new recipes, and also receive personalized recommendations based on their preferences.** I believe that this platform will help me connect with a wider audience and share my love of cooking with more people around the world.

 2. What are the core features you would like to see in the application?

> Andrew Rea: Some of the core features I would like to see in the application include a **search function that allows users to filter recipes by ingredients, prepping time, kind of dish, and other relevant criteria.** I also want to have a **recipe page that includes a list of ingredients, step-by-step instructions, and photos or videos** to help users follow along. Additionally, I would like to have a **feature that allows users to save their favorite recipes for future reference and share them with others.**

> Alex: For me, the core features of this application would include a **recommendation engine that suggests recipes to users based on their preferences and past interactions** with the platform. I also want to have a **feature that allows users to rate and review recipes**, which can help other users find the best recipes and provide feedback to the creators. In addition, I would like to have a **section that showcases seasonal and trending recipes**, as well as a feature that allows users to **customize their own recipe collections** and share them with others. Overall, I want this *platform to be dynamic, interactive, and personalized to each user's preferences*.

 3. What is the target audience for this application? Are there any specific user groups you want to cater to?

>Andrew Rea: The target audience for this application is food enthusiasts, amateur cooks, and anyone looking to discover new recipes and culinary ideas. I want this *platform to be accessible to anyone, regardless of their cooking experience or skill level.* However, I believe that my existing fan base, which consists of people who enjoy cooking and are familiar with my work, will be the primary audience for this application.

>Alex: I agree with Andrew that the target audience for this application is food enthusiasts and anyone who is interested in exploring new cuisines and flavors. However, I also want to *cater to more specific user groups, such as people with dietary restrictions or those who are looking for healthier or more sustainable food options.* I believe that by incorporating **features that allow users to filter recipes based on specific criteria, such as gluten-free, vegetarian, or low-carb,** we can make this platform more accessible to a wider range of users.

 4. Can you provide some examples of existing web applications in this space that you admire or would like to emulate?

> Andrew Rea: One web application that I admire in this space is Epicurious. They have a vast collection of recipes, a great search function, and they **provide cooking tips** and videos as well. I also like that they have a community section where users can share their own recipes and rate and review others. Another application that I like is Tasty, which has a *clean and visually appealing interface* and provides step-by-step video instructions for many of their recipes.

> Alex: I agree with Andrew about Epicurious and Tasty, and I would also add Yummly to the list. Yummly has a powerful search function that allows users to filter recipes based on dietary restrictions, cooking time, and other factors, and they provide personalized recipe recommendations based on the user's preferences. I also like that they provide **nutritional information for many of their recipes,** which can be useful for people who are trying to maintain a healthy diet. Another application that I admire is Cookpad, which has a global community of users who share their own recipes and cooking tips. I like that they have a strong focus on community and **user-generated content.**

 5. How important is the search functionality for your application? What kind of search parameters do you want to offer your users?

> Andrew Rea: The **search functionality** is a critical feature of this application as it allows users to quickly and easily find the recipes they are looking for. I want to offer users a variety of **search parameters, including ingredients, cuisine type, meal type, cooking time, dietary restrictions, and difficulty level.** I also want to provide users with the ability to save their favorite search parameters and use them to create personalized collections of recipes that meet their unique preferences.

> Alex: I agree with Andrew that search functionality is essential for this application. I think it's important to offer users the ability to search for recipes based on specific ingredients or dietary restrictions, such as vegan or gluten-free. Additionally, I want to provide users with the ability to search for recipes based on their cooking skills, such as **beginner, intermediate, or advanced.** I also think it would be useful to have a feature that allows users to search for recipes based on the equipment they have in their kitchen, such as a slow cooker or a pressure cooker. Overall, I want to provide users with a wide range of search parameters that make it easy for them to find the recipes that fit their needs and preferences.

 6. Are there any specific requirements around recipe categorization or filtering that you would like to see in the application?

> Andrew Rea: Yes, I think it's important to have a robust recipe categorization and filtering system that makes it easy for users to find the recipes they are looking for. I want to provide users with the ability to filter recipes by multiple criteria, such as ingredients, cuisine type, meal type, cooking time, and difficulty level. Additionally, I want to have a system in place that allows users to rate and review recipes, which can help other users find the best recipes and provide feedback to the creators. I also want to provide users with the ability to create their own recipe collections and share them with others, which can help build a strong community of food enthusiasts on the platform.

> Alex: I agree with Andrew that a robust recipe categorization and filtering system is important for this application. In addition to the criteria that Andrew mentioned, I would also like to include **filtering options for seasonality and sustainability.** For example, users could filter recipes by ingredients that are in season in their region, or by recipes that use sustainable ingredients or cooking methods. I believe that these types of filtering options can help users make more informed and conscious food choices, while also promoting a more sustainable and ethical food system.

 7. How would you like to handle the addition of new recipes to the application? Would you like to have a moderation process in place?

> Andrew Rea: Yes, I think it's important to have a **moderation process in place for new recipes that are added to the application.** We want to ensure that all the recipes on the platform are high quality and meet our standards for accuracy, clarity, and originality. Therefore, we would like to h**ave a team of moderators who review all new recipe submissions** and ensure that they meet our criteria before they are published on the platform. We also want to give users the ability to **flag inappropriate or inaccurate recipes** so that our moderators can review them and take action if necessary.

> Alex: I agree with Andrew that a moderation process is important for ensuring the quality and accuracy of the recipes on the platform. In addition to the moderation process, I would also like to have a s**ystem in place that allows users to provide feedback on recipes and suggest improvements or modifications.** This can help to create a collaborative and iterative process for recipe development and can also foster a sense of community among users. Additionally, **we can use this feedback to make updates to the recipes and improve their quality over time.**

 8. Do you have any specific preferences or requirements for how the user interface should look and feel?

> Andrew Rea: For the user interface, I want to prioritize *simplicity, ease of use, and visual appeal.* The design should be clean and intuitive, with a *clear hierarchy of information and easy navigation.* I want to ensure that users can easily find what they are looking for and that the interface does not feel cluttered or overwhelming. Additionally, I want to use *high-quality images and videos* to showcase the recipes and make the platform more visually engaging.

> Alex: I agree with Andrew that simplicity and ease of use are important for the user interface. In addition to these factors, I think it's important to have a *user interface that feels modern, sleek, and professional*. The *typography, color scheme, and overall design should be consistent and cohesive across the platform.* I also want to ensure that the user interface is *responsive and mobile-friendly*, as many users will be accessing the platform from their smartphones or tablets. Overall, I want the user interface to feel welcoming, inviting, and user-friendly, with a strong emphasis on the food and the recipes themselves.

 9.  How important is it for the application to be mobile-responsive? What are your expectations for mobile users?

> Andrew Rea: I think it's incredibly important for the application to be mobile-responsive, as many users will be accessing the platform from their smartphones or tablets. In fact, I expect that a significant portion of our user base will be mobile users, so it's essential that the platform is optimized for these devices. I want the mobile interface to be just as clean, intuitive, and visually appealing as the desktop interface, with easy navigation, clear information hierarchy, and high-quality images and videos.

> Alex: I completely agree with Andrew that mobile responsiveness is essential for this application. As a mobile user myself, I have high expectations for mobile interfaces and expect the platform to be optimized for my device. This includes having a responsive design that adapts to different screen sizes and orientations, as well as having *touch-friendly controls and intuitive navigation.* I also expect the mobile interface to load quickly and have a smooth and seamless user experience. Overall, I want the mobile interface to be just as engaging and user-friendly as the desktop interface.

 10. Would you like to include any social media integration features in the application?

> Andrew Rea: Yes, I think s**ocial media integration could be a great feature** for the application. It could allow users to share their favorite recipes with their friends and followers on social media platforms like **Facebook, Twitter, and Instagram.** We could also u**se social media integration to allow users to log in or sign up for the platform using their existing social media accounts**, which could make the onboarding process more streamlined and user-friendly. Additionally, we could use social media to promote the platform and build a community around the recipes and content that we're publishing.

> Alex: I agree with Andrew that social media integration could be a valuable addition to the application. In addition to the features that Andrew mentioned, we could also use social media to **collect user-generated content, such as photos and videos of users cooking and enjoying the recipes on the platform.** This could help to create a sense of community and engagement among our users and could also provide us with valuable feedback and insights into how users are interacting with the platform. Overall, I think social media integration could be a powerful tool for building our brand and connecting with our users.

 11. Are there any specific data points you would like to track in the application, such as ingredient inventory or user preferences?

> Andrew Rea: Yes, I think there are several **data points that could be valuable to track in the application**. One example is **user preferences, such as the types of recipes that users are searching for and favoriting.** This information could help us to better understand our users and tailor our content to their needs and interests. Additionally, we could track data around **ingredient usage and inventory,** which could help us to optimize our recipes and ensure that we're using the most popular and readily available ingredients. Overall, I think data tracking could be a powerful tool for improving the platform and enhancing the user experience.

> Alex: I completely agree with Andrew that data tracking could be valuable for the application. In addition to the data points he mentioned, we could also track information around recipe ratings and reviews, which could help us to identify which recipes are most popular and well-liked by our users. We could also t**rack data around user demographics, such as age, location, and gender,** which could help us to better understand our user base and tailor our content and marketing efforts accordingly. Overall, I think data tracking could provide us with valuable insights into how users are interacting with the platform and could help us to improve and optimize the user experience.

 12. Would you like to offer any premium features or subscription options for users?

> Andrew Rea: Yes, I think there could be some opportunities to offer premium features or subscription options for users. For example, we could offer a **premium subscription that provides users with access to exclusive recipes, cooking tips, and behind-the-scenes content.** We could also offer a **personalized meal planning and grocery list feature**, where users could input their dietary preferences and receive customized meal plans and shopping lists based on their needs. Additionally, we could explore **partnerships with cooking equipment or ingredient companies to offer exclusive discounts or promotions to our subscribers.** Overall, I think there could be some exciting opportunities to offer value-added features and content to our users through a premium subscription.

> Alex: I agree with Andrew that a premium subscription could be a valuable addition to the application. In addition to the features he mentioned, we could also offer a premium subscription that provides users with **ad-free browsing**, **early access to new recipes and content, and access to exclusive cooking classes or events**. We could also offer a feature that allows users to save their favorite recipes and create custom recipe books, which could be a popular and useful tool for avid home cooks. Overall, I think there are many opportunities to offer premium features and content that could enhance the user experience and provide additional value to our users.

 13. How important is it for users to be able to leave feedback on recipes and provide ratings?

> Andrew Rea: I think it's very important for users to be able to leave feedback on recipes and provide ratings. This feedback can be incredibly valuable for other users who are considering trying a recipe, and it can also help us to improve and refine our content over time. Additionally, allowing users to leave feedback and ratings can help to create a sense of community and engagement around the platform, as users share their experiences and insights with one another. Overall, I think feedback and ratings are essential features for any recipe sharing platform.

> Alex: I completely agree with Andrew. Feedback and ratings are essential for creating a sense of trust and reliability around the recipes on the platform. Users want to know that the recipes they're trying have been tested and enjoyed by others, and feedback and ratings can provide that reassurance. Additionally, feedback and ratings can help us to identify which recipes are most popular and well-liked by our users, which can help to inform our content strategy and recipe development over time. Overall, I think feedback and ratings are a critical feature for any recipe sharing platform.

 14. Do you have any existing branding guidelines or design assets that you would like to incorporate into the application?

> Andrew Rea: Yes, I have some existing branding guidelines and design assets that I would like to incorporate into the application. **I have a logo for Binging with Babish that I would like to use as the primary branding for the application, and I would also like to use our signature color palette (black, white, and red)** throughout the design. Additionally, I have some design elements that I use in my videos, such as custom illustrations and typography, that I would like to incorporate into the application to help create a consistent visual identity across all of our content.

> Alex: I don't have any existing branding guidelines or design assets for my channel, but I am open to incorporating elements from Andrew's branding and design to help create a cohesive look and feel for the application. I think it's important to have a consistent visual identity across all aspects of the platform, and I'm excited to work with Andrew to develop a design that reflects our shared vision for the application.

 15. What is your budget and timeline for this project? Are there any specific constraints or limitations we should be aware of?

> Andrew Rea: As far as budget and timeline go, we are willing to invest what is necessary to create a high-quality application that meets all of our needs and requirements. We understand that building a custom web application can be a significant undertaking, and we want to ensure that we have the resources we need to get the job done right. However, we also want to be mindful of our costs and make sure that we're getting good value for our investment. In terms of timeline, we would like to launch the application as soon as possible, but we also want to make sure that we take the time to build a solid foundation and create a platform that we can be proud of.

> Alex: I agree with Andrew. We want to make sure that we have the resources we need to create a high-quality application, but we also want to be mindful of our costs. As far as timeline goes, we want to launch the application as soon as possible, but we also understand that building a custom web application takes time and effort. We are committed to working with our development team to create a realistic timeline that takes into account our goals and constraints.

> As for constraints or limitations, we don't have any specific requirements or limitations at this time. We are open to exploring different options and solutions to create the best possible platform for our users.

### Definition of requirements

#### Functional requirements

 - [ ] Recipes database.
 - [ ] Search engine based upon preferences including:
   - Ingredients.
   - Prepping time.
   - Cuisine type.
   - Difficulty level (Beginner, intermidiate or advanced).
   - Kind of dish.
   - Dietary restrictions (Gluten-free, vegetarian, or low-carb).
   - Equipment needed (Slow cooker, pressure cooker, etc.).
   - Seasonality.
   - Sustainability.
 - [ ] Recipes recommendation engine based on user preferences.
 - [ ] Recipe pages must show:
   - List of ingredients.
   - Step-by-step instructions.
   - Nutritional information.
   - Photos or videos.
 - [ ] Personal collection that allows user to save recipes.
 - [ ] Recipe sharing feature.
 - [ ] Recipe rating and reviewing, including improvement or modification suggestions.
 - [ ] Dashboard showing the following sections:
   - Seasonal recipes.
   - Trending recipes.
   - 
 - [ ] Cooking tips feature.
 - [ ] New recipe sharing feature with moderation process.
 - [ ] User roles and permissions, indluding:
   - General user.
   - Moderators.
 - [ ] Inappropiate or inaccurate recipe flagging feature.
 - [ ] Social media integration for recipe sharing and to collect photos or videos of users cooking and enjouing the recipes.
 - [ ] Social media sing-up feature.
 - [ ] Data tracking including:
   - Types of recipes searched and liked.
   - Ingredient usage.
   - User demographics (age, location, gender).
 - [ ] Premium suscription that allows user to access:
   - Exclusive recipes.
   - Cooking tips.
   - Behind-the scene content.
   - Personalized meal planning and grocery list according to user preferences.
   - Disccounts for cooking equipment or ingredient companies.
   - Ad-free browsing.
   - Early access to new recipes.
   - Exclusive cooking classes.

#### Nonfunctional requirements
- [ ] Seamless user experience.
- [ ] Dynamic, interactive, and personalized platform according to user preferences.
- [ ] Accesible to anyone, regardless of their cooking experience.
- [ ] Clean ad visually appealing interface.
- [ ] Simple and visually appealing user interface.
- [ ] Clear hierarchy of information and easy navigation.
- [ ] Modern, sleek and professional user interface.
- [ ] Consistent typography, color scheme, and overall design.
- [ ] Responsive and mobile-friendly interface.
- [ ] Incorporation of binging with Biabish logo and black, white and red palette.


#### Requirements that need to be analized
- [ ] Hub for food enthusiasts.
- [ ] Allowing user-generated content.
- [ ] Investigate google and Facebook registration process.

#### Ideas while gathering requirements.
- [ ] Database of cooking tips that automatically matches with recipes according to the ingredients or techniques used with a like/don't like feature.
- [ ] Does working with seasonability requires to ask users for it's location (Investigation needed).
- [ ] Users with recipes already published doesn't require to pass the moderation process.

- [ ] Maybe the Remix It function from thingiverse could be implemented.

## Application architecture
![RecipeRadar Architecture components](/Resources/README/01_AppArchitectureBasic.drawio.png 'Application architecture')
