import * as React from "react";
import Container from "@mui/material/Container";
import { GlobalStyle } from "./Global";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Adoption from "./Pages/Adoption";
import Navbar from "./Components/Navbar";
import PetDetail from "./Pages/PetDetail";
import Community from "./Pages/Community";
import PostDetail from "./Pages/PostDetail";
import Notice from "./Pages/Notice";
import NoticeDetail from "./Pages/NoticeDetail";
import SendPet from "./Pages/SendPet";
import User from "./Pages/User";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {
  AdoptionRequest,
  CommunityFavorite,
  CommunityPost,
  DataForm,
  LogOut,
  KnowledgeFavorite,
  PetsFavorite,
  PetsSend,
  DeletedSend,
} from "./Pages/UserPanel";
import Knowledge from "./Pages/Knowledge";
import KnowledgePostDetail from "./Pages/KnowledgePostDetail";
import { useSelector } from "react-redux";
export default function App() {
  const user = useSelector((state) => state.user.currentUser);
  const userLogin = user === null ? false : true;
  console.log(userLogin);
  return (
    <>
      <GlobalStyle />

      <Router>
        {" "}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/adoption" element={<Adoption />}></Route>
          <Route path="/adoption/:id" element={<PetDetail />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/community/:id" element={<PostDetail />}></Route>
          {/* <Route path="/knowledge" element={<Knowledge />}></Route>
          <Route path="/knowledge/:id" element={<KnowledgePostDetail />}></Route> */}

          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/notice/:id" element={<NoticeDetail />}></Route>
          <Route
            path="/send"
            element={userLogin ? <SendPet /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/login"
            element={userLogin ? <Navigate to="/" /> : <Login />}
          ></Route>
          <Route
            path="/register"
            element={userLogin ? <Navigate to="/" /> : <Register />}
          ></Route>
          <Route
            path="/user"
            element={userLogin ? <User user={user} /> : <Navigate to="/" />}
          >
            <Route path="info/main" element={<DataForm />}></Route>
            <Route path="info/logout" element={<LogOut />}></Route>
            <Route path="post/send" element={<PetsSend />}></Route>
            <Route path="post/community" element={<CommunityPost />}></Route>
            <Route path="favorite/pets" element={<PetsFavorite />}></Route>
            <Route
              path="favorite/community"
              element={<CommunityFavorite />}
            ></Route>
            <Route
              path="favorite/knowledge"
              element={<KnowledgeFavorite />}
            ></Route>
            {/* <Route path="send/" element={<PetsSend />}></Route> */}
            <Route path="adoption/deleted" element={<DeletedSend />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
