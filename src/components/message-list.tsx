import { List } from "antd";
import { useEffect, useState } from "react";

type MessageListProps = {
  uid: string;
};

export const MessageList = ({ uid }: MessageListProps) => {
  const [messages, setMessages] = useState<string[]>([]);
  console.log("uid:", uid);

  useEffect(() => {
    const source = new EventSource(`/users/${uid}/messages`, {
      withCredentials: true,
    });
    source.onerror = (error) => {
      console.error(error);
    };
    source.onmessage = (event) => {
      console.log(event);
      setMessages((prev) => [...prev, event.data]);
    };
    return () => source.close();
  }, []);

  return (
    <List>
      {messages.map((message) => (
        <List.Item>{message}</List.Item>
      ))}
    </List>
  );
};
