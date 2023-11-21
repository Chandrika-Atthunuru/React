

// import Watch from './Text 1';
// import'./Text 1.css';
// import restarantdata from "./data"
// import'./data.css';
// import React,{ useState } from 'react';
// import personsdata from "./data"
// import React,{useEffect,useReducer,useState} from 'react';
// import React,{useReducer, useRef, useState} from 'react';
// import Cocktail from './Text 1'
// import Personsdata from './Text 1'
// import React , { useCallback, useState } from "react";
// import Button from "./Button";
// import Count from './Text 1';
import { Route,Routes, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Success from "./Sucess";
import Restaurant from "./Restaurents";
import Existing from "./Existng";
import New from "./New";






// single compound
// function App() {
//   return (
//     <div className="App">
//      <h1 style={{color:"pink",fontSize:"40px"}}>hello</h1>
//      <div><h1 style={{color:"purple"}}>chandrika</h1></div>
//      <Details/>
//      <Name/>
//     </div>
//   );
// }

// // multiple compounds in single app

// function Name() {
//   return (
//     <div className="App">
//      <Image/>
//     </div>
//   );
// }
// const Image =()=>{
//   return(
//     <>
//     <h1>nature</h1>
//     <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" height={300} width={600}/>
//     </>
//   )
// }
// // we can import multiple components in single app
// // function App() {
// //     return (
// //      <div className="App">
// //        <Text/>
// //       </div>
// //     );
// //  }

// // we can add mulitiple varaibles before the return and we can call the data inside
// function Details() {
//   let person ={
//     name:"chandu",
//     place:"polisettipadu"
//   }
//       return (
//        <div>
//          <Text/>
//          <h1>{person.name} Is coming from {person.place}</h1>
//         </div>
//       );
//    }
  //  props
  // function App() {
  //   return(
  //     <div>
  //     <Restaurant dishes="egg rice"/>
    
  //     </div>

  //   );
  // }

  // let image="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
  // let name="srikanya"
  // let cuisines ="cuisines: italic,indian"
  // let rating="rating:4 star"
  // const Restaurant=(props)=>{
  //    console.log(props)
  //   return(
  //     <>
  //     <img src={image}/>
  //     <h3>{name}</h3>
  //     <h3>{cuisines}</h3>
  //     <h3>{rating}</h3>
  //     </>
  //   )
  // }

  // multiple varibles in probs
  // function App() {
  //     return(
  //       <div>
  //       <Restaurant image={srikanya.image} name={srikanya.name} cuisines={srikanya.cuisines} rating={srikanya.rating}  />
  //       <Restaurant image={kfc.image} name={kfc.name} cuisines={kfc.cuisines} rating={kfc.rating}  />
      
  //       </div>
  
  //     );
  //   }
  //   let srikanya={
  //   image: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
  //    name:"srikanya",
  //   cuisines :"cuisines: italic,indian",
  //   rating:"rating:4 star"

  //   }
  //  let kfc={
  //  image:"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
  //  name:"kfc",
  //  cuisines :"cuisines: italic,indian",
  //  rating:"5 star"
  //  }
  //   const Restaurant=(props)=>{
  //      console.log(props)
  //     return(
  //       <>
  //       <img src={props.image}/>
  //       <h3>{props.name}</h3>
  //       <h3>{props.cuisines}</h3>
  //       <h3>{props.rating}</h3>
  //       </>
  //     )
  //   }
  // array of objects in single app
  // function App() {
  //   return (
  //       <div className="two">
  //     { 
  //       data.map((eachobj)=>{
  //       const {image,name,cuisines,rating}=eachobj; 
  //     // <Restaurant image={eachobj.image} name={eachobj.name} cuisines={eachobj.cuisines} rating={eachobj.rating}/>
  //      return <Restaurant image={image} name={name} cuisines={cuisines} rating={rating}/>
        
  //     })
  //   }
  //   </div>
  //   )}
  //   const Restaurant=(props)=>{
  //          console.log(props)
  //         return(
  //           <>
  //           <img src={props.image}/>
  //           <h3>{props.name}</h3>
  //           <h3>{props.cuisines}</h3>
  //           <h3>{props.rating}</h3>
  //           </>
  //         )
  //       }

  // hooks
  // used to create variable.in this we used two varaibles one is data and another one is used for update data
  // function App() {
  //   const [data,updatedata]=useState(10)
  //   const decreasehandler=()=>{
  //     updatedata(data-1)
  //   }
  //   const increasehandler=()=>{
  //     updatedata(data+1)
  //   }

  //     return(
  //       <div>
  //       <button onClick={decreasehandler}>-</button>
  //       <span>{data}</span>
  //       <button onClick={increasehandler}>+</button>
      
  //       </div>
  
  //     );
  //   }
// example of usestate
//  function App() {
//   const[data,setdata] =useState(restarantdata)
//   const deletehandler=(recieveid)=>{
//     // console.log(recieveid)
//    const filterdata=data.filter((eachobj)=>{
//     return eachobj.id !== recieveid
//     } )
//     setdata(filterdata)
//     };
//     const updatehandler=(recieveid)=>{
//      const updatedata=data.map((eachobj)=>{
//       return eachobj.id === recieveid
//      })
//      setdata(updatedata)
//     }
//     return(
//     <div>
//     <ul>
//       {
//         data.map((eachobj)=>{
//           const {image,name,cuisines,rating,id}=eachobj
//           return (
//           <li key={id}>
//            <div><img src={image}/></div> 
//            <div>{name}</div>
//            <div>{cuisines}</div>
//            <div>{rating}</div>
//            <button onClick={()=> deletehandler(id)}>delete</button>
//            <button onClick={()=> updatehandler(id)}>update</button>
//            </li>
//           )
//         })
//       }
//     </ul>
//     </div>
//  )}

// example
// function App(){
//   const[data,setdata]=useState(personsdata)
   
//   const deletedata=(recieveid)=>{
//     const filterdata=data.filter((eachperson)=>{
//     return eachperson.id!==recieveid
//   })
//   setdata(filterdata)
//   }
// return(
//   <div>
//    {    
//       data.map((eachperson)=>{
//       const {name,username,email,phone,id}=eachperson
//       return(

//       <div key={id}>
//         <tr>   
//        <div>{name}</div>
//        <div>{username}</div> 
//        <div>{email}</div>
//        <div>{phone}</div>
//        <button onClick={()=>deletedata(id)}>delete</button>
//        </tr>
//        </div>
//        )}
//     )}
//   </div>
// )

// }
// use effect
// function App(){
//   const url="https://jsonplaceholder.typicode.com/users"
//   const [userdata,setdata]=useState([])
//   const fetchuserdata=async (apiurl)=>{
//  const response =await fetch(apiurl)
//  const data=await response.json()
//  setdata(data)
// // console.log(data)
//   }
//   useEffect(()=>{
//     fetchuserdata(url)
//   },[])
//   return(
//     <div>
//       {
//       userdata.map((apiurl)=>{
//       const{name,username,email,phone,id}=apiurl
//       return(
//         <li key={id}>
//           <div>{name}</div>
//           <div>{username}</div>
//           <div>{email}</div>
//           <div>{phone}</div>
//         </li>
//       )

//     })
//   }
//     </div>
//   )
// }
// usecontext
// export const usercontext = React.createContext()
// function App(){
  
//   return(
//     <div>
//       <div className='App'>
//       <usercontext.Provider value={"coming from usecontext"}>
//         <Text/>
//       </usercontext.Provider>
//       </div>
//     </div>
//   )
// }
  
// example of use context
//  export const usecontext = React.createContext()
//  function App(){
//   let product={
//     name:"phone",
//     price:20000,
//     battery:"5000vh"
//   }

//   return(
//     <>
//     <div>
//       <usecontext.Provider value={product.name}>
//         <Text/>
//       </usecontext.Provider>
//     </div>
    
//     </>
//   )
//  }
// usereducer
// const intialisation={count:0}
// function reducer(state,action){
// switch (action.type){
//   case "increament":return {count : state.count +1}
//   case "decreament":return {count : state.count -1}
//   default:throw new Error()
// }
// }

// function App(){
//   const [state,dispatch]=useReducer(reducer,intialisation)
//   return(
//     <>
//     count:{state.count}
//    <button onClick={()=>dispatch({type:"decreament"})}>-</button>
//    <button onClick={()=>dispatch({type:"increament"})}>+</button>
//     </>
//   )
// }
// example for use reducer
// function reducer(state,action){
//   switch(action.type){
//     case "increament_age":return{
//     name:state.name,
//     age:state.age+1
//     };
//     case "changed_name":return{
//     name:action.nextName,
//     age:state.age
//     };
//   }
// }
// const intialisation={name:"chandrika", age:24};
// function App(){
//   const [state, dispatch]=useReducer(reducer,intialisation);

// const  handleButtononClick=()=>{
//   dispatch({type:"increament_age"})
// }
// const  handleinputchange=(e)=>{
//   dispatch ({
//   type:"changed_name",
//   nextName:e.target.value
// })
// }
//  return(
//   <div>
//     <input value={state.name} onChange={handleinputchange}/>
//     <button onClick={handleButtononClick}>increament age</button>
//     <p>{state.name}.you are {state.age}</p>
//   </div>
//  ) 
// }
// useref()
// function App(){
//   let ref=useRef(0)
//   function handleclick(){
//     ref.current=ref.current+1
//     alert("clicked"+ ref.current+"times!")
//   }
//   return(
//     <div>
//       <button onClick={handleclick}>share post</button>
//     </div>
//   )
// }
// example of useMemo
// function App(){
//   const [count,setcount] =useState(0);
//   const [number,setnumber]=useState(10);
//   const factorial=React.useMemo(()=>fact(number),[number])
//   const handelChange=()=>{
//     setcount(count+1)
//   }
//   return(
//     <>
//     {factorial}
//     <button onClick={handelChange}>share</button>
//     {count}
//     </> 
//   )
//   }
// const fact=(n)=>{
//   let answer =1;
//  for (var i=n;i>=1;i--){
//   answer=answer*i
//  }
//  console.log("Factorial called")
//  return answer
// }
// useCallback
  //   function App(){

  //   const [age,setage]= useState(0)
  //   const [salary,setsalary]= useState(5000)
  //   const increamentage= useCallback(()=>{
  //     setage(age+1)
  //   },[age])
  //   const increamentsalary= useCallback(()=>{
  //   setsalary(salary+1000)
  //   },[salary])

  //   return(
  //   <div>
  //   <Count text={"age"} number={age}/>
  //   <Button clickhandler={increamentage}>increamentage</Button>
  //   <Count text={"salary"} number={salary}/>
  //   <Button clickhandler={increamentsalary}>increamentsalary</Button>
  //   </div>
  // )
  // }
  //  export default App;
  //  example
  // function App(){
  //   const [usersdata,setusersdata]=useState(personsdata)
  //   const [searchdata,setsearchdata]=useState("")
    
  //   const showdata=()=>{
  //     const fetchdata=getdetailsbyname(usersdata);
  //     setsearchdata(fetchdata);
  //   }
  //   const getdetailsbyname = (usersdata)=>{
  //    return `${usersdata}`
  //   }
  //   return(
  //     <div>
  //       <input type="text" placeholder="search" value={usersdata} onChange={(e)=>setusersdata(e.target.value)}/>
  //       <button onClick={showdata}>search</button>
  //       <div>
  //         {searchdata &&<p>{searchdata}</p>}
  //       </div>
  //     </div>
  //   )
  // }
  // React-Router-dom/to install react-router-dom - npm install react-router-dom
  // routes,route
  // navlink-it tells the link is active
  // link- it will show the link like anchortag
  
  function App(){
    return(
      <div>
        <h1>React</h1>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Home/>}>Home</Route>
          <Route path='/Contact'element={<Contact/>}>Contact</Route>
          <Route path='/Service' element={<Service/>}>Service</Route>
          <Route path='/About' element={<About/>}>About</Route>
          <Route path='*' element={<Pagenotfound/>}></Route>
          <Route path="/Success" element={<Success/>}></Route>
          <Route path="/Restaurant" element={<Restaurant/>}>
          <Route path="Existing" element={<Existing/>}/>
          <Route path="new" element={<New/>}/>
          </Route>
        </Routes>
      </div>
    )
  }
  const Home=()=>{
    const navigate=useNavigate();
    const changehandler=()=>{
      navigate('/Success')
    }
    return(
      <>
      <div>
      This is Home component
      </div>
      <button onClick={changehandler}>show </button>
      </>
    )
  }
  const Contact=()=>{
    return(
      <div>
       This is Contact component
      </div>
    )
  }
  const Service=()=>{
    return(
      <div>
     This is Service component
      </div>
    )
  }
  const About=()=>{
    return(
      <div>
     This is About component
      </div>
    )
  }
  const Pagenotfound=()=>{
    return(
      <div>
      page not found
      </div>
    )
  }
  const Navbar=()=>{
    return(
      <div>
        <nav>
        {/* <Link to='/'>Home</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/Service'>Service</Link>
        <Link to='/About'>About</Link> */}
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
        <NavLink to='/Service'>Service</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Restaurant'>Restaurant</NavLink>
        </nav>
      </div>
    )
  }
  export default App