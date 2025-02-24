import { useState, useContext } from "react";

import axios from "axios";

import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Link from "./components/Link";

import { Context } from "../functions/context";
import { projectId } from "../functions/constants";
import { PersonObject } from "react-chat-engine-advanced";

interface LogInFormProps {
  onHasNoAccount: () => void;
}

const LogInForm = (props: LogInFormProps) => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Hooks
  const { setUser } = useContext(Context);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const headers = {
      "Project-ID": projectId,
      "User-Name": email,
      "User-Secret": password,
    };

    axios
      .get("https://api.chatengine.io/users/me/", {
        headers,
      })
      .then((r) => {
        if (r.status === 200) {
          const user: PersonObject = {
            first_name: r.data.first_name,
            last_name: r.data.last_name,
            email: email,
            username: email,
            secret: password,
            avatar: r.data.avatar,
            custom_json: {},
            is_online: true,
          };
          setUser(user);
        }
      })
      .catch((e) => console.log("Error", e));
  };

  return (
    <div dir="center">
      <div className="form-title">مرحبا بك مرة اخرى</div>

{/*       <div className="form-subtitle">
        جديد هنا؟ <Link onClick={() => props.onHasNoAccount()}>إنشاء حساب</Link>
      </div> */}

      <form onSubmit={onSubmit}>
        <TextInput
          label="البريد الالكتروني"
          name="email"
          placeholder="ahmed@ahmed.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          label="كلمة المرور"
          name="password"
          placeholder="********"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">تسجيل الدخول</Button>
      </form>
    </div>
  );
};

export default LogInForm;
