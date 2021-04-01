import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto } from "../../store/action/action";
import { getComments } from "../../store/action/action";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhoto());
    dispatch(getComments());
  }, []);

  const photoDetails = useSelector((state) => state.photoReducer.data);
  const comments = useSelector((state) => state.commentsReducer.data);
  return (
    <div>
      <div className="center">
        <div className="navbar">
          <button>
            <img
              className="camera"
              src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png"
              alt="camera"
              width="15%"
            />
          </button>
          <img
            className="insta"
            src="https://thepracticaldev.s3.amazonaws.com/i/9dgus6e6o80pv1gx8y7t.png"
            alt="logo"
            width="25%"
          />
          <button>
            <img
              className="send"
              src="https://pngimage.net/wp-content/uploads/2018/06/send-button-icon-png-6.png"
              alt="dm"
            />{" "}
          </button>
        </div>

        <div className="profile">
          <p className="photo-info">{photoDetails.author}</p>
          <img src={photoDetails.download_url} alt="images" width="100%" />
          {/* <img src={image.download_url} alt="images" width="100%" /> */}
          {/* {comments.map((comment) => (
          <>
            <p className="photo-info">
              <span>{comment.name}</span> - {comment.body}
            </p>
          </>
        ))} */}
        </div>

        {comments.length > 0 &&
          comments.map((comment) => (
            <>
              <p className="photo-info">
                <span>{comment.name}</span> - {comment.body}
              </p>
            </>
          ))}

        <div className="navbar2">
          <img className="bar" />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
