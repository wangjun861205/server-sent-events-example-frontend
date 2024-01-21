import { useParams } from "react-router-dom";
import { MessageList } from "../components/message-list";
import { MessageInput } from "../components/message-input";

export const HomePage = () => {
  const { uid } = useParams();

  return (
    <>
      <MessageList uid={uid!} />
      <MessageInput />
    </>
  );
};
