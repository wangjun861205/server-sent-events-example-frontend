export const sendMessage = async (
  uid: string,
  message: string
): Promise<void> => {
  const res = await fetch(`/users/${uid}/messages`, {
    method: "POST",
    body: message,
  });
  if (res.status !== 200) {
    throw Error(
      `发送消息失败(status code: ${res.status}): ${await res.text()}`
    );
  }
};
