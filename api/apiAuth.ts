import { baseAxios } from "./baseAxios";

type Data = {
  email: string;
  password: string;
  name?: string;
};

export const onLogin = async (userInput: Data) => {
  try {
    const { data } = await baseAxios.post("/user/login", userInput);
    return data;
  } catch (error: any) {
    return { error: error.response.data.message };
  }
};
export const onRegister = async (userInput: Data) => {
  try {
    const { data } = await baseAxios.post("/user/register", userInput);
    return data;
  } catch (error: any) {
    return { error: error.response.data.message };
  }
};

export const validateToken = async () => {  
  try {
    const { data } = await baseAxios.get("/user/validate-token");
    return data;
  } catch (error: any) {
    return { error: error.response.data.message };
  }
};
