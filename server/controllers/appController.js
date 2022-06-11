
const User = require("../models/User");



exports.update = async (req, res) => {

  
  console.log(req.body);
  const { name, desc, id } = req.body;
  var _id = id;
  User.updateOne(
		{ _id: _id },
    { $set: { desc:desc,name:name }  },function(err,d){
			if(err) console.warn(err);
			console.log('item add to cart');
			console.log(d);
		}
	 );
  return res.json({status:"ok"});
   

  

  
  
};


exports.comment = async (req, res) => {

  console.log("hye from comment");
  console.log(req.body);
  const { name,desc,id,com } = req.body;
  var _id = id;
  var comment = com;
  User.updateOne(
		{ _id: _id },
    { $set: { comment: comment }  },function(err,d){
      if (err) console.warn(err);
      console.log('item add to cart');
			console.log(d);
		
		}
	 );
  return res.json({status:"ok"});
   

  

  
  
};



exports.add = async (req, res) => {
  const { name, desc } = req.body;

  let user = await User.findOne({ name });

  if (user) {
    console.log("alredy exist");
  }
  var complete = 0;
  var comment = '';

 

  user = new User({
    name:name,
    
    desc:desc,
    complete:complete,
    comment:comment
  });

  await user.save();
  res.redirect("http://127.0.0.1:3000/");
};


exports.delete = async (req, res) => {
  const { id } = req.body;
  var _id = id;

  User.deleteOne(
    { _id: _id },
    function (err, d) {
      if (err) console.warn(err);
      console.log('item deleted');
      console.log(d);
		
    }
  );
  return res.json({status:"ok"});

}


exports.complete = async (req, res) => {

  console.log("yes");
  const { id } = req.body;
  var _id = id;
  var complete = 1;

  
  User.updateOne(
		{ _id: _id },
    { $set: { complete: complete  }  },function(err,d){
      if (err) console.warn(err);
     
		
		}
	 );

  
  return res.json({status:"ok"});

}












  
  
  
    
    
  
    
    
  
  
  











