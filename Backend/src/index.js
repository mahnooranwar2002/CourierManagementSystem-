require("./Model/connection");
var agent_data = require("./Model/agentModel");
var branch_data = require("./Model/branch");
var types_data = require("./Model/Courier_type");
var admin_data = require("./Model/adminModel");
var com_data = require("./Model/companies");
var coureir_data = require("./Model/Couier");
var express = require("express");
var app = express();
var body = require("body-parser");
app.use(body.json());
var cors = require("cors");
app.use(cors());
var contact = require("./Model/Contact");
var user = require("./Model/User");

// Agent Crud
//agent_insert
app.post("/insertagent", (req, res) => {
  agent_data.create(req.body).then(() => {
    res.send("send agent");
  });
});
// app.post("/insertagents", (req, res) => {
//     // Check if the email is provided in the request body
//     if (!req.body.email) {
//         return res.status(400).send("Email is required");
//     }

//     // Check if the agent already exists
//     agent_data.findOne({ email: req.body.email })
//         .then((existingAgent) => {
//             if (existingAgent) {
//                 // If the agent already exists, send a response
//                 return res.status(409).send("Agent already exists");
//             } else {
//                 // If the agent does not exist, create a new one
//                 return agent_data.create(req.body);
//             }
//         })
//         .then(() => {
//             // Send a success response after creating the agent
//             res.status(201).send("Agent created successfully");
//         })
//         .catch((error) => {
//             // Handle any errors that occur during the process
//             console.error("Error inserting agent:", error);
//             res.status(500).send("Internal server error");
//         });
// });

app.get("/fetch_agent", (req, res) => {
  agent_data.find().then((resp) => {
    res.send(resp);
  });
});
// for update the status
app.put("/agent_status/:id", async (req, res) => {
  const agent = await agent_data.findById(req.params.id);
  agent.status = agent.status === 1 ? 0 : 1;
  await agent.save();
});
// for delete

app.delete("/agent_delete/:id", async (req, res) => {
  try {
    const del = await agent_data.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.send("abc");
  }
});
//  update
app.get("/find_agent/:id", async (req, res) => {
  agent_data.findById(req.params.id).then((resp) => {
    res.send(resp);
  });
});
app.put("/agent_updated/:id", (req, res) => {
  agent_data.findByIdAndUpdate(req.params.id, req.body).then((resp) => {
    res.send(resp);
  });
});
app.post("/branch_inserted", (req, res) => {
  branch_data.create(req.body).then(() => {
    res.send("branch_added");
  });
});
app.get("/branch_fetch", (req, res) => {
  branch_data.find().then((resp) => {
    res.send(resp);
  });
});

app.delete("/branch_Deleted/:id", async (req, res) => {
  try {
    const del = await branch_data.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.send("abc");
  }
});
// for view the data
app.get("/branch_data/:id", (req, res) => {
  branch_data.findById(req.params.id).then((resp) => {
    res.send(resp);
  });
});
app.put("/branch_edited/:id", (req, res) => {
  branch_data.findByIdAndUpdate(req.params.id, req.body).then((resp) => {
    res.send(resp);
  });
});
app.post("/created_type", (req, res) => {
  types_data.create(req.body).then((resp) => {
    res.send(resp);
  });
});
app.get("/fetch_types", (req, res) => {
  types_data.find().then((resp) => {
    res.send(resp);
  });
});
app.delete("/del_type/:id", async (req, res) => {
  try {
    await types_data.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.send("not found");
  }
});
// logined_user :
// app.post("/logined_user",(req,res)=>{
//     agent_data.findOne({email:req.body.email}).then((resp)=>{
//         if(resp.password==req.body.password){
//             res.send(resp)
//         }else{
//             res.send("Login Failed")
//         }

//     })
// })
app.post("/logined_user", (req, res) => {
  admin_data
    .findOne({ email: req.body.email })
    .then((resp) => {
      if (!resp) {
        // If no user is found, send a login failed message
        return res.status(401).send("Login Failed: User not found");
      }

      // If user is found, check the password
      if (resp.password === req.body.password) {
        // Password matches, send user data
        return res.send(resp);
      } else {
        // Password does not match
        return res.status(401).send("Login Failed: Incorrect password");
      }
    })
    .catch((error) => {
      // Handle any errors that occur during the database query
      console.error(error);
      return res.status(500).send("Internal Server Error");
    });
});
app.get("/fetch_data/:id", (req, res) => {
  agent_data.findById(req.params.id).then((data) => {
    res.send(data);
  });
});

app.post("/admin_added", (req, res) => {
  admin_data.create(req.body).then((resp) => {
    res.send(resp);
  });
});
app.get("/fetchadmin", (req, res) => {
  admin_data.find().then((resp) => {
    res.send(resp);
  });
});

app.delete("/admin_del/:id", async (req, res) => {
  try {
    await admin_data.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.send("not found");
  }
});
//company crud
app.post("/company_created", (req, res) => {
  com_data.create(req.body).then((resp) => {
    res.send(resp);
  });
});
app.get("/fetch_company", (req, res) => {
  com_data.find().then((resp) => {
    res.send(resp);
  });
});
app.delete("/del_com/:id", async (req, res) => {
  try {
    await com_data.findByIdAndDelete(req.params.id);
  } catch (e) {
    res.send("not found");
  }
});
// for update of company
app.get("/com_data/:id", (req, res) => {
  com_data.findById(req.params.id).then((resp) => {
    res.send(resp);
  });
});
app.put("/com_Update/:id", (req, res) => {
  com_data.findByIdAndUpdate(req.params.id, req.body).then((resp) => {
    res.send(resp);
  });
});
app.put("/company_status/:id", async (req, res) => {
  const company_status = await com_data.findById(req.params.id);
  company_status.status = company_status.status === 1 ? 0 : 1;
  await company_status.save();
});
app.get("/find_admin/:id", (req, res) => {
  admin_data.findById(req.params.id).then((resp) => res.send(resp));
});
app.put("/admin_Update/:id", (req, res) => {
  admin_data.findByIdAndUpdate(req.params.id, req.body).then((resp) => {
    res.send(resp);
  });
});

