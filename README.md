# Docker Example at docker folder 
<br />
#This is simple example of use node.js  and docker
<br />
prerequisite :
<br />
1) install docker (i used docker desktop for windows)
<br />
2)install git
<br />
3)clone this repo
<br />
4)run docker build -t simple .
<br />
5)run docker run -p 4000:4000 simple
<br />
6)browse to http://localhost:4000

# Middleware Example at Middleware folder 
<br />
#This is simple example of use node.js middleware
At this example at the index.js file we can see post request that use two middlewares  
<br />
prerequisite :
<br />
1)clone this repo
<br />
run npm i 
<br />
run node index.js from the middleware folder 
<br />
make post request (postman for example) to address http://localhost:3000/testpost
<br />
look at the server console

# redis example at  redis folder 
<br />
This is example  of pub sub event
<br />
in order to run it clone this repo and install the dependencies (npm i)
<br />
run the subscriber by run the command node subscriber.js
<br />
run the publisher by run the command node publisher.js
<br />
at the subscriber console you should see every 5 second the time that the publisher sent




