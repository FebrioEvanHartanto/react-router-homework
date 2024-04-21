import instance from "../lib/axios"

export const login = async (params) => {

  const {email, password} = params

  const response = await instance({
    method: "POST",
    url: "/login",
    data: {
      email,
      password,
    }
  })

  const {data} = response;
  const accessToken = data.token;

  localStorage.setItem("accessToken", accessToken);
  return data;
}

export const register = async (name, email, password) => {
  const response = await instance({
    method: "POST",
    url: "/register",
    data: {
      name: name,
      email: email,
      password: password
    }
  });

  const { data } = response;
};