## Installation
### Backend

##### **Prerequsites**

1. [VS Code Download](https://code.visualstudio.com/download) - Download according to your OS requirements
2. [Node Js Download](https://nodejs.org/en) - Got to this link and install the latest **LTS Version(only)** Note - Current Version are generally unstable, please use LTS Only.
Once Installed, check the instalation by running the followiung commands from your terminal

3. [PostgreSQL Download](https://www.postgresql.org/download/) - PostgreSQL database server up and running.


##### **Getting Started**

1. &nbsp; _Setup the **postgreSQL**_ -
   -
   - Click on install and keep going next until , the password setup page comes
     
    _Remember the password as it will be used later_
   
    ![password](https://github.com/rohit-rambade/mmc-backend/assets/86614477/629f2b58-299f-40d4-81f7-13207a869541)


   - Keep everything default and install the PostgreSQL

&nbsp;
&nbsp;
2. &nbsp; _Running postgreSQL_ -
  -
  -  Search for **pgadmin** in Windows
  
  - It will ask for password , enter it
  
  - Now right click on **Database** , And click on create , then Database .

     _As shown in the figure_
    
    ![pgAdmin 4 15-08-2023 06_58_22](https://github.com/Shanvithegreat0/mmc_backend_setup/assets/103589784/e596a95b-e71b-4fd3-a008-bd99634e1925)

- Give a name to your database , For eg ~ newdb , mydb , etc.

- Leave rest to default and save your Database

- Now select the database which you created Right Click -> Query tool
   ![image](https://github.com/rohit-rambade/mmc-backend/assets/86614477/df054762-93dd-4dac-8e3e-10655d0f8e3b)


- Copy Paste the below query in Query Editor

  ```
  CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255)
  );
  ```
- Run the Query <br/>

    ![runQuery](https://github.com/rohit-rambade/mmc-backend/assets/86614477/3410d4ab-467b-4518-a249-bc90bbd93285)


3. &nbsp; _Server startup_ -
   -

   - Clone the repository to your local machine:
      ```bash
      git clone <repository_url>
      cd <repository_name>
      ```
   - Install the required packages using npm:
      ```bash
      npm install
      ```
   - Set Up the .env File:
   - Create a .env file in the root directory of your project.

   - Add your database credentials and other sensitive information to the .env file. 
    Example:
    ```bash
    # Postgres 
    DB_USER=postgres-user (eg. postgres)
    DB_PASSWORD=db-password
    DB_HOST=localhost
    DB_PORT=5432
    DB_DATABASE=db-name (eg. testdb)
    
    # Port
    PORT=5000
    
    
    
    ```
   - Run the `index.js` file using `nodemon` to start Express server:
    ```
    npm install -g nodemon  # Install nodemon globally (if not already installed)
    nodemon index.js
    
    ```

4. &nbsp; _Using Postman_ -
     -
     [Postman Download](https://www.postman.com/downloads/)
    - After installation, the Postman landing screen opens. Now create your Postman account here

    - After the account setup the following screen options

      ![postman](https://github.com/rohit-rambade/mmc-backend/assets/86614477/b4581800-3671-485f-a5c6-139cc6ab727c)

    
    - Now go to collection and Create a new colletion 

    - Now right click on Collection name Select _**Add request**_
    - Create a new request

     - Paste the URL http://localhost:5000/api/test in the _Enter URL_ section

     - Now Change the method type from **GET** to **POST**
    
       _As shown below-_
       
         ![image](https://github.com/rohit-rambade/mmc-backend/assets/86614477/de3405de-5d60-407f-b84a-fd1ebf3beb55)

       
     - Select Body -> Raw as shown in Above image

     - Change file type from **Text** to **JSON** as shown

     - Copy paste the below code in text area
          ```
                  {
                    "firstname":"test124",
                    "lastname":"test458"
                  }
          ```

     - Send the request from Postman By clicking on **SEND**

     - Check postgreSQL window , A table in Data ouput would have been created
         ![image](https://github.com/rohit-rambade/mmc-backend/assets/86614477/9e7489a3-aef9-43a6-b53b-79d9c990c3be)


     


