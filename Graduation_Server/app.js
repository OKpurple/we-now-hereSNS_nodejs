var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var contents = require('./routes/contents.js');
var user = require('./routes/user.js')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/user',user);
app.use('/contents',contents);
app.use('/image', express.static('files/images'));


app.get('/insertUser',(req,res)=>{
  var output=`
  <html>
  <body>
     <form method="post" action="user" >
     <h1>login id</h1>
         <input type="text" name = 'login_id'>
        <h1>login_pw</h1>
         <input type="text" name = 'login_pw'>
         <h1>name</h1>
         <input type="text" name = 'user_name'>
         <h1>공개 비공개</h1>
         <input type="text" name = 'public_range'>
         <h1></h1>
         <input type="submit">
     </form>
  </body>
  </html>
  `
  res.send(output);
})

app.get('/insertContents',(req,res)=>{
  var output = `
<html>
<body>
   <form method="post" action="contents/4" enctype= multipart/form-data>
   <h1>has_image 1or0 </h1>
       <input type="text" name = 'has_image'>
      <h1>내용</h1>
       <input type="text" name = 'content_text'>
       <h1>공개범위</h1>
       <input type="text" name = 'share_range'>
       <h1>위치범위</h1>
       <input type="text" name = 'location_range'>
       <h1></h1>
       <input type="file" name="contents_image">
       <input type="submit">
   </form>
</body>
</html>
   `;
   res.send(output);
})


app.listen(8080, function(){
  console.log('Connected 8080 port!');
});
