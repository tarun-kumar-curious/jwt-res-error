
## Gitflow Collaborative Workflow Steps
![GIT FLOW](https://i.stack.imgur.com/vEAlo.png) 

1. Clone the repository:  `git clone https://github.com/Curious-Ecosystem/Mentor-Mentees-Connect.git`
2. Go inside the repository
3. Gitflow Initialization: `git flow init`
   1. Type `main` if you see `master`
   2. press `enter` until you find the final path
4. Branch Hierarchy
   1. `main` branch : its a production branch
   2. `develop` branch : this branch is created by taking code of `main` branch
   3. `feature` branch : this branch is created by taking code of `develop` branch
      - Creating Feature Branch code - `git flow feature start <FeatureName>`
      - Pushing The Feature Branch code - `git push --set-upstream origin <FeatureName>`
   4. M2Q(Move To Quality Testing) - Merging `Feature` Branch To `Develop` And Creating `Release` branch 
      1. Step 1 : `git checkout develop`
      2. Step 2 : `git merge feature/FeatureName develop`
      3. Step 3 : `git flow release start <ReleaseName>`
   5. M2P (Move To Production) - After all bug fixes Merging `Release` Branch To `Develop` And `Main` Branch
      1. Step 1 : `git checkout develop`
      2. Step 2 : `git merge release/ReleaseName`
      3. Step 3 : `git checkout main`
      4. Step 4 : `git merge develop`
   6. Hotfix : if any issue is there we need to fix and merge `Hotfix` Branch To `Develop` And `Main` Branch
      1. Step 1 : `git checkout develop`
      2. Step 2 : `git merge hotfix/HotfixName`
      3. Step 3 : `git checkout main`
      4. Step 4 : `git merge hotfix/HotfixName`

=================================================================
1. git flow -h (gives the list of sub commands)
2. git flow init (initializes the repository)
3. git status (shows which branch we are in)
4. git flow feature list (gives list of feature branches)
5. git flow feature start featureName (to create a feature branch)
6. git branch (shows the list of branches)
7. get flow feature list (gives list of feature branches)
8. git status (shows the list of changes made)
9. git add . (to add all the changes at once)
10. git commit -m "Commit message" (to commit the changes)
11. git log --oneline (shows the logs)
12. git checkout develop (used to switch to specific develop branch)
   1. git flow feature finish -k featureName (used to merge the feature branch to develop without deleting the feature branch)
   2. git push -u origin develop (used to push the changes to cloud)
   3. git push --set-upstream origin featureName
   4. git flow release start 1.2.1
   5. git flow release finish –kn <1.1.1>

![GIT FLOW](https://i.stack.imgur.com/vEAlo.png) 
