import { useContext, useState } from "react";

import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Link from "./components/Link";

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

return (
    <div>
      <div className="form-title">Welcome Back</div>

      <div className="form-subtitle">
        New here? <Link onClick={() => props.onHasNoAccount()}>Sign Up</Link>
      </div>

      <form onSubmit={onSubmit}>
        <TextInput
          label="Email"
          name="email"
          placeholder="adam@lamorre.co"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          label="Password"
          name="password"
          placeholder="********"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
};

export default LogInForm;
