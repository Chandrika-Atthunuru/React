// import { usercontext } from "./App";
import React, { useEffect, useState } from "react";
// function Text() {
//       return (
//         <div id="one">
//          <h1>hello</h1>
//          <Name/>
//         </div>
//       );
//     }
//     const Name=()=>{
//       return(
//         <div>
//          <h2>chandrika atthunuru</h2>
//         </div>
//       )
//     }
// usecontext
// const Text=()=>{
//   return(
//     <div>
//       <usercontext.Consumer>
//       {value=><div>{value}</div>}
//       </usercontext.Consumer>
      
//     </div>
//   )
// }
//  example of usecontext
//  import { usecontext } from "./App";
//  const Text=()=>{
//   return(
//    <>
//    <usecontext.Consumer>
//     {value=><div>{value}</div>}
//    </usecontext.Consumer>
//    </>
//   )
  
//  }
// example of useref
// const Watch=()=>{
//    const [starttime,setstarttime]=useState(null)
//    const[now, setnow]=useState(null)
//    const intervalref=useRef(null)
//    function handlestart() {
//       setstarttime(Date.now())
//       setnow(Date.now())
//       // clearInterval(intervalref.current)
//       intervalref.current=setInterval(()=>{
//          setstarttime(Date.now())
//       })
//    }
//    function stoptime(){
//       clearInterval(intervalref.current)
//    }
//    let secondsPassed=0;
//    if(starttime !== null && now !==null){
//       secondsPassed = (starttime-now)/1000
//    }

//    return(
//       <>
//       <h4>{secondsPassed.toFixed(3)}</h4>
//       <button onClick={handlestart}>starttime</button>
//       <button onClick={stoptime}>stoptime</button>
//       </>
//    )
// }
// const Watch=()=>{
//    const [starttime,setstarttime]=useState(null)
//    const [stoptime,setstoptime]=useState(null)
//    const intervalref=useRef(null)
//    function timestart(){
//       setstarttime(Date.now())
//       setstoptime(Date.now())
//       clearInterval(intervalref.current)
//       intervalref.current=setInterval(()=>{
//          setstarttime(Date.now())
//       })
//    }
//    function timestop(){
//       clearInterval(intervalref.current)
//    }
//    let secondsPassed=0
//    if(starttime !== null && stoptime !== null){
//       secondsPassed=(starttime-stoptime)/1000
//    }

      
//    return(
//       <>
//       <h3>{secondsPassed.toFixed(5)}</h3>
//       <button onClick={timestart}>starttime</button>
//       <button onClick={timestop}>stoptime</button>
//       </>
//    )
// }



//     export default Watch ;
// real time example for usestate,useeffect
// const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// const Cocktail =()=>{
//    const [userdata,setuserdata]=useState([])
//    const[searchterm,setsearchterm]=useState('')
//    const[loading,setloading]=useState(false);
//    const[iserror,setiserror]=useState({status:false,msg:''})
// const fetchdata=async (apiurl)=>{
//    setloading(true)
//    setiserror({status:false,msg:''})
//    try{
//    const response=await fetch(apiurl);
//     const {drinks} = await response.json();
//     setuserdata(drinks)
//     setloading(false)
//     setiserror({status:false,msg:''})
//     if(!drinks){
//       throw new Error("Data not found")
//     }
// }
// catch(error){
//    setloading(false)
//    setiserror({status:true,msg:error.message ||"something went wrong..."})
// }
// }
// useEffect(()=>{
//    const correcturl=`${url}${searchterm}`
//    fetchdata(correcturl)
// },[searchterm])

//    return(
//       < div className="one">
//       <div>
//          <input type="text" className="search" placeholder="search" value={searchterm} onChange={(e)=>setsearchterm(e.target.value)}/>
//       </div>
//       <hr id="line"/>
//       {loading && !iserror?.status&&<h5>loading.....</h5>}
//       {iserror?.status && <h5 style={{color:"red"}}>{iserror.msg}</h5>}
//       {
//        !loading && !iserror?.status &&
//        <ul id="direction">
//          {
//          userdata.map((eachDrink)=>{
//             const {idDrink,strDrink,strDrinkThumb}=eachDrink;
//             return(
//                <li key={idDrink} type="none" >
//                <div className="image">
//                <img src={strDrinkThumb} />
//                </div>
//                <div className="brandname">{strDrink}</div>
//                </li>
//             )
//          })

//       }
//       </ul>
//       }
//       </div>
//    )
// }
// export default Cocktail;
// example 
// const url="https://jsonplaceholder.typicode.com/posts"
// const Personsdata=()=>{
//    const[usersdata,setdata]=useState([])

//    const fetchdata=async(apiurl)=>{
//       const response=await fetch(apiurl)
//       const data=await response.json()
//       setdata(data)
//    }
//    useEffect(()=>{
//       fetchdata(url)
//    })
//    return(
//       <>
//       {
//       usersdata.map((eachobj)=>{
//          const{userid,id,title,body}=eachobj
//          return(
//             <li key={id}>
//             <div>{userid}</div>
//             <div>{title}</div>
//             <div>{body}</div>
//             </li>
//          )

//       })
//       }
//       </>
//    )
// }
// export default Personsdata;
const Count=({text,number})=>{
console.log(`${text} rendered`)
return(
   <div>
      {text},{number}
   </div>
)
}
export default React.memo(Count)