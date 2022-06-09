import React,{useState} from 'react'

export const Login = () => {
const [registros,setRegistros] = useState("");

    const [usuario,setUsuario] = useState(""); //Crea variables y la funcion
    const [password,setPassword] = useState("");

    
  return (
    <>
        <form>
  <div class="form-group">
    <label for="iUsuario">Usuario</label>
    <input type="text" class="form-control" id="iUsuario" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </>
  )
}
