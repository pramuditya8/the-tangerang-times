import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Label, TextInput, Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/action/actionCreator";

export const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { errors, usersLoading } = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form, navigate));
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="max-w-sm mx-4">
        <Card>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                color="gray"
                // required={true}
                // color="failure"
                // helperText={
                //   <React.Fragment>
                //     <span className="font-medium">Oops!</span> Username already
                //     taken!
                //   </React.Fragment>
                // }
              />
            </div>
            <div className="mb-2">
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                // required={true}
                // color="failure"
                // helperText={
                //   <React.Fragment>
                //     <span className="font-medium">Oops!</span> Username already
                //     taken!
                //   </React.Fragment>
                // }
              />
            </div>
            <Button type="submit">Login</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
