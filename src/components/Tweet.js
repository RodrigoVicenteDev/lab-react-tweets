import ProfileImage from "./profileimage/profileimage";
import User from "./User/User";
import TimeStamp from "./Timestamp/Timestamp";
import Message from "./Message/Message";
import Actions from "./Actions/Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
        <User userData={props.tweet.user} />


        <TimeStamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions/>

        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
