import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";
import { TextInput, Group, Button, PasswordInput } from "@mantine/core";
import { useState } from "react";
const NewUser = () => {
  const [data, setData] = useState("");

  const form = useForm({
    initialValues: {
      Username: "",
      password: "",
    },
    validate: {
      Username: (value) => (value.length > 0 ? null : "Enter Username"),
    },
  });

  const submitHandler = () => {
    setData(form.values);
    console.log(data);
  };
  return (
    <div className="rounded-2xl w-[450px] border border-black p-2 bg-[#101a3f]">
      <form onSubmit={form.onSubmit(submitHandler)}>
        <div className="flex flex-col gap-10 m-11">
          <TextInput
            placeholder="Username"
            withAsterisk
            className=""
            {...form.getInputProps("Username")}
          />

          <PasswordInput
            placeholder="Password"
            withAsterisk
            {...form.getInputProps("password")}
          />
        </div>
        <Group position="center">
          <Button type="submit">LogIN</Button>
        </Group>
      </form>
      <div className="text-white flex gap-1 justify-center ">
        <p>Dont have an account</p>
        <Link to="/register">REGISTER</Link>
      </div>
    </div>
  );
};

export default NewUser;
