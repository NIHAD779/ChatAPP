import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";
import { TextInput, Group, Button, PasswordInput } from "@mantine/core";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState("");

  const form = useForm({
    initialValues: {
      Username: "",
      email: "",
      password: "",
      confopassword: "",
    },
    validate: {
      Username: (value) => (value.length > 0 ? null : "Enter Username"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confopassword: (value) =>
        value !== form.values.password ? "Password Do Not Match" : null,
    },
  });

  const submitHandler = () => {
    setData(form.values);
    console.log(data);
  };
  return (
    <div className="rounded-xl w-[450px] border border-black p-2 bg-[#101a3f]">
      <form onSubmit={form.onSubmit(submitHandler)}>
        <div className="flex flex-col gap-10 m-11">
          <TextInput
            placeholder="Username"
            withAsterisk
            className="w-60"
            {...form.getInputProps("Username")}
          />
          <TextInput
            placeholder="Email"
            withAsterisk
            {...form.getInputProps("email")}
          />
          <PasswordInput
            placeholder="Password"
            withAsterisk
            {...form.getInputProps("password")}
          />
          <PasswordInput
            placeholder="Confirm Passowrd"
            withAsterisk
            {...form.getInputProps("confopassword")}
          />
        </div>
        <Group position="center">
          <Button type="submit">Create User</Button>
        </Group>
      </form>
      <div className="text-white flex gap-1 justify-center ">
        <p>Already Have an account</p>
        <Link to="/login">LogIN</Link>
      </div>
    </div>
  );
};

export default Login;
