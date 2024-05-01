import { useContext, useState } from "react";
import TextInput from "./components/TextInput";
import PhotoInput from "./components/PhotoInput";
import Button from "./components/Button";
import Link from "./components/Link";

interface SignUpFormProps {
    onHasAccount: () => void;
  }

const SignUpForm = (props: SignUpFormProps) => {
    // State
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState<File | undefined>(undefined);
    // Hooks
    const { setUser } = useContext(Context);
    const isMobile: boolean = useIsMobile();
  
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      const userJson: PersonObject = {
        email: email,
        username: email,
        first_name: firstName,
        last_name: lastName,
        secret: password,
        avatar: null,
        custom_json: {},
        is_online: true,
      };

return (
    <div>
      <div className="form-title">Create an account</div>

      <div className="form-subtitle">
        Already a member?{" "}
        <Link onClick={() => props.onHasAccount()}>Log in</Link>
      </div>

      <form onSubmit={onSubmit}>
        <TextInput
          label="First name"
          name="first_name"
          placeholder="Adam"
          style={{ width: isMobile ? "100%" : "calc(50% - 6px)" }}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextInput
          label="Last name"
          name="last_name"
          placeholder="La Morre"
          style={{
            width: isMobile ? "100%" : "calc(50% - 6px)",
            float: "right",
          }}
          onChange={(e) => setLastName(e.target.value)}
        />

        <TextInput
          label="Email"
          name="email"
          placeholder="adam@lamorre.co"
          style={{ width: isMobile ? "100%" : "calc(50% - 6px)" }}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          label="Password"
          name="password"
          placeholder="********"
          type="password"
          style={{
            width: isMobile ? "100%" : "calc(50% - 6px)",
            float: "right",
          }}
          onChange={(e) => setPassword(e.target.value)}
        />

        <PhotoInput 
          label="Profile picture"
          name="avatar"
          id="avatar-picker"
          style={{ width: isMobile ? "100%" : "calc(50% - 6px)" }}
          onChange={(e) => {
            if (e.target.files !== null) {
              setAvatar(e.target.files[0]);
            }
          }}
        />

        <Button
          type="submit"
          style={{
            width: isMobile ? "100%" : "calc(50% - 6px)",
            float: "right",
          }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
