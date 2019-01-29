modules are units, used using 'require'

app.js is starting point
node has file system, but you need to require the module

fs is a built in module so you don't need to npm  it

here is where some of the add on modules can be found: https://nodejs.org/dist/latest-v6.x/docs/api/

use npm init to get packages going so you can install 3rd party modules

--save flag in npm install {package} --save saves to package

--when you put a project on github, node modules shouldn't be taken with you, because it contains generated code that could be updated. because we used the --save flag, it is now saved in our package.json file, so now we just got to do npm install to get those files back!. make sure to gitIgnore those module folders

to git ignore create a .gitignore file and put the extension.  folder would be {folder_dir}/   (don't forget the slash appended at the end)

nodemon is a command line utility used in the terminal
saving with the -g flag downloads it globally
"""npm install -g nodemon"""


nodemon can be used in place of node so to run:
nodeman app.js

makes testing faster with web servers

