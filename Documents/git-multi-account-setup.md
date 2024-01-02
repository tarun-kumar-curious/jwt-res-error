1. open cmd and create a new `.ssh` folder
   1. mkdir `.ssh`
   2. cd `.ssh`
2. ssh-keygen -t rsa -C "nandan@curiousdevelopers.in" -f "CorporateUserID"
3. ssh-keygen -t rsa -C "curiousdevelopers.in@gmail.com" -f "PersonalUserID"
4. ssh-add PersonalFileName
5. ssh-add CorporateFileName
6. type services in windows search and start the `OpenSSL Authentication Services` and insted of disable option give authomatic option adn start the survices
7. run the git bash and enter `eval ssh-agent -s`
8. Create A Config File
   1. touch config
   2. add the below configuration in config
   ```
   #corporate
     Host corporate_userid
          HostName github.com
          User git
          IdentityFile ~/.ssh/corporate_userid

     #personal
     Host personal_userid
          HostName github.com
          User git
          IdentityFile ~/.ssh/personal_userid
   ```
9. Add the public key in your remote git repository
   1. go to `settings` then -> `ssh and gpg` option then -> add new `ssh` by copying from corporate_id.pub file in `.ssh` folder 
   2. you can start cloning
10. Cloning And Taking Latest Pull Steps
   1. Create a directory on your desktop
   2. go inside the directory
   3. Cloning Steps
      1. enter `git clone git@CDCUserName:Curious-Ecosystem/Mentor-Mentees-Connect.git`
      2. `ls` and go inside the directory
      3. cd `Mentor-Mentees-Connect`
      4. enter the `git pull` command