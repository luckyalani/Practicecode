import React, { useState,useEffect } from 'react';
// for random id 
import uuid from 'react-uuid';
import axios from 'axios'

const App = () => {
  // email state
const [email,setemail]=useState('')
// password state
const [password,setpassword]=useState('')
// array for the todo list 
const [todo,settodo]=useState([
   
])
// confirm password state in react 
const [confrmpassword,setconfrmpassword]=useState('')
// const button function
const button=(e)=>{
  e.preventDefault();
  
if(password!=confrmpassword){
  alert("password not matched")
}else{
  settodo([...todo,{id:uuid(),
    email,password
  }])
  setemail('')
  setpassword('')
  setconfrmpassword('')
}
 
}
const [maxlength,setlength]=useState(10)



const mappedElements = todo.map((item) => {
  // for sending the jsx element to the dom model 
  return <div key={item.id}>{item.email}{item.password}{item.id}</div>;
});


// getting the id of the value 
const idcheck=mappedElements.length< maxlength ? todo[0]:null


const deleteEmail = (id) => {
  settodo(todo.filter((item) => item.id !== id));
};
// buttonstate\
const [buttonstate,setbuttonstate]=useState(false) 
// api state variable for the response data 
const [api,setapi]=useState([
])


useEffect(() => {
  axios.get('https://dummyjson.com/products')
    .then(response => {
      const responseData = response.data.products;
      setapi(responseData); // assuming the response has a 'products' array
      console.log(api); // log the data
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, [buttonstate]);

const showCategoryOptions = Array.isArray(api) ? api.map((product) => {
  return <div key={product.id}>{product.title}</div>;
}) : console.log(null);

const buttonfn=()=>{
  setbuttonstate(!buttonstate)
}



  return (
    
<>
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required=""
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
     
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required=""
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="">Confirm Passoword</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required=""
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={confrmpassword}
              onChange={(e)=>setconfrmpassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={button}
          >
            Sign in
          </button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a
          href="#"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Start a 14 day free trial
        </a>
      </p>
      
    </div>

  </div>
<button onClick={()=>deleteEmail(idcheck.id)} >remove</button>


  <div className='flex gap-3 justify-center flex-col items-center'>
    your email is {mappedElements}
    
  </div>
  <button onClick={buttonfn}>
    Reload Api
  </button>
  <div>your data is this   </div>


</>
  );
};

export default App;
