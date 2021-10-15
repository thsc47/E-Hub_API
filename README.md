# E-Hub

This is a RESTful API developed as the conclusion work of the Ironhack bootcamp. The intention is to support an e-commerce system for used-vehicle products, known as E-hub

## Links
---

API link: https://e-hub-iron.herokuapp.com
Front-end link: -

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

| METHOD |      ENDPOINT      |              PAYLOAD              |  QUERY |            RESPONSE           |                     ACTION                     |       |                               |                                                |
|:------:|:------------------:|:---------------------------------:|:------:|:-----------------------------:|:----------------------------------------------:|-------|-------------------------------|------------------------------------------------|
|   GET  |    /ad-sale/all    |                 -                 |    -   |      {todos os anúncios}      |       Devolve todos os anúncios do banco       |       |                               |                                                |
|   GET  |   /ad-sale/my/all  |                 -                 |    -   |   200 + {todos os anúncios}   |      Devolve todos os anúncios do usuário      | QUERY |            RESPONSE           |                     ACTION                     |
| DELETE | /ad-sale/my/delete |                 -                 |  {id}  |               -               |      Deleta o anúncio requisitado na query     |   -   |      {todos os anúncios}      |       Devolve todos os anúncios do banco       |
|   PUT  |  /ad-sale/my/edit  |                 -                 |  {id}  |      201 + {new_anuncio}      |        Atualiza o ID desejado via query        |   -   |   200 + {todos os anúncios}   |      Devolve todos os anúncios do usuário      |
|   GET  | /ad-sale/my/search |                 -                 |  {id}  | {Anúncio requisitado na query |     Devolve o anúncio requisitado na query     |  {id} |               -               |      Deleta o anúncio requisitado na query     |
|  POST  |    /ad-sale/new    |          {modelo_anuncio}         |    -   |        201 + {anuncio}        |                 Cria um anuncio                |  {id} |      201 + {new_anuncio}      |        Atualiza o ID desejado via query        |
|  POST  |       /login       |           {user, senha}           |    -   |         201 + {token}         |            Permite acesso ao sistema           |  {id} | {Anúncio requisitado na query |     Devolve o anúncio requisitado na query     |
|   GET  |    /messages/:id   | {userID, advertainmentID,  token} |    -   |               -               |      Retonar todas as mensagens do anúncio     |   -   |        201 + {anuncio}        |                 Cria um anuncio                |
|  POST  |    /messages/:id   | {userID, advertainmentID,  token} |    -   |                               |        Posta uma nova mensagem a thread        |   -   |         201 + {token}         |            Permite acesso ao sistema           |
|   GET  |     /myaccount     |                 -                 |    -   |       200 + [{anuncios}]      |   Recebe os anúncios para mostra-los em cards  |   -   |               -               |      Retonar todas as mensagens do anúncio     |
| DELETE |     /myaccount     |                 -                 |    -   |              204              |            Deleta o usuário do banco           |   -   |                               |        Posta uma nova mensagem a thread        |
|   PUT  |     /myaccount     |                 -                 |    -   |          201 + {user}         |        Atualiza o ID desejado via query        |   -   |       200 + [{anuncios}]      |   Recebe os anúncios para mostra-los em cards  |
|   GET  |   /search/:query   |              {query}              |    -   |      {anúncios filtrados}     | Devolve todos os anúncios filtrados pela query |   -   |              204              |            Deleta o usuário do banco           |
|  POST  |       /signin      |               {user}              |    -   |               -               |                  Criar usuário                 |   -   |          201 + {user}         |        Atualiza o ID desejado via query        |
|   GET  |      /wishlist     |        {Lista de anúncios}        |    -   |       200 + [{anuncios}]      |          Lista os favoritos do usuário         |   -   |      {anúncios filtrados}     | Devolve todos os anúncios filtrados pela query |
|  POST  |      /wishlist     |          {id de anúncios}         |    -   |              200              |         Adiciona um anúncio a wishlist         |   -   |               -               |                  Criar usuário                 |
| DELETE |      /wishlist     |          {id de anúncios}         |    -   |              204              |           Deleta um item da wishlist           |   -   |       200 + [{anuncios}]      |          Lista os favoritos do usuário         |
|   GET  |       /logout      |              {token}              |    -   |              204              |                Invalida o token                |   -   |              200              |         Adiciona um anúncio a wishlist         |
|        |                    |                                   | DELETE |           /wishlist           |                {id de anúncios}                |   -   |              204              |           Deleta um item da wishlist           |
|        |                    |                                   |   GET  |            /logout            |                     {token}                    |   -   |              204              |                Invalida o token                |

# under construction by 
[Linkedin (Thiago)](https://www.linkedin.com/in/thsc47)
[Linkedin (Francisco)](https://www.linkedin.com/in/franciscom-amaral/)