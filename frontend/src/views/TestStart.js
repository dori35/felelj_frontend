import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import md5 from "md5";

export function TestStart() {
  const dispatch = useDispatch();
  const { createdTestId } = useParams();
  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log(md5(`${createdTestId}`));
    //elkuldeni a szervernek
    setUrl(md5(`${createdTestId}`));
  }, [dispatch, createdTestId]);
  return <>{url}</>;
}
