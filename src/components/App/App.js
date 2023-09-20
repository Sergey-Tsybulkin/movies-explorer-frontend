import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as mainApi from '../../utils/MainApi';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  

  const [isLoading, setIsLoading] = useState(false);

  const path = location.pathname;

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .getToken(jwt)
        .then((res) => {
          if (res) {
            localStorage.removeItem('everyMovies');
            setIsLoggedIn(true);
          }
          navigate(path);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleLogin({ email, password }) {
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          navigate('./movies');
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleRegister({ name, email, password }) {
    mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleError(err) {
    if (err === '401') {
      handleSignOut();
    }
  }

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('movieSearch');
    localStorage.removeItem('shortMovies');
    localStorage.removeItem('everyMovies');
    localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserData()
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
        })
        .catch((err) => {
          console.log(err);
        });
      mainApi
        .getMovies()
        .then((cardsData) => {
          console.log(cardsData);
          setSavedMovies(cardsData.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn, navigate]);

  function handleDeleteCard(card) {
    mainApi
      .deleteMovie(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== card._id),
        );
      })
      .catch((err) => {
        console.log(err);
        handleError(err);
      });
  }

  function handleLikeCard(card) {
    mainApi
      .addMovie(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
        handleError(err);
      });
  }

  function handleUpdateUser(newUserInfo) {
    setIsLoading(true);
    mainApi
      .updateUserData(newUserInfo)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
        handleError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path="/signup"
              element={
                <Register onRegister={handleRegister} isLoading={isLoading} />
              }
            />
            <Route
              path="/signin"
              element={<Login onLogin={handleLogin} isLoading={isLoading} />}
            />
            <Route
              path="/"
              element={
                <>
                  <Header loggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route
              path={"/movies"}
              element={
                <ProtectedRoute
                  path="/movies"
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteMovie={handleDeleteCard}
                  component={Movies}
                  handleLikeFilm={handleLikeCard}
                />
              }
            />
            <Route
              path={"/saved-movies"}
              element={
                <ProtectedRoute
                  path="/saved-movies"
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteMovie={handleDeleteCard}
                  component={SavedMovies}
                />
              }
            />
            <Route
              path={'/profile'}
              element={
                <ProtectedRoute
                  path="/profile"
                  signOut={handleSignOut}
                  onUpdateUser={handleUpdateUser}
                  loggedIn={isLoggedIn}
                  component={Profile}
                  isLoading={isLoading}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
