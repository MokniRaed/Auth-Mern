import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchContact } from "../../Api/auth";
import { setAuth } from "../../store/authSlice";


const Compte = () => {
  //getting hooks
  const user = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //get authenticated user
  const getContact = async () => {
    const user = await fetchContact();
    console.log(user, "user");
    dispatch(setAuth(user));
  };
  // logout and delete token
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  //call getuser api
  useEffect(() => {
    getContact();
  }, []);




  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text onClick={() => logout()}>
              Signed in as: <a href="#login">{user.name}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>You are authoraized</h1>
       {/* {token ? :<h1>Not authoraized</h1>} */}
    </div>
  );
};

export default Compte;
