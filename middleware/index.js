const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const firstMiddleWare = function(req, res,next) {
  console.log('first middlware')
  console.log(req.body)
  console.log('i add the attribute customAttribute')
  req.customAttribute ="shimon"
  next()
 }
 
 const secondMiddleware = function(req,res)  {
	console.log('second middleware')
	console.log('customAttribute value:',req.customAttribute)
	 res.send('post Hello World! 3000')
	}
 

app.get('/', (req, res) => {
	
  res.send('Hello World! 3000')
})
app.post('/testpost',firstMiddleWare ,secondMiddleware)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})