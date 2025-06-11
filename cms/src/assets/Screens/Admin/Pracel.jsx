import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import style from '../../css/style.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Pracel = () => {
  var nav=useNavigate();

      var [Parcels,pracelset]=useState({

        tracking:0,
        // //send details
        s_name:"",
        s_address:"",
        s_phone:0,
        // // receiver details
        r_name:"",
        r_address:"",
        r_phone:0,
        // // pracel details
        Status:"",
        company:"",
        Type:"",
        BranchProcessed:"",
        Pickup_Branch:"",
        Weight:0,
        Height:0,
        Length:0,
        Width:0,
        price: 0,
          delivery_data:""

      })
      var inputHandle=(e)=>{
      pracelset({...Parcels,[e.target.name]:e.target.value})
      }

      var insertvalues=(e)=>{
        e.preventDefault();
        var int= Math.floor(Math.random()*1000000000000)+1;
        Parcels.tracking=int;
       Parcels.price= Parcels.Weight * Parcels.Height * Parcels.Width * Parcels.Length;
       alert("The Courier is created now ");
       axios.post("http://localhost:1234/couierInserted",Parcels).then((resp)=>{
        pracelset({
            
        tracking:"",
        // //send details
        s_name:"",
        s_address:"",
        s_phone:0,
        // // receiver details
        r_name:"",
        r_address:"",
        r_phone:0,
        // // pracel details
        company:"",
        Type:"",
        BranchProcessed:"",
        Pickup_Branch:"",
        Weight:0,
        Height:0,
        Length:0,
        Width:0,
        price: 0,
        Status:"",
        delivery_data:""
        });
        nav("/couerier")
       })

      }
      var [fetch_types,typesdetails]=useState([])
      var fetch_data=()=>{
      axios.get("http://localhost:1234/fetch_types").then((resp)=>{
          typesdetails(resp.data)
      })
      }
      var [brnach_data,branchFetch]=useState([])
      var fecth_branch_detail=()=>{
        axios.get("http://localhost:1234/branch_fetch").then((resp)=>{branchFetch(resp.data)})
      }
      var [company_data,companiesfetch]=useState([]);
