import React, { useEffect, useState } from "react";
import { Label, Button, TextInput, Textarea, Select } from "flowbite-react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createCategory,
  createPost,
  editCategory,
  editPost,
  register,
} from "../store/action/actionCreator";
import { Spinner } from "./Spinner";

export const Form = ({ formData, value, loading }) => {
  // console.log(loading);
  const [form, setForm] = useState({});
  const [categories, setCategories] = useState([]);

  const path = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (path.pathname.split("/")[2] === "edit-category") {
      setForm({ name: value.name });
    }
    if (path.pathname.split("/")[2] === "create-post") {
      setCategories(value);
    }
    if (path.pathname.split("/")[2] === "edit-post") {
      setForm(value.post);
      setCategories(value.categories);
    }
  }, [value]);

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  // console.log(path);
  // console.log(path.pathname.split("/")[2]);

  // console.log(form);

  // console.log(form);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (path.pathname.split("/")[2] === "create-category") {
      dispatch(createCategory(form, navigate));
    }
    if (path.pathname.split("/")[2] === "edit-category") {
      dispatch(editCategory(params, form, navigate));
    }
    if (path.pathname.split("/")[2] === "create-post") {
      dispatch(createPost(form, navigate));
    }
    if (path.pathname.split("/")[2] === "edit-post") {
      dispatch(editPost(params, form, navigate));
    }
    if (path.pathname === "/admin-register") {
      dispatch(register(form, navigate));
    }
  };
  // console.log(params);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {formData.map((item, index) => {
            return (
              <div key={index}>
                {item.type !== "textarea" && item.type !== "select" && (
                  <div>
                    <div className="mb-2 block">
                      <Label value={item.label} />
                    </div>
                    <TextInput
                      name={item.name}
                      onChange={handleChange}
                      type={item.type}
                      value={form[item.name] || ""}
                    />
                  </div>
                )}
                {item.type === "textarea" && (
                  <div>
                    <div className="mb-2 block">
                      <Label value={item.label} />
                    </div>
                    <Textarea
                      name={item.name}
                      onChange={handleChange}
                      value={form[item.name] || ""}
                      rows={4}
                    />
                  </div>
                )}
                {item.type === "select" && item.name === "categoryId" && (
                  <div>
                    <div className="mb-2 block">
                      <Label value={item.label} />
                    </div>
                    <Select
                      name={item.name}
                      onChange={handleChange}
                      value={form[item.name] || ""}
                    >
                      <option value={""} disabled>
                        -- Choose One --
                      </option>
                      {categories.map((category, index) => {
                        return (
                          <option key={index} value={category.id}>
                            {category.name}
                          </option>
                        );
                      })}
                    </Select>
                  </div>
                )}
                {item.type === "select" && item.name === "tags" && (
                  <div>
                    <div className="mb-2 block">
                      <Label value={item.label} />
                    </div>
                    <Select
                      name={item.name}
                      onChange={handleChange}
                      value={form[item.name] || ""}
                    >
                      <option value={""} disabled>
                        -- Choose One --
                      </option>
                      <option value={"Indonesia"}>Indonesia</option>
                      <option value={"World"}>World</option>
                    </Select>
                  </div>
                )}
              </div>
            );
          })}
          <div className="w-full">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      )}
    </>
  );
};
