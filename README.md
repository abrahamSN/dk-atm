# DK ATM CLI Simulator!
Hi! this is **ATM Simulator** built with nodejs cli. 

## Library
Just using few library to make this project.
>**Typescript**
>**Oclif**
>**chalk**
>**PrismaORM**
>**SQlite**

## Script

To Initiate the cli apps:
>`pnpm install && pnpm run build`

To run the cli apps:
>`node ./bin/run.js`

To login:
>`node ./bin/run.js login [username]`

To logout:
>`node ./bin/run.js logout`

To deposit:
>`node ./bin/run.js deposit [amount]`

To withdraw:
>`node ./bin/run.js withdraw [amount]`

To transfer:
>`node ./bin/run.js tranfer [username] [amount]`

# Behind the code


## SQL
This project using `sqlite` to emulate the sql.
> |session|type|
> |-|-|
> |id|number|
> |userId|string|
> |createdAt|DateTime|
 
> |user|type|
> |-|-|
> |id|number|
> |uname|string|
> |createdAt|DateTime|

> |transaction|type|
> |-|-|
> |id|number|
> |amount|float|
> |type|string|
> |userId|number|
> |toUserId|number|
> |owed|float|
> |isOwe|boolean|
> |createdAt|DateTime|
 