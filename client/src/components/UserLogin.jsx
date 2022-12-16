import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";
import { TextInput, Group, Button, PasswordInput } from "@mantine/core";
import { useState } from "react";
import { loginRoute } from "../utils/apiRoute";
import axios from "axios";
const UserLogin = () => {
    const [data, setData] = useState("");
  
    const form = useForm({
      initialValues: {
        username: "",
        password: "",
      },
      validate: {
        username: (value) => (value.length > 0 ? null : "Enter username"),
      },
    });
  
    const submitHandler = async () => {
      const {username,password} = form.values;

      const log = await axios.post("http://localhost:8080/api/login",{
        username,
        password
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }

      );
      console.log(log)
    };
    return (
      <div className="rounded-2xl w-[450px] border border-black p-2 bg-[#101a3f]">
        <form onSubmit={form.onSubmit(submitHandler)}>
          <div className="flex flex-col gap-10 m-11">
            <TextInput
              placeholder="username"
              withAsterisk
              className=""
              {...form.getInputProps("username")}
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

export default UserLogin