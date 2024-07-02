
live-link : https://assignment-no-12-115fa.web.app/

admin-email: soulmateadmin@gmail.com

admin-password: Pa$$w0rd!

## Overview
This matrimony website is designed to provide a secure and user-friendly platform for individuals seeking marriage partners. It includes various features such as payment gateway integration, advanced search options, profile management, and administrative controls to ensure a seamless user experience.

## Installation Steps:- 

- Clone the Repository:

```sh
git clone https://github.com/MdSaifulIslamRafsan/SOULMATE-client-side.git
cd SOULMATE-client-side
```

- Install Dependencies:

```sh
npm install
```

- Set Up Environment Variables:
Create a .env file in the root directory and add the following:

```sh
# Firebase Configuration
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id

# Image Hosting Service Configuration
VITE_IMAGE_HOSTING_KEY=your_image_hosting_key

# Payment Gateway Configuration
VITE_PAYMENT_GATEWAY=your_payment_gateway_key

# Base URL of the Application
VITE_BASEURL=your_base_url

```
- Run the Application:

```sh
npm run dev
```

## Features

1. **Payment Gateway Integration**
   - Secure Payment Processing: Allows for safe transactions for premium memberships and service fees.
     
2. **Admin Dashboard**
   - User Management: Admins can manage user roles, approve biodata and contact requests, and oversee the entire platform.

3. **Advanced Search Options**
   - Profile Sorting: Users can sort profiles by age and marriage date.
   - Custom Search: Users can search profiles by age range, profile type, and division.

## Technologies Used
- Frontend: React
- Backend:  Express
- Database: MongoDB
- Payment Gateway: Stripe
- Hosting & Authentication: Firebase
- Image Hosting: imgBB

