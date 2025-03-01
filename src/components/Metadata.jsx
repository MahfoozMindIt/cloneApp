import { useEffect } from "react";

function MyComponent({metaData}) {
  useEffect(() => {
    document.title = `${metaData}`;
    // const metaDescription = document.createElement("meta");
    // metaDescription.name = `${metaData}`;
    // // metaDescription.content = "This is my page description.";
    // document.head.appendChild(metaDescription);

    // return () => {
    //   document.head.removeChild(metaDescription); 
    // };
  }, []);

  return ;
}

export default MyComponent;
