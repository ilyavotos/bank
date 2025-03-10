import { redirect } from "react-router";

const API_URL = "http://localhost:3000";

export const fetchApi = async <T>(path: string, method?: RequestInit["method"], body?: T): Promise<T | Response> => {
  const headers = { "Content-type": "application/json; charset=UTF-8" };
  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
    credentials: "include",
  });

  if (response.status === 401) {
    return redirect("/auth");
  }

  if (!response.ok) {
    throw new Error("Api error");
  }

  const data = await response.json();
  return data;
};
