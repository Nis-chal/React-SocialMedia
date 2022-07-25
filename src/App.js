import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Landing,
  Register,
  ProtectedRoute,
  Profile,
  ErrorPage,
  ExplorePage,
  BookmarkPage,
  SpecificCollectionPage,
  ShortsPage,
} from "./pages";
import {
  SharedLayout,
  PostPage,
  Postedit,
  SharedLayoutv2,
} from "./pages/dashboard";
import Postdetail from "./pages/dashboard/post-detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/register" element={<Register />} />

        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<PostPage />} />
          <Route path="postdetail/:id" element={<Postedit />} />
          <Route path="add-job" element={<Landing />} />

          <Route path="detailpost/:id" element={<Postdetail />} />
          <Route path="shorts" element={<ShortsPage />} />

          {/* <Route path="/profile" element={<Profile />} /> */}
        </Route>

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <SharedLayoutv2 />
            </ProtectedRoute>
          }
        >
          <Route index path=":id" element={<Profile />} />
          <Route path="explore" element={<ExplorePage />} />
          <Route path="bookmarks" element={<BookmarkPage />} />
          <Route path="collection/:id" element={<SpecificCollectionPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