app.post("/couierInserted", (req, res) => {
  coureir_data.create(req.body).then((r) => {
    res.send(r);
  });
});

app.get("/fetchdata", (req, res) => {
  coureir_data.find().then((resp) => {
    res.send(resp);
  });
});
app.delete("/delCouier/:id", async (req, res) => {
  try {
    await coureir_data.findByIdAndDelete(req.params.id);
  } catch (r) {
    res.send("not found");
  }
});
app.get("/pracelData/:id", (req, res) => {
  coureir_data.findById(req.params.id).then((resp) => {
    res.send(resp);
  });
});
app.put("/pracelEdited/:id", (req, res) => {
  coureir_data.findByIdAndUpdate(req.params.id, req.body).then((resp) => {
    res.send(resp);
  });
});
// app.put("/pracelStatusUpdate/:id",async(req,res)=>{
//  var ID  = coureir_data.findById(req.params.id);
//    ID.Status = req.body;
//    await ID.save();
// })
app.put("/pracelStatus/:id", async (req, res) => {
  try {
    const CouirerUpdate = await coureir_data.findByIdAndUpdate(req.params.id, {
      Status: req.body.Status,
    });

    res.send(CouirerUpdate);
  } catch (error) {
    console.error("Error updating nutrition status:", error);
    res.status(500).send({ message: "Error updating nutrition status" });
  }
});
app.get("/couerierDetailfetch/:BranchProcessed", (req, res) => {
  coureir_data
    .find({ BranchProcessed: req.params.BranchProcessed })
    .then((resp) => {
      res.send(resp);
    });
});
// agent login

app.post("/logined_agent", (req, res) => {
  agent_data
    .findOne({ email: req.body.email })
    .then((resp) => {
      if (!resp) {
        return res.status(401).send("Login Failed: User not found");
      }

      if (resp.password === req.body.password) {
        return res.send(resp);
      } else {
        return res.status(401).send("Login Failed: Incorrect password");
      }
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    });
});
app.post("/insertContact", (req, res) => {
  contact.create(req.body).then((resp) => {
    res.send(resp);
  });
});

app.get("/fetchCouier", (req, res) => {
  contact.find().then((resp) => res.send(resp));
});
app.delete("/delContact/:id", async (req, res) => {
  try {
    await contact.findByIdAndDelete(req.params.id);
  } catch (r) {
    res.send("not found");
  }
});
app.post("/user_reg", (req, res) => {
  if (!req.body.email) {
    return res.status(400).send("your email is required !");
  }
  user
    .findOne({ email: req.body.email })
    .then((existinguser) => {
      if (existinguser) {
        return res.send("user is already exisit");
      } else {
        user.create(req.body);
      }
    })
    .then(() => {
      // Send a success response after creating the agent
      return res.status(201).send("Agent created successfully");
    })
    .catch((error) => {
      // Handle any errors that occur during the process
      console.error("Error inserting agent:", error);
      return res.status(500).send("Internal server error");
    });
});
app.post("/logined_users", (req, res) => {
  user
    .findOne({ email: req.body.email })
    .then((resp) => {
      if (!resp) {
        // If no user is found, send a login failed message
        return res.status(401).send("Login Failed: User not found");
      }

      // If user is found, check the password
      if (resp.password === req.body.password) {
        // Password matches, send user data
        return res.send(resp);
      } else {
        // Password does not match
        return res.status(401).send("Login Failed: Incorrect password");
      }
    })
    .catch((error) => {
      // Handle any errors that occur during the database query
      console.error(error);
      return res.status(500).send("Internal Server Error");
    });
});
// user update
app.get("/userdata/:id", (req, res) => {
  user.findById(req.params.id).then((resp) => {
    res.send(resp);
  });
});
app.put("/userUpdated/:id", (req, res) => {
  user.findByIdAndUpdate(req.params.id, req.body).then((resp) => {
    res.send(resp);
  });
});

app.get("/userdetails", (req, res) => {
  user.find().then((resp) => {
    res.send(resp);
  });
});
app.delete("/user_del/:id", async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
  } catch (r) {
    res.send("not found");
  }
});
app.put("/user_status/:id", async (req, res) => {
  const myuser = await user.findById(req.params.id);
  myuser.Status = myuser.Status === 1 ? 0 : 1;
  await myuser.save();
});

//track the courier
app.get("/trackCouerier/search", async (req, res) => {
  var query = req.query.q || " ";
  var item = await coureir_data.find({
    tracking: { $regex: query, $options: "i" },
  });
  res.send(item);
});
// for showing the couerier to the user spefic
app.get("/fetchcourier/:userId", (req, res) => {
  coureir_data.find({ userId: req.params.userId }).then((resp) => {
    res.send(resp);
  });
});

//forget Password
app.put("/foregtPassword",async(req,res)=>{
    try{
 var emailuser = await  user.findOne({email:req.body.email});
   emailuser.password = req.body.password;
  await  emailuser .save();
  res.send(emailuser)}
  catch(r){
   res.status(500).send("Internal server error");
  }
})
console.log("okay");
app.listen(1234);
