import axios, { AxiosError } from "axios";

export async function saveAuthTokenForInternalServer(token: string) {
  try {
    const response = await axios.post("/api/auth/token", { token });
    if (response.data.error) {
      throw new AxiosError(response.data.error.message);
    }
  } catch (error) {}
}

export async function getAuthTokenFromInternalServer() {
  try {
    const token = await axios.get("/api/auth/token");
    return token.data;
  } catch (error) {}
}

export async function deleteAuthTokenFromInternalServer() {
  try {
    await axios.delete("/api/auth/token");
  } catch (error) {}
}
