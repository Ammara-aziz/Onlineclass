import Image from "next/image";
import { use } from "react";

function Displaydata() {
  // data came from backened
  const user = {
    name: "Ammara Gul",
    role: "Web developer",
    age: 18,
    email: "amaraziz@gmail.com",
    imageUrl:
      "https://media.istockphoto.com/id/1070568512/photo/portrait-of-a-malay-woman-from-malaysia.jpg?s=612x612&w=0&k=20&c=SfY6s1oJRQh6WHGrxrX8NsX-ERiKz6hUnvPsAP3y0I0=",
    imageSize: 90,
  };
  return (
    <div className="mt-2">
      My User Info <br />
      Display dAta
      <div className="font-semibold text-md">
        {`in react want to print value of variable,object => data should be added in curly baraces =>support jsx syntax`}
        <br></br> Name : {user.name}
      </div>
      <div>Role : {user.role}</div>
      <div>Age : {user.age}</div>
      <div>Email : {user.email}</div>
      <div className="flex gap-5">
      <Image
      className="rounded-full "
        src={user.imageUrl}
        alt=""
        width={user.imageSize}
        height={user.imageSize}
      ></Image>
      <Image className="rounded-md"
        src={require("../assets/pic.png")}
        alt=""
        width={100}
        height={120}
      ></Image>
      </div>
    </div>
  );
}
export default Displaydata;
