---
title: "EesyFood project"
date: "2022-03-01"

layout: ../../layouts/PostLayout.astro
description: "Developed the MVP of `EesyFood`, a web application for food delivery services, from scratch using FastAPI and Flask."

img_path: "/eesyfood/header.jpg"
img_alt: "EesyFood project"
---

# EesyFood Project

![Header Image](/eesyfood/startup.jpg)

> "One cannot think well, love well, sleep well, if one has not dined well." - Virginia Woolf

## Table of Contents

- [Introduction](#introduction)
- [Progress](#progress)
- [Results](#results)
- [Technology Learned/Used](#technology-learnedused)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction

From December 2021 to March 2022, in Minsk, Belarus, I developed `EesyFood`, a web application for food delivery services that also offers personalized meal plans based on dietary needs. This project was initiated as part of a startup accelerator at Belarusian State University.

## Progress

### Conceptualization and Design

The initial phase involved outlining the core functionalities of the application, including user account management, meal plan generation, and nutrient calculation based on user preferences and dietary restrictions.

### Development

I utilized Flask for building the backend, ensuring efficient handling of asynchronous requests and integrating it with a SQLite database for data persistence. Frontend development was done using Streamlit for first stages and then migrated to Bootstrap for better UI/UX.

### Deployment

The application was deployed on Heroku, which involved setting up the necessary environment for a production web application, configuring databases, and ensuring smooth deployment and operation.

### Nutrient Calculation Algorithm

A significant feature of `EesyFood` was its ability to automatically calculate the nutrients of the proposed meal plans. This functionality was developed by constructing a custom database of food items and their nutritional values, which were then used to calculate the nutrient content of the meal plans. The central algorithm was permutating the meal plan to find the best combination of food items that met the user's dietary requirements and preferences. Finally, the nutrient values were calculated based on the selected food items.

## Results

`EesyFood` successfully launched as an MVP, capable of handling user registrations, meal plan suggestions, and automatic nutrient calculations. This MVP served as a proof of concept for the idea and demonstrated potential for future scalability and feature enhancements. [Check out the application here.](https://eesyfood.herokuapp.com/)

## Technology Learned/Used

Throughout this project, I gained experience in:

- **Flask** for admin management
- **SQLite** for database management
- **Streamlit** for frontend development
- **Bootstrap** for UI/UX design
- **Heroku** for deployment and hosting

## Conclusion

The `EesyFood` project not only allowed me to apply my skills in web development but also provided wonderful experience in startup development and management. The project's success as an MVP was a first step of learning and understanding the startup ecosystem. Later, the project was closed due to the lack of time and resources, but the experience gained was truly invaluable.

## References

- [EesyFood on Heroku](https://eesyfood.herokuapp.com/)