var company_fetch=()=>{
  axios.get("http://localhost:1234/fetch_company").then((resp)=>{
    companiesfetch(resp.data);
    console.log(resp.data)
  })
}
      useEffect(()=>{
          fetch_data(),
          fecth_branch_detail(),
          company_fetch()

      },[])
    return (
    <div>
      <Layout></Layout>
      <div className="container-fluid">
          <div className={style.maincontent}>
        <h1 className='font-bold'> Add Courier Details</h1>
           
            <div >
              <form onSubmit={insertvalues}>
        <div className={style.section}>
            <div className={style.container}>
             
                <div className={style.grid_1}>
                    <h2 class="font-bold mb-2">Sender Information</h2>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1">Name</label>
                        <input type="text" class="w-full border rounded p-2" placeholder=' enter name' onChange={inputHandle}  name='s_name' value={Parcels.s_name}/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1">Address</label>
                        <input type="text" class="w-full border rounded p-2" placeholder=' enter address' onChange={inputHandle}  name='s_address' value={Parcels.s_address}/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1">Contact #</label>
                        <input type="text" class="w-full border rounded p-2" placeholder='enter phone No' onChange={inputHandle}  name='s_phone'  value={Parcels.s_phone}

                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1">Delivery Date</label>
                        <input type="date" class="w-full border rounded p-2"  onChange={inputHandle}  name='delivery_data'  value={Parcels.delivery_data}

                        />
                    </div>
                </div>
                <div className={style.grid_2}>
                    <h2 class="font-bold mb-2">Recipient Information</h2>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1">Name</label>
                        <input type="text" class="w-full border rounded p-2"  placeholder=' enter name' onChange={inputHandle}  name='r_name' value={Parcels.r_name} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1">Address</label>
                        <input type="text" class="w-full border rounded p-2"  placeholder=' enter name' onChange={inputHandle}  name='r_address' value={Parcels.r_address} 
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1">Contact #</label>
                        <input type="text" class="w-full border rounded p-2"  onChange={inputHandle}  name='r_phone' placeholder='enter phone No' value={Parcels.r_phone} />
                    </div>
                </div>
            </div>

            <div className={style.branch}>
                  <div class={style.mb_4}>
                  <label class="block text-sm font-medium mb-1">Status</label>
<select class="w-full border rounded p-2" name='Status' onChange={inputHandle} value={Parcels.Status}>
    <option hidden>Please select here</option>
    <option value={"pending"}>Pending</option>
    <option value={"approved"}>Approved</option>
    <option value={"rejected"}>Rejected</option>
    <option value={"in_progress"}>In Progress</option>
    <option value={"completed"}>Completed</option>
    <option value={"on_hold"}>On Hold</option>
</select>
                    </div>
            <div class={style.mb_4}>
                        <label class="block text-sm font-medium mb-1">Company</label>
                        <select class="w-full border rounded p-2" name='company' value={Parcels.company} onChange={inputHandle}>
                            <option hidden>Please select here</option>
                            {
                        company_data.map((con)=>(
                            <option value={con.name}> {con.name}</option>
                        ))
                            }
                        </select>
                    </div>
            <div class={style.mb_4}>
                        <label class="block text-sm font-medium mb-1">Type</label>
                        <select class="w-full border rounded p-2" name='Type' value={Parcels.Type} onChange={inputHandle}>
                            <option hidden>Please select here</option>
                            {
                        fetch_types.map((con)=>(
                            <option value={con.name}> {con.name}</option>
                        ))
                            }
                        </select>
                    </div>
                    <div class={style.mb_4}>
                        <label class="block text-sm font-medium mb-1">Branch Processed</label>
                        <select class="w-full border rounded p-2" name='BranchProcessed'  value={Parcels.BranchProcessed} onChange={inputHandle}>
                            <option hidden>Please select here</option>
                            {
                        brnach_data.map((con)=>(
                            <option value={con.name}> {con.name}</option>
                        ))
                            }
                        </select>
                    </div>
                    <div class={style.mb_4}>
                        <label class="block text-sm font-medium mb-1">Pickup Branch</label>
                        <select class="w-full border rounded p-2" name='Pickup_Branch' value={Parcels.Pickup_Branch} onChange={inputHandle}>
                        <option hidden>Please select here</option>
                            {
                        brnach_data.map((con)=>(
                            <option value={con.name}> {con.name}</option>
                        ))
                            }
                        </select>
                    </div>
                    </div>
                    
        </div>
   
        <div class="section">
            <h2 class="font-bold mb-2">Parcel Information</h2>
            <div class="grid grid-5">
<div className={style.grid_3}>

                <div>
                    <label class="block text-sm font-medium mb-1">Weight</label>
                    <input type="text" class="w-full border rounded p-2" onChange={inputHandle} name='Weight' 
                   placeholder='Weight' value={Parcels.Weight}/>
                </div>
                <div>
                    <label class="block text-sm font-medium mb-1">Height</label>
                    <input type="text" name='Height' class="w-full border rounded p-2" onChange={inputHandle} 
                 placeholder='Height'  value={Parcels.Height}/>
                </div>
               
          
                <div>
                    <label class="block text-sm font-medium mb-1">Length</label>
                    <input type="text" name='Length' class="w-full border rounded p-2" onChange={inputHandle} placeholder='Length'  value={Parcels.Length}/>
                </div>
                <div>
                    <label class="block text-sm font-medium mb-1">Width</label>
                    <input type="text"  name="Width" class="w-full border rounded p-2"  onChange={inputHandle} placeholder='Width' value={Parcels.Width}/>
                </div>
                </div>
                </div>
                
                <div className={style.grid_4}>
                    <label class="block text-sm font-medium mb-1">Price
                        :
                    </label>
                    <div class="flex items-center">
                    <h5 class="">{Parcels.Weight * Parcels.Height * Parcels.Width * Parcels.Length}</h5>
                 
                    </div>
                </div>
            </div>
            <div className={style.grid_5}>
       <button class={style.btn1} type='submit'>Save</button>
       <div className={style.btn123}>
       <button class={style.btn1 }>Cancel</button>
        
        </div>
        </div>
   
            </form>
    
       
       </div>
       
       </div>
    </div>
 
    </div>
 
    
  )
}

export default Pracel
