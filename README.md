# E-Hub

This is a RESTful API developed as the conclusion work of the Ironhack bootcamp. The intention is to support an e-commerce system for used-products, known as E-hub

## Links
---

API link: https://e-hub-iron.herokuapp.com
Front-end link: https://e-hub-v1.herokuapp.com/

---

## Use our insomnia templete 
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=&uri=)

---

## Technologies and Frameworks applied

bcryptjs;
cloudinary;
cors;
crypto;
dotenv;
express;
JWT;
mongoose;
multer;
multer-storage-cloudinary;
redis.

## Usage

Local:

- clone this repo;
- `npm i`;
- set your environment variables with `.env_exemple`

## Endpoints:

|     METHOD     |            ENDPOINT            |                                     PAYLOAD                                     |         QUERY        |                              RESPONSE                              |                                                                                         ACTION                                                                                        |   |   |   |
|:--------------:|:------------------------------:|:-------------------------------------------------------------------------------:|:--------------------:|:------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|---|---|---|
|       GET      |               /ad              |                                        -                                        |           -          |                           10 featured ads                          |                                                                 returns ten featured ads, each request will be unique                                                                 |   |   |   |
|       GET      |             /search            |                                        -                                        | search={user_search} | ads based on the proximity between the title and the user's search |          Returns a number of ads based on the proximity of the bank's ad title and the entered quety. If no ads are found, an empty object will be forwarded as the response          |   |   |   |
|       GET      |       /ad-sale/my/search       |                                        -                                        |        {ad_id}       |                                {ad}                                |                                                                 Public route that returns the requested advertisement.                                                                |   |   |   |
|      POST      |             /signin            | {username, password, email, name, cpf, street, number, district, city, zipcode} |          -           |                           {id, username}                           |                                           All fields in the payload are required and the route returns the username and id as confirmation.                                           |   |   |   |
|      POST      |             /login             |                                {email, password}                                |          -           |                       {id, email, JWT_Token}                       | Route for logging into the system. It requires a valid registration email address and the password entered at the time of registration. Returns the user id, email, and the JWT_Token |   |   |   |
| Private Routes |                                |                                                                                 |                      |                                                                    |                                                                                                                                                                                       |   |   |   |
|     DELETE     |       /ad-sale/my/delete       |                                        -                                        |         {id}         |                                  -                                 |                                           Private route destined to delete the user's ad. To access it, just forward the id via query (?id=)                                          |   |   |   |
|       GET      |         /ad-sale/my/all        |                                        -                                        |           -          |                         {all_ads_from_user}                        |                                                                     Private route that returns all the user's ads                                                                     |   |   |   |
|      POST      |          /ad-sale/new          |            {files, category, price, description, phone, email, name}            |           -          |                              {new_ad}                              |                                        Private route that receives the required fields to create an ad. Returns the ad created in the database                                        |   |   |   |
|       PUT      |        /ad-sale/my/edit        |                                 {fields_to_edit}                                |         {id}         |                              {new_ad}                              |            Private route intended for editing the user's announcement. To access it, you must forward the necessary fields for editing and the desired id via query (?id=)            |   |   |   |
|       GET      |             /logout            |                                        -                                        |         {id}         |                                  -                                 |                                                   Private route intended for logout. Invalidates the JWT token attached to the user                                                   |   |   |   |
|       GET      |            /messages           |                                        -                                        |           -          |                           {all_messages}                           |                                                               Private route that returns all messages linked to the user                                                              |   |   |   |
|       GET      |            /messages           |                                        -                                        |         {id}         |                         {history_messages}                         |                                                             Private route that returns the message history of the given id                                                            |   |   |   |
|      POST      |            /messages           |                    {}{sender,reciver,AdvertisementID,message}                   |           -          |                          {created_message}                         |                                  Private route to post a message. expects to receive the sender, the reciver and the ad attached to the conversation                                  |   |   |   |
|     DELETE     |       /my-account/delete       |                                        -                                        |         {id}         |                                  -                                 |                                                        Private route to delete a user. Wait to receive the id via query (?id=)                                                        |   |   |   |
|       PUT      |        /my-account/edit        |                                 {fields_to_edit}                                |         {id}         |                            {new_account}                           |                                       Private route to edit a user. Expect to receive the id via query (?id=) and the field to edit via payload                                       |   |   |   |
|       PUT      | /my-account/upload-profile-pic |                                  {profile_pic}                                  |           -          |                            {new_account}                           |                          Private route for image sending with cloudware middleware. Expects to receive an image, as it will use req.user to find the user id                          |   |   |   |
|       GET      |           /my-account          |                                        -                                        |           -          |                           {this.account}                           |                                                                        Private route that returns all user data                                                                       |   |   |   |
|     DELETE     |        /wishlist/delete        |                                        -                                        |         {id}         |                                  -                                 |                                          Private route that deletes an ID from the user's wishlist. waits to receive the id via query (?id=)                                          |   |   |   |
|      POST      |          /wishlist/add         |                                        -                                        |         {id}         |                                  -                                 |                                           Private route that add's an ID from the user's wishlist. waits to receive the id via query (?id=)                                           |   |   |   |
|       GET      |            /wishlist           |                                        -                                        |           -          |                           {user_wishlist}                          |                                                                 Private route that returns the user's entire wishlist                                                                 |   |   |   |

# Find us at
[Linkedin (Thiago)](https://www.linkedin.com/in/thsc47)
[Linkedin (Francisco)](https://www.linkedin.com/in/franciscom-amaral/)