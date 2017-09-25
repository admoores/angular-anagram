# angular-anagram
An anagram generator made using AngularJS

### Usage
- Requires up-to-date Node, NPM
  - run `npm install`
  - run `npm start`
  - Navigate to `localhost:8080`


### Steps
- Step 0: AngularJS Boilerplate
  - Used starting point from my own collection of home-made boilerplates, in this case AngularJS+Express.
- Step 1: Basic Requirements
  - Created string shuffle function, shuffle text on ng-change or click of 'Re-Roll' button.
- Step 2: Creating extra views
  - Created new views to serve the Advanced, Master, and Impossible criteria
  - Added Services file to allow re-use of shuffle function
  - Added navigation to choose views
- Step 3: Creating advanced version for second view
  - Modified outputText to be a list with values and lock booleans
  - On re-roll, only shuffles if lock is false
  - Displayed information in a table
- Step 4: Master requirements
  - Added view/nav for Master version
  - Implemented sortBy and filter for Master-level requirements